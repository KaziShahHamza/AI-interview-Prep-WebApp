import React, { useContext } from "react";
import { UserContext } from "../../Context/userContext";

const InterviewPrep = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <>
      <div>InterviewPrep</div>
      {user ? "User Yes" : "User No"}
    </>
  );
};

export default InterviewPrep;
