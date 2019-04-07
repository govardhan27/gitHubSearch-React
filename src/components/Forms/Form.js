import React, { Component } from 'react';


class Form extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '' }
	}

	updateValue = (e) => {
		this.setState({ value: e.target.value })
	}

	render() {
		return (
			<div>
				<input type='text' onChange={this.updateValue} />
				<p>
					UserName: {this.state.value}
				</p>
			</div>
		)
	}
}

export default Form;
/**
 * For alternative go to 
 */