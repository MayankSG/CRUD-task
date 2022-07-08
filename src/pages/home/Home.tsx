import React from 'react';
import { Button, Card } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { HomeProps } from './Home.types';
import { AppRoute } from '../../app/routing/AppRoute.enum';
import { useStyles } from './Home.styled';
import Header from '../../components/Header';

const Home = ({ items }: HomeProps) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Header />
      {items?.map((item, index) => (
        <Card
          key={`card-${index}`}
          variant="outlined"
          className={classes.card}
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
