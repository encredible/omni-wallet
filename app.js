import ICONS from './icons.js';

// Application State
let STATE = {
    lang: 'ko', // Default Korean
    currency: 'USD', // USD or KRW
    network: 'mainnet',
    exchangeRates: {
        ETH: 3524.50,
        SOL: 148.20,
        BTC: 67840.00,
        BNB: 585.10,
        MATIC: 0.65,
        USDC: 1.00,
        USDT: 1.00
    },
    wallets: [],
    transactions: [],
    staking: [
        { id: 'st-eth', chain: 'ETH', token: 'ETH', apy: 4.2, staked: 1.5, rewards: 0.0024 },
        { id: 'st-sol', chain: 'SOL', token: 'SOL', apy: 6.8, staked: 12.0, rewards: 0.054 },
        { id: 'st-bnb', chain: 'BNB', token: 'BNB', apy: 5.1, staked: 0.0, rewards: 0.0 }
    ],
    activeView: 'dashboard',
    selectedWalletId: null,
    swapState: {
        fromToken: 'ETH',
        toToken: 'USDC',
        fromAmount: '',
        toAmount: ''
    },
    tempWallet: null
};

// UI Translation Dictionary
const TRANSLATIONS = {
    ko: {
        "nav-dashboard": "대시보드",
        "nav-wallets": "지갑 관리자",
        "nav-swap": "토큰 스왑",
        "nav-earn": "스테이킹 (Earn)",
        "nav-history": "거래 내역",
        "nav-settings": "설정",
        "title-dashboard": "통합 대시보드",
        "subtitle-dashboard": "모든 멀티체인 자산을 한눈에 파악하세요.",
        "title-wallets": "지갑 관리자",
        "subtitle-wallets": "각 블록체인 지갑을 가져오거나 새로 생성하여 관리합니다.",
        "title-swap": "토큰 스왑",
        "subtitle-swap": "가스 수수료를 한눈에 보며 토큰을 간편하게 스왑합니다.",
        "title-earn": "스테이킹 (Earn)",
        "subtitle-earn": "유휴 자산을 동결하여 디파이 스테이킹 이자를 획득하세요.",
        "title-history": "전체 거래 내역",
        "subtitle-history": "연결된 모든 멀티체인 지갑의 가상 거래 로그입니다.",
        "title-settings": "앱 환경 설정",
        "subtitle-settings": "화폐 표기 단위 및 지갑 구성을 설정합니다.",
        "btn-add-wallet": "지갑 추가하기",
        "total-balance": "총 순자산 가치",
        "portfolio-trend": "포트폴리오 추이 (7일)",
        "connected-wallets": "연결된 지갑",
        "btn-manage": "관리",
        "asset-allocation": "체인별 자산 비율",
        "recent-tx": "최근 거래 내역",
        "btn-view-all": "전체 보기",
        "select-wallet-prompt": "목록에서 지갑을 선택하시면 세부 주소와 거래 옵션을 볼 수 있습니다.",
        "swap-from": "보내기 (지불)",
        "swap-to": "받기 (대상)",
        "swap-rate": "교환 비율",
        "swap-gas": "네트워크 수수료",
        "swap-slippage": "슬리패스 허용치",
        "btn-swap-now": "스왑 실행하기",
        "staking-opportunities": "멀티체인 스테이킹 기회",
        "staking-desc": "보유 중인 자산을 스테이킹하여 실시간 보상을 획득하고 분산 환경을 강화하세요.",
        "full-history": "전체 거래 히스토리",
        "filter-all": "모든 거래",
        "filter-send": "보내기",
        "filter-receive": "받기",
        "filter-swap": "스왑",
        "general-settings": "일반 설정",
        "base-currency": "기본 통화",
        "base-currency-desc": "자산을 표시할 기준 법정화폐를 결정합니다.",
        "active-network": "네트워크 모드",
        "active-network-desc": "지갑의 연결 대상을 시뮬레이션 메인넷과 테스트넷으로 전환합니다.",
        "danger-zone": "위험 영역",
        "reset-data": "모든 시뮬레이션 상태 초기화",
        "reset-data-desc": "로컬 스토리지에 저장된 모든 연결 지갑 및 거래 가상 데이터를 삭제하고 초기 상태로 되돌립니다.",
        "btn-reset": "초기화",
        "modal-connect-title": "새 지갑 연결 및 추가",
        "btn-create-new-title": "새로운 지갑 생성하기",
        "btn-create-new-desc": "각 체인의 새로운 주소와 개인키를 가상 생성합니다.",
        "btn-import-title": "기존 지갑 복구하기 (개인키/구문)",
        "btn-import-desc": "개인키 또는 니모닉 복구 구문을 사용해 지갑을 시뮬레이션 등록합니다.",
        "btn-metamask-desc": "이더리움 메타마스크 지갑을 원클릭으로 가상 감지 및 연결합니다.",
        "btn-phantom-desc": "솔라나 팬텀 지갑을 원클릭으로 가상 감지 및 연결합니다.",
        "modal-create-title": "새 멀티체인 지갑 생성",
        "select-chain": "체인 선택",
        "wallet-name": "지갑 이름",
        "btn-generate": "지갑 생성 및 암호키 발행",
        "backup-warning": "중요: 아래의 가상 비밀키를 꼭 백업해 두세요!",
        "public-address": "공개 주소 (Address)",
        "private-key": "비밀키 (Private Key)",
        "btn-complete-connect": "내 자산에 지갑 등록 완료",
        "modal-import-title": "기존 지갑 복구 및 등록",
        "private-key-or-mnemonic": "개인키 또는 복구 구문 입력",
        "safety-alert": "경고: 이것은 시뮬레이션 지갑입니다. 실자산의 프라이빗 키는 절대 입력하지 마세요. 모의 자산용 테스트 비밀키(또는 임의 키) 입력을 권장합니다.",
        "btn-import-submit": "가상 자산 지갑 복구하기",
        "send-from-wallet": "보내는 지갑",
        "recipient-address": "받는 주소",
        "send-amount-label": "송금 금액",
        "gas-fee": "가스 수수료 (예상)",
        "deposit-address": "입금 주소 (Deposit Address)",
        "receive-qr-desc": "스캔하면 지갑 주소를 즉시 복사하여 송금할 수 있습니다.",
        "select-token": "토큰 선택",
        "btn-add": "추가",
        "btn-complete": "완료"
    },
    en: {
        "nav-dashboard": "Dashboard",
        "nav-wallets": "Wallet Manager",
        "nav-swap": "Token Swap",
        "nav-earn": "Staking (Earn)",
        "nav-history": "History",
        "nav-settings": "Settings",
        "title-dashboard": "Unified Dashboard",
        "subtitle-dashboard": "Monitor all your multi-chain assets at a glance.",
        "title-wallets": "Wallet Manager",
        "subtitle-wallets": "Import or create custom wallets across major chains.",
        "title-swap": "Token Swap",
        "subtitle-swap": "Swap multi-chain assets easily with consolidated gas metrics.",
        "title-earn": "Staking (Earn)",
        "subtitle-earn": "Lock your idle assets to earn real-time DeFi staking rewards.",
        "title-history": "Transaction History",
        "subtitle-history": "Simulated activity log for all connected multi-chain wallets.",
        "title-settings": "Configuration",
        "subtitle-settings": "Adjust display currency, network, and wallets data.",
        "btn-add-wallet": "Add Wallet",
        "total-balance": "Net Portfolio Value",
        "portfolio-trend": "Portfolio Trend (7D)",
        "connected-wallets": "Connected Wallets",
        "btn-manage": "Manage",
        "asset-allocation": "Chain Asset Allocation",
        "recent-tx": "Recent Transactions",
        "btn-view-all": "View All",
        "select-wallet-prompt": "Select a wallet from the list to view its addresses, balances, and actions.",
        "swap-from": "Pay From",
        "swap-to": "Receive To",
        "swap-rate": "Exchange Rate",
        "swap-gas": "Estimated Gas Fee",
        "swap-slippage": "Slippage Tolerance",
        "btn-swap-now": "Execute Swap",
        "staking-opportunities": "Multi-chain Staking Options",
        "staking-desc": "Stake your holdings to earn real-time interest and strengthen block verification.",
        "full-history": "Transaction History Ledger",
        "filter-all": "All Transactions",
        "filter-send": "Sends",
        "filter-receive": "Receives",
        "filter-swap": "Swaps",
        "general-settings": "General Preferences",
        "base-currency": "Base Currency",
        "base-currency-desc": "Choose the default fiat currency to display all assets.",
        "active-network": "Network Mode",
        "active-network-desc": "Switch wallet context between simulated Mainnet and Testnet.",
        "danger-zone": "Danger Zone",
        "reset-data": "Reset All Simulation Data",
        "reset-data-desc": "Erase all simulated wallets, custom transactions, and local memory.",
        "btn-reset": "Reset",
        "modal-connect-title": "Add or Connect Wallet",
        "btn-create-new-title": "Create a New Wallet Address",
        "btn-create-new-desc": "Securely generate mock private/public key pairs for selected chains.",
        "btn-import-title": "Restore Wallet via Private Key/Mnemonic",
        "btn-import-desc": "Simulate wallet attachment using a dummy key or seed phrase.",
        "btn-metamask-desc": "Mock detect and connect your Metamask EVM wallets.",
        "btn-phantom-desc": "Mock detect and connect your Phantom Solana wallets.",
        "modal-create-title": "Create Multi-chain Wallet",
        "select-chain": "Select Chain",
        "wallet-name": "Wallet Name",
        "btn-generate": "Generate Keypair",
        "backup-warning": "WARNING: Save your simulated private key safely!",
        "public-address": "Public Address",
        "private-key": "Private Key",
        "btn-complete-connect": "Register Wallet in Dashboard",
        "modal-import-title": "Recover Existing Wallet",
        "private-key-or-mnemonic": "Private Key or Mnemonic phrase",
        "safety-alert": "WARNING: This is a simulated wallet dashboard. NEVER input your real production private keys.",
        "btn-import-submit": "Restore Wallet Mock",
        "send-from-wallet": "Send From Wallet",
        "recipient-address": "Recipient Address",
        "send-amount-label": "Transfer Amount",
        "gas-fee": "Estimated Gas Fee",
        "deposit-address": "Deposit Address",
        "receive-qr-desc": "Scan to copy this wallet address instantly.",
        "select-token": "Select Asset Token",
        "btn-add": "Add",
        "btn-complete": "Complete"
    }
};

