import axios from "axios";
import { aceppt, token } from '../config/variables';
import { types } from '../types';
export const getClans = () => async (dispatch: any) => {
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
    const response = await axios.get("/clans?minClanPoints=15&limit=7", {
      headers: {
        Accept: aceppt,
        Authorization: token,
      }
    })
    if (response.status === 200) {
      dispatch({
        type: types.GET_CLANS,
        payload: response.data
      });
    } else if (response.status === 403) {
      console.log("No se conecto con el api")
    }

  } catch (error) {

  }


};
export const FiltersClans = (buscador: any, frecuencia: any, maxMember: any) => async (dispatch: any) => {
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
    if (buscador !== "") {
      const response = await axios.get(`/clans?minClanPoints=15&limit=7&name=${buscador}`, {
        headers: {
          Accept: aceppt,
          Authorization: token,
        }
      })
      if (response.status === 200) {
        dispatch({
          type: types.GET_CLANS,
          payload: response.data
        });
      } else if (response.status === 403) {
        console.log("No se conecto con el api")
      }
    }else if (frecuencia !== ""){
      const response = await axios.get(`/clans?minClanPoints=15&limit=7&warFrequency=${frecuencia}`, {
        headers: {
          Accept: aceppt,
          Authorization: token,
        }
      })
      if (response.status === 200) {
        dispatch({
          type: types.GET_CLANS,
          payload: response.data
        });
      } else if (response.status === 403) {
        console.log("No se conecto con el api")
      }
    }else if (maxMember !== 0){
      const response = await axios.get(`/clans?minClanPoints=15&limit=7&maxMembers=${maxMember}`, {
        headers: {
          Accept: aceppt,
          Authorization: token,
        }
      })
      if (response.status === 200) {
        dispatch({
          type: types.GET_CLANS,
          payload: response.data
        });
      } else if (response.status === 403) {
        console.log("No se conecto con el api")
      }
    }else {
      const response = await axios.get(`/clans?minClanPoints=15&limit=7name=${buscador}&maxMembers=${maxMember}&warFrequency=${frecuencia}`, {
        headers: {
          Accept: aceppt,
          Authorization: token,
        }
      })
      if (response.status === 200) {
        dispatch({
          type: types.GET_CLANS,
          payload: response.data
        });
      } else if (response.status === 403) {
        console.log("No se conecto con el api")
      }
    }


  } catch (error) {

  }

};