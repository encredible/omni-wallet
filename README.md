# Ω Omni Wallet

Omni Wallet is a premium, high-fidelity Web3 multi-chain cryptocurrency wallet dashboard mockup. It aggregates and simplifies the management of various blockchain networks (Ethereum, Solana, Bitcoin, Binance Smart Chain, Polygon) into a single, cohesive, glassmorphic dashboard.

> **Note**: This is a simulated high-fidelity client-side sandbox. All transaction logic, key generation, swaps, and reward distributions are mock implementations and run entirely in your local browser storage. **Never input your production private keys or seed phrases.**

---

## 🌟 Key Features

* **Consolidated Portfolio View**: Monitor net asset value with real-time automatic fiat currency conversion (USD/KRW). Check historical trend sparklines (Line Chart) and network distributions (Doughnut Chart) rendered dynamically.
* **Unified Wallet Manager**: Connect and view details for simulated browser wallets (Metamask, Phantom), generate new keypairs on-the-fly, or import dummy keys. Explore addresses and reveal keys securely.
* **DeFi Cross-Chain Swaps**: Simulate instant asset exchange across networks (e.g. ETH → USDC, SOL → USDT) with real-time exchange rates, estimated gas fees, pool routing, and verification animations.
* **Liquid Staking (Earn)**: Accrue staking interest in real-time on locked assets (accruing rewards tick every 2 seconds). Stake assets into pools (ETH, SOL, BNB) or claim accrued rewards.
* **universal History Ledger**: Browse all transaction history (Sends, Receives, Swaps) with global search query matching (addresses, hashes) and type filters.
* **Responsive Dark Aesthetics**: Dark neon UI accents mapped to each blockchain. Translucent glass containers (`backdrop-filter`) and CSS micro-animations providing a premium user experience.

---

## 🛠 Tech Stack

* **Core**: Semantic HTML5, Vanilla JavaScript (ES6 Modules)
* **Styling**: Vanilla CSS (CSS Variables, Flexbox, Grid, Backdrop Filters, Keyframe Animations)
* **Charts**: [Chart.js](https://www.chartjs.org/) (via CDN)
* **Icons**: Customized Inline SVG Paths

---

## 🚀 Running Locally

### 1. Traditional Local Hosting
You can launch a simple static web server using Python:

```bash
# Navigate to the project root
cd omni-wallet

# Run python server
python3 -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your web browser.

---

## 🐳 Running with Docker

This project includes a pre-configured `Dockerfile` and `docker-compose.yml` mapping Nginx to expose the dashboard on host port `8080`.

### 1. Build and Start Container
Run the following command in the root directory:

```bash
docker compose up -d --build
```

### 2. Verify Running Container
```bash
docker ps
```
The application will be served at [http://localhost:8080](http://localhost:8080).

### 3. Stop Container
```bash
docker compose down
```

---

## 📦 Pushing to public GitHub

To push this project to your public GitHub repository (`encredible/omni-wallet`), execute the following commands in your terminal:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "feat: initial release of Omni Wallet multi-chain dashboard v1.0.0"

# Rename branch to main
git branch -M main

# Add the public GitHub remote
git remote add origin https://github.com/encredible/omni-wallet.git

# Push the codebase to GitHub
git push -u origin main
```
