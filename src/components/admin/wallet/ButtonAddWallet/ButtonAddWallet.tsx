import { useNavigate } from 'react-router-dom';
import { addIcon } from '../../../../constants/assets/walletAssets';
import './ButtonAddWallet.scss';

export const ButtonAddWallet = () => {

  const navigate=useNavigate();
  const handleClick = () => {
    navigate("create")
  }
  return (
    <button className="button-add-wallet" onClick={handleClick}>
      <img src={addIcon} alt="Add wallet" />
    </button>
  );
};