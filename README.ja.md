<a href="https://yingchiehwang.com/ja">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/header-dark-ja.svg">
    <img src="assets/header-light-ja.svg" width="100%" alt="王映傑（Ying Chieh Wang）— ソフトウェア・AI エンジニア、大阪大学大学院 修士課程">
  </picture>
</a>

<p align="center">
  <a href="https://yingchiehwang.com/ja"><img src="https://img.shields.io/badge/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA-yingchiehwang.com-f59e0b?style=flat-square&labelColor=18181b" alt="ポートフォリオ"></a>
  <a href="https://www.forgerwise.com"><img src="https://img.shields.io/badge/%E3%82%A2%E3%83%97%E3%83%AA-forgerwise.com-1d4ed8?style=flat-square&labelColor=18181b" alt="ForgerWise"></a>
  <a href="https://www.linkedin.com/in/joewang85jp/"><img src="https://img.shields.io/badge/LinkedIn-joewang85jp-0a66c2?style=flat-square&logo=linkedin&logoColor=white&labelColor=18181b" alt="LinkedIn"></a>
  <a href="https://scholar.google.com/citations?user=UUli5wIAAAAJ"><img src="https://img.shields.io/badge/Scholar-%E8%AB%96%E6%96%87-4285f4?style=flat-square&logo=googlescholar&logoColor=white&labelColor=18181b" alt="Google Scholar"></a>
  <a href="https://yingchiehwang.com/ja/resume"><img src="https://img.shields.io/badge/%E5%B1%A5%E6%AD%B4%E6%9B%B8-EN%20%C2%B7%20JA%20%C2%B7%20ZH-f59e0b?style=flat-square&labelColor=18181b" alt="履歴書"></a>
  <a href="mailto:contact@yingchiehwang.com"><img src="https://img.shields.io/badge/%E3%83%A1%E3%83%BC%E3%83%AB-contact%40yingchiehwang.com-52525b?style=flat-square&logo=gmail&logoColor=white&labelColor=18181b" alt="Email"></a>
</p>

<p align="center"><a href="README.md">English</a> · <a href="README.zh-TW.md">繁體中文</a> · <b>日本語</b></p>

<p align="center">大阪大学大学院 情報科学研究科 修士1年。機械学習で都市規模シミュレーションを高速化する研究と、Android アプリ・ゲームの個人開発に取り組んでいます。</p>

### 🔭 研究

**空飛ぶクルマによる光害の予測** · 大阪大学 山口研究室

空飛ぶクルマ（Urban Air Mobility）は、太陽光を街路や窓に反射します。都市全体のまぶしさを予測するため、問題を二つに分けました。遮蔽のない環境で一度だけ学習し、再学習なしで都市をまたいで使える幾何情報を考慮したニューラルサロゲート（PyTorch 3D-CNN + MLP）と、都市ごとの建物から計算する幾何学的な遮蔽補正です。

- ⚡ **レイトレーシング：3 時間超 → 1.62 秒**：1 万地点・5 秒間（10 Hz）の予測、都市の初回初期化後
- 🎯 ローマ・台北・ニューヨーク（18 設定）で、補正前のニューラル予測より **RMSE を 10–54% 改善**。高層が密集するニューヨークで precision を**相対 32–91% 向上**

