import React, { useState } from 'react';
import Dataset from './dataset';
import { WannaDo, ButtonSelect } from './components/index'

const App = () => {

  const [dataset, setDataset] = useState(Dataset);
  const [content, setContent] = useState("やりたいことを見つける");
  const [url, setUrl] = useState("");
  const [like, setLike] = useState([])
  const [dislike, setDisLike] = useState([])
  const [likeDisabled, setLikeDisabled] = useState(true)
  const [DisLikeDisabled, setDisLikeDisabled] = useState(true)
  const [themeDisabled, setThemeDisabled] = useState(false)

  
  
  
  const changeContent = () => {
    const wannaDoData = dataset.wannaDo;
    const random = Math.floor(Math.random() * (wannaDoData.length));
    const WannaDoContent = wannaDoData[random].content
    const WannaDoUrl = wannaDoData[random].url
    setContent(WannaDoContent);
    setUrl(WannaDoUrl);
    wannaDoData.splice(random, 1)
    setDataset(dataset)
    setLikeDisabled(false)
    setDisLikeDisabled(false)
    setThemeDisabled(true)

  }

  const setDisable = () => {
    setLikeDisabled(true)
    setDisLikeDisabled(true)
    setThemeDisabled(false)
  }

  const addLike = () => {
    const newLike = [...like, [content, url]]
    console.log(newLike);
    setLike(newLike)
    setDisable();
  }

  const addDislike = () => {
    const newDislike = [...dislike, [content, url]]
    setDisLike(newDislike)
    setDisable();
  }




  return (
    <div className="bg">
      <div className="inner">
        <div className="do">
          <WannaDo content={content} url={"url"} />
          <ButtonSelect onClick={changeContent} buttonName={"次のテーマ"} disabled={themeDisabled} />
        </div>
        <div className="interesting">
          <div className="like">

            <ButtonSelect onClick={addLike} buttonName={"気になる"} disabled={likeDisabled} />
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
            <ButtonSelect onClick={addDislike} buttonName={"絶対無理"} disabled={DisLikeDisabled} />
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
