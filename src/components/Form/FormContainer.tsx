import { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AlertColor } from '@mui/material';

import Form from './Form';
import { FormInputs, FormProps } from './Form.types';
import { createItem, getItem, removeItem, updateItem } from '../../config/service';
import { AppRoute } from '../../app/routing/AppRoute.enum';
import { SnackbarContext } from '../../app';
import Loader from '../Loader';
import RemoveItemDialog from '../RemoveItemDialog';
import { useStyles } from './Form.styled';

const FormContainer = ({ type }: Pick<FormProps, "type">) => {
  const classes = useStyles();
  const history = useHistory();
  const { itemId } = useParams<{ itemId: string }>();
  const contextData = useContext(SnackbarContext);
  
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formSchema, setFormSchema] = useState<FormInputs>({ title: '', body: '' });
  const [showDialog, setShowDialog] = useState<boolean>(false);

  const showNotifier = (open: boolean, severity: AlertColor, message: string) => {
    contextData?.handleNotifier({ open, severity, message });
  };

  const getItemDetails = (itemId: string) => {
    setLoading(true);
    getItem(itemId)
      .then((res) => {
        setLoading(false);
        setFormSchema(res.data);
      })
      .catch(() => {
        setLoading(false);
        showNotifier(true, "error", "There is some error on fetching item. Please try again!!");
      });
  }

  useEffect(() => {
    if (itemId) getItemDetails(itemId);
  }, [itemId]);

  const handleSave = () => {
    setLoading(true);
    createItem(formSchema)
      .then((res) => {
        if (res.data) {
          setLoading(false);
          showNotifier(true, "success", "Item has been created successfully!!");
          history.push(AppRoute.home);
        }
      })
      .catch(() => {
        setLoading(false);
        showNotifier(true, "error", "There is some error on item creation. Please try again!!");
      });
  };

  const handleUpdate = () => {
    setLoading(true);
    updateItem(itemId, formSchema)
      .then((res) => {
        if (res.data) {
          setLoading(false);
          setIsUpdate(false);
          showNotifier(true, "success", "Item has been updated successfully!!");
        }
      })
      .catch(() => {
        setLoading(false);
        showNotifier(true, "error", "There is some error on item updation. Please try again!!");
      });
  };

  const handleRemove = () => {
    setLoading(true);
    removeItem(itemId)
      .then((res) => {
        if (res.data) {
          setLoading(false);
          showNotifier(true, "success", "Item has been removed successfully!!");
          history.push(AppRoute.home);
          handleRemoveDialog();
        }
      })
      .catch(() => {
        setLoading(false);
        showNotifier(true, "error", "There is some error on item remove. Please try again!!");
      });
  };

  const handleRemoveDialog = () => setShowDialog(!showDialog);

  return (
    <>
      <Loader loading={loading} />
      <div className={classes.form}>
        <Form
          type={type}
          formSchema={formSchema}
          setFormSchema={setFormSchema}
          handleSave={handleSave}
          handleUpdate={handleUpdate}
          handleRemoveDialog={handleRemoveDialog}
          getItem={() => getItemDetails(itemId)}
          setIsUpdate={setIsUpdate}
          isUpdate={isUpdate}
        />
      </div>
      <RemoveItemDialog open={showDialog} onClose={handleRemoveDialog} action={handleRemove} />
    </>
  );
};

export default FormContainer;
