<a href="https://yingchiehwang.com/zh-tw">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/header-dark-zh.svg">
    <img src="assets/header-light-zh.svg" width="100%" alt="王映傑（Ying Chieh Wang）— 軟體與 AI 工程師，大阪大學碩士生">
  </picture>
</a>

<p align="center">
  <a href="https://yingchiehwang.com/zh-tw"><img src="https://img.shields.io/badge/%E4%BD%9C%E5%93%81%E9%9B%86-yingchiehwang.com-f59e0b?style=flat-square&labelColor=18181b" alt="作品集"></a>
  <a href="https://www.forgerwise.com"><img src="https://img.shields.io/badge/App-forgerwise.com-1d4ed8?style=flat-square&labelColor=18181b" alt="ForgerWise"></a>
  <a href="https://www.linkedin.com/in/joewang85jp/"><img src="https://img.shields.io/badge/LinkedIn-joewang85jp-0a66c2?style=flat-square&logo=linkedin&logoColor=white&labelColor=18181b" alt="LinkedIn"></a>
  <a href="https://scholar.google.com/citations?user=UUli5wIAAAAJ"><img src="https://img.shields.io/badge/Scholar-%E8%AB%96%E6%96%87-4285f4?style=flat-square&logo=googlescholar&logoColor=white&labelColor=18181b" alt="Google Scholar"></a>
  <a href="https://yingchiehwang.com/zh-tw/resume"><img src="https://img.shields.io/badge/%E5%B1%A5%E6%AD%B7-EN%20%C2%B7%20JA%20%C2%B7%20ZH-f59e0b?style=flat-square&labelColor=18181b" alt="履歷"></a>
  <a href="mailto:contact@yingchiehwang.com"><img src="https://img.shields.io/badge/Email-contact%40yingchiehwang.com-52525b?style=flat-square&logo=gmail&logoColor=white&labelColor=18181b" alt="Email"></a>
</p>

<p align="center"><a href="README.md">English</a> · <b>繁體中文</b> · <a href="README.ja.md">日本語</a></p>

<p align="center">大阪大學資訊科學研究科碩士一年級。研究以機器學習加速都市尺度模擬，並個人開發 Android App 與遊戲。</p>

### 🔭 研究

**飛天車的光害預測** · 大阪大學 山口研究室

飛天車（Urban Air Mobility）會把陽光反射到街道與窗戶。我把問題拆成兩部分來預測整座城市的眩光：在無遮蔽環境中只訓練一次、不需重新訓練就能跨城市使用的幾何感知神經代理模型（PyTorch 3D-CNN + MLP），以及依各城市建築計算的幾何遮蔽修正。

- ⚡ **光線追蹤：3 小時以上 → 1.62 秒**：預測 1 萬個觀測點的 5 秒時間窗（10 Hz），不含一次性的城市初始化
- 🎯 在羅馬、台北、紐約（18 組設定）中，RMSE 比未修正的神經網路預測**低 10–54%**；紐約密集高樓區的 precision **相對提升 32–91%**

