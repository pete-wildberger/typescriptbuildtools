import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { sayHello } from './greet';
import { addNumbers } from './math';

const showHello = (divName: string, name: string): void => {
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
};
const showNumbers = (divName: string, a: number, b: number): void => {
  console.log(divName);
  const elt = document.getElementById(divName);
  console.log(elt);
  elt.innerHTML = `${addNumbers(a, b)}`;
};

showHello('greeting', 'TypeScript');
showNumbers('math', 2, 5);

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
