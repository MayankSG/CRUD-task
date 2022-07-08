import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	removeDialog: {
		'& .MuiPaper-rounded': {
			minWidth: '550px',
			padding: '0 15px 15px 0',
		},
	},
}));
