import React from "react";
import { useSelector } from "react-redux";
import "../styles/estilosClans.css";
import Copa from "../../../assets/img/copa.png";
export const ListClans = () => {
    const mapItem = useSelector(
        (state: any) => state.clansReducer.clansFilter.items
    );
    console.log("mapItem", mapItem);

    return (
        <>
            <div className="container">
                <div className="colum">
                    {mapItem.map((idex: any) => {
                        return (
                            <div className="col card">
                                <div className="container">
                                    <div className="row row-cols-5">
                                        <div className="col center_items">
                                            <img src={idex.badgeUrls.small} className="img_max" />
                                        </div>
                                        <div className="col center_items">
                                            <h5>
                                                {idex.name}
                                            </h5>
                                        </div>
                                        <div className="col container center_items">
                                            <img src={Copa} className="img_max" />
                                            <div className="copa_number">
                                                {idex.clanPoints}
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col center_text">
                                                        <h5>miembros:</h5>
                                                        <h5 className="text_data">{idex.members}</h5>
                                                    </div>
                                                    <div className="col center_text">
                                                        <h5>warWins:</h5>
                                                        <h5 className="text_data">{idex.warWins}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col center_items">
                                        <button type="button" className="btn btn-outline-info">Ver detalle del clan</button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        )

                    })}
                </div>
            </div>
        </>
    )



};