// Initial Mock Wallets
const INITIAL_WALLETS = [
    {
        id: 'w-eth-1',
        name: 'Main Ethereum',
        chain: 'ETH',
        address: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
        balance: 3.425,
        type: 'Metamask',
        privKey: '0x2a871d3c95e1e12e12e3e4a2c5a2c4e6e6f7a7c7c8c8c9a9f9d9f8e8d8c8c8b8'
    },
    {
        id: 'w-sol-1',
        name: 'Phantom Solana',
        chain: 'SOL',
        address: 'Hnry8rXyZptK2X3zJ6TcxZ3tQeK7zBqB9eK7xNnNnP9a',
        balance: 45.8,
        type: 'Phantom',
        privKey: 'sol_privkey_base58_mock_Hnry8rXyZptK2X3zJ6TcxZ'
    },
    {
        id: 'w-btc-1',
        name: 'Bitcoin Vault',
        chain: 'BTC',
        address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
        balance: 0.124,
        type: 'Imported',
        privKey: 'btc_privkey_wif_mock_KxZ3tQeK7zBqB9eK7xNnNnP9'
    },
    {
        id: 'w-bnb-1',
        name: 'BSC Smart Saver',
        chain: 'BNB',
        address: '0x321656EC7ab88b098defB751B7401B5f6d8976FA',
        balance: 15.45,
        type: 'Imported',
        privKey: '0x6b871d3c95e1e12e12e3e4a2c5a2c4e6e6f7a7c7c8c8c9a9f9d9f8e8d8c8c8d2'
    },
    {
        id: 'w-matic-1',
        name: 'Polygon Quick Wallet',
        chain: 'MATIC',
        address: '0x44C7656EC7ab88b098defB751B7401B5f6d8976F3',
        balance: 1450.0,
        type: 'Metamask',
        privKey: '0x3a871d3c95e1e12e12e3e4a2c5a2c4e6e6f7a7c7c8c8c9a9f9d9f8e8d8c8c8e1'
    }
];

const INITIAL_TRANSACTIONS = [
    {
        id: 'tx-1',
        type: 'receive',
        chain: 'ETH',
        amount: 1.5,
        token: 'ETH',
        from: '0x3a4b...88cc',
        to: '0x71C7...976F',
        timestamp: Date.now() - 3600000 * 2, // 2 hours ago
        status: 'Completed',
        txHash: '0x5b3e...c18a'
    },
    {
        id: 'tx-2',
        type: 'send',
        chain: 'SOL',
        amount: 5.0,
        token: 'SOL',
        from: 'Hnry8...P9a',
        to: '88cx...29ab',
        timestamp: Date.now() - 3600000 * 5, // 5 hours ago
        status: 'Completed',
        txHash: '4x9a...b18c'
    },
    {
        id: 'tx-3',
        type: 'swap',
        chain: 'ETH',
        amount: 0.5,
        token: 'ETH',
        fromToken: 'ETH',
        toToken: 'USDC',
        toAmount: 1750,
        timestamp: Date.now() - 3600000 * 12, // 12 hours ago
        status: 'Completed',
        txHash: '0xde7b...9a12'
    }
];

// Charts references
let portfolioChartInstance = null;
let allocationChartInstance = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    // Load local storage
    if (localStorage.getItem('omni_wallet_state')) {
        try {
            const savedState = JSON.parse(localStorage.getItem('omni_wallet_state'));
            STATE.wallets = savedState.wallets || [];
            STATE.transactions = savedState.transactions || [];
            STATE.lang = savedState.lang || 'ko';
            STATE.currency = savedState.currency || 'USD';
            STATE.network = savedState.network || 'mainnet';
            if (savedState.staking) STATE.staking = savedState.staking;
        } catch (e) {
            console.error("Failed to load saved state, using defaults", e);
            resetToDefaults();
        }
    } else {
        resetToDefaults();
    }

    // Insert icons into sidebar and UI elements
    loadStaticIcons();
    
    // Setup View
    switchView(STATE.activeView);
    
    // Update translations
    updateDOMTranslations();

    // Start Live Price Ticker Simulation
    startPriceTicker();
    
    // Periodic rewards accrual for staking
    startStakingRewardsTracker();

    // Render Data
    renderAll();
});

function resetToDefaults() {
    STATE.wallets = [...INITIAL_WALLETS];
    STATE.transactions = [...INITIAL_TRANSACTIONS];
    saveState();
}

