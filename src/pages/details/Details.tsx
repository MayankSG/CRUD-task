import React from 'react';

import FormContainer from '../../components/Form/FormContainer';
import { FormType } from '../../utils/constants.enum';

const Details = () => (
	<FormContainer type={FormType.edit} />
);

export default Details;