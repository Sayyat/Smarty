import {useState} from "react";

export default function Users() {
    const [users, setUsers] = useState([{}])

    function getUsers() {
        fetch("/api/users")
            .then(response => response.json())
            .then(result => {
                setUsers(result)
                // console.log(result)
            })
    }

    return (
        <>
            <button onClick={getUsers}>Get Users</button>
            <h4>Users</h4>
            <div>
                {users.map((user, index) => (
                    <>
                        <span>id</span> - <span>{user.id}</span><br/>
                        <span>firstname</span> - <span>{user.firstname}</span><br/>
                        <span>lastname</span> - <span>{user.lastname}</span><br/>
                        <span>phoneNumber</span> - <span>{user.phoneNumber}</span><br/>
                    </>
                ))}
            </div>
        </>
    )
}