function saveState() {
    localStorage.setItem('omni_wallet_state', JSON.stringify({
        wallets: STATE.wallets,
        transactions: STATE.transactions,
        lang: STATE.lang,
        currency: STATE.currency,
        network: STATE.network,
        staking: STATE.staking
    }));
}

// Load navigation & static SVGs
function loadStaticIcons() {
    document.getElementById('icon-dashboard').innerHTML = ICONS.dashboard;
    document.getElementById('icon-wallets').innerHTML = ICONS.wallet;
    document.getElementById('icon-swap').innerHTML = ICONS.swap;
    document.getElementById('icon-history').innerHTML = ICONS.history;
    document.getElementById('icon-earn').innerHTML = ICONS.earn;
    document.getElementById('icon-settings').innerHTML = ICONS.settings;
    document.getElementById('icon-plus').innerHTML = ICONS.plus;
    document.getElementById('icon-plus-wallets').innerHTML = ICONS.plus;
    document.getElementById('icon-globe').innerHTML = ICONS.globe;
    document.getElementById('icon-arrow-down-up').innerHTML = ICONS.arrowDownUp;
    document.getElementById('icon-warning-keys').innerHTML = ICONS.info;
    document.getElementById('icon-info-safety').innerHTML = ICONS.info;
    document.getElementById('icon-copy-addr').innerHTML = ICONS.copy;
    document.getElementById('icon-copy-priv').innerHTML = ICONS.copy;
    document.getElementById('icon-copy-receive').innerHTML = ICONS.copy;
    document.getElementById('icon-chevron-down-from').innerHTML = ICONS.chevronDown;
    document.getElementById('icon-chevron-down-to').innerHTML = ICONS.chevronDown;
}

// Language Controller
function toggleLanguage() {
    STATE.lang = STATE.lang === 'ko' ? 'en' : 'ko';
    document.getElementById('lang-text').innerText = STATE.lang === 'ko' ? 'English' : '한국어';
    saveState();
    updateDOMTranslations();
    renderAll();
}

function updateDOMTranslations() {
    const textElements = document.querySelectorAll('[data-key]');
    const dict = TRANSLATIONS[STATE.lang];
    textElements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Update active page title
    const currentTitleKey = `title-${STATE.activeView}`;
    const currentSubtitleKey = `subtitle-${STATE.activeView}`;
    if (dict[currentTitleKey]) {
        document.getElementById('page-title').textContent = dict[currentTitleKey];
        document.getElementById('page-subtitle').textContent = dict[currentSubtitleKey];
    }
}

// Global View Switcher
function switchView(viewId) {
    STATE.activeView = viewId;
    
    // Update active classes on sidebar
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.getElementById(`nav-${viewId}`);
    if (activeBtn) activeBtn.classList.add('active');

    // Toggle view panels
    document.querySelectorAll('.page-view').forEach(panel => {
        panel.classList.remove('active');
    });
    
    const activePanel = document.getElementById(`view-${viewId}`);
    if (activePanel) activePanel.classList.add('active');

    // Dynamic Title Updates
    updateDOMTranslations();

    // Trigger specific rendering/refreshes
    if (viewId === 'dashboard') {
        setTimeout(initCharts, 50); // Redraw charts after container is visible
    } else if (viewId === 'swap') {
        resetSwapForm();
    } else if (viewId === 'wallets') {
        renderWalletManager();
    } else if (viewId === 'earn') {
        renderStaking();
    } else if (viewId === 'history') {
        renderFullHistory();
    }
}

// Price Simulator Interval
function startPriceTicker() {
    setInterval(() => {
        Object.keys(STATE.exchangeRates).forEach(token => {
            if (token !== 'USDC' && token !== 'USDT') {
                const fluctuation = 1 + (Math.random() - 0.5) * 0.0006; // Max +/- 0.03% change
                STATE.exchangeRates[token] = +(STATE.exchangeRates[token] * fluctuation).toFixed(2);
            }
        });
        
        // Redraw pricing items if on dashboard
        if (STATE.activeView === 'dashboard') {
            updateDashboardTotal();
            renderWalletsGrid();
        }
    }, 4000);
}

// Staking Rewards Simulator
function startStakingRewardsTracker() {
    setInterval(() => {
        let changed = false;
        STATE.staking.forEach(st => {
            if (st.staked > 0) {
                // Reward per second = (APY / 100) * Staked / (365 * 24 * 3600)
                const ratePerSec = (st.apy / 100) * st.staked / 31536000;
                st.rewards += ratePerSec * 2; // runs every 2s
                changed = true;
            }
        });
        
        if (changed && STATE.activeView === 'earn') {
            renderStaking();
        }
    }, 2000);
}

