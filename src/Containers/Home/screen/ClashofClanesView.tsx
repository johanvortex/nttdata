import React from "react";
import LogoClan from "../../../assets/img/logo_clan.png";
import "../styles/estilos.css";
import { Filter } from "../components/Filter";
import { ListClans } from "../components/ListClans";
export const ClashOfClanesView = () => {

  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid" >
          <a className="navbar-brand" href="#" style={{ display: "flex", alignItems: "center" }}>
            <img src={LogoClan} alt="logo_clan" width="200px" className="d-inline-block align-text-top" />
            <h4 className="font-face">
              Liga Bronze League II
            </h4>
          </a>
          <h1 style={{ color: "#fff" }}>Holaaa</h1>
        </div>
      </nav>
      <div className="homeStyle">
        <div className="centerdiv">
          <Filter />
        </div >
        <div className="div_clans">
          <ListClans />
        </div>
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid" >
              <a className="navbar-brand" href="#" style={{ display: "flex", alignItems: "center" }}>
                <img src={LogoClan} alt="logo_clan" width="200px" className="d-inline-block align-text-top" />
                <h4 className="font-face">
                  Liga Bronze League II
                </h4>
              </a>
              <h1 style={{ color: "#fff" }}>Holaaa</h1>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
};