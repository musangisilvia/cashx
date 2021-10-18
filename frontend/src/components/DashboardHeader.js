import "../styles/DashboardHeader.css";
import { ReactComponent as Logo } from '../images/Logo.svg';
import UserProfile from './UserProfile';

function DashboardHeader() {
  return (
    <div className="dashboard-header">
      <Logo />
      <UserProfile />
    </div>
  )
}

export default DashboardHeader;
