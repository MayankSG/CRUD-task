import { FormType } from "../../utils/constants.enum";

export type FormProps = {
	type: FormType.create | FormType.edit;
	formSchema: FormInputs;
	handleSave: () => void;
	handleUpdate: () => void;
	handleRemove: () => void;
	setFormSchema: (data: FormInputs) => void;
};

export type FormInputs = {
	title: string;
	body: string;
};
