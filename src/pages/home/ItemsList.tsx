import React, { useMemo, useState } from 'react';
import { Card } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { AppRoute } from '../../app/routing/AppRoute.enum';
import { useStyles } from './Home.styled';
import { HomeProps, ItemProps } from './Home.types';
import CustomPagination from '../../components/Pagination';
import { paginate } from '../../utils/helper';

const pageSize = 10;

const ItemsList = ({ items }: HomeProps) => {
	const classes = useStyles();
	const history = useHistory();
	const [page, setPage] = useState(1);

	const handlePagination = (event: any, value: any) => setPage(value);

	const itemsData = useMemo(() => paginate(items, page, pageSize), [items, page]);

	return (
		<div className={classes.itemsContainer}>
			{itemsData?.map((item: ItemProps, index: number) => (
				<Card
					key={`card-${index}`}
					variant="outlined"
					className={classes.card}
					onClick={() => history.push(`${AppRoute.details}/${item?.id}`)}
				>
					<h3>{item?.title}</h3>
					<div>{item?.body}</div>
				</Card>
			))}
			<CustomPagination page={page} count={pageSize} handleChange={handlePagination} />
		</div>
	);
};

export default ItemsList;
