import React from 'react'
import {PiCellSignalHighFill, PiCellSignalMediumFill, PiCellSignalLowFill} from 'react-icons/pi'
import {FaExclamationTriangle} from 'react-icons/fa'
import { TbLineDashed } from 'react-icons/tb'
import Card from '../components/Card'


const PriorityGroup = (props) => {

  let tickets = props.tickets
  let users = props.users

  // Sorting based on the title as they are already grouped by Priority
  tickets.sort((a, b) => {
    const nameA = a.title.toLowerCase(); 
    const nameB = b.title.toLowerCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });

  // Priority order to be shown
  let priorityCat = [0,4,3,2,1];

  // Making of objects that should be traversed and shown in the page
  let priorityCatObjs = priorityCat.map((data) => {

    // creating arrays for each priority
    let priorityArr = tickets
      .filter((ticket) => ticket.priority === data)
      .map((filteredTicket) => {
        return filteredTicket;
      });
      let name = ["No Priority", "Low", "Medium", "High", "Urgent"]

      // returning the object required
    return {
      symbol: data,
      Name: name[data],
      len: priorityArr.length,
      list: priorityArr,
      priority: data,
    };
  });

  // The objects created above will be traversed and required values will be used to display.
  return (
    <div className="tickets_container">
      {priorityCatObjs.map((obj) => {
        return (
          <div className="tickets_inner_container">
            <div className="title_bar">
            {obj.priority===0?<TbLineDashed style={{color:"grey"}}></TbLineDashed>
                :obj.priority===1?<PiCellSignalLowFill style={{color:"grey"}}></PiCellSignalLowFill>
                :obj.priority===2?<PiCellSignalMediumFill style={{color:"grey"}}></PiCellSignalMediumFill>
                :obj.priority===3?<PiCellSignalHighFill style={{color:"grey"}}></PiCellSignalHighFill>
                :<FaExclamationTriangle style={{color:"red"}}></FaExclamationTriangle>
            }
              <span>{obj.Name}</span>
                <span style={{color: "grey"}}>{obj.len}</span>
                <div className="plus_dash" style={{color: "grey"}}>
                <span>+</span>
                <TbLineDashed></TbLineDashed>
              </div>
            </div>
            <div className="cards_array">
              {
                obj.list.map((ticket) => {
                  return (
                    <Card ticket={ticket} users={users} group={"priority"}></Card>
                  )
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default PriorityGroup