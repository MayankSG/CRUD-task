import { useEffect, useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { AlertColor } from '@mui/material';

import Form from './Form';
import { FormProps } from './Form.types';
import { createItem, getItem, removeItem, updateItem } from '../../config/service';
import { AppRoute } from '../../app/routing/AppRoute.enum';
import { SnackbarContext } from '../../app';
import styles from './Form.module.css';

const FormContainer = ({ type }: Pick<FormProps, "type">) => {
  const { itemId } = useParams<{ itemId: string }>();
  const history = useHistory();
  const [formSchema, setFormSchema] = useState({ title: '', body: '' });
  const contextData = useContext(SnackbarContext);

  const showNotifier = (open: boolean, severity: AlertColor, message: string) => {
    contextData?.setNotifierState({ open, severity, message });
  };

  useEffect(() => {
    if (itemId) {
      getItem(itemId)
      .then((res) => setFormSchema(res.data))
      .catch(() => {
        showNotifier(true, "error","There is some error on fetching item. Please try again!!");
      });
    }
  }, [itemId]);

  const handleSave = () => {
    createItem(formSchema)
    .then((res) => {
      if (res.data) {
        showNotifier(true, "success", "Item has been created successfully!!");
        history.push(AppRoute.home);
      }
    })
    .catch(() => {
      showNotifier(true, "error", "There is some error on item creation. Please try again!!");
    });
  };

  const handleUpdate = () => {
    updateItem(itemId, formSchema)
    .then((res) => {
      if (res.data) {
        showNotifier(true, "success", "Item has been updated successfully!!");
        history.push(AppRoute.home);
      }
    })
    .catch(() => {
      showNotifier(true, "error", "There is some error on item updation. Please try again!!");
    });
  };

  const handleRemove = () => {
    removeItem(itemId)
    .then((res) => {
      if (res.data) {
        showNotifier(true, "success", "Item has been removed successfully!!");
        history.push(AppRoute.home);
      }
    })
    .catch(() => {
      showNotifier(true, "error", "There is some error on item remove. Please try again!!");
    });
  };

  return (
    <div className={styles.form}>
      <Form
        type={type}
        formSchema={formSchema}
        setFormSchema={setFormSchema}
        handleSave={handleSave}
        handleUpdate={handleUpdate}
        handleRemove={handleRemove}
      />
    </div>
  );
};

export default FormContainer;
