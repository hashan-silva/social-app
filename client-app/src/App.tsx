import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";
function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/activities").then((res) => {
      setActivities(res.data);
    });
  }, []);

  return (
    <div>
      <Header as='h2' icon='users' content='Social App'/>
      <List>
        {activities.map((activ: any) => (
          <List.Item key={activ.id}>{activ.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
