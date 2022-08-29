import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

function Message(props) {
  const handleClose = () => {
    props.close();
  }
  return(
    <Snackbar
      anchorOrigin={{ vertical: props.vertical, horizontal: props.horizontal }}
      open={props.open}
      autoHideDuration={1000}
      onClose={handleClose}
      key={props.vertical + props.horizontal}>
      <Alert onClose={handleClose} severity={props.type} sx={{ width: '100%' }}>{props.text}</Alert>
    </Snackbar>
  );
}

export default Message;