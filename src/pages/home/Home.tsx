import React from 'react';

import { HomeProps } from './Home.types';
import Header from '../../components/Header';
import ItemsList from './ItemsList';

const Home = ({ items }: HomeProps) => (
  <>
    <Header />
    <ItemsList items={items} />
  </>
);

export default Home;
