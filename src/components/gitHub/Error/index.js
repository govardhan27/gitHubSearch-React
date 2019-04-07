import React from 'react';


const Error = ({ response, status }) => (
	<div className='error'>
		<h3>Ooops!!!</h3>
		<b>
			{status} : {response.message}
		</b>
		<p>Please try searching again...!</p>
	</div>
);

export default Error;