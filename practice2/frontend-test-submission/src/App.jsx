import "./App.css";
function App(){
  return (
      <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",padding:"20px"}}>
          <div>
            <h1>URL Shortner</h1>
          </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"80%",textAlign:"center",padding:"10px"}}>
            <p>Welcome to the URL Shortener Dashboard! This application allows you to  convert long and complex URLs into short, easy-to-share links.</p>
          </div>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"40%",border:"2px solid black",borderRadius:"10px",padding:"20px"}}>
            <div style={{display:"flex",flexDirection:"column",padding:"5px",width:"90%",marginTop:"10px"}}>
              <label style={{fontWeight:"bold"}}>URL</label>
              <input type="text" placeholder="Enter the Url" style={{height:"25px",borderRadius:"4px",marginBottom:"5px",marginTop:"5px"}} />   {/*className=field-box*/}
            </div>
            <div style={{display:"flex",flexDirection:"column",padding:"5px",width:"90%"}}>
              <label style={{fontWeight:"bold"}}>Validity (in Minutes)</label>
              <input type="text" placeholder="Enter the validity" style={{height:"25px",borderRadius:"4px",marginBottom:"5px",marginTop:"5px",}}/>{/*className=field-box*/}
            </div>
            <div style={{display:"flex",flexDirection:"column",padding:"5px",width:"90%",marginBottom:"10px"}}>
              <label style={{fontWeight:"bold"}}>ShortCode</label>
              <input type="text" placeholder="Enter the shortcode" style={{height:"25px",borderRadius:"4px",marginTop:"5px",marginBottom:"10px"}}/>{/*className=field-box*/}
            </div>
            <button style={{backgroundColor:"#7692ce", borderRadius:"5px",display:"flex",justifyContent: "center",alignItems:"center",width:"80px",height:"30px",fontWeight:"bold"}}>Submit</button>
          </div>
      </div>

  );
}
export default App;