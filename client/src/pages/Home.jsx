import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
function Home() {
  const { userData } = useContext(UserContext);
  const history = useNavigate();
  useEffect(() => {
    if (!userData.user) history.push("/login");
  }, []);
  return (
    <div>
      {userData.user ? (
        <h1>Welcome {userData.user.displayName}</h1>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
export default Home;
