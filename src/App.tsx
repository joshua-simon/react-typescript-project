import { useState } from 'react';
import './styles.css'


interface IState {
  people: {
    name:string,
    age:number,
    url:string,
    note?:string
  }[]
}

function App() {

  const [ people,setPeople ] = useState<IState["people"]>([])

  return (
    <div>
      <h1>People invited to my party</h1>
    </div>
  );
}

export default App;
