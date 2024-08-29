import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

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
      <Team name='Governança de TI'/>
      <Team name='Inovação e Gestão'/>
      <Team name='Parcerias'/>
    </div>
  );
}

export default App;
