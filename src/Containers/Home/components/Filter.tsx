import React, { useEffect } from "react";
import "../styles/estilosFilter.css";
import { getClans } from "../../../actions/ClansActions";
import { useDispatch } from "react-redux";
export const Filter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Estoy en useffect");
        dispatch(getClans())
    }, [dispatch])

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
                                                <input type="text" className="form-control" placeholder="Buscar clan" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                <label className="input-group-text" form="inputGroupFile02">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col center_elemnt">
                                        <div className="barra">
                                            <h2> filter2</h2>
                                        </div>                                    </div>
                                    <div className="col center_elemnt">
                                        <div className="barra">
                                            <h2> filter 3</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

};