import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

import { RemoveItemDialogProps } from "./RemoveItemDialog.types";

const RemoveItemDialog = ({ open, onClose, action }: RemoveItemDialogProps) => {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			aria-labelledby="remove-item-dialog-title"
			aria-describedby="remove-item-dialog-description"
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
				<Button onClick={action}>Yes</Button>
				<Button onClick={onClose}>Cancel</Button>
			</DialogActions>
		</Dialog>
	);
};

export default RemoveItemDialog;
