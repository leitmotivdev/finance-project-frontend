import './Wallet.scss';
import { walletsFake } from '../../constants/data/wallets';
import { CardWallet } from '../../components/admin/wallet/CardWallet/CardWallet';
import { ButtonAddWallet } from '../../components/admin/wallet/ButtonAddWallet/ButtonAddWallet';

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