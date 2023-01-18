import { useState, useCallback, useMemo } from 'react';

import Title from './components/Title';
import MyForm from './components/Forms/MyForm';
import MyList from './components/Lists/MyList';

function App() {
	const [values, setValues] = useState([]);

	const handleSubmit = useCallback((values) => {
		setValues((data) => [...data, values]);
	}, []);

	console.time('memo');
	const iterator = 50000000;
	const memoized = useMemo(() => {
		let total = 0;
		for (let i = 0; i < iterator; i++) {
			total = total * iterator;
		}

		return total;
	}, [iterator]);
	console.timeEnd('memo');

	return (
		<div>
			<Title>Mi título</Title>
			<MyForm onSubmit={handleSubmit} />
			<MyList data={values} />
		</div>
	);
}

export default App;
