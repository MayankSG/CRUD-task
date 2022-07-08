import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	form: {
		width: '70%',
		height: '500px',
		margin: '0 auto',
	},
	formInputs: {
		width: '100%',
	},
	formTitle: {
		marginBottom: '20px',
	},
	formDescription: {
		marginBottom: '20px',
		height: '100px !important',
	},
	button: {
		display: 'flex',
		justifyContent: 'end',
		width: '100%',
	},
}));
