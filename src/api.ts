import axios from "axios";

const BASE_PATH = 'http://localhost:3000'

export interface IRegiUserResult {
  msg: string;
}

export function regiUser(userid: IRegiUserResult) {
  return axios.get(`${BASE_PATH}/regi&userid=${userid}`).then(
    (resp) => resp
  )
  .catch(function (error) {
    console.log(error);
  });
}