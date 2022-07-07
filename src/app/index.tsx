import React, { useState } from 'react';
import CustomSnackbar from '../components/Snackbar';
import { SnackbarProps } from '../components/Snackbar/Snackbar.types';

import AppRoutes from './routing/AppRoutes';

const intialisedContext = { setNotifierState: (data: SnackbarProps) => { } }
export const SnackbarContext = React.createContext(intialisedContext);

const App: React.FC = () => {
  const [notifier, handleNotifier] = useState<SnackbarProps>({
    open: false, severity: "success", message: "",
  });

  const setNotifierState = (data: SnackbarProps) => {
    handleNotifier(data);
  };

  const { open, severity, message } = notifier;

  return (
    <SnackbarContext.Provider value={{ setNotifierState }}>
      <AppRoutes />
      <CustomSnackbar message={message} open={open} severity={severity} />
    </SnackbarContext.Provider>
  );
};

export default App;
