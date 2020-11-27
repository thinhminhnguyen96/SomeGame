import { withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from "./style";



const Result = (props) => {

  const [state,setState] = useState(false);
  const choose = useSelector((state)=>{
    return state.dice.choose;
  });

  const active = useSelector((state)=>{
    return state.dice.active;
  });
  const timeWin = useSelector((state)=>{
    return state.dice.timeWin;
  });
  const timePlay = useSelector((state)=>{
    return state.dice.timePlay;
  });
  const money = useSelector((state)=>{
    return state.dice.money;
  });

  return (
    <div className={props.classes.result}>
      <div className={props.classes.choose}>
        <h1>Bạn chọn : </h1> <span style={{color: choose ? "#22EE6D" : "#FF6565"}}>{!active ? "..." : (choose ?"Tài" : "Xỉu")}</span>
      </div>
      <div className={props.classes.choose}>
        <h1>Số tiền cược lần này : </h1> <span style={{color:"#17b978"}}>{money}</span>
      </div>
      <div className={props.classes.choose}>
        <h1>Số lần thắng : </h1> <span style={{color:"#faee1c"}}>{timeWin}</span>
      </div>
      <div className={props.classes.choose}>
        <h1>Tổng số lần chơi : </h1> <span style={{color:"#f3558e"}}>{timePlay}</span>
      </div>
      
      
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Result);