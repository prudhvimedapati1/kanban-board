import React,{useContext, useState, useEffect} from 'react'
import { UserContext } from '../App'
import StatusGroup from '../pages/StatusGroup';
import UserGroup from '../pages/UserGroup';
import PriorityGroup from '../pages/PriorityGroup';

const Homepage = () => {

    const {group, order} = useContext(UserContext);
    const [tickets, setTickets] = useState([])
    const [users, setUsers] = useState([])
    const fetchAPI = async() => {
        const resp = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
        const response = await resp.json();
        setTickets(response.tickets)
        setUsers(response.users)
    }

    useEffect(() => {
        fetchAPI();
      }, []);

  return (
    <div>
      {group === "Status"? (
          <StatusGroup tickets={tickets} users={users} order={order}></StatusGroup>
        ) : group === "User"? (
          <UserGroup tickets={tickets} users={users} order={order}></UserGroup>
        ) :(
          <PriorityGroup tickets={tickets} users={users}></PriorityGroup>
        )}
      </div>
  )
}

export default Homepage