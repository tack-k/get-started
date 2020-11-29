import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  style: {
    'button': {
      margin: '0',
    },
  },
}));


const ButtonSelect = (props) => {
  const {onClick, buttonName, disabled} = props;
  const classes = useStyles();

  return (
    <div>
       <Button variant="contained" disabled={disabled} onClick={onClick}>{buttonName}</Button>
    </div>
  )
}

export default ButtonSelect
