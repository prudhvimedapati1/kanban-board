import React, { useState, useContext} from "react";
import {IoIosOptions,IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import { UserContext } from "../App";

const Dropdown = () => {
  
  const {group, order, passGroup, passOrder} = useContext(UserContext);
  const [grp, setGrp] = useState(group)
  const [odr, setOdr] = useState(order)

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setGrp(group)
    setOdr(order)
  };
 

  const handleItemClick1 = (item) => {
    setGrp(item.target.value)
  };
  const handleItemClick2 = (item) => {
    setOdr(item.target.value)
  };

  const closeDropdown = () => {
    setIsOpen(!isOpen)
    passGroup(grp);
    passOrder(odr);
  }

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
