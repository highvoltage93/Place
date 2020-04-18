import React from "react";
import Avatar from "../../shared/components/UIElements/Avatar";
import {Link } from "react-router-dom";
import Card from "../../shared/components/UIElements/Card";
import './UserItem.css'

const UserItem = (props) => {
  return (
    <li className="user-item">
      <Card>
        <Link to={`/${props.id}/places`}>
          <div className="user-item_content">
            <div className="user-item_img">
              <Avatar image={props.image} />
            </div>
            <div className="user-item_info">
              <h2>{props.name}</h2>
              <h3>
                {props.placeCount} {props.places === 1 ? "Place" : "Places"}
              </h3>
            </div>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
