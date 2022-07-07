import React from 'react';

import FormContainer from '../../components/Form/FormContainer';
import { FormType } from '../../utils/constants.enum';

const Create = () => (
	<FormContainer type={FormType.create} />
);

export default Create;
