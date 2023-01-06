import styles from './Chart.module.css';
import ChartBar from './ChartBar/ChartBar'

function Chart(props) {
  const maxVal = Math.max(...props.data.map(d => d.amount))
	return (
		<div className={styles['chart-container']}>
			{props.data.map((data, index) => <ChartBar key={index} info={{...data, maxVal}}/>)}
		</div>
	);
}

export default Chart;
