import { PLAY_GAME, SET_CHOOSE, SET_MONEY,SET_CREDENTIALS, NOT_ENOUGHT_MONEY } from "../action/type";

let initialState = {
  timePlay:0,
  timeWin:0,
  choose:true,// true Tài > 12 , false xỉu 3-11
  arrDice:[
    {value:1,hinhAnh:'1.png'},
    {value:1,hinhAnh:'1.png'},
    {value:1,hinhAnh:'1.png'}
  ],
  result:false,
  modalActive:false,
  active:false,
  money:0,
  activeMoney50:false,
  activeMoney100:false,
  activeMoney200:false,
  activeMoney500:false,
  notMoney:false,
  credentialsA: {
    taiKhoan:'',
    matKhau:'',
    soDu:0,
  },

}

const reducer = (state = initialState,{type,payload}) =>{
  switch(type){

    case SET_CREDENTIALS:
      state.credentialsA = payload;
      return { ...state };

    case SET_CHOOSE:{
      state.active = true;
      state.choose = payload;
      return {...state};
    }
    case SET_MONEY:{
      state.money = parseInt(payload);
      if(payload === "50000"){
        state.activeMoney50 = true;
        state.activeMoney100 = false;
        state.activeMoney200 = false;
        state.activeMoney500 = false;
      }else if(payload === "100000"){
        state.activeMoney50 = false;
        state.activeMoney100 = true;
        state.activeMoney200 = false;
        state.activeMoney500 = false;
      }else if(payload === "200000"){
        state.activeMoney50 = false;
        state.activeMoney100 = false;
        state.activeMoney200 = true;
        state.activeMoney500 = false;
      }else if(payload === "500000"){
        state.activeMoney50 = false;
        state.activeMoney100 = false;
        state.activeMoney200 = false;
        state.activeMoney500 = true;
      }else if(payload === ""){
        state.activeMoney50 = false;
        state.activeMoney100 = false;
        state.activeMoney200 = false;
        state.activeMoney500 = false;
      }
      return {...state};
    }
    case NOT_ENOUGHT_MONEY:{
        state.active = false;
        state.notMoney = true;
        return {...state};
    }
    case PLAY_GAME:{
      let newArrDice = [];
      let result =0;
      for(let i=0;i<3;i++){
        // Lặp ngẫu nhiên số 1-6
        let newNum = Math.floor(Math.random() *6 ) + 1;
        //Push đối tượng được random vào mảng mới
        newArrDice.push({value:newNum,hinhAnh:`${newNum}.png`});
        result+=newNum;
      }
      //Gán mảng mới vào state.arrDice
      state.arrDice = newArrDice;
      if(result >= 12 ){
        if(state.choose){
          state.result = true;
          state.credentialsA.soDu+=state.money;
          state.timeWin++;
        }else{
          state.credentialsA.soDu-=state.money;
          state.result = false;
        }
      }else{
        if(state.choose){
          state.credentialsA.soDu-=state.money;
          state.result = false;
        }else{
          state.result = true;
          state.credentialsA.soDu+=state.money;
          state.timeWin++;
        }
      }
      state.timePlay++;
      return {...state};
    }

    default:
      return {...state};
  }
}

export default reducer