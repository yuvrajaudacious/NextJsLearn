export default async function GetUsers() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
}
