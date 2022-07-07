import React, { useContext, useEffect, useState } from 'react';

import Home from './Home';
import styles from './Home.module.css';
import { getItems } from '../../config/service';
import { SnackbarContext } from '../../app';

const HomeContainer = () => {
  const [items, setItems] = useState([]);
  const contextData = useContext(SnackbarContext);

  useEffect(() => {
    getItems()
    .then((res) => setItems(res.data))
    .catch(() => {
      contextData?.setNotifierState({
        open: true,
        severity: "error",
        message: "There is some error on fetching items. Please try again!!"
      });
    });
  }, []);

  return (
    <div className={styles.cardContainer}>
      <Home items={items} />
    </div>
  );
};

export default HomeContainer;
