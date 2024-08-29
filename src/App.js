import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [collaborators, setCollaborators] = useState([])

  const newCollaboratorAdd = (collaborator) => {
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form registeredCollaborator={collaborator => newCollaboratorAdd(collaborator)}/>
    </div>
  );
}

export default App;
