import React from 'react';
import { Box, Button, FormControl, OutlinedInput, TextareaAutosize } from '@mui/material';

import { FormProps } from './Form.types';
import styles from './Form.module.css';
import { FormType } from '../../utils/constants.enum';

const Form = ({ type }: FormProps) => {
  return (
    <>
      <h1>{type === FormType.edit ? "Edit Item" : "Create Item"}</h1>
      <Box component="form">
        <FormControl className={styles.formInputs}>
          <OutlinedInput placeholder="Title" className={styles.formTitle} />
          <TextareaAutosize placeholder="Description" className={styles.formDescription} />
        </FormControl>
      </Box>
      <div className={styles.button}>
        {type === FormType.edit ? (
          <>
            <Button variant="contained">Update</Button>
            <Button variant="outlined" color="error">Delete</Button>
          </>
        ) : (
          <Button variant="contained">Save</Button>
        )}
      </div>
    </>
  );
};

export default Form;
