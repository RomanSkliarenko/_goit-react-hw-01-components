import React from 'react';
import styles from '../styles/friendList.module.scss';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) =>
  <ul className={styles.list}>
    {friends.map((friend) =>
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />,
    )}
  </ul>;

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.online : styles.offline}></span>
    <img className={styles.avatar} src={avatar} alt='' width='48' />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;

