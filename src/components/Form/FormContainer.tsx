import { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AlertColor } from '@mui/material';

import Form from './Form';
import { FormInputs, FormProps } from './Form.types';
import { createItem, getItem, removeItem, updateItem } from '../../config/service';
import { AppRoute } from '../../app/routing/AppRoute.enum';
import { SnackbarContext } from '../../app';
import styles from './Form.module.css';
import Loader from '../Loader';
import RemoveItemDialog from '../RemoveItemDialog';

const FormContainer = ({ type }: Pick<FormProps, "type">) => {
  const history = useHistory();
  const { itemId } = useParams<{ itemId: string }>();
  const contextData = useContext(SnackbarContext);

  const [loading, setLoading] = useState<boolean>(false);
  const [formSchema, setFormSchema] = useState<FormInputs>({ title: '', body: '' });
  const [showDialog, setShowDialog] = useState(false);

  const showNotifier = (open: boolean, severity: AlertColor, message: string) => {
    contextData?.setNotifierState({ open, severity, message });
  };

  useEffect(() => {
    if (itemId) {
      setLoading(true);
      getItem(itemId)
        .then((res) => {
          setLoading(false);
          setFormSchema(res.data)
        })
        .catch(() => {
          setLoading(false);
          showNotifier(true, "error", "There is some error on fetching item. Please try again!!");
        });
    }
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
          showNotifier(true, "success", "Item has been updated successfully!!");
          history.push(AppRoute.home);
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
          handleRemoveDialog();
          history.push(AppRoute.home);
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
      <div className={styles.form}>
        <Form
          type={type}
          formSchema={formSchema}
          setFormSchema={setFormSchema}
          handleSave={handleSave}
          handleUpdate={handleUpdate}
          handleRemoveDialog={handleRemoveDialog}
        />
      </div>
      <RemoveItemDialog open={showDialog} onClose={handleRemoveDialog} action={handleRemove} />
    </>
  );
};

export default FormContainer;
