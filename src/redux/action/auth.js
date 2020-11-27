import { PhoneCallback } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import Axios from "axios";
import { createAction } from ".";
import connector from "../../configs/connector";
import { SET_TOKEN, SET_CREDENTIALS } from "./type";
import swal from "sweetalert"
//acsync action
export const signIn = (data, callback) =>{
  return dispatch =>{
       //Lưu token trên local đề F5 không mất
        localStorage.setItem("o", JSON.stringify(data));
        dispatch(createAction(SET_CREDENTIALS, data));
        callback();
  }
};
