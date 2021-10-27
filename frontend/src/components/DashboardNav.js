import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/DashboardNav.css';
import { logout } from '../helpers/auth';

function DashboardNav() {
  const [showNav, setShowNav] = useState('nav-hide');


  return(
    <div className={"dashboard-nav " + showNav}
      onMouseEnter={() => setShowNav('nav-show')}
      onMouseLeave={() => setShowNav('nav-hide')}>
      <ul>
        <li>
          <Link to="/dashboard">
            <i className="uil uil-create-dashboard"></i>
            Home
          </Link>
        </li>
        
       <li>
         <Link to="/markets">
           <i class="uil uil-money-withdrawal"></i>
           Markets
         </Link>
       </li>

       <li>
         <Link to="/analysis">
           <i class="uil uil-chart-line"></i>
           Analysis
         </Link>
       </li>

       <li>
         <Link to="/history">
           <i class="uil uil-history"></i>
           History
         </Link>
       </li>

       <li>
         <Link to="/research">
           <i class="uil uil-newspaper"></i>
           Research
         </Link>
       </li>

       <li>
         <Link to="wallet">
           <i class="uil uil-wallet"></i>
           Wallet
         </Link>
       </li>

       <li>
         <Link to="/settings">
           <i class="uil uil-setting"></i>
           Settings
         </Link>
       </li>

       <li>
         <Link to="#" onClick={ () => logout() }>
           <i class="uil uil-signout"></i>
           Logout
         </Link>
       </li>

      </ul>
    </div>
  )
}

export default DashboardNav
