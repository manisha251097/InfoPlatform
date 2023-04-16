import React from "react";
import logo from "../Assets/logo2.png";
import searchlogo from "../Assets/search.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function TopBar() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", paddingLeft: "2%", width: "50%" }}>
        <div>
          <img style={{ width: "65px" ,marginTop:'12px'}} src={logo}></img>
        </div>
        <div
          style={{
            width: "580px",
            padding: "10px",
            height: "33px",
            backgroundColor: "#e7edf5",
            margin: "12px 12px 12px 184px",
            borderRadius: "8px",
            display: "flex",
          }}
        >
          <img
            style={{ width: "22px", padding: "8px", height: "23px" }}
            src={searchlogo}
          ></img>
          <div style={{ paddingTop: "10px" }}>Search....</div>
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "33%", width: "50%" }}>
        <div
          style={{
            marginTop: "20px",
            width: "205px",
            padding: "10px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            textAlign: "center",
            fontWeight: "500",
            height: "fit-content",
            // marginRight:'65px'
          }}
        >
          checkout (200)
        </div>
        <div style={{ margin: "auto" }}>
          User Admin <KeyboardArrowDownIcon />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
