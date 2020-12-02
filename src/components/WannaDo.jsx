import React from 'react'

const WannaDo = (props) => {
  const {content, dataset, color} = props;
  const lastData = dataset.wannaDo.length

  return (
  <p className="title" style={{
    color
  }}>{lastData === 0 ? "Finish" : content}</p>
  )
}

export default WannaDo
