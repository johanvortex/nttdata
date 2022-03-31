import React, { ChangeEvent, useEffect, useState } from "react";
import "../styles/estilosFilter.css";
import { getClans } from "../../../actions/ClansActions";
import { useDispatch } from "react-redux";
export const Filter = () => {
    const dispatch = useDispatch();
    const [filtro,setFiltro]=useState({
        buscador:"",
        maxMembers:0,
        war :"",
    });
    const {buscador,maxMembers,war}= filtro;
   
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiltro({
          ...filtro,
          buscador: event.target.value,
        });
      };
      console.log(buscador)
      const EnviarBusqueda = ()=>{
        


      }




    useEffect(() => {
        console.log(buscador)

        dispatch(getClans())
    }, [dispatch, getClans,buscador])

    return (
        <>
            <div className="col-xl-12">
                <div className="center_filer">
                    <div className="div_fileter">
                        <div className="container_filter">
                            <div className="container">
                                <div className="row">
                                    <div className="col center_elemnt">
                                        <div >
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Buscar clan" aria-label="Recipient's username" aria-describedby="basic-addon2"  value={buscador}  name="buscador" onChange={handleInputChange} />
                                                <label className="input-group-text" form="inputGroupFile02"  >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col center_elemnt">
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col center_elemnt">
                                        <div >
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Buscar clan" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                <label className="input-group-text" form="inputGroupFile02">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button_position">
                            <button type="button" className="btn btn-success " onClick={()=>EnviarBusqueda()}>Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};