**IEEE SmartComp 2026** 第一作者 · 🏆 **情報處理學會 ITS 研究會 2026** 獎勵發表賞 · 期刊擴充版審查中 · [詳細 →](https://yingchiehwang.com/zh-tw/research)

### 🛠️ ForgerWise 作品

<a href="https://www.wiserlocker.com"><img align="left" width="64" src="assets/apps/wiser-locker.png" alt="Wiser Locker icon"></a>

**[Wiser Locker](https://www.wiserlocker.com)** · Android · Flutter + SQLCipher  
私密照片與影片在裝置上加密，用標籤而不是資料夾整理。Firebase 後端（Cloud Functions、Firestore、App Check）處理 Google Play 訂閱，Google Drive 提供端對端加密的雲端同步。 [Google Play ↗](https://play.google.com/store/apps/details?id=com.forgerwise.wiserlocker)  
<a href="https://play.google.com/store/apps/details?id=com.forgerwise.wiserlocker"><img src="https://playbadges.pavi2410.me/badge/downloads?id=com.forgerwise.wiserlocker&pretty" alt="Google Play downloads"></a>  
<br clear="left">

<a href="https://github.com/ForgerWise/FoodList"><img align="left" width="64" src="assets/apps/foodlist.png" alt="FoodList icon"></a>

**[FoodList](https://github.com/ForgerWise/FoodList)** · Android · Flutter + Hive  
記錄家中食材與到期日，讓食物在浪費之前用完。 [Google Play ↗](https://play.google.com/store/apps/details?id=com.forgerwise.foodlist)  
<a href="https://play.google.com/store/apps/details?id=com.forgerwise.foodlist"><img src="https://playbadges.pavi2410.me/badge/downloads?id=com.forgerwise.foodlist&pretty" alt="Google Play downloads"></a>  
<br clear="left">

<a href="https://galaxization.com"><img align="left" width="64" src="assets/apps/galaxization.png" alt="Galaxization icon"></a>

**[Galaxization](https://galaxization.com)** · 桌面遊戲 · Windows / macOS / Linux  
在桌布上持續演化的銀河，數百個文明自行興起、征戰與飛升。即將在 Steam 推出。
<br clear="left">

### 💼 經歷

**How Television** · 2026年10月 · 2 天開發實習 — 以 Claude Code 與 GitHub PR／CI 開發；課題 KPI 於全體參加者中前 3 名  
**M3** · 2026年10月 · 2 天資料分析實習 — 針對虛構商業案例，以資料分析提出推廣策略（pandas、statsmodels）  
**Stanby** · 2026年8月 · 4 天黑客松 — 自動應徵功能的架構與 Python 後端；完成可操作的 demo  
**PKSHA Technology** · 2024年9月 · 2 週 — 以 LLM 摘要排名 Slack 貼文的 serverless 工具（AWS Lambda、EventBridge、Azure AI）  
**H&K** · 2023年12月 – 2024年5月 · 兼職 — HubSpot × fincode 金流串接（Flask、AWS Lambda）；專案在上線前中止

### 🧰 技術

**程式語言**<br>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=py&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=py&theme=light" alt="Python" title="Python"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=cpp&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=cpp&theme=light" alt="C++" title="C++"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=c&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=c&theme=light" alt="C" title="C"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=dart&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=dart&theme=light" alt="Dart" title="Dart"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=java&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=java&theme=light" alt="Java" title="Java"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=ts&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=ts&theme=light" alt="TypeScript" title="TypeScript"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=js&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=js&theme=light" alt="JavaScript" title="JavaScript"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=html&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=html&theme=light" alt="HTML" title="HTML"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=css&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=css&theme=light" alt="CSS" title="CSS"></picture>
<br><sub>Python · C++ · C · Dart · Java · TypeScript · JavaScript · HTML · CSS</sub>

**AI 與研究**<br>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=pytorch&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=pytorch&theme=light" alt="PyTorch" title="PyTorch"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=unreal&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=unreal&theme=light" alt="Unreal Engine 5" title="Unreal Engine 5"></picture>
<br><sub>PyTorch · Unreal Engine 5</sub>

**後端與雲端**<br>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=flask&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=flask&theme=light" alt="Flask" title="Flask"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=fastapi&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=fastapi&theme=light" alt="FastAPI" title="FastAPI"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=sqlite&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=sqlite&theme=light" alt="SQLite" title="SQLite"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=aws&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=aws&theme=light" alt="AWS" title="AWS"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=docker&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=docker&theme=light" alt="Docker" title="Docker"></picture>
<br><sub>Flask · FastAPI · SQLite · AWS · Docker</sub>

**App、遊戲與工具**<br>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=flutter&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=flutter&theme=light" alt="Flutter" title="Flutter"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=react&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=react&theme=light" alt="React" title="React"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=godot&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=godot&theme=light" alt="Godot" title="Godot"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=arduino&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=arduino&theme=light" alt="Arduino" title="Arduino"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=git&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=git&theme=light" alt="Git" title="Git"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=linux&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=linux&theme=light" alt="Linux" title="Linux"></picture>
<br><sub>Flutter · React · Godot · Arduino · Git · Linux</sub>

**AI 輔助開發**<br>
<img src="https://img.shields.io/badge/Claude_Code-D97757?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code" title="Claude Code">
<img src="https://img.shields.io/badge/OpenAI_Codex-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI Codex" title="OpenAI Codex">
<img src="https://img.shields.io/badge/ChatGPT-10a37f?style=for-the-badge&logo=openai&logoColor=white" alt="ChatGPT" title="ChatGPT">
<img src="https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini" title="Gemini">
<br><sub>除了寫程式，我更常把它們當作討論與壁打ち的對象，用來深入思考問題、尋找靈感。<br>
先手寫、現在以 AI 擴充：Wiser Locker、FoodList · 以 AI 為主：研究程式 · 由 AI 撰寫：Galaxization、我的 Nuxt 網站、Wiser Locker 的 Firebase 後端。<br>
需求與設計判斷由我負責；測試由我指定要測什麼，或讓 AI 自行設計。</sub>

### 📊 統計

<p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats-forgerwises-projects.vercel.app/api?username=ForgerWise&show_icons=true&hide=issues%2Cstars&hide_rank=true&line_height=24&card_width=400&bg_color=00000000&title_color=fbbf24&icon_color=fbbf24&text_color=e4e4e7&border_color=30363d&border_radius=12">
    <img width="49%" src="https://github-readme-stats-forgerwises-projects.vercel.app/api?username=ForgerWise&show_icons=true&hide=issues%2Cstars&hide_rank=true&line_height=24&card_width=400&bg_color=00000000&title_color=b45309&icon_color=b45309&text_color=27272a&border_color=d0d7de&border_radius=12" alt="ForgerWise's GitHub stats">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats-forgerwises-projects.vercel.app/api/top-langs/?username=ForgerWise&layout=compact&hide=rust%2Cfluent%2Cwgsl&card_width=400&bg_color=00000000&title_color=fbbf24&text_color=e4e4e7&border_color=30363d&border_radius=12">
    <img width="49%" src="https://github-readme-stats-forgerwises-projects.vercel.app/api/top-langs/?username=ForgerWise&layout=compact&hide=rust%2Cfluent%2Cwgsl&card_width=400&bg_color=00000000&title_color=b45309&text_color=27272a&border_color=d0d7de&border_radius=12" alt="ForgerWise's top languages">
  </picture>
</p>

<p>
  <a href="https://leetcode.com/u/joewang85jp/">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://leetcard.jacoblin.cool/joewang85jp?theme=dark&font=Inter&border=0&radius=12">
      <img width="49%" src="https://leetcard.jacoblin.cool/joewang85jp?theme=light&font=Inter&border=0&radius=12" alt="LeetCode stats for joewang85jp">
    </picture>
  </a>
</p>

<details>
<summary>⏱️ WakaTime — 各語言的寫程式時間</summary>
<br>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats-forgerwises-projects.vercel.app/api/wakatime?username=ForgerWise&layout=compact&langs_count=8&hide=other&bg_color=00000000&title_color=fbbf24&text_color=e4e4e7&border_color=30363d&border_radius=12">
  <img width="70%" src="https://github-readme-stats-forgerwises-projects.vercel.app/api/wakatime?username=ForgerWise&layout=compact&langs_count=8&hide=other&bg_color=00000000&title_color=b45309&text_color=27272a&border_color=d0d7de&border_radius=12" alt="ForgerWise's WakaTime stats">
</picture>
</details>

---

<p align="center"><sub>尋找 2028 年 4 月起的新卒軟體、後端與 AI 工程職缺 · 🇹🇼 台灣 → 🇯🇵 大阪 · 中文（母語）· 日本語（JLPT N1）· English（TOEIC 940）</sub></p>
