import styles from './Header.module.css';
import logo from '../images/logo.svg';
import { useState } from 'react';

function Header(props) {
  const balance = 921.48
	return (
		<div className={styles['header']}>
			<div className={styles['balance-container']}>
				<p className={styles['balance-label']}>My balance</p>
				<p className={styles['balance-amount']}>${balance.toFixed(2)}</p>
			</div>
      <img className={styles.img} src={logo}/>
		</div>
	);
}

export default Header;
