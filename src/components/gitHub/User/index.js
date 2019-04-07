import React from 'react';
import { componentFromStream } from 'recompose';
import { of, merge } from 'rxjs';
import { map, debounceTime, pluck, filter, switchMap, catchError, delay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import UserComponent from './UserComponent';
import Error from '../Error';
import './user.css';

const User = componentFromStream(prop$ => {
	const formatUrl = user => `https://api.github.com/users/${user}`;
	const loading$ = of(<h3>loading.....</h3>);

	const getUser$ = prop$.pipe(
		debounceTime(1000),
		pluck('user'),
		filter(user => user && user.length),
		map(formatUrl),
		switchMap(Url =>
			merge(
				loading$,
				ajax(Url).pipe(
					pluck('response'),
					delay(1500),
					map(UserComponent),
					catchError(error => of(<Error {...error} />))
				)
			)
		)
	);
	return getUser$;
});

export default User;