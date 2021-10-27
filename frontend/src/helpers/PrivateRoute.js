import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import DashboardStockCarousel from "../components/DashboardStockCarousel";
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './auth';


function PrivateRoute({ component: Component, ...rest }) {
  const [logged] = useAuth();

  return <Route {...rest} render={(props) => (
    logged ?
      <>
        <div className="dashboard-headers">
          <DashboardHeader />
          <DashboardStockCarousel />
        </div>
        <DashboardNav />

       <Component {...props} /> 
      </>
      : <Redirect to="/login" />
  )}/>
}

export default PrivateRoute;
