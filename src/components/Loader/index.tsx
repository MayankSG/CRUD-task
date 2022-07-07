import React from 'react';
import { Box } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { LoaderProps } from './Loader.types';

const Loader = ({ loading }: LoaderProps) => (
	<Box sx={{ '& > button': { m: 1 } }}>
		<LoadingButton
			loading={loading}
			size='large'
			disabled
			loadingPosition='center'
		/>
	</Box>
);

export default Loader;
