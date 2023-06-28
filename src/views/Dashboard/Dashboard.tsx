import { useDispatch } from 'react-redux';
import './Dashboard.scss';

export const Dashboard = () => {
  const dispatch = useDispatch();

  const onIncrement = () => {
    dispatch({ type: 'TEST' });
  };

  return (
    <section className="dashboard">
      <button onClick={onIncrement}>Increment</button>
    </section>
  );
};