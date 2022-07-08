import React from 'react';
import { Card, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { AppRoute } from '../../app/routing/AppRoute.enum';
import { useStyles } from './Home.styled';
import { HomeProps } from './Home.types';

const ItemsList = ({ items }: HomeProps) => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<div className={classes.itemsContainer}>
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
		</div>
	);
};

export default ItemsList;
