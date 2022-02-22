import { useState } from 'react';
import List from './components/List'
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

  const [ people,setPeople ] = useState<IState["people"]>([{
    name: 'LeBron James',
    url: "https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_806,w_1434,x_268,y_98/c_fill,f_auto,h_495,q_auto,w_880/v1/m/c/8/c8f5f252e10316c0868af09fe9871bbd92efeec8/lebron-james-says-he-wants-play-son-before-he.jpg",
    age:36,
    note: "Allergic to staying on the same team"
  }])

  return (
    <div>
      <h1>People invited to my party</h1>
      <List people = {people}/>
    </div>
  );
}

export default App;
