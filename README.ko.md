# Ω 옴니 월렛 (Omni Wallet)

옴니 월렛은 프리미엄 글래스모피즘(Glassmorphic) 스타일의 고화질 Web3 멀티체인 암호화폐 지갑 대시보드 시뮬레이터입니다. 다양한 블록체인 네트워크(Ethereum, Solana, Bitcoin, Binance Smart Chain, Polygon)의 지갑을 하나의 응용 프로그램 인터페이스로 통합하여 시각화하고 제어할 수 있습니다.

> **주의**: 본 프로젝트는 브라우저의 `localStorage`를 활용하는 완전한 클라이언트 사이드 시뮬레이터 샌드박스입니다. 모든 트랜잭션, 개인키 생성, 스왑 연산, 스테이킹 보상 적립 로직은 가상으로 동작합니다. **실제 자산이 들어있는 프라이빗 키(Private Key)나 복구 구문(Mnemonic)은 절대 입력하지 마세요.**

---

## 🌟 주요 기능

* **통합 자산 관리 대시보드**: 실시간 환율을 반영해 총 자산 가치를 지정 화폐(USD/KRW)로 조회합니다. 7일간의 자산 포트폴리오 추이(라인 차트)와 체인별 자산 비율(도넛 차트)을 시각적으로 모니터링합니다.
* **통합 지갑 매니저**: 브라우저 확장 지갑(메타마스크, 팬텀)의 가상 연동을 지원하고, 신규 멀티체인 주소를 즉석 생성하거나 모의 지갑 키를 복구 등록할 수 있습니다. 주소 복사 및 가상 비밀키 조회 기능이 포함되어 있습니다.
* **멀티체인 토큰 스왑**: 이종 체인 간(예: ETH ➔ USDC, SOL ➔ USDT) 또는 동일 체인 내 자산 교환을 시뮬레이션합니다. 실시간 스왑 비율, 가스 수수료 추정값, 스왑 풀 유동성 수수료(0.3%) 차감 로직과 트랜잭션 검증 딜레이 애니메이션이 가동됩니다.
* **유동성 스테이킹 (Earn)**: 유휴 자산을 각 체인별 노드 풀(ETH, SOL, BNB)에 예치하여 이자를 수확할 수 있습니다. 2초마다 가상 보상이 적립되며(Rewards Tick), 실시간 보상 청구(Claim) 및 해제(Unstake)를 시뮬레이션합니다.
* **전체 거래내역 원장**: 송금, 수령, 스왑을 포함한 모든 거래 이력을 조회합니다. 거래 종류 필터 및 검색 키워드(거래 해시, 송수신 주소) 필터를 지원합니다.
* **글래스모피즘 다크 테마**: 각 블록체인별 시그니처 형광 컬러 포인트가 적용된 미래지향적 디자인을 제공합니다. `backdrop-filter` 블러 효과와 세련된 custom scrollbar, 모바일 웹에서도 매끄럽게 호환되는 반응형 레이아웃이 적용되었습니다.

---

## 🛠 기술 스택

* **Core**: Semantic HTML5, Vanilla JavaScript (ES6 Modules)
* **Styling**: Vanilla CSS (CSS Variables, Flexbox, Grid, Backdrop Filters, Keyframe Animations)
* **Charts**: [Chart.js](https://www.chartjs.org/) (CDN 연동)
* **Icons**: Optimized Inline SVG Paths

---

## 🚀 로컬 실행 방법

### 1. 파이썬 웹 서버로 구동
별도의 빌드 과정 없이 파이썬의 정적 서버 모듈을 통해 즉시 실행할 수 있습니다:

```bash
# 프로젝트 디렉토리 이동
cd omni-wallet

# 파이썬 정적 웹서버 가동
python3 -m http.server 8080
```
브라우저를 열고 [http://localhost:8080](http://localhost:8080)에 접속하세요.

---

## 🐳 도커(Docker) 실행 방법

본 프로젝트에는 경량화 Nginx 이미지(`nginx:alpine`) 기반의 `Dockerfile` 및 `docker-compose.yml`이 사전 세팅되어 있어 간편하게 컨테이너 환경에서 실행할 수 있습니다.

### 1. 컨테이너 빌드 및 가동
프로젝트 루트 경로에서 다음 명령을 실행합니다:

```bash
docker compose up -d --build
```

### 2. 가동 상태 확인
```bash
docker ps
```
빌드가 완료되면 [http://localhost:8080](http://localhost:8080) 주소로 대시보드가 서비스됩니다.

### 3. 컨테이너 중지
```bash
docker compose down
```

---

## 📦 퍼블릭 깃허브(GitHub) 리포지토리 업로드

이 코드를 사용자의 public 깃허브 리포지토리(`encredible/omni-wallet`)로 푸시하려면 터미널에 아래 명령을 순차적으로 입력해 주십시오.

```bash
# 로컬 Git 리포지토리 초기화
git init

# 모든 파일 스테이징 영역 추가
git add .

# 최초 커밋 생성
git commit -m "feat: initial release of Omni Wallet multi-chain dashboard v1.0.0"

# 기본 브랜치를 main으로 설정
git branch -M main

# GitHub 원격 리포지토리 연결
git remote add origin https://github.com/encredible/omni-wallet.git

# GitHub에 푸시
git push -u origin main
```
