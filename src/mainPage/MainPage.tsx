import React, { useEffect, useState} from 'react'
import axios from 'axios';

const MainPage = () => {
  const [fakeData, setFakeData] = useState<User[] | undefined>(undefined);
  const [error, setError] = useState("");
  
  interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {}
    phone: string,
    website: string,
    company: {}
}

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users: any) => {
        setFakeData(users.data);
        console.log(users.data);
      })
      .catch((err) => setError(err.message));
  }, []);
  
  if (!fakeData && !error) {
  return <h1>LOADING</h1>  
  }
  
  return (
  <>
    {fakeData && fakeData.map(user => {
    return <p key={user.id}> {user.name}</p>
  })
}
  <p> Working </p>
  {error && <p> {error}</p>}
  </>
  )
}

export default MainPage
