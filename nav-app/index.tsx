import React from 'react';
import ReactDOM from 'react-dom';
import { parse } from 'querystring';

console.log('Hello from tsx!');

const { elementId }: any = parse(document.currentScript.getAttribute('src').split('?')[1]);

ReactDOM.render(
  <p>I'm the header</p>,
  document.getElementById(elementId),
);
