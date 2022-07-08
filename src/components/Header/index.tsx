import React from 'react';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { AppRoute } from '../../app/routing/AppRoute.enum';
import { useStyles } from './Header.styled';

const Header = () => {
	const classes = useStyles();
	const history = useHistory();

	return (
		<div className={classes.header}>
			<div className={classes.headerContent}>
				<h1>Items</h1>
				<Button
					variant="contained"
					onClick={() => history.push(AppRoute.create)}
				>
					Create Item
				</Button>
			</div>
		</div>
	);
};

export default Header;