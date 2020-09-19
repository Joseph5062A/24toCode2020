import React, { useState } from 'react';
import './App.scss';
import NavBar from './components/Navbar';
import AuthPage from './components/AuthPage';
import AtAGlance from './components/AtAGlance';
import AddGroup from './components/AddGroup';
import Groups from './components/Groups';

export type GroupSpec = {
  name: string;
  color: string;
  desc: string;
  machines: any[];
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [groups, setGroups] = useState([] as GroupSpec[]);

  const newGroup = (name, color, desc, machines) => {
    const newGroups = [...groups];
    newGroups.push({
      name: name,
      color: color,
      desc: desc,
      machines: machines
    });
    setGroups(newGroups);
  }

  return (
    <div className="App">
      {!loggedIn ? <AuthPage logIn={() => setLoggedIn(true)}/> :
      <div>
        <NavBar />
        <AtAGlance />
        <AddGroup addGroup={(name, color, desc, machines) => newGroup(name, color, desc, machines)}/>
        <Groups groups={groups}/>
      </div>
      }
    </div>
  );
}

export default App;