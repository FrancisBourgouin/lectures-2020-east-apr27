import React from 'react';
import { render, wait } from '@testing-library/react';
import App from '../App';

test('render list of git commits', () => {
  const expectedLi = "add w7d3 lecture on 2020-06-10T15:57:31Z by Francis Bourgouin & Francis Bourgouin"

  const { getByText } = render(<App />);

  wait(() => expect(getByText(expectedLi)).toBeInTheDocument())
  // const title = getByText(/Github commit fetcher/i);
  // expect(title).toBeInTheDocument();
});

test('renders title of App', () => {
  const { getByText } = render(<App />);

  expect(getByText("Github commit fetcher!").toBeInTheDocument())
})
test('renders title of ul list', () => {
  const { getByText } = render(<App />);
  expect(getByText("List of stuff").toBeInTheDocument())
})