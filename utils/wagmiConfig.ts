import { getDefaultConfig, getDefaultWallets } from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  ledgerWallet,
  trustWallet
} from '@rainbow-me/rainbowkit/wallets';
import { fallback, http } from 'wagmi';
import {
  arbitrum,
  base,
  blast,
  fraxtal,
  gnosis,
  linea,
  lisk,
  mainnet,
  mode,
  optimism,
  polygon,
  tac,
  unichain,
  zora
} from 'wagmi/chains';

if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error(
    'Missing NEXT_PUBLIC_PROJECT_ID. Please set it in your environment variables.'
  );
}

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const { wallets } = getDefaultWallets();

const customGnosis = {
  ...gnosis,
  hasIcon: true,
  iconUrl: '/chains/gnosis.jpg',
  iconBackground: 'none'
};

const wagmiConfig = getDefaultConfig({
  appName: 'Wrapeth',
  projectId,
  wallets: [
    ...wallets,
    {
      groupName: 'Other',
      wallets: [argentWallet, trustWallet, ledgerWallet]
    }
  ],
  chains: [
    mainnet,
    customGnosis,
    polygon,
    arbitrum,
    optimism,
    base,
    zora,
    blast,
    mode,
    linea,
    tac,
    unichain,
    lisk,
    fraxtal
  ],
  transports: {
    [mainnet.id]: fallback([
      http(),
      http(`https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [customGnosis.id]: fallback([
      http(),
      http(`https://gnosis.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://gnosis-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [polygon.id]: fallback([
      http(),
      http(`https://polygon.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [arbitrum.id]: fallback([
      http(),
      http(`https://arbitrum.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://arb-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [optimism.id]: fallback([
      http(),
      http(`https://optimism.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://opt-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [base.id]: fallback([
      http(),
      http(`https://base.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://base-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [zora.id]: fallback([
      http(),
      http(`https://zora.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://zora-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [blast.id]: fallback([
      http(),
      http(`https://blast.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://blast-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [mode.id]: fallback([
      http(),
      http(`https://mode.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://mode-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [linea.id]: fallback([
      http(),
      http(`https://linea.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://linea-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [tac.id]: fallback([
      http(),
      http(`https://tac.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://tac-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [unichain.id]: fallback([
      http(),
      http(`https://unichain.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://unichain-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [lisk.id]: fallback([
      http(),
      http(`https://lisk.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://lisk-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ]),
    [fraxtal.id]: fallback([
      http(),
      http(`https://fraxtal.infura.io/v3/${process.env.NEXT_PUBLIC_RPC_KEY}`),
      http(
        `https://fraxtal-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY}`
      )
    ])
  },
  ssr: true
});

export default wagmiConfig;
