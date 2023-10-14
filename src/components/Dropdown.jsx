import React, { useState, useContext} from "react";
import {IoIosOptions,IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import { UserContext } from "../App";

const Dropdown = () => {
  
  // Retrieving context
  const {group, order, passGroup, passOrder} = useContext(UserContext);
  const [grp, setGrp] = useState(group)
  const [odr, setOdr] = useState(order)

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    // Making sure that values inside select tab doesn't change unless user clicks done button
    setGrp(group)
    setOdr(order)
  };
 
  // Maintaining local state until user clicks done
  const handleItemClick1 = (item) => {
    setGrp(item.target.value)
  };
  const handleItemClick2 = (item) => {
    setOdr(item.target.value)
  };

  // Making sure the context changes only when user clicks done, this also closes the dropdown
  const closeDropdown = () => {
    setIsOpen(!isOpen)
    passGroup(grp);
    passOrder(odr);
  }

  // defining options for select menu
  const items1 = ["Status", "User", "Priority"];
  const items2 = ["Priority", "Title"];

  return (
    <div className="dropdown_container">
        <div>
      <button onClick={toggleDropdown} className="dropdown_button">
        <span><IoIosOptions/></span>
        <span>Display</span>
        <span>{isOpen?<IoIosArrowUp/>:<IoIosArrowDown/>}</span>
      </button>
      </div>
      {isOpen && (
        <ul className="dropdown_list">
          <li>
            <div className="dropdown2">
            <span>Grouping</span>
              <div>
             <select value={grp} onChange={handleItemClick1}>
              { (
                  items1.map((item, index) => (
                    <option key={index} >
                      {item}
                    </option>
                  ))
              )}
              </select>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown2">
              <span>Sorting</span>
              <div>
              <select value={odr} onChange={handleItemClick2}>
              { (
                  items2.map((item, index) => (
                    <option key={index}>
                      {item}
                    </option>
                  ))
              )}
              </select>
              </div>
            </div>
          </li>
          <li>
            <button className="dropdown_done" onClick={closeDropdown}>Done</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
