import React from "react";
import UserList from "../components/UserList";

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Test',
            image: 'https://img.tsn.ua/cached/1518092914/tsn-3122bdbfc8d6fcfa75d8528e9b9cd61a/thumbs/315x210/b4/b1/ada811fe61784362abc9a989cbceb1b4.jpg',
            places: 3
        }
    ]

  return <UserList items={USERS} />
};

export default Users;
