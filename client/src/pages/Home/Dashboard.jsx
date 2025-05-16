import { useContext } from "react";
import { UserContext } from "../../Context/userContext";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <div>Dashboard</div>
      {user ? "User Yes" : "User No"}
    </>
  );
};

export default Dashboard;
