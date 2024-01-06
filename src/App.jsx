import './App.css'
import List from "./components/List.jsx";
import ListItem from "./components/ListItem.jsx";

function App() {

  return (
      <>
        <List title="Schedule">
            <ListItem collapsable content="# Test this works" header="Test"/>
        </List>
      </>
  )
}

export default App
