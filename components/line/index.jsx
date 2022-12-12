import styles from './line.module.scss';

const Line = ({ direction, width }) => {
  const className = direction === 'left' ? styles.left : styles.right;
  return (
    <div className={styles.root}>
      <div
        className={className}
        style={{
          width: `${Math.round(width)}%`,
        }}></div>
      ;
    </div>
  );
};

export default Line;
