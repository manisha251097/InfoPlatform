import React from "react";
import "./ContactCard.css";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import DeleteIcon from "@mui/icons-material/Delete";

function ContactCard({
  item,
  open,
  setOpen,
  setAddemail,
  addemail,
  emailarr,
  contactarr,
  setgetID,
  mainPage,
  highlighCard,
  color
}) {
  const handleOpenAddemail = (val) => {
    setAddemail(true);
    setgetID(val)
  };
  function handleMenuOpen() {
    setOpen((prev) => !prev);
  }

  // const highlighCard1 = (index) => {
  //   highlighCard(index)
  // }

  return (
    <>
      <div className="contactCard_wrapper" style={{ border: color }} onClick={()=>highlighCard(String(item?.id))}>
        <div style={{ display: "grid", gridTemplateColumns: " 60% 20% 20%" }}>
          <div style={{ display: "flex" }}>
            <div>{item.Icon}</div>
            <div style={{ fontSize: "22px" }}>{item.label}</div>
          </div>
          <div style={{ marginLeft: "135%", color: "rgb(182, 51, 51)" }}>
            {!mainPage && <DeleteIcon onClick={handleMenuOpen} />}
          </div>
          <div style={{ marginLeft: "75%", color: "rgb(182, 51, 51)" }}>


            {mainPage ? (
              <ModeEditOutlineIcon onClick={handleMenuOpen} />
            ) : (
              <ModeEditOutlineIcon onClick={() => handleOpenAddemail(item.id)} />
            )}


          </div>
        </div>
        {item.key == "Contact" && (
          <div style={{ marginTop: "10px" }}>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <EmailIcon
                style={{
                  fontSize: "20px",
                  color: "#cacaca",
                  marginRight: "15px",
                }}
              />
              <div>{item.mailID}</div>
              {/* {emailarr?.length > 0 ?(
                emailarr.map((x) => {
                  return <span>{item.mailID + "/" + x}</span>                
                
           
            })):(
            <div>{item.mailID}</div>
            )} */}

              {mainPage && (
                <>
                  <div
                    style={{
                      marginLeft: "58%",
                      backgroundColor: "#fde2e2",
                      borderRadius: "20px",
                      color: "rgb(182, 51, 51)",
                      padding: "4px",
                    }}
                    onClick={handleMenuOpen}
                  >
                    {"+2"}
                  </div>
                </>
              )}
            </div>
            <div style={{ display: "flex", marginTop: "10px" }}>
              <LocalPhoneIcon
                style={{
                  fontSize: "20px",
                  color: "#cacaca",
                  marginRight: "15px",
                }}
              />

              <div>{item.phone}</div>
            </div>
          </div>
        )}

        {item.key == "Address" && (
          <div style={{ marginTop: "10px" }}>{item.address}</div>
        )}
        {item.key == "Hours_of_Operation" && (
          <div style={{ marginTop: "10px" }}>{item.time}</div>
        )}
        {item.key == "social_media" && (
          <div style={{ marginTop: "10px", margin: "30px" }}>
            <LanguageIcon
              style={{
                fontSize: "40px",
                color: "#cacaca",
                marginRight: "30px",
              }}
            />
            <InstagramIcon
              style={{
                fontSize: "40px",
                color: "#cacaca",
                marginRight: "30px",
              }}
            />
            <FacebookIcon
              style={{
                fontSize: "40px",
                color: "#cacaca",
                marginRight: "30px",
              }}
            />
            <TwitterIcon
              style={{
                fontSize: "40px",
                color: "#cacaca",
                marginRight: "30px",
              }}
            />
          </div>
        )}
        {item.key == "Statement" && (
          <div style={{ marginTop: "10px" }}>{item.content}</div>
        )}
      </div>
    </>
  );
}

export default ContactCard;
