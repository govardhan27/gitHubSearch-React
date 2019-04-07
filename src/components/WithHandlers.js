import React from 'react';
import { withHandlers } from 'recompose';

const App = ({ sayHi }) => (
	<div>
		<button onClick={sayHi}>
			Click Me!
	  </button>
	</div>
);

export default withHandlers({
	sayHi: () => () => console.log('Hello ')
})(App)