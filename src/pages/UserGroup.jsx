import React from 'react'
import { TbLineDashed } from 'react-icons/tb'
import Card from '../components/Card'
import Profilepic from '../components/Profilepic'

const UserPriority = (props) => {

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

  // Making of objects that should be traversed and shown in the page
  let userObjs = users.map((data) => {

    // creating arrays for each user
    let userArr = tickets
      .filter((ticket) => ticket.userId === data.id)
      .map((filteredTicket) => {
        return filteredTicket;
      });

      // returning the object
    return {
      symbol: data,
      Name: data.name,
      len: userArr.length,
      list: userArr,
      online: data.available,
    };
  });

  // The objects created above will be traversed and required values will be used to display.
  return (
    <div className="tickets_container">
      {userObjs.map((obj) => {
        return (
          <div className="tickets_inner_container">
            <div className="title_bar">
              <Profilepic online={obj.online} user={obj.symbol}></Profilepic>
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
                    <Card ticket={ticket} users={users} group={"user"}></Card>
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

export default UserPriority