import React from 'react';
import nock from 'nock';
import { render, shallow, fireEvent } from '@testing-library/react';

import App from './App';

it('displays user data', async () => {
  const scope = nock('https://yoursite.com')
    .get('/api')
    .once()
    .reply(200, {
      data: 'response',
    });

  var {getByTestId, findByTestId} = render(<App />)
  fireEvent.click(getByTestId("apiCall"))
  expect(await findByTestId("ptag")).toHaveTextContent('response');
})