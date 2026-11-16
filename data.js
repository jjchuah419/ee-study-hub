/* 每個課程單元均依 AGENTS.md 的內容格式建立。 */
window.EE_CATEGORIES = [
  {id:'circuit',name:'電路學',en:'CIRCUIT THEORY',icon:'⌁',description:'從 KCL／KVL 到交流阻抗與基本分析。'},
  {id:'electronics',name:'電子學',en:'ELECTRONICS',icon:'◈',description:'半導體、二極體、MOSFET 與放大電路。'},
  {id:'math',name:'線性代數',en:'LINEAR ALGEBRA',icon:'▦',description:'矩陣運算、線性方程組與向量空間。'},
  {id:'digital',name:'數位邏輯',en:'DIGITAL LOGIC',icon:'⊞',description:'布林代數、組合邏輯與循序邏輯。'}
];
window.EE_LESSONS = [
 {id:'kcl-kvl',category:'circuit',title:'KCL 與 KVL 基本定律',level:'入門',time:'8 分鐘',summary:'用電流守恆與能量守恆理解電路分析。',tags:['KCL','KVL','節點','迴路'],sections:[
  {heading:'核心觀念',text:'基爾霍夫電流定律（KCL）：流入一個節點的電流總和等於流出該節點的電流總和。基爾霍夫電壓定律（KVL）：沿封閉迴路，各元件電壓的代數和為零。',formula:'Σ I_in = Σ I_out；Σ V_loop = 0'},
  {heading:'計算範例',text:'某節點有 3 A 和 2 A 電流流入，已知一條支路有 1 A 流出，求另一條支路電流 x。列出 KCL：3 + 2 = 1 + x，因此 x = 4 A。',formula:'3 + 2 = 1 + x  ⇒  x = 4 A'},
  {heading:'常見錯誤與練習',text:'選定電流方向後要維持一致；若答案為負，代表實際方向和假設相反。練習：某節點流入 7 A、流出 2 A 與 3 A，剩餘流出電流是多少？答案：2 A。'}]},
 {id:'ac-impedance',category:'circuit',title:'交流電路與阻抗',level:'基礎',time:'10 分鐘',summary:'了解 R、L、C 在正弦穩態下如何表示。',tags:['AC','阻抗','RLC','相量'],sections:[
  {heading:'核心觀念',text:'交流穩態分析可以使用相量與複數阻抗。電阻阻抗為 R；電感阻抗為 jωL；電容阻抗為 1/(jωC)，其中 ω = 2πf。',formula:'Z_R = R；Z_L = jωL；Z_C = 1/(jωC)'},
  {heading:'計算範例',text:'當頻率 f = 50 Hz、L = 0.1 H 時，角頻率 ω = 2π×50 = 100π rad/s，因此電感阻抗 Z_L = j(100π)(0.1) = j10π Ω，約 j31.42 Ω。',formula:'Z_L = j(2π·50)(0.1) = j10π Ω'},
  {heading:'常見錯誤與練習',text:'注意頻率 Hz 與角頻率 rad/s 不同。練習：R = 100 Ω 的電阻在任意頻率下，其阻抗是多少？答案：100 Ω。'}]},
 {id:'mosfet',category:'electronics',title:'MOSFET 基本工作區',level:'基礎',time:'12 分鐘',summary:'認識截止、三極與飽和區的判定。',tags:['MOSFET','VGS','VDS','飽和區'],sections:[
  {heading:'核心觀念',text:'以增強型 nMOS 的簡化長通道模型為例：當 VGS < VTH 時截止；VGS ≥ VTH 且 VDS < VGS−VTH 時為三極區；VDS ≥ VGS−VTH 時為飽和區。',formula:'V_OV = V_GS − V_TH'},
  {heading:'計算範例',text:'假設 VGS = 3 V、VTH = 1 V、VDS = 2.5 V。先求過驅電壓 VOV = 3−1 = 2 V，再比較 VDS = 2.5 V ≥ 2 V，因此判斷為飽和區。',formula:'V_OV = 3 − 1 = 2 V；2.5 ≥ 2 ⇒ 飽和區'},
  {heading:'常見錯誤與練習',text:'不要把 MOSFET 的「飽和區」和 BJT 的飽和狀態混為一談。本節條件僅適用上述模型；pMOS 需調整極性與電壓定義。練習：VGS = 2 V、VTH = 1 V、VDS = 0.4 V，屬於哪個工作區？答案：三極區。'}]},
 {id:'opamp',category:'electronics',title:'理想運算放大器',level:'入門',time:'9 分鐘',summary:'理解負回授、虛短與反相放大器。',tags:['Op Amp','負回授','反相放大器'],sections:[
  {heading:'核心觀念',text:'理想運算放大器在適當負回授及線性工作條件下，輸入端電流可視為零，兩輸入端電位近似相同（虛短）。反相放大器電壓增益為 −Rf/Rin。',formula:'A_v = V_out/V_in = −R_f/R_in'},
  {heading:'計算範例',text:'若輸入電阻 Rin = 10 kΩ、回授電阻 Rf = 100 kΩ，則 Av = −100/10 = −10；輸入 0.2 V 時，理想輸出 −2 V，前提是供電範圍允許。',formula:'V_out = −(100/10)×0.2 = −2 V'},
  {heading:'常見錯誤與練習',text:'虛短不代表兩輸入端真的短路；飽和時不能直接套用線性負回授假設。練習：Rf = 20 kΩ、Rin = 5 kΩ，增益為多少？答案：−4。'}]},
 {id:'matrix',category:'math',title:'矩陣乘法與維度',level:'入門',time:'8 分鐘',summary:'從矩陣形狀理解乘法的合法條件。',tags:['矩陣','乘法','維度'],sections:[
  {heading:'核心觀念',text:'若 A 為 m×n 矩陣，B 為 n×p 矩陣，則 AB 存在且結果大小為 m×p。相乘時使用 A 的列與 B 的行做內積。',formula:'(m×n)(n×p) → (m×p)'},
  {heading:'計算範例',text:'令 A = [[1,2],[3,4]]，B = [[2,0],[1,5]]。第一列第一行：1×2+2×1=4；第一列第二行：1×0+2×5=10；第二列第一行：3×2+4×1=10；第二列第二行：3×0+4×5=20。',formula:'AB = [[4,10],[10,20]]'},
  {heading:'常見錯誤與練習',text:'一般而言 AB 不等於 BA，且不是對應元素直接相乘。練習：若 A 為 2×3、B 為 3×4，AB 的維度為何？答案：2×4。'}]},
 {id:'linear-system',category:'math',title:'線性方程組與高斯消去',level:'基礎',time:'11 分鐘',summary:'用增廣矩陣解聯立方程式。',tags:['高斯消去','列運算','增廣矩陣'],sections:[
  {heading:'核心觀念',text:'將線性方程組寫成增廣矩陣，透過列交換、非零常數倍與列相加等基本列運算，逐步化為列階梯形以求解。',formula:'Ax = b  ⇔  [A | b]'},
  {heading:'計算範例',text:'已知 x + y = 5 與 2x − y = 1。兩式相加得到 3x = 6，所以 x = 2。代回 x + y = 5 得 y = 3。',formula:'x = 2；y = 3'},
  {heading:'常見錯誤與練習',text:'進行列運算時必須對整列操作，包括增廣欄位。練習：x+y=4，x−y=2。答案：x=3，y=1。'}]},
 {id:'boolean',category:'digital',title:'布林代數與邏輯閘',level:'入門',time:'7 分鐘',summary:'學會 AND、OR、NOT 與德摩根定律。',tags:['AND','OR','NOT','De Morgan'],sections:[
  {heading:'核心觀念',text:'AND 表示兩個條件皆為 1 才輸出 1；OR 表示至少一個條件為 1；NOT 將 0 與 1 反轉。德摩根定律可用來轉換邏輯式。',formula:'¬(A·B) = ¬A + ¬B；¬(A+B) = ¬A·¬B'},
  {heading:'計算範例',text:'令 A = 1、B = 0，則 A AND B = 0，A OR B = 1，NOT B = 1。',formula:'1·0 = 0；1+0 = 1；¬0 = 1'},
  {heading:'常見錯誤與練習',text:'布林運算的加號代表 OR，不是一般整數相加。練習：A=0、B=0，NOT(A OR B) 為何？答案：1。'}]},
 {id:'fsm',category:'digital',title:'有限狀態機 FSM 概念',level:'進階',time:'12 分鐘',summary:'理解狀態、轉移條件與輸出行為。',tags:['FSM','Moore','Mealy','Verilog'],sections:[
  {heading:'核心觀念',text:'有限狀態機由狀態集合、輸入、轉移規則與輸出組成。Moore 型輸出取決於目前狀態；Mealy 型輸出取決於目前狀態與輸入。',formula:'next_state = f(state, input)'},
  {heading:'計算範例',text:'設計雙狀態 LED：OFF 狀態下按鍵有效轉到 ON，ON 狀態下按鍵有效轉到 OFF。若採 Moore 型，LED 輸出僅由 ON/OFF 狀態決定。',formula:'OFF --按鍵--> ON --按鍵--> OFF'},
  {heading:'常見錯誤與練習',text:'實體按鍵可能有彈跳，實作時需要同步與去彈跳。練習：若狀態為 ON 且沒有按鍵事件，下一狀態是什麼？答案：維持 ON。'}]}
];
