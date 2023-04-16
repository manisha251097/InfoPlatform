import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { UPDATE_CONTACT_ITEMS,UPDATE_INDEX } from './actionType'
const initialState = {
  contactItems: [
    {
      key: "Contact",
      Icon: (
        <PermContactCalendarIcon
          style={{ fontSize: "33px", color: "#cacaca" }}
        />
      ),
      label: "Contact1",
      mailID: "xyz@gmail.com",
      phone: "8926511925",
      del: true,
      id: 0
    },
    {
      key: "Contact",
      Icon: (
        <PermContactCalendarIcon
          style={{ fontSize: "33px", color: "#cacaca" }}
        />
      ),
      label: "Contact2",
      mailID: "xyz@gmail.com",
      phone: "8926511925",
      del: true,
      id: 1
    },
    {
      key: "Contact",
      Icon: (
        <PermContactCalendarIcon
          style={{ fontSize: "33px", color: "#cacaca" }}
        />
      ),
      label: "Contact3",
      mailID: "xyz@gmail.com",
      phone: "8926511925",
      del: true,
      id: 2
    },
  ],
  lastEditedIndex: "",
  saveClicked: "",
  selectedIndex:"",
  selectClicked:"",

};

const contactsReducer = (state = initialState, action) => {
  console.log(state, action, "kkkkk")
  switch (action.type) {
    case UPDATE_CONTACT_ITEMS:
      const { index, mailID, phone, deleterow, saveClicked } = action.payload;
      const contactItems = [...state.contactItems];

      if (mailID !== undefined) {
        contactItems[index] = {
          ...contactItems[index],
          mailID: mailID
        };
      }
      if (phone !== undefined) {
        contactItems[index] = {
          ...contactItems[index],
          phone: phone
        };
      }
      if (deleterow) {
        const deleterow1 = Number(deleterow);
        contactItems[index] = {
          ...contactItems[index],

          phone: phone
        };
        for (let i = 0; i < contactItems.length; i++) {
          delete contactItems[i].color;
        }
        contactItems[deleterow1]["color"] = "2px solid red";
      }
      return {
        ...state,
        contactItems: contactItems,
        lastEditedIndex: index,
        saveClicked: saveClicked
      };

    case UPDATE_INDEX:
      const { selectedIndex,selectClicked} = action.payload;
      return {
        ...state,
        selectedIndex:selectedIndex,
        selectClicked:selectClicked
      };
      
    default:
      return state;
  }
};

export default contactsReducer;