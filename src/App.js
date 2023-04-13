import logo from './logo.svg';
import './App.css';

function App() {
  const f=async(e)=>{
    
    const baseUrl="https://0e47-34-91-24-41.ngrok.io/"
      console.log("IT STARTED")
        let fd=new FormData();
        console.log("FILE : ",e.target.files[0]);
        fd.append("file",e.target.files[0])
        console.log(fd)
        await fetch(`${baseUrl}files/`,{
            method:"POST",
            headers:{
                'Access-Control-Allow-Origin':'http://localhost:3000',
                "Content-Type": "application/json"
            },
            // mode:"no-cors",
            body: fd
        }).then((res)=>console.log(res))
        // const result=await res.json();
        // const ans=await result.json();
        // console.log(ans)
        console.log("IT ENDED")
    }
  return (
    <div className="App">
      <div className="border-bottom border-2px-solid">
        <h2>MINOR PROJECT</h2>
      </div>
      <div className="container my-5">
        <h3>Upload Image</h3>
        <input type="file" id="file" 
        onChange={f}
        />
      </div>
    </div>
  );
}

export default App;
