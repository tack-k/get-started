import React from 'react';
import {ButtonSelect} from './index'

export const Box = (props) => {

  const {onClick, color, colorHover, buttonName, content, id} = props;
  return (
      <div className="box">
        <ButtonSelect onClick={onClick} color={color} colorHover={colorHover} buttonName={buttonName} />
        <div className="field" id={id}>
          {content.map((value, index) => {
            return (
              <div className="list" key={index.toString()}>
                <a href={value[1]} target='_blank'>{index + 1}|{value[0]}</a>
              </div>
            )
          })
          }
        </div>
    </div>
  )
}

export default Box