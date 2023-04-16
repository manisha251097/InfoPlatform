import React, { useEffect, useState } from "react";
import "./ContactCard.css";
import ContactCard from "./ContactCard";
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { useSelector } from "react-redux";



function Info({ open, setOpen }) {

  const contactItems = useSelector((state) => state.contacts.contactItems);
  const lastEditedIndex = useSelector((state) => state.contacts.lastEditedIndex);
  const selectedIndex = useSelector((state) => state.contacts.selectedIndex);
  const selectClicked = useSelector((state) => state.contacts.selectClicked);

  console.log("lastEditedIndex", lastEditedIndex)


  const [FooterItems, setFooterItems] = useState([
    {
      key: "Contact",
      Icon: <PermContactCalendarIcon style={{ fontSize: '33px', color: "#cacaca" }} />,
      label: "Contact",
      mailID: "xyz@gmail.com",
      phone: "8926511925",
      del: false

    },
    {
      key: "Address",
      Icon: <LocationOnIcon style={{ fontSize: '33px', color: "#cacaca" }} />,
      label: "Address",
      address: "24,1st Floor, Sushila Bhavan, Adi Marzban Path, Ballard Estate",
      del: false
    },
    {
      key: "Hours_of_Operation",
      Icon: <WorkHistoryIcon style={{ fontSize: '33px', color: "#cacaca" }} />,
      label: "Hours of Operation",
      time: "Monday -Friday : 9:00am to 10pm",
      del: false
    },
    {
      key: "social_media",
      Icon: <InsertLinkIcon style={{ fontSize: '33px', color: "#cacaca" }} />,
      label: "Social Media and Links",
      del: false
    },
    {
      key: "Statement",
      Icon: <FormatQuoteIcon style={{ fontSize: '33px', color: "#cacaca" }} />,
      label: "Statement",
      content: 'You think it we ink it.',
      del: false
    },
  ])



  useEffect(() => {
    const temp = [...FooterItems];
    temp[0] = contactItems[0]
    temp[0]["del"] = false
    if (selectClicked) {
      temp[0] = contactItems[selectedIndex]
      temp[0]["del"] = false
    }
    setFooterItems(temp)
  }, [contactItems])

  const highlighCard = (index) => {
    // console.log("index", index)
  }

  return (
    <>
      <div className="info">
        {FooterItems.map((item) => {
          return (
            <ContactCard item={item} open={open} setOpen={setOpen} mainPage={true} highlighCard={highlighCard} color={"2px solid #e7e4e4"} />
          )
        })}
      </div>
    </>
  );
}

export default Info;
