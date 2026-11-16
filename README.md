# EE Study Hub｜電機學習筆記庫

一個可持續擴充的電機學習網站。以 `AGENTS.md` 作為 AI 的專案規則文件，讓未來新增教學內容時都能維持相同結構、版面與開發流程。

## 功能

- 4 個學習領域：電路學、電子學、線性代數、數位邏輯。
- 8 篇入門／基礎／進階教學單元，包含觀念、計算範例及練習。
- 分類按鈕與關鍵字搜尋。
- 個人筆記：新增、刪除、JSON 匯出（使用瀏覽器 localStorage）。
- 深淺色模式、桌機與手機響應式排版。

## 開啟方式

最簡單：雙擊 `index.html`；瀏覽器應能直接讀取本專案的本地 JS / CSS。

或使用本機伺服器（推薦開發時使用）：

```bash
python3 -m http.server 8000
```

接著在瀏覽器開啟 `http://localhost:8000`。

## GitHub Pages 部署教學

1. 登入 GitHub，建立一個公開 Repository，例如 `ee-study-hub`。
2. 解壓縮 ZIP，將 **`EE-Study-Hub` 資料夾內**的 `index.html`、`styles.css`、`data.js`、`app.js`、`AGENTS.md`、`README.md`、`SUBMISSION.md` 上傳到 Repository **根目錄**（不要只上傳 ZIP）。
3. 在 Repository 依序開啟 **Settings → Pages**。
4. **Build and deployment** 選擇 **Deploy from a branch**；Branch 選 `main`，資料夾選 `/(root)`，再儲存。
5. 等 GitHub Pages 顯示正式網址後開啟檢查，通常網址形如：`https://你的帳號.github.io/ee-study-hub/`（以實際畫面為準）。
6. 將實際的 Repository URL 與網頁 URL 貼進 `SUBMISSION.md`，再依老師要求繳交。

> 本套件只是專案原始檔，**尚未替你上傳到 GitHub 或發佈公開網址**。公開發布需由你的 GitHub 帳號操作。

## 後續交給 AI 擴充

先提供 `AGENTS.md`，再交辦：「請依照 AGENTS.md 的規則，在 `data.js` 增加一篇 RC 低通濾波器的單元，含完整範例與練習，完成後檢查搜尋、課程頁與手機版。」

## 檔案用途

| 檔案 | 說明 |
|---|---|
| `AGENTS.md` | AI 開發規則，作業重點 |
| `index.html` | HTML 頁面與版面結構 |
| `styles.css` | 視覺與響應式 CSS |
| `data.js` | 所有學習單元內容 |
| `app.js` | 分類、搜尋、筆記與路由 |
| `SUBMISSION.md` | 繳交用說明與連結欄位 |

## 注意事項

網站內的教學範例屬於入門示例，學習時仍應以正式課本及課程要求核對。個人筆記僅儲存於目前瀏覽器，清除網站資料或更換裝置可能導致內容遺失，請定期使用匯出功能備份。
