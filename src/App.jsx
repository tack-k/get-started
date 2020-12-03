import React, { useState, useEffect } from 'react';
import Dataset from './dataset';
import { WannaDo, ButtonSelect, Box } from './components/index'

const App = () => {

  const [dataset, setDataset] = useState(Dataset);
  const [content, setContent] = useState("あなたの気になることリスト");
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

  useEffect(() => {
    const scrollArea = document.getElementById('like-scroll');
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
      console.log('aaa');
    }
  }, [like])

  useEffect(() => {
    const scrollArea = document.getElementById('dislike-scroll')
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [dislike])




  return (
    <div className="bg">
      <div className="top">{dataset.wannaDo.length === 0 ? '気になることを実践しよう!' : "Let's find what you want to do!"}</div>
      <div className="inner">
        <WannaDo content={content} dataset={dataset} color={buttonName ? "#ccbb29" : "#FFFFFF"} />
        <div className="container">
          <div className="do">
            <ButtonSelect onClick={changeButtonName} color={'#FFFFFF'} colorHover={buttonName ? "#2525c5;" : "#ec2e2e"} buttonName={buttonName ? "スタート" : "リセットする"} />
          </div>
          <div className="interesting">
            <Box onClick={addLike} color={'#FFFFFF'} colorHover={"#ccbb29"} buttonName={"気になる"} content={like} id={"like-scroll"}/>
            <Box onClick={addDislike} color={'#FFFFFF'} colorHover={"#3a3a3a"}  buttonName={"絶対無理"} content={dislike} id={"dislike-scroll"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
