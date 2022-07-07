import React, { useContext, useEffect, useState } from 'react';

import Home from './Home';
import styles from './Home.module.css';
import { getItems } from '../../config/service';
import { SnackbarContext } from '../../app';
import Loader from '../../components/Loader';

const HomeContainer = () => {
  const contextData = useContext(SnackbarContext);

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getItems()
      .then((res) => {
        setLoading(false);
        setItems(res.data);
      })
      .catch(() => {
        setLoading(false);
        contextData?.setNotifierState({
          open: true,
          severity: "error",
          message: "There is some error on fetching items. Please try again!!"
        });
      });
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <div className={styles.cardContainer}>
        <Home items={items} />
      </div>
    </>
  );
};

export default HomeContainer;
