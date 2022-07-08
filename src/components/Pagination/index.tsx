import React from 'react';

import Pagination from '@mui/material/Pagination';
import { PaginationProps } from './Pagination.types';
import { useStyles } from './Pagination.styled';

const CustomPagination = ({ page, count, handleChange }: PaginationProps) => {
	const classes = useStyles();

	return (
		<Pagination
			color="primary"
			count={count}
			page={page}
			onChange={handleChange}
			className={classes.pagination}
		/>
	);
};

export default CustomPagination;
