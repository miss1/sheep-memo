import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import React, {createContext, useRef, useState} from 'react';
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

export const GlobalContext = createContext({
  showMessage: (type, message) => {},
  hideMessage: () => {},
  showLoading: () => {},
  hideLoading: () => {},
  doRequest: () => {}
});

function GlobalProvider({children}) {
  const [openMsg, setOpenMsg] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  const typeRef = useRef();
  const messageRef = useRef();

  const sendRequest = async (url, method, param) => {
    try {
      const response = await fetch(url, {
        method: method || 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: param ? JSON.stringify(param) : null,
      });

      setOpenLoading(false);

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        return response.json();
      } else {
        return response.text();
      }
    } catch (error) {
      console.log(error)
      setOpenLoading(false);
      typeRef.current = 'error';
      messageRef.current = error.error;
      setOpenMsg(true);
      // if (err.code === 122) {
      //   window.location.replace('/forher/index.html');
      // }
    }
  };

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
          setOpenLoading(true);
        },
        hideLoading: () => {
          setOpenLoading(false);
        },
        doRequest: (url, method, param) => {
          setOpenLoading(true);
          return sendRequest(url, method, param);
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
