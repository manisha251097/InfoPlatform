import React from "react";
import "./SideMenu.css";
import AddToQueueOutlinedIcon from "@mui/icons-material/AddToQueueOutlined";
import PeopleIcon from '@mui/icons-material/People';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import PaymentsIcon from '@mui/icons-material/Payments';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InfoIcon from '@mui/icons-material/Info';


const ICON_SIZE = 20;

function SideMenu() {
  const sideMenuItems = [
    {
      // link: "/home",
      Icon: <DashboardOutlinedIcon size={ICON_SIZE} />,
      label: "Dashboard",
      // tabIndex: -1,
    },
    {
      Icon: <AddToQueueOutlinedIcon size={ICON_SIZE} />,
      label: "Orders",
    },
    {
      Icon: <PeopleIcon size={ICON_SIZE} />,
      label: "Team Members",
    },
    {
      Icon: <HandshakeIcon size={ICON_SIZE} />,
      label: "Partners",
    },
    {
      Icon: <ViewInArIcon size={ICON_SIZE} />,
      label: "Product Listings",
    },
    {
      Icon: <EmojiEventsIcon size={ICON_SIZE} />,
      label: "Awards and Honours",
    },
    {
      Icon: <InfoIcon size={ICON_SIZE} />,
      label: "About us",
    },
    {
      Icon: <PaymentsIcon size={ICON_SIZE} />,
      label: "Payment Info",
    },

  ];

  return (
    <>
     {sideMenuItems.map((MenuItem, index) => {
      return(
        <div className="sidemenuMain">
        <div  style={{display:"flex"}}>
        <div>{MenuItem?.Icon}</div>
        <div style={{paddingLeft:"15px"}}>{MenuItem?.label}</div>
        </div>
        </div>
        
      )
     })}
    </>
  );
}

export default SideMenu;
