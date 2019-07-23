import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it("has an h1 that says 'hello'", () => {
  const app = mount(<App />)
  expect(app.find('h1').text()).toEqual("Hello")
})
