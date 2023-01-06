import styles from './Body.module.css';
import Chart from './Chart/Chart'
import Summary from './Summary/Summary'

function Body(props) {
	return (
		<div className={styles['content-body']}>
			<p className={styles['spending-header']}>Spending - Last 7 days</p>
      <Chart data={props.data}/>
      <Summary data={props.data}/>
		</div>
	);
}

export default Body;
