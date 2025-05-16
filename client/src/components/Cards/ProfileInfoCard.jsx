import React from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/userContext";
import { useNavigate } from "react-router-dom";

const ProfileInfoCard = () => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  };

  return (  
    user && (
      <div className="flex items-center">
        <img
          src={user.profileImageUrl}
          alt=""
          className="w-11 h-11 bg-gray-300 rounded-full mr-3 cursor-pointer"
        />
        <div>
          <div className="text-[18px] text-black font-bold leading-3 py-1 cursor-pointer">
            {user.name || ""}
          </div>
          <button
            className="text-amber-600 text-md font-semibold cursor-pointer hover:underline"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default ProfileInfoCard;
