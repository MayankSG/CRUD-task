import React, { useContext, useEffect, useState } from 'react';

import Home from './Home';
import { getItems } from '../../config/service';
import { SnackbarContext } from '../../app';
import Loader from '../../components/Loader';
import { useStyles } from './Home.styled';
import { ItemProps } from './Home.types';

const HomeContainer = () => {
  const classes = useStyles();
  const contextData = useContext(SnackbarContext);

  const [items, setItems] = useState<ItemProps[]>([]);
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
        contextData?.handleNotifier({
          open: true,
          severity: "error",
          message: "There is some error on fetching items. Please try again!!"
        });
      });
  }, []);

  return (
    <>
      <Loader loading={loading} />
      <div className={classes.cardContainer}>
        <Home items={items} />
      </div>
    </>
  );
};

export default HomeContainer;
