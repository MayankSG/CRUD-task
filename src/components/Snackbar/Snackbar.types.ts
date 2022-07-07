import { AlertColor } from "@mui/material";

export type SnackbarProps = {
	message?: string;
	open: boolean;
	severity?: AlertColor;
};
