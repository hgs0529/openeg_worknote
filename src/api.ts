import axios from "axios";

const BASE_PATH = 'http://localhost:8090'

export interface IRegiUserResult {
  msg: string;
}

export interface IForm {
  username: string;
  userid: string;
}

export function regiUser(username: string | undefined) {
  return axios.post(`${BASE_PATH}/regi`, { worker: username }).then(
    (resp) => resp.data
  )
  .catch(function (error) {
    console.log(error);
  });
}