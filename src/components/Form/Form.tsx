import { useEffect, useState } from 'react';
import { Box, Button, FormControl, OutlinedInput, TextareaAutosize, Tooltip, FormHelperText } from '@mui/material';
import { useHistory } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { FormProps } from './Form.types';
import { FormType } from '../../utils/constants.enum';
import { AppRoute } from '../../app/routing/AppRoute.enum';
import { useStyles } from './Form.styled';

const Form = ({
  type,
  formSchema,
  setFormSchema,
  handleSave,
  handleUpdate,
  handleRemoveDialog,
  getItem,
  isUpdate,
  setIsUpdate,
}: FormProps) => {
  const classes = useStyles();
  const history = useHistory();
  
  const [isFieldUpdate, setIsFieldUpdate] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<string>("");
  
  const { title, body } = formSchema;

  useEffect(() => {
    if (title && body) resetMessage();
  }, [title, body]);

  const resetMessage = () => setShowMessage("");

  const onUpdate = () => setIsUpdate(true);

  const goToHome = () => history.push(AppRoute.home);

  const onCancel = () => {
    resetMessage();

    if (!isUpdate) goToHome();
    else {
      if (isFieldUpdate) getItem(); // if field changed but didn't saved and cancel
      setIsUpdate(false);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (!isFieldUpdate) setIsFieldUpdate(true);

    setFormSchema({ ...formSchema, [name]: value });
  };

  const onSave = () => {
    if (!title && !body) {
      setShowMessage("Please fill all the required fields");
    } else {
      resetMessage();

      if (type === FormType.edit && isUpdate) handleUpdate();
      else handleSave();
    }
  };

  return (
    <>
      <div className={classes.formHeader}>
        <h1>
          {type === FormType.edit ?
            isUpdate ? "Edit Item" : "Item Details"
            : "Create Item"
          }
        </h1>
        {type === FormType.edit && !isUpdate && (
          <div className={classes.editButtons}>
            <Tooltip title="Edit Item" placement="top-start">
              <Button color="primary" onClick={onUpdate}><EditIcon /></Button>
            </Tooltip>
            <Tooltip title="Delete Item" placement="top-start">
              <Button color="error" onClick={handleRemoveDialog}><DeleteIcon /></Button>
            </Tooltip>
          </div>
        )}
      </div>
      <Box component="form">
        <FormControl className={classes.formInputs}>
          <OutlinedInput
            name="title"
            placeholder="Title"
            className={classes.formTitle}
            value={title}
            onChange={handleChange}
            disabled={type === FormType.edit && !isUpdate}
            onFocus={() => setIsFieldUpdate(true)}
          />
          <TextareaAutosize
            name="body"
            placeholder="Description"
            className={classes.formDescription}
            value={body}
            onChange={handleChange}
            disabled={type === FormType.edit && !isUpdate}
            onFocus={() => setIsFieldUpdate(true)}
          />
          {showMessage && (
            <FormHelperText error className={classes.helperText}>{showMessage}</FormHelperText>
          )}
        </FormControl>
      </Box>
      <div className={classes.button}>
        {type === FormType.edit && !isUpdate ? (
          <Button variant="contained" onClick={goToHome}>
            <ArrowBackIcon />
            Back to home
          </Button>
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
