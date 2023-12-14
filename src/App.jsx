
import './App.css'
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { arbitrum, mainnet } from 'viem/chains'

function App() {

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "9f9a9d2f476c9376036967c8e982f599"

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })
  return (
    <div className="App">
      <h1>walletconnect</h1>
          <WagmiConfig config={wagmiConfig}>
    </WagmiConfig>
      <w3m-button />
    </div>
  )
}

export default App
