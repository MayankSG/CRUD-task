import React from 'react';

import FormContainer from '../../components/Form/FormContainer';
import { FormType } from '../../utils/constants.enum';

const CreateItem = () => (
	<FormContainer type={FormType.create} />
);

export default CreateItem;
