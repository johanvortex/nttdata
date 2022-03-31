import React, { useEffect } from "react";
import LogoClan from "../../../assets/img/logo_clan.png";
import "../styles/estilos.css";
import { Filter } from "../components/Filter";
import { ListClans } from "../components/ListClans";
import { getClans } from "../../../actions/ClansActions";
import { useDispatch } from "react-redux";
export const ClashOfClanesView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClans())
  }, [dispatch, getClans])
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
          <div style={{display:"flex",flexDirection:"column"}}>
          <h3 style={{ color: "#fff" }}>Johan Andrés Romero Medina</h3>
          <h3 style={{ color: "#fff" }}>Tel:3132671904</h3>
          </div>
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
              <h3 style={{ color: "#fff" }}>johan-rm89@hotmail.com</h3>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
};