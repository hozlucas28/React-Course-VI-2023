/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   En este archivo se demuestra un caso de uso para <isEqual> del
 * 		   paquete 'lodash'.
 *
 *
 * IMPORTANTE:
 *  			  - <isEqual> = Me permite comparar si dos arrays, booleanos,
 * 								etc. son iguales.
-------------------------------------------------------------------------- */

import { memo } from 'react';

import { isEqual } from 'lodash';

const Li = memo(({ children }) => {
	console.log(`renderizando ${children}`);
	return <li>{children}</li>;
}, isEqual);

const MyList = ({ data }) => {
	console.log('renderizando lista');
	return (
		<ul>
			{data.map((x) => (
				<Li key={x.name + x.lastname}>
					{x.name} {x.lastname}
				</Li>
			))}
		</ul>
	);
};

export default memo(MyList);
