/* EE Study Hub - 原生 JS，依 AGENTS.md 擴充。 */
(function () {
  'use strict';
  const categories = window.EE_CATEGORIES || [];
  const lessons = window.EE_LESSONS || [];
  const $ = (id) => document.getElementById(id);
  const catName = (id) => (categories.find(c => c.id === id) || {}).name || '其他';
  const escapeHTML = (s) => String(s ?? '').replace(/[&<>"']/g, x => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
  let filter = 'all';
  const getNotes = () => {try {const a = JSON.parse(localStorage.getItem('ee-study-hub-notes-v1') || '[]');return Array.isArray(a)?a:[]} catch {return []}};
  const setNotes = (notes) => {try {localStorage.setItem('ee-study-hub-notes-v1',JSON.stringify(notes));return true}catch{return false}};
  function renderHome(){
    $('lessonCount').textContent = String(lessons.length).padStart(2,'0');
    $('homeCourseGrid').innerHTML = categories.map(c => `<a class="course-card" href="#courses" data-category="${escapeHTML(c.id)}"><div class="course-icon" aria-hidden="true">${escapeHTML(c.icon)}</div><small>${escapeHTML(c.en)}</small><h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.description)}</p><span class="course-arrow">開始學習 →</span></a>`).join('');
    $('homeCourseGrid').addEventListener('click', (e) => {const card=e.target.closest('[data-category]');if(card){filter=card.dataset.category;renderCourses()}});
  }
  function renderFilters(){
    const filters=[{id:'all',name:'全部'},...categories];
    $('courseFilters').innerHTML=filters.map(c => `<button type="button" class="chip ${filter===c.id?'selected':''}" data-filter="${escapeHTML(c.id)}" aria-pressed="${filter===c.id}">${escapeHTML(c.name)}</button>`).join('');
  }
  function renderCourses(){
    renderFilters();const query=$('search').value.trim().toLocaleLowerCase();
    const found=lessons.filter(l => (filter==='all'||l.category===filter) && [l.title,l.summary,catName(l.category),...l.tags].join(' ').toLocaleLowerCase().includes(query));
    $('lessonGrid').innerHTML=found.map(l => `<a class="lesson-card" href="#lesson/${encodeURIComponent(l.id)}"><div class="card-top"><span>${escapeHTML(catName(l.category))}</span><span class="level">${escapeHTML(l.level)}</span></div><h3>${escapeHTML(l.title)}</h3><p>${escapeHTML(l.summary)}</p><div class="card-bottom"><span>◷ ${escapeHTML(l.time)}</span><b>閱讀筆記 →</b></div></a>`).join('');
    $('emptyState').hidden=found.length>0;
  }
  function renderLesson(id){
    const l=lessons.find(v=>v.id===id);
    if(!l){location.hash='#courses';return false}
    $('lessonCategory').textContent=catName(l.category)+' · '+l.level+' · '+l.time;
    $('lessonTitle').textContent=l.title;
    $('lessonIntro').textContent=l.summary;
    $('lessonContent').innerHTML=l.sections.map(s=>`<section><h2>${escapeHTML(s.heading)}</h2><p>${escapeHTML(s.text)}</p>${s.formula?`<div class="formula">${escapeHTML(s.formula)}</div>`:''}</section>`).join('');
    return true;
  }
  function route(){
    let hash=decodeURIComponent(location.hash.replace(/^#/,''))||'home';let name=hash.split('/')[0];if(!['home','courses','lesson','notebook','about'].includes(name)) name='home';
    if(name==='lesson'&&!renderLesson(hash.substring('lesson/'.length)))return;
    document.querySelectorAll('.view').forEach(el=>el.classList.toggle('active',el.id===name));
    document.querySelectorAll('[data-nav]').forEach(el=>{const active=el.dataset.nav===name||(name==='lesson'&&el.dataset.nav==='courses');el.classList.toggle('active',active);if(active)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current')});
    if(name==='courses')renderCourses();if(name==='notebook')renderNotes();window.scrollTo(0,0);
  }
  function renderNotes(){
    const notes=getNotes();$('noteCounter').textContent=notes.length+' 篇筆記';
    $('savedNotes').innerHTML=notes.length ? notes.map(n=>`<article class="note-card"><div class="note-meta"><span>${escapeHTML(n.category)}</span><time>${escapeHTML(n.date)}</time></div><h3>${escapeHTML(n.title)}</h3><p>${escapeHTML(n.body)}</p><button class="delete-btn" type="button" data-delete="${escapeHTML(n.id)}" aria-label="刪除筆記 ${escapeHTML(n.title)}">刪除筆記</button></article>`).join(''):'<div class="note-empty">還沒有筆記。<br>可以從左側新增第一篇！</div>';
  }
  $('noteForm').addEventListener('submit',e=>{
    e.preventDefault();const title=$('noteTitle').value.trim(),body=$('noteBody').value.trim();if(!title||!body)return;
    const notes=getNotes();notes.unshift({id:Date.now()+'-'+Math.random().toString(36).slice(2),title,category:$('noteCategory').value,body,date:new Date().toLocaleDateString('zh-TW')});
    if(!setNotes(notes)){$('noteStatus').textContent='儲存失敗：瀏覽器可能禁止本機儲存。';return}
    $('noteForm').reset();$('noteStatus').textContent='已儲存到本機瀏覽器。';renderNotes();
  });
  $('savedNotes').addEventListener('click',e=>{const btn=e.target.closest('[data-delete]');if(!btn)return;if(!confirm('確定要刪除這篇筆記？此操作無法復原。'))return;setNotes(getNotes().filter(n=>n.id!==btn.dataset.delete));renderNotes()});
  $('exportNotes').addEventListener('click',()=>{
    const blob=new Blob([JSON.stringify(getNotes(),null,2)],{type:'application/json;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='ee-study-hub-notes.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  $('search').addEventListener('input',renderCourses);
  $('courseFilters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;filter=b.dataset.filter;renderCourses()});
  let dark=false;try{dark=localStorage.getItem('ee-study-hub-theme')==='dark'}catch{}document.body.classList.toggle('dark',dark);
  $('themeToggle').addEventListener('click',()=>{document.body.classList.toggle('dark');try{localStorage.setItem('ee-study-hub-theme',document.body.classList.contains('dark')?'dark':'light')}catch{}});
  renderHome();window.addEventListener('hashchange',route);route();
})();
