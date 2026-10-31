<a href="https://yingchiehwang.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/header-dark.svg">
    <img src="assets/header-light.svg" width="100%" alt="Ying Chieh Wang (王映傑) — Software & AI Engineer, M.S. student at The University of Osaka">
  </picture>
</a>

<p align="center">
  <a href="https://yingchiehwang.com"><img src="https://img.shields.io/badge/Portfolio-yingchiehwang.com-f59e0b?style=flat-square&labelColor=18181b" alt="Portfolio"></a>
  <a href="https://www.forgerwise.com"><img src="https://img.shields.io/badge/Apps-forgerwise.com-1d4ed8?style=flat-square&labelColor=18181b" alt="ForgerWise"></a>
  <a href="https://www.linkedin.com/in/joewang85jp/"><img src="https://img.shields.io/badge/LinkedIn-joewang85jp-0a66c2?style=flat-square&logo=linkedin&logoColor=white&labelColor=18181b" alt="LinkedIn"></a>
  <a href="https://scholar.google.com/citations?user=UUli5wIAAAAJ"><img src="https://img.shields.io/badge/Scholar-Publications-4285f4?style=flat-square&logo=googlescholar&logoColor=white&labelColor=18181b" alt="Google Scholar"></a>
  <a href="https://yingchiehwang.com/resume"><img src="https://img.shields.io/badge/R%C3%A9sum%C3%A9-EN%20%C2%B7%20JA%20%C2%B7%20ZH-f59e0b?style=flat-square&labelColor=18181b" alt="Résumé"></a>
  <a href="mailto:contact@yingchiehwang.com"><img src="https://img.shields.io/badge/Email-contact@yingchiehwang.com-52525b?style=flat-square&logo=gmail&logoColor=white&labelColor=18181b" alt="Email"></a>
</p>

<p align="center"><b>English</b> · <a href="README.zh-TW.md">繁體中文</a> · <a href="README.ja.md">日本語</a></p>

### 🔭 Research

**Light-pollution prediction for flying cars** · Yamaguchi Lab, The University of Osaka

Flying cars (Urban Air Mobility) will reflect sunlight into streets and windows. I predict this glare across a whole city by splitting the problem in two: a geometry-aware neural surrogate (PyTorch 3D-CNN + MLP) trained once in an unoccluded environment and reused across cities without retraining, plus a geometric occlusion correction for each city's buildings.

- ⚡ **Ray tracing: over 3 h → 1.62 s** to predict a 5-second window (10 Hz) at 10,000 observation points, after one-time city initialization
- 🎯 **10–54% lower RMSE** than the raw neural prediction across Rome, Taipei, and New York (18 configurations), and a **32–91% relative gain in precision** in dense high-rise New York

