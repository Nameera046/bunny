import "./App.css";
function App(){
  return (
      <div className="body">
          <div>
            <h1>URL Shortner</h1>
          </div>
          <div className="para-section">
            <p>Welcome to the URL Shortener Dashboard! This application allows you to  convert long and complex URLs into short, easy-to-share links.</p>
          </div>
          <div className="section">
            <div className="section1">
              <label className="label">URL</label>
              <input type="text" placeholder="Enter the Url" className="field-box" />   {/*className=field-box*/}
            </div>
            <div className="section1">
              <label className="label">Validity (in Minutes)</label>
              <input type="text" placeholder="Enter the validity" className="field-box"/>{/*className=field-box*/}
            </div>
            <div className="section1">
              <label className="label">ShortCode</label>
              <input type="text" placeholder="Enter the shortcode" className="field-box"/>{/*className=field-box*/}
            </div>
            <button className="button">Submit</button>
          </div>
      </div>

  );
}
export default App;