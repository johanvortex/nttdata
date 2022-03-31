import React, { ChangeEvent, useEffect, useState } from "react";
import "../styles/estilosFilter.css";
import { useDispatch } from "react-redux";
import { FiltersClans } from "../../../actions/ClansActions";
import Swal from "sweetalert2";
export const Filter = () => {
    const dispatch = useDispatch();
    const [filtro, setFiltro] = useState({
        buscador: "",
        maxMembers: 0,
        war: "",
    });
    const { buscador, maxMembers, war } = filtro;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFiltro({
            ...filtro,
            buscador: event.target.value,
        });
    };
    const handleInputChangeSelect = (
        event: ChangeEvent<{ name?: string | undefined; value: any }>
    ) => {
        setFiltro({
            ...filtro,
            war: event.target.value,
        });
    };
    const handleInputChangeNumber = (event: ChangeEvent<{ name?: string | undefined; value: any }>) => {
        const re = /^[0-9\b]+$/;
        if (event.target.value === '' || re.test(event.target.value)) {
            setFiltro({
                ...filtro,
                maxMembers: event.target.value,
            });
        }

    };
    const EnviarBusqueda = () => {
        let numeroPalabras = buscador.length;
            if (buscador !== "") {
                if (numeroPalabras >= 3) {
                   dispatch(FiltersClans(buscador,war,maxMembers));
                } else {
                    Swal.fire({
                        title: "Datos invlaidos ",
                        text: `Para realizar el filtro de búsqueda por nombre, ingrese más de 3 caracteres `,
                        icon: "info",
                        confirmButtonColor: "#0072CE",
                        confirmButtonText: "Aceptar",
                        showCloseButton: true,
                        showConfirmButton: true,
                    })
                }
            } if (war !== ""){
                dispatch(FiltersClans(buscador,war,maxMembers));
            } if (maxMembers !== 0 || maxMembers === undefined){
               
                dispatch(FiltersClans(buscador,war,maxMembers));

            }else if (buscador === "" && war === "" && (maxMembers === 0 || maxMembers === undefined)) {
            Swal.fire({
                title: "Datos invlaidos ",
                text: `Debe llenar o seleccionar uno de los tres filtros`,
                icon: "info",
                confirmButtonColor: "#0072CE",
                confirmButtonText: "Aceptar",
                showCloseButton: true,
                showConfirmButton: true,
            })
        }
    }
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
                                                <input type="text" className="form-control" placeholder="Buscar clan" aria-label="Recipient's username" aria-describedby="basic-addon2" value={buscador} name="buscador" onChange={handleInputChange} />
                                                <label className="input-group-text" form="inputGroupFile02"  >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col center_elemnt">
                                        <select className="form-select" aria-label="Default select example" onChange={handleInputChangeSelect} name="war" value={war}>
                                            <option selected>Frecuencia de guerra</option>
                                            <option value=""></option>
                                            <option value="any">Cualquiera</option>
                                            <option value="always">Siempre</option>
                                            <option value="never">Nunca</option>
                                            <option value="twice a week">Dos veces por semana</option>
                                            <option value="once a week">Una vez por semana </option>
                                        </select>
                                    </div>
                                    <div className="col center_elemnt">
                                        <div >
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Maximo  de miembros" pattern="[0-9]{0,2}" maxLength={2} onChange={handleInputChangeNumber} name="maxMembers" value={maxMembers} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button_position">
                            <button type="button" className="btn btn-success " onClick={() => EnviarBusqueda()}>Buscar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

};