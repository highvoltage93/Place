import React from "react";

const UserItem = (props) => {
  return (
    <li className="user-item">
      <div className="user-item_content">
        <div className="user-item_img">
            <img src={props.image} alt=""/>
        </div>
        <div className="user-item_info">
            <h2>{props.name}</h2>
            <h3>{props.placeCount} {props.places === 1 ? 'Place' : 'Places'}</h3>
        </div>
      </div>
    </li>
  );
};

export default UserItem;
