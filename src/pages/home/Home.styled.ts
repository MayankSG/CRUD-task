import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	card: {
		margin: '30px 0 30px 0',
		padding: '20px',
		cursor: 'pointer',
		backgroundColor: 'rgba(0, 0, 0, 0.03) !important',
    boxSizing: 'border-box',
		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.08) !important',
			boxShadow: '2px 2px 10px #d4d4d4',
		},
		'& h3': {
			margin: '0px 0px 15px 0px',
			textTransform: 'capitalize',
		},
	},
	cardContainer: {
		width: '90%',
		margin: '0 auto',
	},
	itemsContainer: {
		paddingTop: 50,
	},
}));
