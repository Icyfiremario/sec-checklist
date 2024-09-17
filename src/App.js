
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
    let protect = event.target.protect.checked;
    let detect = event.target.detect.checked;
    let respond = event.target.respond.checked;
    let recover = event.target.recover.checked;

    if (assets && protect && detect && respond && recover)
    {
      window.alert("Wow your secured")
    }
    else
    {
      window.alert("YOUR NOT SECURE")
    }
  }

  return (
    <div className="Checklist" onSubmit={check}>
      <form className="Checklist-form">
        <Item id="assets">Identify potential security risks and points of failure</Item>
        <Item id="protect">Identify how you can midgate and prevent you data being stolen</Item>
        <Item id="detect">Setup ways to detect if your networks security has been breached</Item>
        <Item id="respond">Setup protocalls for responding to security breaches</Item>
        <Item id="recover">Recover your security and return the network to normal function</Item>
        <input type="submit" className="Checklist-submit" value="Done"/>
      </form>
    </div>
  );
}

export default App;
