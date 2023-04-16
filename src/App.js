import React, { useEffect, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import "./App.css";
import logo from "./Assets/logo.jpeg";
import HelpBox from "./Components/HelpBox";
import SideMenu from "./Components/SideMenu";
import TopBar from "./Components/TopBar";
import Info from "./Components/Info";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import SidePopup from "./Components/SidePopup";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

function App() {
  const [value, setValue] = useState(0);
  const [open, setOpen] = React.useState(false);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Typography>{children}</Typography>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam.");

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="MainPage">
      <div className="Topbar colorcodewhite">
        <TopBar />
      </div>
      <div className="NavAndTabsContent">
        <div className="Navbar colorcodewhite">
          <div className="logoText">
            <img style={{ width: "65px" }} src={logo}></img>
            <div className="logoText1">A.T.Inks</div>
          </div>
          <div style={{ marginTop: "20px" }}>
            <SideMenu />
          </div>
          <div>
            <HelpBox />
          </div>
        </div>
        <div className="TabsContent colorcodewhite">
          <div
            style={{
              fontSize: "30px",
              fontWeight: "500",
              margin: "5px 5px 22px 5px",
            }}
          >
            About Us
          </div>
          <div className="logoText">
            <img src={logo}></img>
            <div className="logoText1">A.T.Inks</div>
          </div>

          <div style={{
              paddingTop: "15px",
              fontSize: "18px",
              fontWeight: "400",
              color: "	#989898",
              width: "20px",
              width: "65%",
              display: "flex"
            }}>
            {isEditing ? (
              <input  style={{  fontSize: "18px",
              fontWeight: "400",
              color: "	#989898",  width: "-webkit-fill-available",
                borderRadius: "8px",
                padding: "7px"}}type="text" value={text} onChange={handleInputChange} />
            ) : (
              <div>{text}</div>
            )}
            {isEditing ? (
              <button style={{ backgroundColor: "green", color: "white", padding: "10px",    borderRadius: "8px",
              marginLeft: "15px" }} onClick={handleSave}>Save</button>
            ) : (
              <ModeEditOutlineIcon  onClick={handleEdit}/>
            )}
          </div>
            
          <div style={{ marginTop: "20px" }}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="basic tabs example"
              >
                <Tab label="Info" {...a11yProps(0)} />

                <Tab label="FAQ" {...a11yProps(1)} />
                <Tab label="Complaints and Feedback" {...a11yProps(2)} />
                <Tab label="Privacy Policy" {...a11yProps(3)} />

                <Tab label="Complaints and Feedback" {...a11yProps(4)} />
                <Tab label="Terms and Conditions" {...a11yProps(5)} />
              </Tabs>
            </Box>

            <Box className="bundleViewContent">
              <TabPanel value={value} index={0}>
                <Info open={open} setOpen={setOpen} />
              </TabPanel>

              <TabPanel value={value} index={1}>
                {/* <Info id={id} /> */}
              </TabPanel>
              <TabPanel value={value} index={2}>
                {/* <Info id={id} /> */}
              </TabPanel>
              <TabPanel value={value} index={3}>
                {/* <Info id={id} /> */}
              </TabPanel>

              <TabPanel value={value} index={4}>
                {/* <Info id={id} /> */}
              </TabPanel>
              <TabPanel value={value} index={5}>
                {/* <Info id={id} /> */}
              </TabPanel>
            </Box>
          </div>
        </div>
        {open && (
          <>
            <SidePopup open={open} setOpen={setOpen} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