// Convert asset balance to base currency formatting
function formatAssetValue(amount, token) {
    const rate = STATE.exchangeRates[token] || 1;
    let usdVal = amount * rate;
    if (STATE.currency === 'KRW') {
        let krwVal = usdVal * 1350; // Mock USD/KRW rate
        return `₩${krwVal.toLocaleString('ko-KR', { maximumFractionDigits: 0 })}`;
    }
    return `$${usdVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatFiatValue(usdAmount) {
    if (STATE.currency === 'KRW') {
        return `₩${(usdAmount * 1350).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}`;
    }
    return `$${usdAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

// Render Dashboard Data
function renderAll() {
    updateDashboardTotal();
    renderWalletsGrid();
    renderAssetAllocation();
    renderRecentTransactions();
}

function updateDashboardTotal() {
    let totalUsd = 0;
    STATE.wallets.forEach(w => {
        const rate = STATE.exchangeRates[w.chain] || 0;
        totalUsd += w.balance * rate;
    });

    document.getElementById('dashboard-total-balance').textContent = formatFiatValue(totalUsd);
    
    // Balance Trend Simulated Change
    const changeSpan = document.getElementById('dashboard-balance-change');
    if (totalUsd > 0) {
        changeSpan.className = "trend-up";
        changeSpan.innerHTML = `▲ +3.48% (${STATE.lang === 'ko' ? '어제 대비' : 'vs yesterday'})`;
    } else {
        changeSpan.className = "trend-down";
        changeSpan.innerHTML = `0.00%`;
    }
}

function renderWalletsGrid() {
    const grid = document.getElementById('dashboard-wallets-list');
    grid.innerHTML = '';
    
    STATE.wallets.forEach(w => {
        const card = document.createElement('div');
        card.className = `wallet-card glass glass-interactive`;
        card.style.color = `var(--color-${w.chain.toLowerCase()})`;
        
        const shortAddr = w.address.slice(0, 6) + '...' + w.address.slice(-4);
        
        card.innerHTML = `
            <div class="wallet-card-header">
                <div class="wallet-card-logo">
                    ${ICONS[w.chain]}
                </div>
                <span class="wallet-card-tag">${w.type}</span>
            </div>
            <div>
                <h3 class="wallet-card-name" style="color: var(--text-primary); font-weight:600;">${w.name}</h3>
                <div class="wallet-card-address">${shortAddr} <span class="copy-btn-inner" onclick="event.stopPropagation(); copyDirectText('${w.address}')">${ICONS.copy}</span></div>
            </div>
            <div class="wallet-card-balance" style="color: var(--text-primary);">${w.balance.toFixed(4)} ${w.chain}</div>
            <div class="wallet-card-value">${formatAssetValue(w.balance, w.chain)}</div>
        `;
        
        card.onclick = () => {
            STATE.selectedWalletId = w.id;
            switchView('wallets');
        };
        
        grid.appendChild(card);
    });
}

function renderAssetAllocation() {
    const container = document.getElementById('allocation-list-container');
    container.innerHTML = '';

    let totalUsd = 0;
    const chainValues = {};

    STATE.wallets.forEach(w => {
        const rate = STATE.exchangeRates[w.chain] || 0;
        const val = w.balance * rate;
        totalUsd += val;
        chainValues[w.chain] = (chainValues[w.chain] || 0) + val;
    });

    Object.keys(chainValues).forEach(chain => {
        const value = chainValues[chain];
        const pct = totalUsd > 0 ? ((value / totalUsd) * 100).toFixed(1) : 0;
        
        const item = document.createElement('div');
        item.className = 'allocation-item';
        item.innerHTML = `
            <span style="width: 24px; height: 24px; display:flex; align-items:center;">${ICONS[chain]}</span>
            <span style="font-weight: 600; font-size:13px; width:45px;">${chain}</span>
            <div class="allocation-bar-wrapper">
                <div class="allocation-bar" style="width: ${pct}%; background-color: var(--color-${chain.toLowerCase()});"></div>
            </div>
            <span class="allocation-pct">${pct}%</span>
        `;
        container.appendChild(item);
    });
}

function renderRecentTransactions() {
    const container = document.getElementById('dashboard-tx-list');
    container.innerHTML = '';
    
    // Take last 3 transactions
    const recents = STATE.transactions.slice(-3).reverse();
    if (recents.length === 0) {
        container.innerHTML = `<div style="text-align:center; font-size:12px; color:var(--text-muted); padding:20px;" data-key="no-recent-tx">최근 거래 기록이 없습니다.</div>`;
        updateDOMTranslations();
        return;
    }
    
    recents.forEach(tx => {
        const item = document.createElement('div');
        item.className = 'tx-item';
        
        let txIconClass = 'swap';
        let txIcon = ICONS.swap;
        let sign = '';
        let amountText = '';
        
        if (tx.type === 'send') {
            txIconClass = 'send';
            txIcon = ICONS.arrowRight;
            sign = '-';
            amountText = `${sign}${tx.amount} ${tx.token}`;
        } else if (tx.type === 'receive') {
            txIconClass = 'receive';
            txIcon = ICONS.check;
            sign = '+';
            amountText = `${sign}${tx.amount} ${tx.token}`;
        } else if (tx.type === 'swap') {
            txIconClass = 'swap';
            txIcon = ICONS.swap;
            amountText = `${tx.amount} ${tx.fromToken} ➔ ${tx.toAmount} ${tx.toToken}`;
        }

        const dateStr = new Date(tx.timestamp).toLocaleTimeString(STATE.lang === 'ko' ? 'ko-KR' : 'en-US', { hour: '2-digit', minute: '2-digit' });
        
        item.innerHTML = `
            <div class="tx-left">
                <div class="tx-icon ${txIconClass}">${txIcon}</div>
                <div class="tx-details">
                    <span class="tx-title">${tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}</span>
                    <span class="tx-meta">${dateStr} • ${tx.txHash}</span>
                </div>
            </div>
            <div class="tx-right">
                <span class="tx-amount" style="color: ${tx.type === 'receive' ? 'var(--accent-secondary)' : 'var(--text-primary)'};">${amountText}</span>
                <span class="tx-status status-${tx.status.toLowerCase()}">${tx.status}</span>
            </div>
        `;
        container.appendChild(item);
    });
}

// Chart.js Drawing Engine
function initCharts() {
    const portfolioCtx = document.getElementById('portfolioChart');
    if (!portfolioCtx) return;

    if (portfolioChartInstance) portfolioChartInstance.destroy();
    
    // Simulated historical portfolio growth
    const totalUsd = STATE.wallets.reduce((acc, w) => acc + w.balance * (STATE.exchangeRates[w.chain] || 0), 0);
    const dayFactor = [0.89, 0.92, 0.94, 0.91, 0.95, 0.98, 1];
    const chartData = dayFactor.map(f => totalUsd * f);
    
    const isKrw = STATE.currency === 'KRW';
    const finalData = isKrw ? chartData.map(d => d * 1350) : chartData;
    const labelDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    portfolioChartInstance = new Chart(portfolioCtx, {
        type: 'line',
        data: {
            labels: labelDays,
            datasets: [{
                label: 'Portfolio Value',
                data: finalData,
                borderColor: '#6366f1',
                borderWidth: 3,
                pointBackgroundColor: '#6366f1',
                pointHoverRadius: 7,
                backgroundColor: 'rgba(99, 102, 241, 0.05)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return (isKrw ? '₩' : '$') + context.parsed.y.toLocaleString(isKrw ? 'ko-KR' : 'en-US', { maximumFractionDigits: 0 });
                        }
                    }
                }
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#64748b' } },
                y: { grid: { color: 'rgba(255, 255, 255, 0.03)' }, ticks: { color: '#64748b' } }
            }
        }
    });

    const allocationCtx = document.getElementById('allocationChart');
    if (!allocationCtx) return;

    if (allocationChartInstance) allocationChartInstance.destroy();

    const chainVals = {};
    STATE.wallets.forEach(w => {
        chainVals[w.chain] = (chainVals[w.chain] || 0) + w.balance * (STATE.exchangeRates[w.chain] || 0);
    });

    const labels = Object.keys(chainVals);
    const dataVals = labels.map(l => chainVals[l]);
    const colors = labels.map(l => getComputedStyle(document.documentElement).getPropertyValue(`--color-${l.toLowerCase()}`).trim());

    allocationChartInstance = new Chart(allocationCtx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: dataVals,
                backgroundColor: colors.length > 0 ? colors : ['#6366f1'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            cutout: '75%'
        }
    });
}

// Modal Control
window.openModal = function(id) {
    document.getElementById(id).classList.add('active');
};

window.closeModal = function(id) {
    document.getElementById(id).classList.remove('active');
};

window.openSubModal = function(type) {
    closeModal('modal-connect');
    if (type === 'create') {
        document.getElementById('generated-keys-box').style.display = 'none';
        document.getElementById('create-wallet-name').value = '';
        openModal('modal-create-details');
    } else {
        document.getElementById('import-wallet-name').value = '';
        document.getElementById('import-wallet-key').value = '';
        openModal('modal-import-details');
    }
};

// Simulated cryptographic keys generator
window.generateMockKeys = function() {
    const chain = document.getElementById('create-wallet-chain').value;
    const nameInput = document.getElementById('create-wallet-name').value;
    
    if (!nameInput) {
        showToast("지갑 이름을 입력해 주세요.", "error");
        return;
    }
    
    // Mock keypairs
    let mockAddr = '';
    let mockPriv = '';
    
    const randHex = len => Array.from({length: len}, () => Math.floor(Math.random()*16).toString(16)).join('');
    
    if (chain === 'ETH' || chain === 'MATIC' || chain === 'BNB') {
        mockAddr = '0x' + randHex(40);
        mockPriv = '0x' + randHex(64);
    } else if (chain === 'SOL') {
        // Base58 styled
        const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
        mockAddr = Array.from({length: 44}, () => chars.charAt(Math.floor(Math.random()*chars.length))).join('');
        mockPriv = 'sol_priv_' + randHex(44);
    } else if (chain === 'BTC') {
        mockAddr = 'bc1q' + randHex(38);
        mockPriv = 'btc_wif_' + randHex(52);
    }
    
    document.getElementById('generated-address').value = mockAddr;
    document.getElementById('generated-privkey').value = mockPriv;
    document.getElementById('generated-keys-box').style.display = 'block';
    
    STATE.tempWallet = {
        name: nameInput,
        chain: chain,
        address: mockAddr,
        privKey: mockPriv,
        balance: 1.0, // initial test balance
        type: 'Generated'
    };
};

