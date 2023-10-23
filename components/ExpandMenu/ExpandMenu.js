import React from "react";
import customStyles from "./ExpandMenu.module.css";

const ExpandMenu = (props) => {
  const { data, clickFn, clx, clickFnTimeSlotView } = props;

  const handleClickFn = (option) => {
    clickFn(option);
  };
  return (
    <div className={`${customStyles.expandMenuContainer} ${clx}`}>
      {data.map((option, i) => (
        <div
          key={i}
          className={customStyles.loseClass}
          onClick={() => handleClickFn(option?.name)}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default ExpandMenu;
