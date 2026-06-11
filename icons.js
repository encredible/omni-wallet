// SVG Icons for Omni Wallet
const ICONS = {
    dashboard: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>`,
    wallet: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" ry="2"/><path d="M16 8h6M16 16h6M12 12h.01"/></svg>`,
    swap: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m17 2 4 4-4 4M21 6H9a3 3 0 0 0-3 3v2M7 22l-4-4 4-4M3 18h12a3 3 0 0 0 3-3v-2"/></svg>`,
    history: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    earn: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    settings: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    plus: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    check: `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    arrowRight: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    arrowDownUp: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>`,
    info: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    lock: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    key: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2f-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    chevronDown: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,
    
    // Chains
    ETH: `<svg viewBox="0 0 784 1277" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M392 0L383.5 28.5V870.5L392 879L784 647.5L392 0Z" fill="#8C8C8C"/>
        <path d="M392 0L0 647.5L392 879V470V0Z" fill="#3C3C3D"/>
        <path d="M392 956L387 962V1271L392 1277L784 725L392 956Z" fill="#8C8C8C"/>
        <path d="M392 1277V956L0 725L392 1277Z" fill="#3C3C3D"/>
        <path d="M392 879L784 647.5L392 470V879Z" fill="#141414"/>
        <path d="M0 647.5L392 879V470L0 647.5Z" fill="#343434"/>
    </svg>`,
    SOL: `<svg viewBox="0 0 398 322" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M53.1 72.8h344.9L344.9 0H0l53.1 72.8z" fill="url(#sol_g1)"/>
        <path d="M0 249.2h344.9l53.1 72.8H53.1L0 249.2z" fill="url(#sol_g2)"/>
        <path d="M344.9 124.6H0l53.1 72.8h344.9l-53.1-72.8z" fill="url(#sol_g3)"/>
        <defs>
            <linearGradient id="sol_g1" x1="398" y1="36.4" x2="0" y2="36.4" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#00FFA3"/>
                <stop offset="1" stop-color="#DC1FFF"/>
            </linearGradient>
            <linearGradient id="sol_g2" x1="398" y1="285.6" x2="0" y2="285.6" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#00FFA3"/>
                <stop offset="1" stop-color="#DC1FFF"/>
            </linearGradient>
            <linearGradient id="sol_g3" x1="398" y1="161" x2="0" y2="161" gradientUnits="userSpaceOnUse">
                <stop offset="0" stop-color="#00FFA3"/>
                <stop offset="1" stop-color="#DC1FFF"/>
            </linearGradient>
        </defs>
    </svg>`,
    BTC: `<svg viewBox="0 0 64 64" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#F7931A"/>
        <path d="M46.1 24.44c.66-4.43-2.71-6.81-7.32-8.4l1.5-6.02-3.66-.91-1.46 5.86c-.96-.24-1.95-.47-2.93-.69l1.47-5.9-3.66-.91-1.5 6.01c-.8-.18-1.58-.36-2.34-.55l.01-.03-5.05-1.26-.98 3.92s2.72.62 2.66.66c1.49.37 2.2 1.36 2.14 2.14l-2.15 8.62c.1.03.23.06.37.1l-2.17 8.7c-.18.45-.64 1.13-1.67.87.04.05-2.66-.66-2.66-.66l-1.82 4.19 4.77 1.19c.89.22 1.76.45 2.62.66l-1.52 6.1 3.66.91 1.5-6.02c1 .27 1.98.52 2.94.76l-1.49 5.97 3.66.91 1.52-6.1c6.25 1.18 10.94.7 12.91-4.95 1.59-4.55-.08-7.18-3.37-8.89 2.4-1.1 4.2-2.8 4.67-6.08zm-8.36 13.27c-1.13 4.54-8.8 2.09-11.28 1.47l2.02-8.08c2.48.62 10.42 1.84 9.26 6.61zm1.14-13.3c-1.03 4.13-7.42 2.03-9.5 1.51l1.83-7.32c2.07.52 8.71 1.49 7.67 5.81z" fill="#FFF"/>
    </svg>`,
    BNB: `<svg viewBox="0 0 56 56" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill="#F0B90B"/>
        <path d="M28 12l5.77 5.77-2.31 2.31L28 16.62l-3.46 3.46-2.31-2.31L28 12zm8.08 8.08l2.31-2.31 5.77 5.77-5.77 5.77-2.31-2.31 3.46-3.46-3.46-3.46zM19.92 20.08l-3.46 3.46 3.46 3.46-2.31 2.31-5.77-5.77 5.77-5.77 2.31 2.31zm8.08 8.08c1.27 0 2.31-1.04 2.31-2.31s-1.04-2.31-2.31-2.31-2.31 1.04-2.31 2.31 1.04 2.31 2.31 2.31zm8.08 1.94l2.31 2.31-5.77 5.77-5.77-5.77 2.31-2.31 3.46 3.46 3.46-3.46zM19.92 32l-2.31 2.31-5.77-5.77 5.77-5.77 2.31 2.31-3.46 3.46 3.46 3.46zm8.08 12l-5.77-5.77 2.31-2.31 3.46 3.46 3.46-3.46 2.31 2.31L28 44z" fill="#FFF"/>
    </svg>`,
    MATIC: `<svg viewBox="0 0 38 38" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19" cy="19" r="19" fill="#8247E5"/>
        <path d="M25.75 14.88c-.28-.16-.62-.16-.9 0l-5.1 2.94V11.9c0-.32-.17-.61-.45-.77l-5.1-2.94c-.28-.16-.62-.16-.9 0l-5.1 2.94c-.28.16-.45.45-.45.77v5.88c0 .32.17.61.45.77l5.1 2.94c.28.16.62.16.9 0l5.1-2.94v5.88c0 .32.17.61.45.77l5.1 2.94c.28.16.62.16.9 0l5.1-2.94c.28-.16.45-.45.45-.77V15.65c0-.32-.17-.61-.45-.77zM10.25 11.9l3.3-1.9 3.3 1.9v3.8l-3.3 1.9-3.3-1.9V11.9zm10.2 14.2l3.3-1.9 3.3 1.9v3.8l-3.3 1.9-3.3-1.9v-3.8z" fill="#FFF"/>
    </svg>`
};

export default ICONS;
