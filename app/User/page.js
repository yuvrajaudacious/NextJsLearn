async function UserList() {
  let data = await fetch("https://dummyjson.com/users");
  data = await data.json();
  return data.users;
}

export default async function User() {
  let users = await UserList();
  console.log(users);
  return (
    <div>
      <h1>Users</h1>
      {
        users.map((item)=>(
            <div>
            <h3>Name:{item.firstName}</h3>
            </div>
        ))
      }
    </div>
  );
}
