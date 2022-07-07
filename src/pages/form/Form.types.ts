import { FormType } from "../../utils/constants.enum";

export type FormProps = {
	type: FormType.create | FormType.edit;
};
