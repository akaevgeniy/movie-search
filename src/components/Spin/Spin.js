import { useSelector } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';
import styles from './Spin.module.css';

const Spin = () => {
  const spinner = useSelector((state) => state.appReducer.loading);

  return (
    <div className={styles.loader}>
      <BallTriangle color="#4169E1" height={80} width={80} visible={spinner} />
    </div>
  );
};

export default Spin;
