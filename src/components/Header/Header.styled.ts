import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	header: {
		position: 'fixed',
		backgroundColor: '#fff',
		width: '100%',
		left: 0,
		top: 0,
		padding: '0px 20px',
		boxSizing: 'border-box',
		borderBottom: 'solid 2px #d5d5d5',
	},
	headerContent: {
		width: '90%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0 auto',
		'& h1': {
			margin: '12px 0px'
		}
	},
}));
