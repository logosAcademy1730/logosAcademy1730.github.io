import { useState } from "react";
import users from "./users";

const ShowUsers = () => {
  const [usersList, setUsersList] = useState(users);

  const removeUser = (user) => {
    
    let newUsers = usersList.filter((item) => item.name !== user);
    setUsersList(newUsers);
    
  };

  // const addUser = () => {
  //   let i = Math.floor(Math.random() * users.length);
  //   setUsersList((userList) => [...usersList, users[i]]);
  // };

  return (
    <>
      {/* <button onClick={addUser}>add</button> */}
      {usersList.map(({ name, email,idx }) => (
        <p key={name}>
          User - {name} contact - {email}
          <button onClick={() => removeUser(name)}>delete</button>{" "}
        </p>
      ))}
    </>
  );
};

export default ShowUsers;
