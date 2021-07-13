import styles from './styles.module.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick: (x: number) => void;
  variant: 'red' | 'green' | 'black';
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant }) => {
  let variantClass;
  switch (variant) {
    case 'red':
      variantClass = styles.red;
      break;

    case 'green':
      variantClass = styles.green;
      break;

    case 'black':
      variantClass = styles.black;
      break;

    default:
      break;
  }

  return (
    <button onClick={() => onClick(1)} className={`${styles.button} ${variantClass}`}>
      {children}
    </button>
  );
};

export default Button;
