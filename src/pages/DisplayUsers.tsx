import { useQuery } from "@tanstack/react-query";

function DisplayUsers() {
  const { isLoading, error, data: users } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://api.github.com/users").then((res) => res.json()),
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (error) return <h2>Error fetching users</h2>;

  return (
    <div>
      <h1>Users</h1>
      <div style={{display:"flex",flexWrap:"wrap",gap:"8px",justifyContent:"center"}}>
        {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar_url} alt={user.login} width="100" />
        </div>
      ))}
      </div>
    </div>
  );
}

export default DisplayUsers;