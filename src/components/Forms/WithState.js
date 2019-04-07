import React from 'react';
import { withState, withHandlers, compose, lifecycle } from 'recompose';


const Form = ({ onChange, value, onSubmit }) => (
	<form onSubmit={onSubmit}>
		<input type='text' onChange={onChange} />
		<p>userName: {value}</p>
	</form>
);

const addState = withState('value', 'updateValue', '');

const addHandlers = withHandlers({
	onChange: ({ updateValue }) => (e) => {
		updateValue(e.target.value);
	},
	onSubmit: (props) => e => {
		console.log(props);
		e.preventDefault();
		// submitForm(props.value);
	}
});

const enhanceComponent = compose(
	addState,
	addHandlers,
	lifecycle({
		componentDidMount() {
			this.props.updateValue('life cycle hooks')
		}
	})
);

export default enhanceComponent(Form);