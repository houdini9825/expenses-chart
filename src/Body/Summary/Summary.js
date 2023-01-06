import styles from './Summary.module.css';
import { useState } from 'react';

function Summary() {
	const monthTotal = 478.33
  const percent = 2.4
	return (
		<div className={styles['summary-container']}>
			<div className={styles['total-container']}>
				<p className={styles['total-label']}>Total this month</p>
				<p className={styles['total-amount']}>
					${monthTotal.toFixed(2)}
				</p>
			</div>
      <div className={styles['percent-container']}>
        <p className={styles['percent-amount']}>+{percent}%</p>
        <p className={styles['percent-label']}>from last month</p>
      </div>
		</div>
	);
}

export default Summary;
