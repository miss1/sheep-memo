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

  const doFind = (query) => {
    return new Promise((resolve, reject) => {
      query.find().then(res => {
        setOpenLoading(false);
        resolve(res);
      }).catch(err => {
        doQueryError(err);
        reject();
      })
    })
  };

  const doGet = (query, id) => {
    return new Promise((resolve, reject) => {
      query.get(id).then(res => {
        setOpenLoading(false);
        resolve(res);
      }).catch(err => {
        doQueryError(err);
        reject();
      })
    })
  };

  const doSave = (query) => {
    return new Promise((resolve, reject) => {
      query.save().then(res => {
        setOpenLoading(false);
        resolve(res);
      }).catch(err => {
        doQueryError(err);
        reject();
      })
    })
  };

  const doDelete = (query, id) => {
    return new Promise((resolve, reject) => {
      query.destroy(id).then(res => {
        setOpenLoading(false);
        resolve(res);
      }).catch(err => {
        doQueryError(err);
        reject();
      })
    })
  };

  const doQueryError = (err) => {
    setOpenLoading(false);
    typeRef.current = "error";
    messageRef.current = err.error;
    setOpenMsg(true);
    if (err.code === 122) {
      window.location.replace('/forher/index.html');
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
        doRequest: (query, type, id) => {
          setOpenLoading(true);
          if (type === 'get') return doFind(query);
          if (type === 'find') return doGet(query, id);
          if (type === 'put') return doSave(query);
          if (type === 'delete') return doDelete(query, id);
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