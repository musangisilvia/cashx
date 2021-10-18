import "../styles/UserProfile.css";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../helpers/auth'


function UserProfile() {

  const [ddClass, setDdClass] = useState("dd-none");
  
  useEffect(() => {
    const handleWindowClick = () => {
      if (ddClass === "dd-none"){
        setDdClass("dd-menu"); 
      } else {
        setDdClass("dd-none");
      }
    };

      if (ddClass === "dd-menu"){
        window.addEventListener('click', handleWindowClick);
      } else {
        window.removeEventListener('click', handleWindowClick)
      }
      return () => window.removeEventListener('click', handleWindowClick);
  }, [ddClass, setDdClass]);

  const handleDropClick = (e) => {
    console.log("clicked dd button")
    if (ddClass === "dd-none"){
      setDdClass("dd-menu"); 
    } else {
      setDdClass("dd-none");
    }
  };

  return (
    <div className="user-profile">
      <div className="prof">
        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80" alt="avatar" />
        <div className="triangle">  	
          <span class="material-icons" onClick={handleDropClick}>
            arrow_drop_down
          </span>
        </div>
      </div>
      <div className={ddClass}>
        <p>Signed in as <br /> <strong> Tuva </strong> </p>
        <ul>
          <Link to="/"><li>Your profile</li></Link>
          <Link to="/"><li>Settings</li></Link>
          <li onClick={() => logout() }>Log Out</li>
        </ul>
      </div>
    </div>
  )
}

export default UserProfile;
