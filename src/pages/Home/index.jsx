import { Box, Grid, withStyles, Typography, Button, Modal, TextField } from "@material-ui/core";
import styles from "./style";
import React, { useCallback, useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@material-ui/icons/Person";
import TheatersIcon from "@material-ui/icons/Theaters";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import { DataGrid } from "@material-ui/data-grid";
import AddIcon from "@material-ui/icons/Add";
import Dice from "../../components/Dice";
import Result from "../../components/Result";
import { createAction } from "../../redux/action";
import { SET_CHOOSE,PLAY_GAME,SET_MONEY,NOT_ENOUGHT_MONEY } from "../../redux/action/type";


const Home = (props) => {
  const dispatch = useDispatch();
  
  const timePlay = useSelector((state)=>{
    return state.dice.timePlay;
  });
  const timeWin = useSelector((state)=>{
    return state.dice.timeWin;
  });
  const credentials = useSelector((state) => {
    return state.dice.credentialsA;
  });
  const modalActive = useSelector((state)=>{
    return state.dice.modalActive;
  });
  const [open,setOpen] = useState(false);
  const result = useSelector((state)=>{
    return state.dice.result;
  });
  const activeArrow = useSelector((state)=>{
    return state.active.active.arrow;
  });
  const choose = useSelector((state)=>{
    return state.dice.choose;
  });
  const active = useSelector((state)=>{
    return state.dice.active;
  });
  const notMoney = useSelector((state)=>{
    return state.dice.notMoney;
  });
  const money = useSelector((state)=>{
    return state.dice.money;
  });
  const activeMoney50 = useSelector((state)=>{
    return state.dice.activeMoney50;
  });
  const activeMoney100 = useSelector((state)=>{
    return state.dice.activeMoney100;
  });
  const activeMoney200 = useSelector((state)=>{
    return state.dice.activeMoney200;
  });
  const activeMoney500 = useSelector((state)=>{
    return state.dice.activeMoney500;
  });
  const handleOpen = useCallback(() => {
    setOpen(true);
  },[]);

  const handleClose = useCallback(() => {
    setOpen(false);
  },[]);

  const handelToggle = useCallback((values)=>()=>{
    dispatch(createAction(SET_CHOOSE,values));
  },[])
  
  const handelPlayGame = useCallback(()=>{
    console.log('SD: ' + credentials.soDu , 'TC: ' + money)
    if(credentials.soDu<=0 || money > credentials.soDu){
      dispatch(createAction(NOT_ENOUGHT_MONEY));
      setOpen(true);
    }else{
      dispatch(createAction(PLAY_GAME))
      setOpen(true);
    }
    
  },[credentials,money])

  const getValue = useCallback((e)=>{
    dispatch(createAction(SET_MONEY,e.target.value));
    
  },[])
  const formatNumber = useCallback((number) =>{
    let x = number.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
  },[])

  const body = (
    <div className={props.classes.paper} >
      {!notMoney ? <div> <h2 style={{color: result ? "green" : "red" }}>{result ? "Chúc mừng !!!" : "Rất tiếc !!!"}</h2>
      <p id="simple-modal-description">
      {result ? " Bạn chiến thắng số dư TK + " + money : " Bạn đã thua số dư TK - " + money}
      </p> </div>: <div> <h2 style={{color:"red"}}>Không đủ tiền tiền !!! </h2> <p>Vui lòng nạp thêm tiền để chơi</p> </div>}
      
    </div>
  );
 

  return (
    <div>
      <Box display={"flex"}>
        <Box className={ !activeArrow ? props.classes.left : props.classes.left2} >
          <SideBar />
        </Box>
        <Box className={!activeArrow ? props.classes.right : props.classes.right2}>
          {/* =====NAVBAR===== */}
          <NavBar />

          {/* =====TOPCONTENT===== */}
          <Box className={props.classes.content}>
            <Box component="h3" variant="h5" paddingBottom={"20px"}>
              Xúc Sắc Game
            </Box>
            <Grid container spacing={2} py={5}>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                
              >
                <Box className={props.classes.item}>
                  <Box className={props.classes.itemIcon}>
                    <TheatersIcon />
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      {timePlay}
                    </Typography>
                    <Typography>Số lần chơi</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                
              >
                <Box className={props.classes.item}>
                  <Box className={props.classes.itemIcon}>
                    <PersonIcon />
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      {timeWin}
                    </Typography>
                    <Typography>Số lượt thắng</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                sm={6}
                md={4}
                xs={12}
                
              >
                <Box className={props.classes.item}>
                  <Box className={props.classes.itemIcon}>
                    <EqualizerIcon />
                  </Box>
                  <Box paddingLeft={"20px"}>
                    <Typography variant="h6" component="h5">
                      2
                    </Typography>
                    <Typography>Số lượng hệ thống</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* =====HOMEITEM===== */}

            <Box className={props.classes.homeItem} >
              <Box className={props.classes.topItem}>
                <Typography component="h3" variant="h3" style={{fontFamily:"Nerko One",textAlign:"center"}} >
                  Game đổ xúc sắc
                </Typography>
                
              </Box>

              {/* TABLE */}
              <Box className={props.classes.table} textAlign={"center"}>
                
              <Grid container spacing={2} py={5}>
              <Grid
                item
                sm={4}
                xs={12}
                className={props.classes.contentItem}
              >
                <Button disabled={notMoney} onClick={handelToggle(true)} className={!active ? props.classes.btnItem : (choose ? props.classes.btnItemActive : props.classes.btnItem) }>Tài</Button>  
              </Grid>
              <Grid
                item
                sm={4}
                xs={12}
                className={props.classes.contentItem}
              >
                <Dice/> 
              </Grid>
              <Grid
                item
                sm={4}
                xs={12}
                className={props.classes.contentItem}
              >
                <Button disabled={notMoney} onClick={handelToggle(false)} className={!active ? props.classes.btnItem : (!choose ? props.classes.btnItemActive : props.classes.btnItem) }>Xỉu</Button>
              </Grid>
              </Grid>

             {/*START Tiền Cược */}
              <Grid
                container spacing={2} py={5}
                className={props.classes.contentItem}
              >
                <Grid item sm={3}><Button className={!activeMoney50? props.classes.btnMoney : props.classes.btnMoneyActive}  onClick={getValue}><option value={50000}>50,000 VND</option>  </Button></Grid>
                <Grid item sm={3}><Button className={!activeMoney100? props.classes.btnMoney : props.classes.btnMoneyActive}  onClick={getValue}><option value={100000}>100,000 VND</option>  </Button></Grid>
                <Grid item sm={3}><Button className={!activeMoney200? props.classes.btnMoney : props.classes.btnMoneyActive}  onClick={getValue}><option value={200000}>200,000 VND</option>  </Button></Grid>
                <Grid item sm={3}><Button className={!activeMoney500? props.classes.btnMoney : props.classes.btnMoneyActive}  onClick={getValue}><option value={500000}>500,000 VND</option>  </Button></Grid>
              </Grid>
              {/*END Tiền Cược */}

              {/*START RESULT */}
              <Grid container spacing={2} py={5}>
              <Grid
                item
                sm={12}
                xs={12}
                className={props.classes.contentItem}
              >
                <Result/>
              </Grid>
              
              </Grid>
              {/*END RESULT */}

              {/*START BUTTONPLAY */}
               <div>
                 <Button onClick={handelPlayGame} disabled={!active} className={props.classes.btnItemPlay}>Play Game</Button>
                </div> 
              {/*END BUTTONPLAY */}
              </Box>
              
              {/*START ACCOUNT */}
              <div className={props.classes.account}>
                  TK : {credentials.taiKhoan} <br/>
                  SD: {formatNumber(credentials.soDu) + " VND"}
              </div>

              {/*END ACCOUNT */}
            </Box>



            {/*START MODAL */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              className={props.classes.modal}
            >
            {body}
            </Modal>
            {/*END MODAL */}
            
            
          </Box>
        </Box>
        
      </Box>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Home);
