import './App.css';
import Header from './Header/Header';
import Body from './Body/Body';
import data from './data.json'


function App() {
	return (
		<div>
			<Header />
			<Body data={data}/>
		</div>
	);
}

export default App;
