import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




const ButtonSelect = (props) => {

  const useStyles = makeStyles(() => ({
    'button': {
      backgroundColor: color,
      fontWeight: 700,
      "&:hover": {
        backgroundColor: colorHover,
        color: '#FFFFFF'
  }
}
}));

  const {onClick, buttonName, color, colorHover} = props;
  const classes = useStyles();
  const {button} = classes;

  return (
    <div>
       <Button className={button} variant="contained" onClick={onClick}>{buttonName}</Button>
    </div>
  )
}

export default ButtonSelect
