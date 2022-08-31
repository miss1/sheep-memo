import Header from "../components/header";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import img from '../assets/img/lineart.png'
import React, { useEffect, useState } from "react";
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import Loading from "../components/loading";

function Letter() {
  const [list, setList] = useState([]);
  const [content, setContent] = useState({});
  const [showContent, setShowContent] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  useEffect( () => {
    setOpenLoading(true);
    const query = React.$bmob.Query("Letter");
    query.order('-createdAt');
    query.find().then(res => {
      setList(res);
      setOpenLoading(false);
    });
  },[setList, setOpenLoading]);

  const showLetterContent = (content) => {
    setContent(content);
    setShowContent(true);
  }

  const ActionFeb = () => {
    if (showContent) {
      return (
        <Fab onClick={doAction} color='warning' sx={{position: 'absolute', bottom: '5%', right: '10%'}}>
          <CloseIcon/>
        </Fab>
      );
    }
  }

  const doAction = () => {
    if (showContent) {
      setContent({});
      setShowContent(false);
    } else {

    }
  }

  return (
    <div className="page">
      <Header/>
      <div className="content-page">
        <div className="page-scroll">
          {showContent
            ? <div>
              <CardMedia
                component="img"
                height="100%"
                image={img}
                alt="green iguana"/>
                <Typography variant="subtitle1">{content.toName}：</Typography>
                <p style={{whiteSpace: "pre-line"}}>{content.content}</p>
                <Typography variant="subtitle1" sx={{textAlign: 'right'}}>{content.fromName}</Typography>
                <Typography variant="subtitle1" sx={{textAlign: 'right'}}>{content.time}</Typography>
              </div>
            : list.map(item => (
              <Card key={item.objectId} sx={{maxWidth: 600, margin: '10px auto'}}>
                <CardActionArea onClick={() => showLetterContent(item)}>
                  <CardMedia
                    component="img"
                    height="120"
                    image={img}
                    alt="green iguana"/>
                  <CardContent>
                    <Typography variant="h6" color="text.secondary">To:</Typography>
                    <Typography gutterBottom variant="subtitle1" component="div"
                                sx={{textAlign: 'center'}}>{item.toName}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
        </div>
      </div>
      <ActionFeb/>
      <Loading open={openLoading}/>
    </div>
  );
}

export default Letter;