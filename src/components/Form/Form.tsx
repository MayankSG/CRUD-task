import React, { useState } from 'react';
import { Box, Button, FormControl, OutlinedInput, TextareaAutosize } from '@mui/material';
import { useHistory } from 'react-router-dom';

import { FormProps } from './Form.types';
import { FormType } from '../../utils/constants.enum';
import { AppRoute } from '../../app/routing/AppRoute.enum';
import styles from './Form.module.css';

const Form = ({
  type,
  formSchema,
  setFormSchema,
  handleSave,
  handleUpdate,
  handleRemoveDialog,
}: FormProps) => {
  const history = useHistory();
  const [isUpdate, setIsUpdate] = useState(false);

  const onUpdate = () => setIsUpdate(true);

  const onCancel = () => {
    setIsUpdate(false);
    history.push(AppRoute.home);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormSchema({ ...formSchema, [name]: value });
  };

  const onSave = () => {
    if (type === FormType.edit && isUpdate) handleUpdate();
    handleSave();
  };

  return (
    <>
      <h1>{type === FormType.edit ? "Edit Item" : "Create Item"}</h1>
      <Box component="form">
        <FormControl className={styles.formInputs}>
          <OutlinedInput
            name="title"
            placeholder="Title"
            className={styles.formTitle}
            value={formSchema.title}
            onChange={handleChange}
            disabled={type === FormType.edit && !isUpdate}
          />
          <TextareaAutosize
            name="body"
            placeholder="Description"
            className={styles.formDescription}
            value={formSchema.body}
            onChange={handleChange}
            disabled={type === FormType.edit && !isUpdate}
          />
        </FormControl>
      </Box>
      <div className={styles.button}>
        {type === FormType.edit && !isUpdate ? (
          <>
            <Button variant="contained" onClick={onUpdate}>Update</Button>
            <Button variant="outlined" color="error" onClick={handleRemoveDialog}>Delete</Button>
          </>
        ) : (
          <>
            <Button variant="contained" onClick={onSave}>Save</Button>
            <Button variant="outlined" onClick={onCancel}>Cancel</Button>
          </>
        )}
      </div>
    </>
  );
};

export default Form;
