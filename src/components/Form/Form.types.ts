import { FormType } from "../../utils/constants.enum";

export type FormProps = {
	type: FormType.create | FormType.edit;
	formSchema: FormInputs;
	handleSave: () => void;
	handleUpdate: () => void;
	handleRemoveDialog: () => void;
	setFormSchema: (data: FormInputs) => void;
	getItem: () => void;
	isUpdate: boolean;
	setIsUpdate: (data: boolean) => void;
};

export type FormInputs = {
	title: string;
	body: string;
};
