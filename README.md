# Somnia-Testnet-Deployer

# Automated Token Deployment and Distribution Tool

A CLI tool for deploying ERC20 token contracts and distributing tokens/native assets on the Somnia Testnet network.

## Key Features
- 🛠️ Deploy custom ERC20 contracts with automatic verification
- 💸 Distribute native tokens (STT) to random addresses with random values
- 🪙 Distribute ERC20 tokens to random addresses
- 🔒 Automatic wallet management with daily transaction limits
- ⏳ Simulate realistic transaction patterns with random delays
- 🔍 Integration with the Somnia blockchain explorer

## Prerequisites
- Node.js v18+
- npm v9+
- Hardhat (automatically installed if not already present)
- Blockchain account with STT balance

## Installation
1. Clone the repository:
```bash
git clone https://github.com/sundaybase/Somnia-Testnet-Deployer.git
cd Somnia-Testnet-Deployer
```

2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` to `.env` and fill in the required configuration:
```bash
MAIN_PRIVATE_KEY=0xyour_wallet_private_key
RPC_URL=https://dream-rpc.somnia.network
CHAIN_ID=50312
EXPLORER_URL=https://shannon-explorer.somnia.network/
CONTRACT_ADDRESS=
```

## Configuration
| Variable           | Description                                    | Example Value                          |
|--------------------|------------------------------------------------|---------------------------------------|
| MAIN_PRIVATE_KEY   | Main wallet's private key                      | 0xabc123...                           |
| RPC_URL            | Somnia network RPC URL                         | https://dream-rpc.somnia.network      |
| CHAIN_ID           | Somnia Testnet network ID                      | 50312                                 |
| CONTRACT_ADDRESS   | Contract address (auto-filled after deployment)| 0x...                                 |
| EXPLORER_URL       | Blockchain explorer URL                        | https://shannon-explorer.somnia.network |

## Usage
Run Command:
```bash
npm run start
```

### Main Menu
1. **Deploy New Contract**  
   - Create a custom ERC20 token
   - Guided input for:
     - Token Name
     - Token Symbol
     - Decimal Places
     - Total Supply
   - Automatic contract verification post-deployment

2. **Send Native Tokens (STT)**  
   - Distribute STT to random addresses
   - Random value: 0.001-0.0025 STT per transaction
   - Daily limit: 10,000 transactions/day
   - Random delay between 15-60 seconds per transaction

3. **Send ERC20 Tokens**  
   - Distribute tokens to random addresses
   - Input token amount per transaction
   - Uses previously deployed contract
   - Same daily limit as native tokens

## Security
- 🚫 Never share the `.env` or `random_wallets.json` files
- 🔐 Private keys are only stored in local environment variables
- ⚠️ Be wise, use responsibly without violating rules - DWYOR!

## Important Notes
- Ensure the main wallet has enough STT balance
- Contract verification requires Hardhat - automatically installed
- Failed transactions are reported without stopping the process

## License
MIT License

### To Run the Script:

1. Ensure all dependencies are installed
2. Fill in the `.env` file with the correct configuration
3. Run the command:
```bash
node main.js
```

Follow the interactive menu instructions in the CLI. For the first operation, it is recommended to start by deploying a contract before distributing tokens.

Pay attention to daily transaction limits and ensure the main wallet has enough balance for gas fees and token distribution.

Last updated: Sun Mar  9 12:33:12 UTC 2025
