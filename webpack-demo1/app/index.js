import _ from 'lodash';
import vendors from './vendors';

function component() {
	const element = document.createElement('div');

	element.innerHTML = _.join(['Hello', 'webpack']);

	vendors();
	return element;
}

document.body.appendChild(component());
