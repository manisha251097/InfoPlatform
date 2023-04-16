import React, { useState, useEffect } from "react";
import "./SidePopup.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import ContactCard from "./ContactCard";
import LabeledText from "./LabeledText";
import { useDispatch, useSelector } from "react-redux";
import { updateContactItems, updateIndex } from "../redux/actions";

function SidePopup({ open, setOpen }) {
  const handlecloseMenu = () => {
    setOpen(false);
  };

  const [addInput1, setaddInput1] = useState(0);
  const [addInput2, setaddInput2] = useState(0);
  const [addemail, setAddemail] = useState(false);
  const [emailarr, setEmailArr] = useState([]);
  const [contactarr, setContactArr] = useState([]);
  const [getID, setgetID] = useState();
  const [getselectedIndex, setgetselectedIndex] = useState();


  console.log(emailarr, contactarr, "emailarr");

  const handleAddmore1 = () => {
    setaddInput1(addInput1 + 1);
  };
  const handleAddmore2 = () => {
    setaddInput2(addInput2 + 1);
    setAddemail(true);
  };

  const contactItems = useSelector((state) => state.contacts.contactItems);

  const dispatch = useDispatch();

  const handleAdddataCard = () => {
    setOpen(false);
    dispatch(updateContactItems(null, null,null, null,"saveclicked"));
    dispatch(updateIndex(getselectedIndex,"saveclicked"))
  };
  
  useEffect(() => {
    
    setEmailArr([])
    setContactArr([])
    setaddInput1(0)
    setaddInput2(0)
  }, [getID]);

 


  const handleAddDatabtn = () => {
    setAddemail(false);
    let newemailarr=""
    let newcontactarr=""
    console.log(emailarr,contactarr,"contactarr11")
    newemailarr = emailarr.join(" / ");
    newcontactarr = contactarr.join(" / ");
  
    if (emailarr.length === 0) {
      dispatch(updateContactItems(newcontactarr, getID));
    } else if (contactarr.length === 0) {
      dispatch(updateContactItems(newemailarr, getID));
    } else {
      dispatch(updateContactItems(newemailarr, newcontactarr, getID));
    }


  };

  const highlighCard = (index) => {
    setgetselectedIndex(index);
    dispatch(updateContactItems(null, null,null, index));
    
  }

  return (
    <div className="sidepopup_wrapper">
      <div className="sidepopup_sidebar">
        <div style={{ display: "flex" }}>
          <div>
            <ArrowBackIcon
              onClick={handlecloseMenu}
              style={{ fontSize: "40px" }}
            />
          </div>
          <div
            style={{
              fontSize: "25px",
              fontWeight: "500",
              alignSelf: "center",
              marginLeft: "20px",
            }}
          >
            Contacts
          </div>
        </div>
        <div
          style={{
            paddingTop: "15px",
            fontSize: "18px",
            fontWeight: "400",
            color: "	#989898",
          }}
        >
          Please provide the company's email and contact.
        </div>

        {/* card */}
        {!addemail && (
          <>
            <div style={{ marginTop: "30px",cursor:"pointer" }}>
              {contactItems.map((item) => {
       
                return (
                  <ContactCard
                    item={item}
                    open={open}
                    setOpen={setOpen}
                    addemail={addemail}
                    setAddemail={setAddemail}
                    emailarr={emailarr}
                    contactarr={contactarr}
                    getID={getID}
                    setgetID={setgetID}
                    highlighCard={highlighCard}
                    color={item.color?item.color:"2px solid #e7e4e4"}
                  />
                );
              })}
            </div>
            <div>
              <button
                onClick={handleAdddataCard}
                style={{
                  height: "50px",
                  width: "100%",
                  marginTop: "44px",
                  backgroundColor: "rgb(182, 51, 51)",
                  color: "white",
                  borderColor: "white",
                  borderRadius: "13px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Save
              </button>
            </div>
          </>
        )}

        {addemail  &&  (
          <>
            <div>
              <LabeledText
                label={"Email ID"}
                addInput={addInput1}
                setEmailArr={setEmailArr}
                emailarr={emailarr}
              />
              <div>
                <button
                  onClick={handleAddmore1}
                  style={{
                    height: "50px",
                    width: "98%",
                    marginTop: "20px",
                    backgroundColor: "#ffeeee",
                    color: "rgb(182, 51, 51)",
                    borderColor: "white",
                    borderRadius: "13px",
                    fontSize: "18px",
                    fontWeight: "600",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AddCircleOutlineIcon />
                  Add more
                </button>
              </div>
            </div>

            <div>
              <LabeledText
                label={"Contact Number"}
                addInput={addInput2}
                setContactArr={setContactArr}
                contactarr={contactarr}
              />
              <div>
                <button
                  onClick={handleAddmore2}
                  style={{
                    height: "50px",
                    width: "98%",
                    marginTop: "20px",
                    backgroundColor: "#ffeeee",
                    color: "rgb(182, 51, 51)",
                    borderColor: "white",
                    borderRadius: "13px",
                    fontSize: "18px",
                    fontWeight: "600",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AddCircleOutlineIcon />
                  Add more
                </button>
              </div>
            </div>
            <div>
              <button
                onClick={handleAddDatabtn}
                style={{
                  height: "50px",
                  width: "100%",
                  marginTop: "40px",
                  backgroundColor: "rgb(182, 51, 51)",
                  color: "white",
                  borderColor: "white",
                  borderRadius: "13px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Save
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SidePopup;
