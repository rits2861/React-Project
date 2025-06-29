



//API DATA FETCH PROJECT 
import './App.css'
import { NavLink, Route,Routes } from "react-router";
import UserList from "./UserList";

import UserAdd from "./UserAdd";
import UserEdit from "./UserEdit";
function App(){
    return(
   <div>
    <ul className="List">
        <li>
            <NavLink className="list" to="/">List</NavLink>
            <NavLink  className="add"to="/add">Add User</NavLink>
        </li>
    </ul>
    {/* <h1 >Integrate Json Server API and Loader making routes pages and adding user name</h1> */}

    <Routes>
      <Route path="/" element={<UserList/>}/>
      <Route path="/add" element={<UserAdd/>}/>
      <Route path="/edit/:id" element={<UserEdit/>}/>
    </Routes>
 </div>
)
 }
export default App;

//USERLIST USEREDIT APP .CC IN USE
