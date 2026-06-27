import { useEffect, useState } from "react";

export default function App(){

  const [status,setStatus] = useState("Loading...");


  useEffect(()=>{

    fetch("https://bo2-production-f1ff.up.railway.app/")
    .then(res => res.text())
    .then(data => {
      setStatus(data);
    })
    .catch(err=>{
      setStatus("Backend Error");
    });


  },[]);


  return (
    <div>

      <h1>Mega SicBo Dashboard</h1>

      <h2>{status}</h2>

    </div>
  );
}
