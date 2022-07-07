import React, { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';

import Home from './Home';
import styles from './Home.module.css';
import { getItems } from '../../config/service';

const HomeContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems()
    .then((res) => setItems(res.data))
    .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.cardContainer}>
      <Home items={items} />
    </div>
  );
};

export default HomeContainer;
