import React, { useContext } from 'react';
import { Alert, Snackbar } from '@mui/material';

import { SnackbarProps } from './Snackbar.types';
import { SnackbarContext } from '../../app';

const CustomSnackbar = ({ message, open, severity }: SnackbarProps) => {
	const contextData = useContext(SnackbarContext);

	const handleClose = () => {
		contextData?.handleNotifier({ open: false });
	};

	return (
		<Snackbar
		  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={open}
			autoHideDuration={5000}
			onClose={() => handleClose()}
		>
			<Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default CustomSnackbar;
