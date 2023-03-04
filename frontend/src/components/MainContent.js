import React from 'react';
import Title from './Title';  
import CenterContainer from './CenterContainer';
import '../App.css';



export default function MainContent() {
    const [user, setUser] = React.useState(null)

    //for production set the fetch url correctly
    React.useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(response => {
          return response.json()
        })  
        .then(data => {
            console.log(data[0].f_name)
            setUser(data);
          })
      }, []);

    return (
        <main className='main-container'>
             
            <Title name={user ? user[0].f_name : '...'}/>
            <CenterContainer />
            
            
            
        </main>
    )
}