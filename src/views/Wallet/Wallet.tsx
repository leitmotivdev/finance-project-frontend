import './Wallet.scss';

import { ButtonAddWallet } from '../../components/admin/wallet/ButtonAddWallet/ButtonAddWallet';
import { CardWallet } from '../../components/admin/wallet/CardWallet/CardWallet';
import { walletsFake } from '../../constants/data/wallets';

export const Wallet = () => {
  return (
    <>
      <div className="wallet-header">
        <div className="wallet-list">
          <ButtonAddWallet />
          {walletsFake.map((wallet) => (<CardWallet key={wallet.id} wallet={wallet} />))}
        </div>
      </div>

    </>
  );
};