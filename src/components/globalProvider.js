import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import React, {createContext, useRef, useState} from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

export const GlobalContext = createContext({
  showMessage: (type, message) => {},
  hideMessage: () => {},
  showLoading: () => {},
  hideLoading: () => {}
});

function GlobalProvider({children}) {
  const [openMsg, setOpenMsg] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  const typeRef = useRef();
  const messageRef = useRef();
  return (
    <GlobalContext.Provider
      value={{
        showMessage: (type, message) => {
          typeRef.current = type;
          messageRef.current = message;
          setOpenMsg(true);
        },
        hideMessage: () => {
          setOpenMsg(false);
        },
        showLoading: () => {
          setOpenLoading(true)
        },
        hideLoading: () => {
          setOpenLoading(false)
        }
      }}>
      {children}
      <Snackbar
        anchorOrigin={{vertical: "top", horizontal: "center"}}
        open={openMsg}
        autoHideDuration={1000}
        onClose={() => setOpenMsg(false)}
        key="topcenter">
        <Alert onClose={() => setOpenMsg(false)} severity={typeRef.current} sx={{width: '100%'}}>{messageRef.current}</Alert>
      </Snackbar>
      <Backdrop
        sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
        open={openLoading}>
        <CircularProgress color="inherit"/>
      </Backdrop>
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;