import '../styles/Flash.css';

const Flash = ({setFlash, type, msg}) => {

  const handleClick = (e) => {
    // const flash = document.querySelector('flash-notification');
    setFlash(null);
  }

  return (
    <div className={"flash-notification " + "flash-notification-"+type}>
        <p>{msg}</p>
      <i class="uil uil-multiply" onClick={handleClick}></i>
    </div>
  )
}

export default Flash;