window.addGeneratedWallet = function() {
    if (STATE.tempWallet) {
        STATE.wallets.push(STATE.tempWallet);
        STATE.tempWallet = null;
        saveState();
        closeModal('modal-create-details');
        showToast("새 지갑이 생성 및 연동되었습니다!", "success");
        renderAll();
        if (STATE.activeView === 'wallets') renderWalletManager();
    }
};

window.submitImportWallet = function() {
    const chain = document.getElementById('import-wallet-chain').value;
    const name = document.getElementById('import-wallet-name').value || 'Imported Wallet';
    const key = document.getElementById('import-wallet-key').value;
    
    if (!key) {
        showToast("비밀키 또는 복구 구문을 입력해 주세요.", "error");
        return;
    }
    
    let mockAddr = '';
    const randHex = len => Array.from({length: len}, () => Math.floor(Math.random()*16).toString(16)).join('');
    
    if (chain === 'ETH' || chain === 'MATIC' || chain === 'BNB') {
        mockAddr = '0x' + randHex(40);
    } else if (chain === 'SOL') {
        const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
        mockAddr = Array.from({length: 44}, () => chars.charAt(Math.floor(Math.random()*chars.length))).join('');
    } else if (chain === 'BTC') {
        mockAddr = 'bc1q' + randHex(38);
    }
    
    const newW = {
        id: 'w-' + chain.toLowerCase() + '-' + Date.now(),
        name: name,
        chain: chain,
        address: mockAddr,
        privKey: key.slice(0, 32) + '...',
        balance: 5.0, // Simulated initial balance
        type: 'Imported'
    };
    
    STATE.wallets.push(newW);
    saveState();
    closeModal('modal-import-details');
    showToast("지갑 복구 및 연동이 완료되었습니다.", "success");
    renderAll();
    if (STATE.activeView === 'wallets') renderWalletManager();
};

window.connectSimulatedExtension = function(type) {
    let chain = type === 'Metamask' ? 'ETH' : 'SOL';
    const randHex = len => Array.from({length: len}, () => Math.floor(Math.random()*16).toString(16)).join('');
    
    let mockAddr = '';
    if (chain === 'ETH') {
        mockAddr = '0x' + randHex(40);
    } else {
        const chars = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
        mockAddr = Array.from({length: 44}, () => chars.charAt(Math.floor(Math.random()*chars.length))).join('');
    }
    
    const newW = {
        id: 'w-' + chain.toLowerCase() + '-' + Date.now(),
        name: `${type} Wallet`,
        chain: chain,
        address: mockAddr,
        privKey: 'extension_connected',
        balance: 12.5,
        type: type
    };
    
    STATE.wallets.push(newW);
    saveState();
    closeModal('modal-connect');
    showToast(`${type} 지갑이 브라우저 연동 완료되었습니다.`, "success");
    renderAll();
    if (STATE.activeView === 'wallets') renderWalletManager();
};

