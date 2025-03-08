const Web3 = require('web3');
const axios = require('axios');
const fs = require('fs');

// Read the list of proxies from a text file
const proxyList = fs.readFileSync('proxies.txt', 'utf-8').split('\n');

// Read the list of wallets from a text file
const walletList = fs.readFileSync('wallets.txt', 'utf-8').split('\n');

// URL of the Sepolia faucet
const faucetUrl = 'https://faucet.sepolia.dev';

// Delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    for (let i = 0; i < walletList.length; i++) {
        const walletAddress = walletList[i].trim();
        const proxy = proxyList[i % proxyList.length].trim();

        console.log(`Requesting faucet funds for wallet: ${walletAddress} using proxy: ${proxy}`);

        try {
            // Set up the request with the proxy
            const response = await axios.post(faucetUrl, {
                address: walletAddress
            }, {
                proxy: {
                    host: proxy.split(':')[0],
                    port: parseInt(proxy.split(':')[1]),
                },
                timeout: 10000
            });

            console.log(`Success: ${response.data.message}`);
        } catch (error) {
            console.error(`Error for wallet ${walletAddress}: ${error.message}`);
        }

        // Wait 10 seconds before the next request
        await delay(10000);
    }
})();
