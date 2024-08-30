import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

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
    console.log(collaborator)
    setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams={teams.map(team => team.name)} registeredCollaborator={collaborator => newCollaboratorAdd(collaborator)}/>

      {teams.map(team => <Team key={team.name} name={team.name} primaryColor={team.primaryColor} secondColor={team.secondColor}/>)}

    </div>
  );
}

export default App;
