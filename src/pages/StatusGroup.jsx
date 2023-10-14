import React from "react";
import Card from "../components/Card";
import { CgTimelapse } from "react-icons/cg";
import {HiCheckCircle} from 'react-icons/hi'
import {FaRegCircle, FaTimesCircle} from 'react-icons/fa'
import {TbCircleDotted, TbLineDashed} from 'react-icons/tb'

const StatusGroup = (props) => {
  let tickets = props.tickets
  let users = props.users
  let order = props.order

  // Sorting based on priority and title based on the order property
  if(order==="Priority"){
    tickets.sort((a, b) => {
      return b.priority - a.priority;
    });
  }else{
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
  }
  
  // order of statusses
  let statusCat = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];

  // Making of objects that should be traversed and shown in the page
  let statusCatObjs = statusCat.map((data) => {

    // creating arrays for each status
    let statusArr = tickets
      .filter((ticket) => ticket.status === data)
      .map((filteredTicket) => {
        return filteredTicket;
      });

      // returning the object
    return {
      symbol: data,
      Name: data,
      len: statusArr.length,
      list: statusArr,
    };
  });

  // The objects created above will be traversed and required values will be used to display.
  return (
    <div className="tickets_container">
      {statusCatObjs.map((obj) => {
        return (
          <div className="tickets_inner_container">
            <div className="title_bar">
              {obj.symbol==="Backlog"?<TbCircleDotted></TbCircleDotted>
              :obj.symbol==="Todo"?<FaRegCircle style={{color: "grey",fontSize: '.9em'}}></FaRegCircle>
              :obj.symbol==="In progress"?<CgTimelapse style={{color: "orange"}}></CgTimelapse>
              :obj.symbol==="Done"?<HiCheckCircle style={{color: "rgb(0, 89, 255)"}}></HiCheckCircle>
              :<FaTimesCircle style={{color: "grey"}}></FaTimesCircle>
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
                    <Card ticket={ticket} users={users} group={"status"}></Card>
                  )
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatusGroup;
