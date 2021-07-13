// import styles from './styles.module.css';
import styles from './styles.module.css';

const Container: React.FC = ({ children }) => {
  return <div className={styles.containerStyle}>{children}</div>;
};

export default Container;
