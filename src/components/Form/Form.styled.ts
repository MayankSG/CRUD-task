import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	form: {
		maxWidth: '800px',
		height: 'auto',
		margin: '0 auto',
		backgroundColor: 'rgba(0, 0, 0, 0.04)',
		padding: '30px',
		boxSizing: 'border-box',
		border: 'solid 2px #d5d5d5',
		marginTop: '30px',
		boxShadow: '4px 4px 5px #d5d5d5',
		'& h1': {
			marginTop: 0,
		},
		'& input': {
			border: 'solid 2px #e0e0e0',
			backgroundColor: '#fff',
		},
		'& textarea': {
			border: 'solid 2px #aeaeae',
			backgroundColor: '#fff',
			'&:focus': {
				outlineColor: '#1a76d2',
			}
		}
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
		padding: '15px',
	},
	button: {
		display: 'flex',
		justifyContent: 'end',
		width: '100%',
		'& button': {
			marginLeft: '10px',
		},
		'& svg': {
			marginRight: 10,
		},
	},
	formHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	editButtons: {
		display: 'flex',
		justifyContent: 'end',
		'& button': {
			minWidth: 0,
		},
	},
	helperText: {
		display: 'flex',
		alignSelf: 'end',
		marginTop: '0 !important',
		marginBottom: '15px !important',
		marginLeft: '0 !important',
		marginRight: '0 !important',
	},
}));
