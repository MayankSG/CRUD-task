import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	loader: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.65)',
		position: 'fixed',
		top: 0,
		left: 0,
		zIndex: 9,
	},
	button: {
		'& div': {
			color: '#fff !important',
		},
		'& span': {
			width: '34px !important',
			height: '34px !important'
		},
	},
}));
