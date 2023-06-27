import { FC } from 'react';
import './CardWallet.scss';
import { Wallet } from '../../../../interfaces/Wallet';
import { parseCurrency } from '../../../../helpers/currency';

interface CardWalletProps {
  wallet: Wallet;
}

export const CardWallet: FC<CardWalletProps> = ({ wallet }) => {
  return (
    <button className="card-wallet">
      <div style={{ background: wallet.color }} className="card-wallet__color-bar"></div>
      <div className="card-wallet__content">
        <p className="card-wallet__name">{wallet.name}</p>
        <p className="card-wallet__number">{wallet.accountNumber}</p>
      </div>

      <p className="card-wallet__balance">{parseCurrency(wallet.balance)}</p>
    </button>
  );
};