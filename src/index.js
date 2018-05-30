// Importing lib dependency
import React from 'react';
import ReactDOM from 'react-dom';

const Greet = function() {
	return <h1> Hello World!</h1>;
};

var root = document.querySelector('.container');

ReactDOM.render(<Greet />, root);