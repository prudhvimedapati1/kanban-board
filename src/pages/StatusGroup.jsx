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
  

  let statusCat = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];

  let statusCatObjs = statusCat.map((data) => {
    let statusArr = tickets
      .filter((ticket) => ticket.status === data)
      .map((filteredTicket) => {
        return filteredTicket;
      });
    return {
      symbol: data,
      Name: data,
      len: statusArr.length,
      list: statusArr,
    };
  });

  console.log(statusCatObjs);

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
