
function App() {
  return (
    <div className="App">
      <Checklist/>
    </div>
  );
}

function Checklist() {

  function Item(props) {
    return (
      <div>
        <input type="checkbox" className="Checklist-item" id={props.id} name={props.id}/>
        <label>{props.children}</label>
      </div>
    )
  }

  const check = async (event) => {
    event.preventDefault();

    let assets = event.target.assets.checked;
    let assets_2 = event.target.assets_2.checked
    let protect = event.target.protect.checked;
    let detect = event.target.detect.checked;
    let respond = event.target.respond.checked;
    let recover = event.target.recover.checked;

    if (assets && assets_2 && protect && detect && respond && recover)
    {
      window.alert("Wow your secured, very mindful, very demure")
    }
    else
    {
      window.alert("Please make sure you checked everything on the list")
    }
  }

  return (
    <div className="Checklist" onSubmit={check}>
      <form className="Checklist-form">
        <Item id="assets">Identify all the devices connected to your network.</Item>
        <Item id="assets_2">Assess each device for potental security risks such as open ports, using an unsecure wifi authentication protocall, and potentally unsecure processes.</Item>
        <Item id="protect">Close unused ports if they are open, create a seperate network for devices using an unsecure wifi protocall, and shutdown any unneeded processes.</Item>
        <Item id="detect">Install antivirus on all devices, and enable logging on your network.</Item>
        <Item id="respond">Create a step by step checklist detailing how to recover your network if a security breach does occur.</Item>
        <Item id="recover">Execute your recovery response protocall when a security breach does occur.</Item>
        <input type="submit" className="Checklist-submit" value="Done"/>
      </form>
    </div>
  );
}

export default App;
