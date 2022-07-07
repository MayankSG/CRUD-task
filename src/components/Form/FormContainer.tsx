import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Form from './Form';
import { FormProps } from './Form.types';
import styles from './Form.module.css';
import { createItem, getItem, removeItem, updateItem } from '../../config/service';
import { AppRoute } from '../../app/routing/AppRoute.enum';

const FormContainer = ({ type }: Pick<FormProps, "type">) => {
  const { itemId } = useParams<{ itemId: string }>();
  const history = useHistory();
  const [formSchema, setFormSchema] = useState({ title: '', body: '' });

  useEffect(() => {
    if (itemId) {
      getItem(itemId)
      .then((res) => setFormSchema(res.data))
      .catch((err) => console.log(err));
    }
  }, [itemId]);

  const handleSave = () => {
    createItem(formSchema)
    .then((res) => {
      if (res.data) history.push(AppRoute.home);
    })
    .catch((err) => console.log(err));
  };

  const handleUpdate = () => {
    updateItem(itemId, formSchema)
    .then((res) => {
      if (res.data) history.push(AppRoute.home);
    })
    .catch((err) => console.log(err));
  };

  const handleRemove = () => {
    removeItem(itemId)
    .then((res) => {
      if (res.data) history.push(AppRoute.home);
    })
    .catch((err) => console.log(err));
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
