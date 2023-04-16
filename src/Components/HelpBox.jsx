import React from "react";
import "./HelpBox.css";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

const ICON_SIZE = 40;

function HelpBox() {
  return (
    <>
      <div className="HelpBox">
        <ContactSupportIcon
          style={{ fontSize: "30px", paddingLeft: "40%", color: "#909090" }}
        />
        <div style={{ paddingTop: "5px", paddingLeft: "28%", fontWeight: 500 }}>
          Need Help?
        </div>
        <div
          style={{ paddingTop: "15px", fontSize: "13px", textAlign: "center" }}
        >
          Our support team is at your disposal
        </div>
        <div
          style={{
            marginTop: "20px",
            width: "74px",
            padding: "5px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            marginLeft: "28%",
            textAlign: "center",
            fontWeight:'500'
          }}
        >
          Get Help
        </div>
      </div>
    </>
  );
}

export default HelpBox;
