export const updateContactItems = (mailID,phone,index,del,saveClicked) => {
    return {
      type: "UPDATE_CONTACT_ITEMS",
      payload:{ 
        mailID:mailID,
        phone:phone,
        index:index,
        deleterow:del,
        saveClicked:saveClicked
    }

    };
  };

  export const updateIndex = (selectedIndex,selectClicked) => {
    return {
      type: "UPDATE_INDEX",
      payload:{
        selectedIndex:selectedIndex,
        selectClicked:selectClicked
      }

    };
  };