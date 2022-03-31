import axios from "axios";
import { url, aceppt, token } from '../config/variables';
import { types } from '../types';
export const getClans = () => async (dispatch: any) => {
   // console.log("Hola estoy aqui")
   const query :any ={};
   query.maxMembers=20;
   const queryParse = encodeURIComponent(JSON.stringify(query));
   console.log("query",query)
    try {
        axios.interceptors.response.use(
            (response) => {
              return response;
            },
            (error) => {
                console.log("Algo salio mal ")
              return error;
            }
          );
          const response = await axios.get(`https://api.clashofclans.com/v1/clans?maxMembers=20`,{
              headers:{
                Accept:aceppt,
                Authorization: 'Bearer : '+ token,
              }
          })
          console.log(response,"respuesta:::")
          if(response.data.exitoso){
              console.log("Se puedo");
              dispatch({
                type: types.GET_CLANS,
                payload: response.data.resultado,
              });
          }else {
              console.log("Error")
          }
    } catch (error) {
        
    }

};