// Wallet Manager View Rendering
function renderWalletManager() {
    const list = document.getElementById('manager-wallets-list');
    list.innerHTML = '';
    
    if (STATE.wallets.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding:30px; color:var(--text-muted);">연결된 지갑이 없습니다.</div>`;
        document.getElementById('wallet-detail-active').style.display = 'none';
        document.getElementById('wallet-detail-empty').style.display = 'flex';
        return;
    }
    
    STATE.wallets.forEach(w => {
        const item = document.createElement('div');
        item.className = `tx-item ${STATE.selectedWalletId === w.id ? 'active' : ''}`;
        item.style.cursor = 'pointer';
        if (STATE.selectedWalletId === w.id) {
            item.style.borderColor = 'var(--accent-primary)';
            item.style.background = 'rgba(255, 255, 255, 0.05)';
        }
        
        const shortAddr = w.address.slice(0, 8) + '...' + w.address.slice(-6);
        
        item.innerHTML = `
            <div class="tx-left">
                <div style="width:24px; height:24px; display:flex; align-items:center;">${ICONS[w.chain]}</div>
                <div class="tx-details">
                    <span class="tx-title">${w.name}</span>
                    <span class="tx-meta" style="font-family: monospace;">${shortAddr}</span>
                </div>
            </div>
            <div class="tx-right">
                <span class="tx-amount">${w.balance.toFixed(4)} ${w.chain}</span>
                <span class="tx-status" style="color:var(--text-secondary);">${w.type}</span>
            </div>
        `;
        
        item.onclick = () => {
            STATE.selectedWalletId = w.id;
            renderWalletManager();
        };
        list.appendChild(item);
    });

    // Render active wallet details
    const activeWallet = STATE.wallets.find(w => w.id === STATE.selectedWalletId) || STATE.wallets[0];
    if (activeWallet) {
        STATE.selectedWalletId = activeWallet.id;
        document.getElementById('wallet-detail-empty').style.display = 'none';
        const detailContainer = document.getElementById('wallet-detail-active');
        detailContainer.style.display = 'block';
        
        detailContainer.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                <div style="display:flex; align-items:center; gap:12px;">
                    <span style="width:36px; height:36px; display:flex; align-items:center;">${ICONS[activeWallet.chain]}</span>
                    <div>
                        <h2 style="font-size:18px; font-weight:700;">${activeWallet.name}</h2>
                        <span style="font-size:12px; color:var(--text-secondary);">${activeWallet.chain} Network</span>
                    </div>
                </div>
                <button class="btn-primary" style="background: linear-gradient(135deg, var(--accent-danger) 0%, #b91c1c 100%); padding:6px 12px; font-size:12px;" onclick="disconnectWallet('${activeWallet.id}')">지갑 연결 해제</button>
            </div>
            
            <div class="form-group">
                <span class="form-label" data-key="public-address">공개 주소</span>
                <div style="display:flex; gap:8px;">
                    <input type="text" id="active-address-input" class="form-input" style="flex:1; font-family:monospace; font-size:12px;" value="${activeWallet.address}" readonly>
                    <button class="btn-icon" onclick="copyText('active-address-input')">${ICONS.copy}</button>
                </div>
            </div>

            <div class="form-group" style="margin-bottom:24px;">
                <span class="form-label" data-key="private-key">가상 비밀키</span>
                <div style="display:flex; gap:8px;">
                    <input type="password" id="active-privkey-input" class="form-input" style="flex:1; font-family:monospace; font-size:12px;" value="${activeWallet.privKey}" readonly>
                    <button class="btn-icon" onclick="togglePrivKeyVisibility('active-privkey-input')">👁️</button>
                    <button class="btn-icon" onclick="copyText('active-privkey-input')">${ICONS.copy}</button>
                </div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:24px; padding:16px; background:rgba(0,0,0,0.15); border-radius:12px; border:1px solid var(--border-light);">
                <div>
                    <span style="font-size:11px; color:var(--text-muted); display:block;" data-key="send-amount-label">보유 잔액</span>
                    <span style="font-size:20px; font-weight:700; color:var(--text-primary);">${activeWallet.balance.toFixed(4)} ${activeWallet.chain}</span>
                </div>
                <div>
                    <span style="font-size:11px; color:var(--text-muted); display:block;">평가 가치</span>
                    <span style="font-size:20px; font-weight:700; color:var(--accent-secondary);">${formatAssetValue(activeWallet.balance, activeWallet.chain)}</span>
                </div>
            </div>

            <div style="display:flex; gap:12px;">
                <button class="btn-primary" style="flex:1; justify-content:center; background:linear-gradient(135deg, var(--accent-primary) 0%, #4f46e5 100%);" onclick="openSendModal('${activeWallet.id}')">송금하기 (Send)</button>
                <button class="btn-primary" style="flex:1; justify-content:center; background:rgba(255, 255, 255, 0.05); color:white; border:1px solid var(--border-light);" onclick="openReceiveModal('${activeWallet.id}')">받기 (Receive)</button>
            </div>
        `;
        
        updateDOMTranslations();
    }
}

window.disconnectWallet = function(id) {
    STATE.wallets = STATE.wallets.filter(w => w.id !== id);
    if (STATE.selectedWalletId === id) STATE.selectedWalletId = null;
    saveState();
    showToast("지갑 연결이 해제되었습니다.", "info");
    renderAll();
    renderWalletManager();
};

// Send Crypto Engine
window.openSendModal = function(walletId) {
    const w = STATE.wallets.find(wallet => wallet.id === walletId);
    if (!w) return;
    
    document.getElementById('send-modal-title').textContent = `${w.chain} 송금하기`;
    document.getElementById('send-source-wallet-desc').textContent = `${w.name} (${w.address.slice(0,6)}...${w.address.slice(-4)})`;
    document.getElementById('send-amount-symbol').textContent = w.chain;
    document.getElementById('send-max-balance').textContent = w.balance.toFixed(4);
    document.getElementById('send-max-symbol').textContent = w.chain;
    
    document.getElementById('send-recipient').value = '';
    document.getElementById('send-amount').value = '';
    document.getElementById('btn-confirm-send').disabled = true;
    
    // Gas fee simulator
    let gasVal = 0.0006;
    if (w.chain === 'SOL') gasVal = 0.00005;
    else if (w.chain === 'BTC') gasVal = 0.0001;
    
    const fiatGas = formatAssetValue(gasVal, w.chain);
    document.getElementById('send-gas-fee').textContent = `${fiatGas} (${gasVal} ${w.chain})`;
    
    STATE.activeSendWalletId = walletId;
    openModal('modal-send');
};

window.validateSendAmount = function() {
    const amt = parseFloat(document.getElementById('send-amount').value);
    const recipient = document.getElementById('send-recipient').value;
    const w = STATE.wallets.find(wallet => wallet.id === STATE.activeSendWalletId);
    
    const btn = document.getElementById('btn-confirm-send');
    if (amt > 0 && amt <= w.balance && recipient.trim().length > 5) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
};

// Detect changes to recipient as well
document.getElementById('send-recipient').addEventListener('input', () => {
    window.validateSendAmount();
});

window.executeSendTransaction = function() {
    const amt = parseFloat(document.getElementById('send-amount').value);
    const recipient = document.getElementById('send-recipient').value;
    const w = STATE.wallets.find(wallet => wallet.id === STATE.activeSendWalletId);
    
    closeModal('modal-send');
    openModal('modal-processing');
    
    setTimeout(() => {
        w.balance -= amt;
        
        // Append transaction log
        const txHash = '0x' + Array.from({length: 8}, () => Math.floor(Math.random()*16).toString(16)).join('');
        const newTx = {
            id: 'tx-' + Date.now(),
            type: 'send',
            chain: w.chain,
            amount: amt,
            token: w.chain,
            from: w.address.slice(0,6) + '...' + w.address.slice(-4),
            to: recipient.slice(0,6) + '...' + recipient.slice(-4),
            timestamp: Date.now(),
            status: 'Completed',
            txHash: txHash
        };
        
        STATE.transactions.push(newTx);
        saveState();
        
        closeModal('modal-processing');
        showToast(`${amt} ${w.chain} 송금이 완료되었습니다.`, "success");
        renderAll();
        if (STATE.activeView === 'wallets') renderWalletManager();
    }, 2500);
};

// Receive Crypto Modal QR code drawer
window.openReceiveModal = function(walletId) {
    const w = STATE.wallets.find(wallet => wallet.id === walletId);
    if (!w) return;
    
    document.getElementById('receive-modal-title').textContent = `${w.chain} 수령하기`;
    document.getElementById('receive-address-input').value = w.address;
    
    // Draw simple canvas QR Mock
    const canvasContainer = document.getElementById('qr-code-canvas-container');
    canvasContainer.innerHTML = '';
    
    const qrText = w.address;
    const qrSize = 150;
    
    const canvas = document.createElement('canvas');
    canvas.width = qrSize;
    canvas.height = qrSize;
    canvasContainer.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    
    // Simple mock QR matrix drawing
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0,0,qrSize,qrSize);
    ctx.fillStyle = '#0f172a'; // dark elements
    
    // Outer squares
    ctx.fillRect(10, 10, 35, 35);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(15, 15, 25, 25);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(20, 20, 15, 15);
    
    ctx.fillRect(105, 10, 35, 35);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(110, 15, 25, 25);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(115, 20, 15, 15);

    ctx.fillRect(10, 105, 35, 35);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(15, 110, 25, 25);
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(20, 115, 15, 15);

    // Random dot noise
    for (let x = 10; x < 140; x += 5) {
        for (let y = 10; y < 140; y += 5) {
            // skip corners
            if ((x < 50 && y < 50) || (x > 100 && y < 50) || (x < 50 && y > 100)) continue;
            if (Math.random() > 0.55) {
                ctx.fillRect(x, y, 4, 4);
            }
        }
    }
    
    openModal('modal-receive');
};

// Token Swap Calculator
window.resetSwapForm = function() {
    STATE.swapState.fromAmount = '';
    STATE.swapState.toAmount = '';
    document.getElementById('swap-input-from').value = '';
    document.getElementById('swap-input-to').value = '';
    document.getElementById('btn-execute-swap').disabled = true;
    
    updateSwapBalances();
    calculateSwapOutput();
};

function updateSwapBalances() {
    const fromToken = STATE.swapState.fromToken;
    const toToken = STATE.swapState.toToken;
    
    // Find wallet balance
    const fromW = STATE.wallets.find(w => w.chain === fromToken);
    const toW = STATE.wallets.find(w => w.chain === toToken);
    
    document.getElementById('swap-from-balance').innerText = fromW ? fromW.balance.toFixed(4) : '0.00';
    document.getElementById('swap-to-balance').innerText = toW ? toW.balance.toFixed(4) : '0.00';
    
    // Update labels inside selector buttons
    document.getElementById('swap-token-from-symbol').innerText = fromToken;
    document.getElementById('swap-token-to-symbol').innerText = toToken;
    
    document.getElementById('swap-token-from-icon').innerHTML = ICONS[fromToken] || '';
    document.getElementById('swap-token-to-icon').innerHTML = ICONS[toToken] || '';
}

window.calculateSwapOutput = function() {
    const inputVal = parseFloat(document.getElementById('swap-input-from').value);
    const fromToken = STATE.swapState.fromToken;
    const toToken = STATE.swapState.toToken;
    
    if (isNaN(inputVal) || inputVal <= 0) {
        document.getElementById('swap-input-to').value = '';
        document.getElementById('btn-execute-swap').disabled = true;
        return;
    }
    
    STATE.swapState.fromAmount = inputVal;
    
    // Convert rate
    const fromRate = STATE.exchangeRates[fromToken] || 1;
    const toRate = STATE.exchangeRates[toToken] || 1;
    
    const outputVal = (inputVal * fromRate) / toRate;
    // Apply simulated 0.3% pool fee
    const afterFee = outputVal * 0.997;
    
    document.getElementById('swap-input-to').value = afterFee.toFixed(6);
    STATE.swapState.toAmount = afterFee;
    
    // Rate exchange print
    const unitRate = fromRate / toRate;
    document.getElementById('swap-rate-value').innerText = `1 ${fromToken} ≈ ${unitRate.toFixed(4)} ${toToken}`;
    
    // Enable swap button if balance is sufficient
    const fromW = STATE.wallets.find(w => w.chain === fromToken);
    if (fromW && fromW.balance >= inputVal) {
        document.getElementById('btn-execute-swap').disabled = false;
    } else {
        document.getElementById('btn-execute-swap').disabled = true;
    }
};

window.switchSwapDirection = function() {
    const temp = STATE.swapState.fromToken;
    STATE.swapState.fromToken = STATE.swapState.toToken;
    STATE.swapState.toToken = temp;
    
    resetSwapForm();
};

// Swap Select Token Modals
let activeSelectTarget = 'from';
window.openTokenSelect = function(target) {
    activeSelectTarget = target;
    const container = document.getElementById('token-select-list');
    container.innerHTML = '';
    
    // Supported swap tokens
    const tokens = ['ETH', 'SOL', 'BTC', 'BNB', 'MATIC'];
    
    tokens.forEach(tk => {
        // avoid selecting same token
        if (target === 'from' && STATE.swapState.toToken === tk) return;
        if (target === 'to' && STATE.swapState.fromToken === tk) return;
        
        const w = STATE.wallets.find(wallet => wallet.chain === tk);
        const bal = w ? w.balance.toFixed(4) : '0.00';
        
        const btn = document.createElement('button');
        btn.className = 'btn-primary';
        btn.style.width = '100%';
        btn.style.background = 'rgba(255, 255, 255, 0.02)';
        btn.style.border = '1px solid var(--border-light)';
        btn.style.color = 'white';
        btn.style.padding = '12px';
        btn.style.justifyContent = 'space-between';
        btn.style.marginBottom = '8px';
        
        btn.innerHTML = `
            <div style="display:flex; align-items:center; gap:10px;">
                <span style="width:24px; height:24px; display:flex; align-items:center;">${ICONS[tk]}</span>
                <span style="font-weight:700;">${tk}</span>
            </div>
            <span style="font-size:12px; color:var(--text-secondary);">Bal: ${bal}</span>
        `;
        
        btn.onclick = () => {
            if (activeSelectTarget === 'from') {
                STATE.swapState.fromToken = tk;
            } else {
                STATE.swapState.toToken = tk;
            }
            closeModal('modal-token-select');
            resetSwapForm();
        };
        container.appendChild(btn);
    });
    
    openModal('modal-token-select');
};

window.processSwap = function() {
    const fromToken = STATE.swapState.fromToken;
    const toToken = STATE.swapState.toToken;
    const fromAmt = STATE.swapState.fromAmount;
    const toAmt = STATE.swapState.toAmount;
    
    const fromW = STATE.wallets.find(w => w.chain === fromToken);
    let toW = STATE.wallets.find(w => w.chain === toToken);
    
    if (!fromW || fromW.balance < fromAmt) return;
    
    openModal('modal-processing');
    
    // Simulate transaction delay
    setTimeout(() => {
        fromW.balance -= fromAmt;
        
        if (toW) {
            toW.balance += toAmt;
        } else {
            // Auto create mock wallet if none exists on target chain
            const randHex = len => Array.from({length: len}, () => Math.floor(Math.random()*16).toString(16)).join('');
            toW = {
                id: 'w-' + toToken.toLowerCase() + '-' + Date.now(),
                name: `My ${toToken} Account`,
                chain: toToken,
                address: toToken === 'SOL' ? 'PhantomXyZ...' : '0x' + randHex(40),
                balance: toAmt,
                type: 'Auto-Created',
                privKey: 'auto_gen_priv_' + randHex(32)
            };
            STATE.wallets.push(toW);
        }
        
        // Save Transaction
        const txHash = '0x' + Array.from({length: 8}, () => Math.floor(Math.random()*16).toString(16)).join('');
        const newTx = {
            id: 'tx-' + Date.now(),
            type: 'swap',
            chain: fromToken,
            amount: fromAmt,
            token: fromToken,
            fromToken: fromToken,
            toToken: toToken,
            toAmount: parseFloat(toAmt.toFixed(6)),
            from: fromW.address.slice(0,6) + '...' + fromW.address.slice(-4),
            to: toW.address.slice(0,6) + '...' + toW.address.slice(-4),
            timestamp: Date.now(),
            status: 'Completed',
            txHash: txHash
        };
        STATE.transactions.push(newTx);
        saveState();
        
        closeModal('modal-processing');
        showToast(`${fromAmt} ${fromToken} → ${toAmt.toFixed(4)} ${toToken} 스왑이 완료되었습니다!`, "success");
        renderAll();
        resetSwapForm();
    }, 2800);
};

// Earn Staking View Rendering
function renderStaking() {
    const grid = document.getElementById('staking-grid-container');
    grid.innerHTML = '';
    
    STATE.staking.forEach(st => {
        const card = document.createElement('div');
        card.className = 'staking-card glass';
        card.style.color = `var(--color-${st.chain.toLowerCase()})`;
        
        const poolBalance = st.staked;
        const rewardAccrued = st.rewards.toFixed(6);
        
        card.innerHTML = `
            <div class="staking-card-top">
                <div class="staking-token">
                    <span style="width:28px; height:28px; display:flex; align-items:center;">${ICONS[st.chain]}</span>
                    <span style="font-size:16px; font-weight:700; color:var(--text-primary);">${st.chain} Liquid Pool</span>
                </div>
                <div class="staking-apy-badge">APY ${st.apy}%</div>
            </div>
            
            <div class="staking-stats">
                <div class="staking-stat">
                    <span class="staking-stat-label" data-key="staked-amount">스테이킹한 수량</span>
                    <span class="staking-stat-val" style="color:var(--text-primary);">${poolBalance.toFixed(4)} ${st.token}</span>
                </div>
                <div class="staking-stat">
                    <span class="staking-stat-label">누적 리워드</span>
                    <span class="staking-stat-val" style="color:var(--accent-secondary);">${rewardAccrued} ${st.token}</span>
                </div>
            </div>
            
            <div style="display:flex; gap:10px;">
                <button class="btn-primary" style="flex:1; justify-content:center; padding:8px 0; font-size:13px;" onclick="stakeTokensPrompt('${st.id}')">스테이킹 (Stake)</button>
                <button class="btn-primary" style="flex:1; justify-content:center; padding:8px 0; font-size:13px; background:rgba(255,255,255,0.05); color:white; border:1px solid var(--border-light);" onclick="claimRewards('${st.id}')" ${st.rewards > 0 ? '' : 'disabled'}>보상 받기</button>
            </div>
        `;
        grid.appendChild(card);
    });
    updateDOMTranslations();
}

window.stakeTokensPrompt = function(poolId) {
    const st = STATE.staking.find(s => s.id === poolId);
    const w = STATE.wallets.find(wallet => wallet.chain === st.chain);
    
    if (!w || w.balance <= 0.1) {
        showToast("지갑에 스테이킹할 잔액이 부족하거나 지갑이 연결되어 있지 않습니다.", "error");
        return;
    }
    
    const stakeAmt = parseFloat(prompt(`${st.chain} 스테이킹할 수량을 입력해 주세요 (보유: ${w.balance.toFixed(4)}):`));
    if (isNaN(stakeAmt) || stakeAmt <= 0) return;
    
    if (stakeAmt > w.balance - 0.01) {
        showToast("가스 수수료를 남겨두어야 하여 전액 스테이킹할 수 없습니다.", "error");
        return;
    }
    
    openModal('modal-processing');
    setTimeout(() => {
        w.balance -= stakeAmt;
        st.staked += stakeAmt;
        saveState();
        closeModal('modal-processing');
        showToast(`${stakeAmt} ${st.chain} 스테이킹 완료!`, "success");
        renderAll();
        renderStaking();
    }, 2000);
};

window.claimRewards = function(poolId) {
    const st = STATE.staking.find(s => s.id === poolId);
    const w = STATE.wallets.find(wallet => wallet.chain === st.chain);
    
    if (st.rewards <= 0) return;
    
    if (!w) {
        showToast("보상을 수령할 지갑이 없습니다.", "error");
        return;
    }
    
    const rewardAmt = st.rewards;
    openModal('modal-processing');
    setTimeout(() => {
        w.balance += rewardAmt;
        st.rewards = 0.0;
        saveState();
        closeModal('modal-processing');
        showToast(`${rewardAmt.toFixed(6)} ${st.chain} 보상을 수령했습니다.`, "success");
        renderAll();
        renderStaking();
    }, 2000);
};

// Full Transaction History Rendering
function renderFullHistory() {
    const container = document.getElementById('history-tx-list');
    container.innerHTML = '';
    
    filterTransactions();
}

window.filterTransactions = function() {
    const container = document.getElementById('history-tx-list');
    const query = document.getElementById('tx-search-input').value.toLowerCase();
    const filter = document.getElementById('tx-filter-select').value;
    
    container.innerHTML = '';
    
    const filtered = STATE.transactions.filter(tx => {
        // Type filter
        if (filter !== 'all' && tx.type !== filter) return false;
        
        // Text filter
        if (query) {
            return tx.from.toLowerCase().includes(query) || 
                   tx.to.toLowerCase().includes(query) || 
                   tx.txHash.toLowerCase().includes(query) ||
                   tx.token.toLowerCase().includes(query);
        }
        return true;
    }).reverse();
    
    if (filtered.length === 0) {
        container.innerHTML = `<div style="text-align:center; padding:40px; color:var(--text-muted);" data-key="no-tx-found">검색 조건에 맞는 거래 내역이 없습니다.</div>`;
        updateDOMTranslations();
        return;
    }
    
    filtered.forEach(tx => {
        const item = document.createElement('div');
        item.className = 'tx-item';
        
        let txIconClass = 'swap';
        let txIcon = ICONS.swap;
        let amountText = '';
        
        if (tx.type === 'send') {
            txIconClass = 'send';
            txIcon = ICONS.arrowRight;
            amountText = `-${tx.amount} ${tx.token}`;
        } else if (tx.type === 'receive') {
            txIconClass = 'receive';
            txIcon = ICONS.check;
            amountText = `+${tx.amount} ${tx.token}`;
        } else if (tx.type === 'swap') {
            txIconClass = 'swap';
            txIcon = ICONS.swap;
            amountText = `${tx.amount} ${tx.fromToken} ➔ ${tx.toAmount} ${tx.toToken}`;
        }
        
        const fullDate = new Date(tx.timestamp).toLocaleString(STATE.lang === 'ko' ? 'ko-KR' : 'en-US');
        
        item.innerHTML = `
            <div class="tx-left">
                <div class="tx-icon ${txIconClass}">${txIcon}</div>
                <div class="tx-details">
                    <span class="tx-title" style="font-weight:700;">${tx.type.toUpperCase()}</span>
                    <span class="tx-meta">${fullDate} • Hash: ${tx.txHash}</span>
                    <span class="tx-meta" style="margin-top:4px; font-family:monospace; color:var(--text-secondary);">From: ${tx.from} | To: ${tx.to}</span>
                </div>
            </div>
            <div class="tx-right" style="justify-content:center;">
                <span class="tx-amount" style="font-size:15px; color:${tx.type === 'receive' ? 'var(--accent-secondary)' : 'var(--text-primary)'};">${amountText}</span>
                <span class="tx-status status-${tx.status.toLowerCase()}">${tx.status}</span>
            </div>
        `;
        container.appendChild(item);
    });
}

// Global Preferences Settings
window.changeCurrency = function(val) {
    STATE.currency = val;
    saveState();
    renderAll();
    if (STATE.activeView === 'wallets') renderWalletManager();
    showToast(`통화 표기 단위가 ${val}로 변경되었습니다.`, "success");
};

window.changeNetwork = function(val) {
    STATE.network = val;
    saveState();
    
    // UI indicator
    const badge = document.getElementById('network-badge');
    if (val === 'mainnet') {
        badge.innerHTML = `<span style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-secondary);"></span><span>Mainnet</span>`;
    } else {
        badge.innerHTML = `<span style="width: 8px; height: 8px; border-radius: 50%; background: var(--accent-warning);"></span><span>Testnet</span>`;
    }
    
    showToast(`네트워크를 ${val === 'mainnet' ? '메인넷' : '테스트넷'}으로 전환하였습니다.`, "info");
};

