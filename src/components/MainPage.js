import React, { Component} from 'react';

export const Left = ({children}) => (

	<div className="page">
		<MainMenu className="main-menu"/>
		{children}
	</div>
) 


export const Right = ({children}) => (
	<div className="page">
		{children}
		<MainMenu className="main-menu"/>		
	</div>
) 
