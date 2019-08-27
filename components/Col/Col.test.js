import React from 'react';
import { render } from 'test-utils';
import Col from './Col';


test('render all', () => {
  const { container } = render(<Col />);
  expect(container).toMatchSnapshot();
});
