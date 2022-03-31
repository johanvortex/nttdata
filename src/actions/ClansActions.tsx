import axios from "axios";
import { aceppt, token } from '../config/variables';
import { types } from '../types';
export const getClans = () => async (dispatch: any) => {
  const query: any = {};
  query.maxMembers = 20;
  const queryParse = encodeURIComponent(JSON.stringify(query));
  console.log("query", query)
  try {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log("Error::", error);
        return error;
      }
    );
    const response = await axios.get("/clans?minClanPoints=15&limit=8", {
      headers: {
        Accept:aceppt,
        Authorization: token,
      }
    })
    console.log("resposne",response)
    if (response.status === 200) {
      dispatch({
        type: types.GET_CLANS,
        payload: response.data
      });
    }

  } catch (error) {

  }


};