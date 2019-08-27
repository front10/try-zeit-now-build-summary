import React from 'react';
import { render } from 'test-utils';
import Row from './Row';


test('render all', () => {
  const { container } = render(<Row />);
  expect(container).toMatchSnapshot();
});
