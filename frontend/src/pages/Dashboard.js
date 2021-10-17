import { logout  } from '../helpers/auth';

function Dashboard() {
  return (
    <>
      <p>Hello world</p>
      <button onClick={ () => logout() }>Logout</button>
    </>
  )
}

export default Dashboard;
