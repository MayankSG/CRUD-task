import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

import { RemoveItemDialogProps } from "./RemoveItemDialog.types";
import { useStyles } from "./RemoveItemDialog.styled";

const RemoveItemDialog = ({ open, onClose, action }: RemoveItemDialogProps) => {
	const classes = useStyles();

	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby="remove-item-dialog-title"
			aria-describedby="remove-item-dialog-description"
			className={classes.removeDialog}
		>
			<DialogTitle id="remove-item-dialog-title">
				Remove Item
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="remove-item-dialog-description">
					Are you sure you want to remove this item?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button variant="contained" onClick={action}>Yes</Button>
				<Button variant="outlined" onClick={onClose}>Cancel</Button>
			</DialogActions>
		</Dialog>
	);
};

export default RemoveItemDialog;
