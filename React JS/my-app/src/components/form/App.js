import React from 'react';

import Form from './Form';
import HandleSubmit from './HandleSubmit';

const App = () => (
  <>
    <Form onSubmit={HandleSubmit} />
  </>
);

export default App;
