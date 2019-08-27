import React from 'react';
import { render } from 'test-utils';
import Header from './Header';


test('render all', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
