const style = (theme) => {
  return {
    left: {
      height: "100%",
      color: "#22D1EE",
      position: "fixed",
      width:"20%",
    },
    right: {
      color: "#43425D",
      backgroundColor: "#dee1ec",
      marginLeft: "20%",
      width:"80%",
      [theme.breakpoints.down(350)]:{
        '& .account':{
          top:"11% !important",
          left:"1% !importan",
        }
      }
    },
    left2: {
      height: "100%",
      color: "#22D1EE",
      position: "fixed",
      width:"5%",
      [theme.breakpoints.down(900)]:{
        width:"10%",
      },
      [theme.breakpoints.down(550)]:{
        width:0,
      }
    },
    right2: {
      color: "#43425D",
      backgroundColor: "#dee1ec",
      marginLeft: "5%",
      width:"100%",
      [theme.breakpoints.down(900)]:{
        marginLeft: "10%",
      },
      [theme.breakpoints.down(550)]:{
        marginLeft: 0,
      },
      [theme.breakpoints.down(350)]:{
        '& .account':{
          top:"11% !important",
          left:"1% !importan",
        }
      }
    },
    content: {
      padding: theme.spacing(4, 6),
      [theme.breakpoints.down(900)]:{
        padding: theme.spacing(3, 4),
      },
      [theme.breakpoints.down(550)]:{
        padding: theme.spacing(2, 3),
      }
    },
    contentItem: {
      maxWidth:"100%",
      marginTop:'20px',
      padding:"10px 3px !important"
    },
    item: {
      display: "flex",
      backgroundColor: "#fff",
      padding: theme.spacing(1),
    },
    itemIcon: {
      border: "1px solid black",
      borderRadius: "50%",
      borderColor: "#22D1EE",
      height: theme.spacing(5),
      width: theme.spacing(5),
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      color: "#22D1EE",
    },
    //HOME
    homeItem: {
      position:"relative",
      marginTop: theme.spacing(5),
      padding: theme.spacing(3, 5),
      backgroundImage: "url(background2.jpg)",
      backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    },
    topItem: {
      justifyContent: "center",
      display: "flex",
    },
    btnItem: {
      fontFamily:"Nerko One",
      backgroundColor: "#482ff7",
      fontSize:theme.spacing(3),
      color: "#fff",
      padding: theme.spacing(4, 4),
      border:"2px solid #22EE6D",
      "&:hover": {
        backgroundColor: "#43425D",
        color: "#22D1EE",
        border:"2px solid #FF6565",
      },
    },
    btnItemActive:{
      fontFamily:"Nerko One",
      backgroundColor: "#22EE6D",
      fontSize:theme.spacing(3),
      color: "#fff",
      padding: theme.spacing(4, 4),
      border:"2px solid #FF6565",
      "&:hover": {
        backgroundColor: "#43425D",
        color: "#22D1EE",
        border:"2px solid #FF6565",
      },
    },
    btnItemPlay: {
      fontFamily:"Nerko One",
      backgroundColor: "#22EE6D",
      fontSize:theme.spacing(3),
      color: "#fff",
      padding: theme.spacing(0.5, 1),
      border:"2px solid #22D1EE",
      "&:hover": {
        backgroundColor: "#22D1EE",
        color: "#fff",
        border:"2px solid #FF6565",
      },
    },
    btnMoney:{
      fontFamily:"Nerko One",
      backgroundColor: "#482ff7",
      // fontSize:theme.spacing(3),
      color: "#fff",
      // padding: theme.spacing(4, 4),
      border:"2px solid #FF6565",
      "&:hover": {
        backgroundColor: "#43425D",
        color: "#22D1EE",
        border:"2px solid #FF6565",
      },
    },
    btnMoneyActive:{
      fontFamily:"Nerko One",
      backgroundColor: "#22EE6D",
      // fontSize:theme.spacing(3),
      color: "#fff",
      // padding: theme.spacing(4, 4),
      border:"2px solid #FF6565",
      "&:hover": {
        backgroundColor: "#43425D",
        color: "#22D1EE",
        border:"2px solid #FF6565",
      },
    },
    table: {
      marginTop: theme.spacing(5),
      height: "auto",
      width: "100%",
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      // backgroundColor:"#22D1EE"
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    account:{
      fontFamily:"Nerko One",
      position:"absolute",
      width:theme.spacing(20),
      height:theme.spacing(15),
      top:0,
      left:0,
      margin:theme.spacing(3),
      padding:theme.spacing(1),
      [theme.breakpoints.down(700)]:{
        top:"12%",
        left:"2%",
      },
      [theme.breakpoints.down(350)]:{
        top:"15%",
        left:"1%",
      }
    }
  };
};
export default style;
