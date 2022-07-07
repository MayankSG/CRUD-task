import React, { useEffect } from 'react';
import useAxios from 'axios-hooks';

import Home from './Home';
import styles from './Home.module.css';

const HomeContainer = () => {

  const [{ data, error, loading }, getItems] = useAxios(
    {
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
    },
    { manual: true },
  );

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className={styles.cardContainer}>
      <Home items={data} />
    </div>
  );
};

export default HomeContainer;
