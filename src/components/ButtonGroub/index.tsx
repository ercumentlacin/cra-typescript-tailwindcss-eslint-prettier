import { useDispatch } from 'react-redux';
import {
  decrementNumber,
  incrementNumber,
  resetNumber,
} from '../../store/actions/plusMinus';
import Button from '../Button';
import styles from './styles.module.css';

const ButtonGroub = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.buttonGroup}>
      <Button variant="green" onClick={() => dispatch(incrementNumber(1))}>
        Increment
      </Button>
      <Button variant="red" onClick={() => dispatch(decrementNumber())}>
        Decrement
      </Button>
      <Button variant="black" onClick={() => dispatch(resetNumber())}>
        Reset
      </Button>
    </div>
  );
};

export default ButtonGroub;
