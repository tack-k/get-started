import React from 'react'

const WannaDo = (props) => {
  const {content, dataset} = props;
  const lastData = dataset.wannaDo.length
  
  return (
  <p>{lastData === 0 ? "" : content}</p>
  )
}

export default WannaDo
