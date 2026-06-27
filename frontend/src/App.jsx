import { useEffect, useState } from "react";

function App(){

const [status,setStatus] = useState("Loading...");


useEffect(()=>{

fetch("https://bo2-production-f1ff.up.railway.app/")
.then(res=>res.text())
.then(data=>{
 setStatus(data);
})
.catch(err=>{
 setStatus("Backend Error");
});


},[]);


return(
<div>

<h1>Mega SicBo Dashboard</h1>

<h3>{status}</h3>

</div>
)

}

export default App;
