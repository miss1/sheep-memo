import Header from "../components/header";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import img from '../assets/img/lineart.png'
import { queryData } from '../api/connectSqlite'
import { QUERY_LETTERS } from '../api/sql'
import React, { useEffect, useState } from "react";
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';

function Letter() {
  const [list, setList] = useState([]);
  const [content, setContent] = useState({});
  const [showContent, setShowContent] = useState(false);
  useEffect( () => {
    setList(queryData(QUERY_LETTERS));
  },[setList]);

  const showLetterContent = (content) => {
    setContent(content);
    setShowContent(true);
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
              <Card key={item.id} sx={{maxWidth: 600, margin: '10px auto'}}>
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
      <Fab onClick={doAction} color={showContent ? 'warning' : 'primary'} sx={{position: 'absolute', bottom: '5%', right: '10%'}}>
        {showContent
          ? <CloseIcon/>
          : <AddIcon/>
        }
      </Fab>
    </div>
  );
}

export default Letter;