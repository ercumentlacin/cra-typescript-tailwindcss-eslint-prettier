import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as plusMinusActionCreators from '../../store/actions/plusMinus';
import Button from '../Button';
import styles from './styles.module.css';

const ButtonGroub = () => {
  const dispatch = useDispatch();
  const AC = bindActionCreators(plusMinusActionCreators, dispatch);

  return (
    <div className={styles.buttonGroup}>
      <Button variant="green" onClick={() => AC.incrementNumber(1)}>
        Increment
      </Button>
      <Button variant="red" onClick={() => AC.decrementNumber()}>
        Decrement
      </Button>
      <Button variant="black" onClick={() => AC.resetNumber()}>
        Reset
      </Button>
    </div>
  );
};

export default ButtonGroub;
