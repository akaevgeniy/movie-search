import { useSelector } from 'react-redux';
import { BallTriangle } from 'react-loader-spinner';

const Spin = () => {
  const spinner = useSelector((state) => state.appReducer.loading);

  return (
    <div className="loader-styles">
      <BallTriangle color="#4169E1" height={80} width={80} visible={spinner} />
    </div>
  );
};

export default Spin;
