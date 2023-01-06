import { useState } from 'react';
import styles from './ChartBar.module.css';

function ChartBar(props) {
  const [showPrice, setShowPrice] = useState(false)
  const heightVal = (props.info.amount / props.info.maxVal) * 150
  const color = props.info.amount === props.info.maxVal ? 'var(--color-cyan)' : 'var(--color-red)'

  const handleShowPrice = (e) => {
    setShowPrice(true)
  }

  const handleHidePrice = (e) => {
    setShowPrice(false)
  }
	return (
		<div onMouseOver={handleShowPrice} onMouseLeave={handleHidePrice} className={styles['bar-container']}>
      {showPrice ? <div className={styles['highlight-value']}>${props.info.amount}</div> : ''}
			<div style={{height: heightVal, backgroundColor: color}} className={styles['bar']}></div>
      <p className={styles['day-label']}>{props.info.day}</p>
		</div>
	);
}

export default ChartBar;
