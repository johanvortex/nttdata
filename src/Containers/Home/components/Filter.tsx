import React from "react";
import "../styles/estilosFilter.css";
export const Filter = () => {


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
                                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                                    <span ></span>
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