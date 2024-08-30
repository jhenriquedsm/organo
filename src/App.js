import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';
import Rodape from './components/Rodape';

function App() {

  const teams = [
    {
      name: 'Governança de TI',
      primaryColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      name: 'Parcerias',
      primaryColor: '#FFBA05',
      secondColor: '#FFEEDF'
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const newCollaboratorAdd = (collaborator) => {
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} registeredCollaborator={collaborator => newCollaboratorAdd(collaborator)}/>

      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondColor={team.secondColor}
        collaborators={collaborators.filter(collaborator => collaborator.time === team.name)}
      />)}

      <Rodape />
    </div>
  );
}

export default App;
