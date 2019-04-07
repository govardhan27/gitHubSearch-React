import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import WithHandlers from './components/WithHandlers';
import Form from './components/Forms/Form';
import NewForm from './components/Forms/WithState';
import GitHubSearch from './components/gitHub/index';

export default () => (
	<Router>
		<Route path='/' exact component={WithHandlers} />
		<Route path='/form' exact component={Form} />
		<Route path='/new' exact component={NewForm} />
		<Route path='/search' exact component={GitHubSearch} />
	</Router>
)
