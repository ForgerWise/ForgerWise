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
  <a href="mailto:contact@yingchiehwang.com"><img src="https://img.shields.io/badge/Email-contact@yingchiehwang.com-52525b?style=flat-square&logo=gmail&logoColor=white&labelColor=18181b" alt="Email"></a>
</p>

### 🔭 Research

**Light-pollution prediction for flying taxis** · Yamaguchi Lab, The University of Osaka

Flying taxis (Urban Air Mobility) will reflect sunlight into streets and windows. I predict this glare across a whole city by splitting the problem in two: a geometry-aware neural surrogate (PyTorch 3D-CNN + MLP) trained once in an unoccluded environment and reused across cities without retraining, plus a geometric occlusion correction for each city's buildings.

- ⚡ **Over 3 h → 1.62 s**: predicting a 5-second window (10 Hz) for 10,000 observation points, after one-time city initialization
- 🎯 **10–54% lower RMSE** than the raw neural prediction across Rome, Taipei, and New York (18 configurations), and **32–91% higher precision** in dense high-rise New York

First author at **IEEE SmartComp 2026** · 🏆 Encouragement Presentation Award, **IPSJ ITS Workshop 2026** · Journal extension under review · [Details →](https://yingchiehwang.com/research)

### 🛠️ Built under ForgerWise

<a href="https://www.wiserlocker.com"><img align="left" width="64" src="assets/apps/wiser-locker.png" alt="Wiser Locker icon"></a>

**[Wiser Locker](https://www.wiserlocker.com)** · Android · Flutter + SQLCipher · Firebase  
Private photos and videos, encrypted on-device and organized by tags instead of folders. A Firebase backend (Cloud Functions, Firestore, App Check) handles Google Play subscriptions, Google Drive provides end-to-end encrypted cloud sync, and Google Ads campaigns drive installs. [Google Play ↗](https://play.google.com/store/apps/details?id=com.forgerwise.wiserlocker)
<br clear="left">

<a href="https://github.com/ForgerWise/FoodList"><img align="left" width="64" src="assets/apps/foodlist.png" alt="FoodList icon"></a>

**[FoodList](https://github.com/ForgerWise/FoodList)** · Android · Flutter + Hive  
Track ingredients and expiry dates so food gets used before it goes to waste. [Google Play ↗](https://play.google.com/store/apps/details?id=com.forgerwise.foodlist)
<br clear="left">

<a href="https://galaxization.com"><img align="left" width="64" src="assets/apps/galaxization.png" alt="Galaxization icon"></a>

**[Galaxization](https://galaxization.com)** · Desktop game · Windows / macOS / Linux  
A living galaxy on your wallpaper where hundreds of civilizations rise, war, and ascend on their own. Coming soon on Steam.
<br clear="left">

### 💼 Experience

**How Television** — 2-day developer internship with Claude Code and a GitHub PR → CI → deploy flow: top 3 of all participants on the challenge KPI  
**M3** — data analysis and a data-driven promotion proposal (pandas, statsmodels)  
**Stanby** — architecture and Python backend for an auto-apply feature, demo in 4 days  
**PKSHA Technology** — serverless Slack ranking tool with LLM summaries (AWS Lambda, EventBridge, Azure AI)  
**H&K** — HubSpot × fincode payment integration (Flask, AWS Lambda)

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
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=gcp&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=gcp&theme=light" alt="Google Cloud" title="Google Cloud"></picture>
<picture><source media="(prefers-color-scheme: dark)" srcset="https://skillicons.dev/icons?i=firebase&theme=dark"><img height="40" src="https://skillicons.dev/icons?i=firebase&theme=light" alt="Firebase" title="Firebase"></picture>
<br><sub>Flask · FastAPI · SQLite · AWS · Docker · Google Cloud · Firebase</sub>

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
<br><sub>Beyond writing code, I use them even more as a sparring partner for thinking problems through and finding ideas. Wiser Locker and FoodList were hand-written at first and are now extended with AI; my research code mixes hand-written and AI-written parts, mostly AI; Galaxization and my Nuxt websites are written by AI. I own the requirements and design decisions, and set what to test or let the agents design their own tests.</sub>

### 📊 GitHub

<p>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats-forgerwises-projects.vercel.app/api?username=ForgerWise&show_icons=true&hide=issues&hide_rank=true&line_height=24&card_width=400&bg_color=00000000&title_color=fbbf24&icon_color=fbbf24&text_color=e4e4e7&border_color=30363d&border_radius=12">
    <img height="165" src="https://github-readme-stats-forgerwises-projects.vercel.app/api?username=ForgerWise&show_icons=true&hide=issues&hide_rank=true&line_height=24&card_width=400&bg_color=00000000&title_color=b45309&icon_color=b45309&text_color=27272a&border_color=d0d7de&border_radius=12" alt="ForgerWise's GitHub stats">
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats-forgerwises-projects.vercel.app/api/top-langs/?username=ForgerWise&layout=compact&card_width=320&bg_color=00000000&title_color=fbbf24&text_color=e4e4e7&border_color=30363d&border_radius=12">
    <img height="165" src="https://github-readme-stats-forgerwises-projects.vercel.app/api/top-langs/?username=ForgerWise&layout=compact&card_width=320&bg_color=00000000&title_color=b45309&text_color=27272a&border_color=d0d7de&border_radius=12" alt="ForgerWise's top languages">
  </picture>
</p>

<details>
<summary>⏱️ WakaTime — what I've been coding lately</summary>
<br>
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-stats-forgerwises-projects.vercel.app/api/wakatime?username=ForgerWise&layout=compact&bg_color=00000000&title_color=fbbf24&text_color=e4e4e7&border_color=30363d&border_radius=12">
  <img src="https://github-readme-stats-forgerwises-projects.vercel.app/api/wakatime?username=ForgerWise&layout=compact&bg_color=00000000&title_color=b45309&text_color=27272a&border_color=d0d7de&border_radius=12" alt="ForgerWise's WakaTime stats">
</picture>
</details>

---

<p align="center"><sub>Looking for new-grad software, backend, and AI engineering roles from April 2028 · 🇹🇼 Taiwan → 🇯🇵 Osaka · 中文 / 日本語 / English</sub></p>
