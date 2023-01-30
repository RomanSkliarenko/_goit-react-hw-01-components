import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/profile.module.scss';


const Profile = ({ avatar, location, name, stats, tag }) => {
  return (
    <div className={styles.container}>
      <img src={avatar} alt='Аватар пользователя' className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  location: PropTypes.string.isRequired,
  name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;


