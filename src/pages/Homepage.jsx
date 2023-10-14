import React,{useContext, useState, useEffect} from 'react'
import { UserContext } from '../App'
import StatusGroup from './StatusGroup';
import UserGroup from './UserGroup';
import PriorityGroup from './PriorityGroup';

const Homepage = () => {
    // retrieving variables from the context we created
    const {group, order} = useContext(UserContext);
    
    const [tickets, setTickets] = useState([])
    const [users, setUsers] = useState([])

    // fetching data from given API
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