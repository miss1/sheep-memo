import Header from '../components/header'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import defaultImg from '../assets/img/cook-default.jpg'
import React, { useEffect, useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCookDialog from '../components/addCook'
import Loading from "../components/loading";

function Cook() {
  const [list, setList] = useState([]);
  const [detail, setDetail] = useState({});
  const [showDetail, setShowDetail] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  let addDialogRef = React.createRef();

  useEffect(() => {
    setOpenLoading(true);
    const query = React.$bmob.Query("Cookbook");
    query.find().then(res => {
      setList(res);
      setOpenLoading(false);
    }).catch(err => {
      setOpenLoading(false);
    });
  }, [setList, setOpenLoading]);

  const queryList = () => {
    setOpenLoading(true);
    const query = React.$bmob.Query("Cookbook");
    query.find().then(res => {
      setList(res);
      setOpenLoading(false);
    }).catch(err => {
      setOpenLoading(false);
    });
  }

  const doFabAction = () => {
    if (showDetail) {
      setShowDetail(false);
    } else {
      addDialogRef.current.openDialog();
    }
  }

  const showContent = (item) => {
    setDetail(item);
    setShowDetail(true);
  }

  const addToMenuList = (event) => {
    event.stopPropagation();
  }

  return (
    <div className="page">
      <Header/>
      <div className="content-page">
        <div className="page-scroll">
          {showDetail
            ? <div>
              <img
                style={{width: '100%', maxHeight: 300}}
                src={detail.img || defaultImg}
                alt={detail.name}
                loading="lazy"
              />
              <Typography variant="h5" gutterBottom={true}>{detail.name}</Typography>
              <Typography variant="h6">原材料</Typography>
              <p style={{whiteSpace: "pre-line", margin: "5px 0 20px"}}>{detail.ingredients}</p>
              <Typography variant="h6">制作方法</Typography>
              <p style={{whiteSpace: "pre-line", margin: "5px 0 20px"}}>{detail.describe}</p>
              <Button variant="contained" onClick={(event) => addToMenuList(event)}>下单</Button>
            </div>
            : <ImageList>
              {list.map((item) => (
                <ImageListItem key={item.objectId} onClick={() => showContent(item)}>
                  <img
                    src={item.img || defaultImg}
                    alt={item.name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    title={item.name}
                    subtitle={'已点：' + item.frequency}
                    actionIcon={
                      <IconButton
                        sx={{color: 'rgba(255, 255, 255, 0.54)'}}
                        aria-label={`info about ${item.name}`}
                        onClick={(event) => addToMenuList(event)}>
                        <AddCircleIcon/>
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          }
        </div>
      </div>
      <Fab onClick={doFabAction} color={showDetail ? 'warning' : 'primary'}
           sx={{position: 'absolute', bottom: '5%', right: '10%'}}>
        {showDetail
          ? <CloseIcon/>
          : <AddIcon/>
        }
      </Fab>
      <AddCookDialog onRef={addDialogRef} refreshPage={queryList}/>
      <Loading open={openLoading}/>
    </div>
  );
}

export default Cook;