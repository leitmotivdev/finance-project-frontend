import { addIcon } from '../../../../constants/assets/walletAssets';
import './ButtonAddWallet.scss';

export const ButtonAddWallet = () => {
  return (
    <button className="button-add-wallet">
      <img src={addIcon} alt="Add wallet" />
    </button>
  );
};