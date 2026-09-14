# ODAC24 AI SEO Command Center

An autonomous, multi-agent SEO Command Center and management dashboard designed specifically for **[ODAC24.in](https://odac24.in)** — self-drive car rental service across Chandigarh, Mohali, Panchkula, and Chandigarh International Airport (IXC).

---

## 🌟 Core Features

- **🛡️ 12 Specialized AI SEO Agents**: Live telemetry, heartbeat monitoring, and automated auditing across Technical, On-Page, GSC, Competitor, and Content workflows.
- **🎯 Competitor Radar**: Add and monitor competitors (Zoomcar, MyChoize, Chandigarh Self Drive Cars, Revv). Real-time vulnerability analysis and content gap detection.
- **⚡ Safe Improvement Queue**: Actionable suggestions with impact ratings. Review full **Before vs After Code Diffs** before approving.
- **🔒 Production Safety**: No direct changes to production. Approving a suggestion triggers an automated Git branch and GitHub Pull Request with zero runtime risk.
- **📍 Tri-City Local SEO Hub**: Dedicated tracking for Chandigarh (Sectors 17, 22, 35, 43), Mohali (Phase 3B2, 7, 8, Aerocity), Panchkula, and Airport (IXC).
- **📈 Search Console Striking Distance**: Automatic detection of high-impression queries ranking between positions 4 and 15 for rapid rank jumps.

---

## 🚀 Quick Start (Local)

```bash
# Clone the repository
git clone https://github.com/odac24-chandigarh/seodashbord.git
cd seodashbord

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ 1-Click Vercel Deployment

1. Go to [Vercel](https://vercel.com) and click **"Add New..."** → **"Project"**.
2. Select your GitHub repository: `odac24-chandigarh/seodashbord`.
3. Framework preset will automatically detect **Next.js**.
4. *(Optional)* Add environment variable `DASHBOARD_PASSWORD` to lock your dashboard behind a private password.
5. Click **"Deploy"** — your live SEO Command Center will be available within 60 seconds!