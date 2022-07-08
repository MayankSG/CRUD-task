import React from 'react';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { LoaderProps } from './Loader.types';
import { useStyles } from './Loader.styled';

const Loader = ({ loading }: LoaderProps) => {
	const classes = useStyles();

	return (
		<>
			{loading && (
				<Box sx={{ '& > button': { m: 1 } }} className={classes.loader}>
					<LoadingButton
						loading={loading}
						size='large'
						disabled
						loadingPosition='center'
						className={classes.button}
					/>
				</Box>
			)}
		</>
	);
};

export default Loader;
