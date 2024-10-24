import React, { useState } from 'react'

const App = () => {
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[phone,setPhone]=useState("");

    const handleSubmit=e=>{
        e.preventDefault();
        console.log({username,email,password,phone});
let userData={username,email,password,phone};
let result = JSON.stringify(userData)
        localStorage.setItem("user",result)
    } 
  return (
    <section id="formBlock">
       <article>
       <h1>FBC Form</h1>
        <form onSubmit={handleSubmit}>
           <div className="formgroups">
           <input type="text" placeholder='enter user name'
            onChange={(event)=>setUsername(event.target.value)}
            />
           </div>
          
           <div className="formgroups">
           <input type="email" placeholder='enter email' 
           onChange={(event)=>setEmail(event.target.value)}
            />
           </div>
           <div className="formgroups">
           <input type="password" placeholder='enter password' 
           onChange={(event)=>setPassword(event.target.value)}
            />
           </div>
           
           <div className="formgroups">
           <input type="tel" placeholder='enter phone number'
           onChange={(event)=>setPhone(event.target.value)}
            />
           </div>
          
          <div className="formgroups">
          <input type="submit" />
          </div>

        </form>
       </article>
    </section>
  )
}

export default App