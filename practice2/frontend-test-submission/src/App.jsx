import "./App.css";
import{useState} from "react";
function App(){
  const[message,setmessage]=useState("");
  const[showresult,setshowresult]=useState(false);
  const[url,seturl]=useState("");
  const[validity,setvalidity]=useState("");
  const[shortcode,setshortcode]=useState("");
  const[shorturl,setshorturl]=useState("");

  const handlesubmit=async(e)=>{
    e.preventDefault();
    try{
      const payload={
        url,validity,shortcode
      };
      const res=await fetch("http://localhost:3000/shorten",{
        method:"POST",
        headers:{
          "content-Type":"application/json"
        },
        body:JSON.stringify(payload)
      });
      const data= await res.json();
      setshorturl(data.shortLink);
      setshowresult(true);
    }
    catch(error)
    {
      console.log(error);
       setmessage("Error : ",error.message);
    }
    setmessage("Button : I am Clicked!!😁");
    setshowresult(true);
  };
  return (
      <div className="body1">
          <div>
            <h1>URL Shortner</h1>
          </div>
          <div className="para-section">
            <p>Welcome to the URL Shortener Dashboard! This application allows you to  convert long and complex URLs into short, easy-to-share links.</p>
          </div>
          <div className="section">
            <div className="section1">
              <label className="label">URL</label>
              <input 
                type="text" 
                placeholder="Enter the Url" 
                value={url}
                onChange={(e)=>seturl(e.target.value)}
                className="field-box" />   {/*className=field-box*/}
            </div>
            <div className="section1">
              <label className="label">Validity (in Minutes)</label>
              <input 
                type="text" 
                placeholder="Enter the validity" 
                value={validity}
                onChange={(e)=>setvalidity(e.target.value)}
                className="field-box"/>{/*className=field-box*/}
            </div>
            <div className="section1">
              <label className="label">ShortCode</label>
              <input 
                type="text" 
                placeholder="Enter the shortcode" 
                value={shortcode} 
                onChange={(e)=>{setshortcode(e.target.value)}} 
                className="field-box"/>
            </div>
            <button onClick={handlesubmit} className="button">Submit</button>
          </div>
          {showresult && (<div className="result-section">
            <p>short URL : 
            <a href={shorturl}>{shorturl}</a>
            </p>  
          </div>
        )}
      </div>

  );
}
export default App;