window.resetAllData = function() {
    if (confirm(STATE.lang === 'ko' ? "정말로 지갑 정보 및 거래 기록을 모두 지우시겠습니까?" : "Are you sure you want to reset all wallet information and simulated history?")) {
        localStorage.removeItem('omni_wallet_state');
        resetToDefaults();
        showToast("모든 모의 데이터가 초기화되었습니다.", "info");
        renderAll();
        switchView('dashboard');
    }
};

// Clipboard copying utility
window.copyText = function(inputId) {
    const input = document.getElementById(inputId);
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value);
    showToast("클립보드에 복사되었습니다.", "success");
};

window.copyDirectText = function(text) {
    navigator.clipboard.writeText(text);
    showToast("클립보드에 복사되었습니다.", "success");
};

// Password masking toggler
window.togglePrivKeyVisibility = function(inputId) {
    const input = document.getElementById(inputId);
    input.type = input.type === 'password' ? 'text' : 'password';
};

// Toast Alerts
function showToast(msg, type = "success") {
    const toast = document.getElementById('toast');
    const toastIcon = document.getElementById('toast-icon');
    const toastMsg = document.getElementById('toast-message');
    
    toastMsg.innerText = msg;
    
    if (type === 'success') {
        toast.style.borderColor = 'var(--accent-secondary)';
        toastIcon.innerHTML = ICONS.check;
        toastIcon.style.color = 'var(--accent-secondary)';
    } else if (type === 'error') {
        toast.style.borderColor = 'var(--accent-danger)';
        toastIcon.innerHTML = ICONS.info;
        toastIcon.style.color = 'var(--accent-danger)';
    } else {
        toast.style.borderColor = 'var(--accent-primary)';
        toastIcon.innerHTML = ICONS.info;
        toastIcon.style.color = 'var(--accent-primary)';
    }
    
    toast.classList.add('active');
    setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// Expose vital functions to window for onclick handlers
window.switchView = switchView;
window.toggleLanguage = toggleLanguage;
window.showToast = showToast;
window.renderWalletManager = renderWalletManager;
window.renderStaking = renderStaking;
window.renderFullHistory = renderFullHistory;
