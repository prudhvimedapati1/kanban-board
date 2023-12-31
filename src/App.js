import React,{createContext} from 'react';
import Navbar from './components/Navbar';
import useLocalStorage from './hooks/useLocalStorage';
import Homepage from './pages/Homepage';

// creating context

export const UserContext = createContext();


function App() {
  // using local storage hook to keep things asusual when reloaded
  const [group, setGroup] = useLocalStorage('grp','Status')
  const [order, setOrder] = useLocalStorage('odr','Priority')

  const passGroup=(item)=>{
    setGroup(item);
  }
  const passOrder=(item)=>{
    setOrder(item);
  }


  return (
    <UserContext.Provider value={{group, passGroup, order, passOrder}}>
    <div>
      <Navbar></Navbar>
      <Homepage></Homepage>
    </div>
    </UserContext.Provider>
  );
}

export default App;
