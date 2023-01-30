import React from 'react';
import styles from '../styles/transactionHistory.module.scss';
import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) =>
  <table className={styles.table}>
    <thead className={styles.thead}>
    <tr>
      <th className={styles.th}>Type</th>
      <th className={styles.th}>Amount</th>
      <th className={styles.th}>Currency</th>
    </tr>
    </thead>
    <tbody>
    {transactions.map(item => (
      <Transaction key={item.id} {...item} />
    ))}
    </tbody>
  </table>;

const Transaction = ({ type, amount, currency }) =>
  <tr>
    <td className={styles.td}>{type}</td>
    <td className={styles.td}>{amount}</td>
    <td className={styles.td}>{currency}</td>
  </tr>;


TransactionHistory.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionHistory;
