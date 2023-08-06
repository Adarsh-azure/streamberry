import React from 'react';
import logo from 'assets/img/movie.svg';
import styles from './logo.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logo} alt='logo' className={styles.logo__img} />
        <p className={styles.logo__text}>
          STREAM<span>BERRY</span>
        </p>
    </div>
  );
};

export default Logo;