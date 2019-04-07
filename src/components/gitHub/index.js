import React from 'react';
import { componentFromStream, createEventHandler } from 'recompose';
import { combineLatest } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

import './observableConfig';
import User from './User';


const App = componentFromStream(prop$ => {
	const { handler, stream } = createEventHandler();

	const value$ = stream.pipe(
		map((e) => e.target.value),
		startWith('')
	);

	return combineLatest(prop$, value$).pipe(
		tap(console.warn),  //logs [props,value]
		map(([props, value]) => (
			<div>
				<input
					onChange={handler}
					placeholder='GitHub users'
				/>
				<User user={value} />
			</div>
		))
	)
});

export default App;