import { withStyles } from '@material-ui/core';
import React, { Fragment, useCallback } from 'react';
import { useSelector } from 'react-redux';
import styles from "./style";



const Dice = (props) => {

  const arrDice = useSelector((state)=>{
    return state.dice.arrDice;
  })

  const renderDice = useCallback(()=>{
     return arrDice.map((item,index)=>{
        return (
          <Fragment key={index}>
          <img className={props.classes.img} src={item.hinhAnh} alt="1"/>
          </Fragment>
        )
      
    })
  },[arrDice])

  return (
    <div>
      {renderDice()}
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Dice);