First author at **IEEE SmartComp 2026** · 🏆 Encouragement Presentation Award, **IPSJ ITS Workshop 2026** · Journal extension under review · [Details →](https://yingchiehwang.com/research)

### 🛠️ Built under ForgerWise

<a href="https://www.wiserlocker.com"><img align="left" width="64" src="assets/apps/wiser-locker.png" alt="Wiser Locker icon"></a>

**[Wiser Locker](https://www.wiserlocker.com)** · Android · Flutter + SQLCipher  
Private photos and videos, encrypted on-device and organized by tags instead of folders. A Firebase backend (Cloud Functions, Firestore, App Check) handles Google Play subscriptions, and Google Drive provides end-to-end encrypted cloud sync. [Google Play ↗](https://play.google.com/store/apps/details?id=com.forgerwise.wiserlocker)  
<a href="https://play.google.com/store/apps/details?id=com.forgerwise.wiserlocker"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FForgerWise%2FForgerWise%2Fmain%2Fdata%2Fplay-stats%2Fcom.forgerwise.wiserlocker.downloads.json&style=flat-square&cacheSeconds=3600" alt="Google Play downloads"></a>  
<br clear="left">

<a href="https://github.com/ForgerWise/FoodList"><img align="left" width="64" src="assets/apps/foodlist.png" alt="FoodList icon"></a>

**[FoodList](https://github.com/ForgerWise/FoodList)** · Android · Flutter + Hive  
Track ingredients and expiry dates so food gets used before it goes to waste. [Google Play ↗](https://play.google.com/store/apps/details?id=com.forgerwise.foodlist)  
<a href="https://play.google.com/store/apps/details?id=com.forgerwise.foodlist"><img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FForgerWise%2FForgerWise%2Fmain%2Fdata%2Fplay-stats%2Fcom.forgerwise.foodlist.downloads.json&style=flat-square&cacheSeconds=3600" alt="Google Play downloads"></a>  
<br clear="left">

<a href="https://galaxization.com"><img align="left" width="64" src="assets/apps/galaxization.png" alt="Galaxization icon"></a>

**[Galaxization](https://galaxization.com)** · Desktop game · Windows / macOS / Linux  
A living galaxy on your wallpaper where hundreds of civilizations rise, war, and ascend on their own. Coming soon on Steam.
<br clear="left">

### 💼 Experience

**How Television** · Oct 2026 · 2-day developer internship — built with Claude Code and GitHub PRs/CI; top 3 of all participants on the challenge KPI  
**M3** · Oct 2026 · 2-day data analysis internship — data-driven promotion proposal for a fictional business case (pandas, statsmodels)  
**Stanby** · Aug 2026 · 4-day hackathon — architecture and Python backend for an auto-apply feature; working demo  
**PKSHA Technology** · Sep 2024 · 2 weeks — serverless Slack ranking tool with LLM summaries (AWS Lambda, EventBridge, Azure AI)  
**H&K** · Dec 2023 – May 2024 · part-time — HubSpot × fincode payment integration (Flask, AWS Lambda); the project was discontinued before launch

### 🧰 Tech stack

**Languages**<br>
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

**AI & research**<br>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=pytorch&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=pytorch&theme=light" alt="PyTorch" title="PyTorch"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=unreal&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=unreal&theme=light" alt="Unreal Engine 5" title="Unreal Engine 5"></picture>
<br><sub>PyTorch · Unreal Engine 5</sub>

**Backend & cloud**<br>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=flask&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=flask&theme=light" alt="Flask" title="Flask"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=fastapi&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=fastapi&theme=light" alt="FastAPI" title="FastAPI"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=sqlite&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=sqlite&theme=light" alt="SQLite" title="SQLite"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=aws&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=aws&theme=light" alt="AWS" title="AWS"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=docker&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=docker&theme=light" alt="Docker" title="Docker"></picture>
<br><sub>Flask · FastAPI · SQLite · AWS · Docker</sub>

**Apps, games & tools**<br>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=flutter&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=flutter&theme=light" alt="Flutter" title="Flutter"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=react&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=react&theme=light" alt="React" title="React"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=godot&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=godot&theme=light" alt="Godot" title="Godot"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=arduino&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=arduino&theme=light" alt="Arduino" title="Arduino"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=git&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=git&theme=light" alt="Git" title="Git"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=linux&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=linux&theme=light" alt="Linux" title="Linux"></picture>
<br><sub>Flutter · React · Godot · Arduino · Git · Linux</sub>

**AI-assisted development**<br>
<img src="https://img.shields.io/badge/Claude_Code-D97757?style=for-the-badge&logo=claude&logoColor=white" alt="Claude Code" title="Claude Code">
<img src="https://img.shields.io/badge/OpenAI_Codex-412991?style=for-the-badge&logo=openai&logoColor=white" alt="OpenAI Codex" title="OpenAI Codex">
<img src="https://img.shields.io/badge/ChatGPT-10a37f?style=for-the-badge&logo=openai&logoColor=white" alt="ChatGPT" title="ChatGPT">
<img src="https://img.shields.io/badge/Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white" alt="Gemini" title="Gemini">
<br><sub>Beyond writing code, I use them even more as a sparring partner for thinking problems through and finding ideas.<br>
Hand-written first, now extended with AI: Wiser Locker, FoodList · Mostly AI: research code · Written by AI: Galaxization, my Nuxt websites, Wiser Locker's Firebase backend.<br>
I own the requirements and design decisions, and set what to test or let the agents design their own tests.</sub>

### 📊 Stats

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
<summary>⏱️ WakaTime — coding time by language</summary>
<br>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats-forgerwises-projects.vercel.app/api/wakatime?username=ForgerWise&layout=compact&langs_count=8&hide=other&bg_color=00000000&title_color=fbbf24&text_color=e4e4e7&border_color=30363d&border_radius=12">
  <img width="70%" src="https://github-readme-stats-forgerwises-projects.vercel.app/api/wakatime?username=ForgerWise&layout=compact&langs_count=8&hide=other&bg_color=00000000&title_color=b45309&text_color=27272a&border_color=d0d7de&border_radius=12" alt="ForgerWise's WakaTime stats">
</picture>
</details>

---

<p align="center"><sub>Looking for new-grad software, backend, and AI engineering roles from April 2028 · 🇹🇼 Taiwan → 🇯🇵 Osaka · 中文 (native) · 日本語 (JLPT N1) · English (TOEIC 940)</sub></p>
