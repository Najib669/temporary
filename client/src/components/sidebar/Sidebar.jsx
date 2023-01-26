import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UserIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import DeliveryIcon from "@mui/icons-material/LocalShippingOutlined";
import DonationIcon from "@mui/icons-material/VolunteerActivismOutlined";
import EventIcon from "@mui/icons-material/EventNoteOutlined";
import NewsIcon from "@mui/icons-material/NewspaperOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import SystemIcon from "@mui/icons-material/DnsOutlined";
import LogsIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsIcon from "@mui/icons-material/SettingsSuggestOutlined";
import ProfileIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">NAFAS</span>
        </Link>
      </div>
      <hr></hr>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <UserIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <ProductIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <DeliveryIcon className="icon" />
            <span>Shop</span>
          </li>
          <Link to="/donations" style={{ textDecoration: "none" }}>
          <li>
            <DonationIcon className="icon" />
            <span>Donation</span>
          </li>
          </Link>
          <Link to="/events" style={{ textDecoration: "none" }}>
            <li>
              <EventIcon className="icon" />
              <span>Events</span>
            </li>
          </Link>
          <Link to="/news" style={{ textDecoration: "none" }}>
            <li>
              <NewsIcon className="icon" />
              <span>News</span>
            </li>
          </Link>
          <Link to="/mails" style={{ textDecoration: "none" }}>
          <li>
            <EmailIcon className="icon" />
            <span>Mails</span>
          </li>
          </Link>

          <p className="title">USER</p>
          <Link to="/profil" style={{ textDecoration: "none" }}>
            <li>
              <ProfileIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>
          <li>
            <LogoutOutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
