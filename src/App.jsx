import React from 'react';

const App = () => {
  return (
    <div className="bg">
      <div className="inner">
        <div className="do">
          <p>やってみたいこと</p>
          <button>スタート</button>
        </div>
        <div className="interesting">
          <div className="like">
            <button>気になる</button>
            <div className="like-field">
              ・スキューバダイビング
          </div>
          </div>
          <div className="dislike">
            <button>絶対無理</button>
            <div className="like-field">
              ・バンジージャンプ
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
