import SideBar from "../../Components/SideBar/SideBar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="wrapper">
        <div className="settings-title">
          <span className="settings-updatetitle">Update Your Account</span>
          <span className="settings-deletetitle">Delete</span>
        </div>
        <form className="settings-form">
          <label> Profile Picture </label>
          <div className="settings-pp">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="settings-img"
            />
            <label htmlFor="file-input">
            <i className="settings-pp-icon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="file-input" style={{display:'none'}} />
          </div>
          <label> Username</label>
          <input type="text" placeholder="Safak" />
          <label> Email</label>
          <input type="email" placeholder="safak@gmail.com" />
          <label> Password</label>
          <input type="password" />
          <button className="settings-submit">Submit</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}
