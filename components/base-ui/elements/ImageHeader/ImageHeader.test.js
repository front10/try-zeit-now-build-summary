import React from 'react';
import { render, waitForElement, cleanup } from 'test-utils';
import ImageHeader from './ImageHeader';




test('render all', async () => {
  const { container, getByTestId } = render(
    <ImageHeader
      image="https://www.latam.com/content/dam/LATAM/latam-marca-unica/Home%20LATAM%20USA/Vitrinas%20Desktop/santiago-flights-latam-1500x500"
      imageHeight="30vh"
      imageWidth="90%"
      label="Testing"
      labelSecondary="Testing"
    />
  );
  await waitForElement(() => getByTestId('imageHeader'));
  expect(container).toMatchSnapshot();
});