**IEEE SmartComp 2026** 筆頭著者 · 🏆 **情報処理学会 ITS 研究会 2026** 奨励発表賞 · 論文誌の拡張版を査読中 · [詳しく →](https://yingchiehwang.com/ja/research)

### 🛠️ ForgerWise のプロダクト

<a href="https://www.wiserlocker.com"><img align="left" width="64" src="assets/apps/wiser-locker.png" alt="Wiser Locker icon"></a>

**[Wiser Locker](https://www.wiserlocker.com)** · Android · Flutter + SQLCipher  
写真・動画を端末内で暗号化し、フォルダではなくタグで整理できるアプリです。Firebase のバックエンド（Cloud Functions、Firestore、App Check）で Google Play のサブスクリプションを処理し、Google Drive によるエンドツーエンド暗号化のクラウド同期に対応しています。 [Google Play ↗](https://play.google.com/store/apps/details?id=com.forgerwise.wiserlocker)  
<a href="https://play.google.com/store/apps/details?id=com.forgerwise.wiserlocker"><img src="https://playbadges.pavi2410.me/badge/downloads?id=com.forgerwise.wiserlocker&pretty" alt="Google Play downloads"></a>  
<br clear="left">

<a href="https://github.com/ForgerWise/FoodList"><img align="left" width="64" src="assets/apps/foodlist.png" alt="FoodList icon"></a>

**[FoodList](https://github.com/ForgerWise/FoodList)** · Android · Flutter + Hive  
家の食材と期限を記録し、無駄にする前に使い切るためのアプリです。 [Google Play ↗](https://play.google.com/store/apps/details?id=com.forgerwise.foodlist)  
<a href="https://play.google.com/store/apps/details?id=com.forgerwise.foodlist"><img src="https://playbadges.pavi2410.me/badge/downloads?id=com.forgerwise.foodlist&pretty" alt="Google Play downloads"></a>  
<br clear="left">

<a href="https://galaxization.com"><img align="left" width="64" src="assets/apps/galaxization.png" alt="Galaxization icon"></a>

**[Galaxization](https://galaxization.com)** · デスクトップゲーム · Windows / macOS / Linux  
壁紙の上で銀河が進化し続け、数百の文明がひとりでに興り、争い、昇華していきます。Steam で近日公開。
<br clear="left">

### 💼 経歴

**ハウテレビジョン** · 2026年10月 · 2日間の開発インターン — Claude Code と GitHub の PR／CI で開発。課題の KPI で全参加者中上位 3 位  
**エムスリー** · 2026年10月 · 2日間のデータ分析インターン — 架空のビジネスケースで、データに基づく販促施策を提案（pandas、statsmodels）  
**スタンバイ** · 2026年8月 · 4日間のハッカソン — 自動応募機能のアーキテクチャと Python バックエンド。操作可能なデモを完成  
**PKSHA Technology** · 2024年9月 · 2週間 — Slack の投稿を LLM の要約付きでランキングするサーバーレスツール（AWS Lambda、EventBridge、Azure AI）  
**H&K** · 2023年12月 – 2024年5月 · アルバイト — HubSpot × fincode の決済連携（Flask、AWS Lambda）。リリース前にプロジェクトは中止

### 🧰 技術スタック

**言語**<br>
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

**AI・研究**<br>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=pytorch&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=pytorch&theme=light" alt="PyTorch" title="PyTorch"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=unreal&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=unreal&theme=light" alt="Unreal Engine 5" title="Unreal Engine 5"></picture>
<br><sub>PyTorch · Unreal Engine 5</sub>

**バックエンド・クラウド**<br>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=flask&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=flask&theme=light" alt="Flask" title="Flask"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=fastapi&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=fastapi&theme=light" alt="FastAPI" title="FastAPI"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=sqlite&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=sqlite&theme=light" alt="SQLite" title="SQLite"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=aws&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=aws&theme=light" alt="AWS" title="AWS"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=docker&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=docker&theme=light" alt="Docker" title="Docker"></picture>
<br><sub>Flask · FastAPI · SQLite · AWS · Docker</sub>

**アプリ・ゲーム・ツール**<br>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=flutter&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=flutter&theme=light" alt="Flutter" title="Flutter"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=react&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=react&theme=light" alt="React" title="React"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=godot&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=godot&theme=light" alt="Godot" title="Godot"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=arduino&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=arduino&theme=light" alt="Arduino" title="Arduino"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=git&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=git&theme=light" alt="Git" title="Git"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=linux&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=linux&theme=light" alt="Linux" title="Linux"></picture>
<br><sub>Flutter · React · Godot · Arduino · Git · Linux</sub>

**AI を活用した開発**<br>
<img src="https://img.shields.io/badge/Claude_Code-D97757?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code" title="Claude Code">
<img src="https://img.shields.io/badge/OpenAI_Codex-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI Codex" title="OpenAI Codex">
<img src="https://img.shields.io/badge/ChatGPT-10a37f?style=for-the-badge&logo=openai&logoColor=white" alt="ChatGPT" title="ChatGPT">
<img src="https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini" title="Gemini">
<br><sub>コードを書くだけでなく、考えを深めアイデアを広げる壁打ち相手として、むしろより多く使っています。<br>
最初は手書き、現在は AI で拡張：Wiser Locker、FoodList · 主に AI：研究コード · AI が実装：Galaxization、Nuxt 製の Web サイト、Wiser Locker の Firebase バックエンド。<br>
要件と設計の判断は自分で行い、テストは観点を指示するか AI 自身に設計させています。</sub>

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
<summary>⏱️ WakaTime — 言語別のコーディング時間</summary>
<br>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats-forgerwises-projects.vercel.app/api/wakatime?username=ForgerWise&layout=compact&langs_count=8&hide=other&bg_color=00000000&title_color=fbbf24&text_color=e4e4e7&border_color=30363d&border_radius=12">
  <img width="70%" src="https://github-readme-stats-forgerwises-projects.vercel.app/api/wakatime?username=ForgerWise&layout=compact&langs_count=8&hide=other&bg_color=00000000&title_color=b45309&text_color=27272a&border_color=d0d7de&border_radius=12" alt="ForgerWise's WakaTime stats">
</picture>
</details>

---

<p align="center"><sub>2028年4月入社のソフトウェア・バックエンド・AI エンジニア職を探しています · 🇹🇼 台湾 → 🇯🇵 大阪 · 中国語（ネイティブ）· 日本語（JLPT N1）· 英語（TOEIC 940）</sub></p>
