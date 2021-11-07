import "../styles/Balance.css";

const Balance = ({balance}) => {

  return (
    <div className="balance">
      <p className="title">Cash Balance</p>  
      <p className="actual-balance">{'$ ' + Math.round(balance *100) / 100}</p>
    </div>
  )
}

export default Balance;
