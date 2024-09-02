import { useState } from "react";

function App() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [error,setError] = useState("");
  const handleSubmit = (e) => {
    
    e.preventDefault();
    setError("")
    console.log(message)
    if(message.length < 10){
      setError("Message Must be 10 or more character")
    }
    else if(!email.includes('@')){
      setError("Enter a valid email")
    }
    else{
      
    }
    
  }
  return (
    <>
      
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', justifyContent:'center',alignItems:'center' ,padding:"20px",gap:"10px"}}>
        <label>Name : </label>
        <input type="text" name="name" onChange={(e)=>setName(e.target.value)} required/>
        <label>Email : </label>
        <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} required/>
        <label>Message: </label>
        <input type="text" name="message" onChange={(e)=>setMessage(e.target.value)} required/>
        <button style={{backgroundColor:"#e5e5e5",padding:'10px',outline:'0px',border:'0px',borderRadius:"10px"}} type="submit">Submit</button>
      </form>
      {error!="" && <h1>{error}</h1>}
      {error ==  "" && message.length > 10 && <p>{message}</p>}
    </>
  )
}

export default App
