import classes from "./FormContainer.module.css";
import classesU from "./UsersList.module.css"

const UsersList = (props) => {
  return (
    <div className={classes.container}>
       {props.usersArr.map((user) => {
        return <div className={classesU.userItem}>{user.userName} ({user.age} years old)</div>
       })}
    </div>
  );
};

export default UsersList;
