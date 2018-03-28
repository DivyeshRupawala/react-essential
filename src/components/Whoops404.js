import React, { Component}  from 'react';

export const Whoops404 = ({ location }) => 
	<div>
		<h1>Whoops, route not found! </h1>
		<p>Could not found {location.pathname} </p>
	</div>
	