import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-content">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7eaTHYrwbIDLDcu6q9UGxpa6vZ8aRoMzfQ&s"
          alt="food logo"
          style={{ width: "90px" }}
        />
      </div>

      <div className="navBar">
        <ul className="nevItems">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return <Header />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
