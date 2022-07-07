import React from 'react';
import { Button, Card } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { HomeProps } from './Home.types';
import { AppRoute } from '../../app/routing/AppRoute.enum';
import styles from './Home.module.css';

const Home = ({ items }: HomeProps) => {
  const history = useHistory();

  return (
    <>
      <div className={styles.createItem}>
        <h1>Items</h1>
        <Button
          variant="contained"
          onClick={() => history.push(AppRoute.create)}
        >
          Create Item
        </Button>
      </div>
      {items?.map((item, index) => (
        <Card
          key={`card-${index}`}
          variant="outlined"
          className={styles.card}
          onClick={() => history.push(`${AppRoute.details}/${item.id}`)}
        >
          <h3>{item?.title}</h3>
          <div>{item?.body}</div>
        </Card>
      ))}
    </>
  );
};

export default Home;
