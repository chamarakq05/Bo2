import { useEffect, useState } from "react";

export default function App(){

  const [data,setData] = useState("Loading...");

  useEffect(()=>{

    fetch("https://bo2-production-f1ff.up.railway.app/")
    .then(res=>res.text())
    .then(result=>{
      setData(result);
    })
    .catch(()=>{
      setData("Backend Error");
    });

  },[]);


  return (
    <div>
      <h1>Mega SicBo Dashboard</h1>

      <h2>{data}</h2>

    </div>
  );
}
