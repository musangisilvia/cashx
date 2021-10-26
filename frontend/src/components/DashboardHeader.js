import "../styles/DashboardHeader.css";
import { ReactComponent as Logo } from '../images/Logo.svg';
import UserProfile from './UserProfile';
import { Link } from 'react-router-dom';

function DashboardHeader() {
  return (
    <div className="dashboard-header">
      <Link to="/"><Logo /></Link>
      <UserProfile />
    </div>
  )
}

export default DashboardHeader;
