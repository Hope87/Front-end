import React, { Fragment } from 'react';
import ProductList from './ProductList';
import Panel from './Panel';
import Dropdown from './Dropdown/Dropdown';
import Button from './Button';
import products from '../products.json';

const App = () => (
  <Fragment>
    <Button label="Click me!" />

    <Dropdown isOpen={true} />

    <Panel title="Products">
      <ProductList items={products} />
    </Panel>
  </Fragment>
);

export default App;
