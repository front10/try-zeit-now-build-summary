import React from 'react';
import { render, waitForElement } from 'test-utils';
import Text from './Text';


test('render and match with snapshot', () => {
  const { container } = render(<Text />);
  expect(container).toMatchSnapshot();
});

