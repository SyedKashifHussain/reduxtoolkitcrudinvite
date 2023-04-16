import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./features/Users";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [updatedName, setUpdatedName] = useState("");

  const userList = useSelector((state) => state.users.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="adduser">
        <h2>ADD USERS DATA</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="role">Role</label>
        <input
          type="text"
          name="role"
          onChange={(e) => setRole(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({ id: userList[userList.length - 1].id + 1, name, role })
            );
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayusers">
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h2>{user.name}</h2>
              <h2>{user.role}</h2>
              <input
                type="text"
                name="updateName"
                placeholder="Update Name"
                onChange={(e) => setUpdatedName(e.target.value)}
              />
              <button onClick={()=>{
                dispatch(updateUser({id: user.id, name: updatedName}))
              }}>Update Name</button>
              <button onClick={()=>{dispatch(deleteUser({id:user.id}))}}>Delete User</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
