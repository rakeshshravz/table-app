import AppSeachIcon from "../Icons/AppSeachIcon";
import ProfileIcon from "../Icons/ProfileIcon";
import NotificationIcon from "../Icons/NotificationIcon";

const RightHeader = () => {
  return (
    <div className="right-header">
      <div className="greetings-box">
        <div className="greetings-text">☀️️ Good morning Ashley!</div>
      </div>
      <div className="actions-box">
        <div className="action-menu">
          <AppSeachIcon />
        </div>
        <div className="action-menu">
          <NotificationIcon />
        </div>
        <div className="action-menu">
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
};

export default RightHeader;
