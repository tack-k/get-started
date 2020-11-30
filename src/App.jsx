import React, { useState, useEffect } from 'react';
import Dataset from './dataset';
import { WannaDo, ButtonSelect } from './components/index'
import { useScrollTrigger } from '@material-ui/core';

const App = () => {

  const [dataset, setDataset] = useState(Dataset);
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [like, setLike] = useState([])
  const [dislike, setDisLike] = useState([])
  const [buttonName, setButtonName] = useState(true)    
 
 const changeButtonName = () => {
   if (buttonName === true) {
    changeContent()
   } else {
    window.location.reload()
   }
  setButtonName(false) 
 }
  
  const changeContent = () => {
    const wannaDoData = dataset.wannaDo;
    const random = Math.floor(Math.random() * (wannaDoData.length));
    const WannaDoContent = wannaDoData[random].content
    const WannaDoUrl = wannaDoData[random].url
    setContent(WannaDoContent);
    setUrl(WannaDoUrl);
    wannaDoData.splice(random, 1)
    setDataset(dataset)
  }




  const addLike = () => {
    switch (true) {
      case buttonName:
        break;
      case dataset.wannaDo.length === 0:
      break;
    
      default:
        changeContent()
        const newLike = [...like, [content, url]]
        setLike(newLike)
        break;
    }
  }

  const addDislike = () => {
    switch (true) {
      case buttonName:
        break;
      case dataset.wannaDo.length === 0:
      break;
    
      default:
        changeContent()
        const newDislike = [...dislike, [content, url]]
        setDisLike(newDislike)
        break;
    }
  }

  




  return (
    <div className="bg">
      <div className="inner">
  <div className="try">{dataset.wannaDo.length === 0 ? 'やりたいことを実践しよう!' : 'やりたいことを見つけよう!'}</div>
        <div className="do">
          <WannaDo content={content} dataset={dataset} />
          <ButtonSelect onClick={changeButtonName} buttonName={buttonName ? "スタート"　: "リセットする"}/>
        </div>
        <div className="interesting">
          <div className="like">

            <ButtonSelect onClick={addLike} buttonName={"気になる"} />
            <div className="like-field">
              {like.map((value, index) => {
                return (
                  <div className="like-list" key={index.toString()}>
                    <a href={value[1]} target='_blank'>{value[0]}</a>
                  </div>
                )
              })
              }
            </div>
          </div>
          <div className="dislike">
            <ButtonSelect onClick={addDislike} buttonName={"絶対無理"} />
            <div className="dislike-field">
              {dislike.map((value, index) => {
                return (
                  <div className="like-list" key={index.toString()}>
                    <a href={value[1]} target='_blank'>{value[0]}</a>
                  </div>
                )
              })
              }
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
