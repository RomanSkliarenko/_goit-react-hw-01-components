import React from 'react';
import styles from '../styles/statistic.module.scss';
import PropTypes from 'prop-types';

const Statistic = ({ stats, title }) => {
  return (
    <div className={styles.statistics}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      <ul className={styles.list}>
        {stats.map(file => (
          <li key={file.id} className={styles.item}>
            <span className={styles.label}>{file.label}</span>
            <span className={styles.label}>{file.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistic;
