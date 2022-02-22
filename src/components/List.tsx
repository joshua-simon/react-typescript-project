import React from 'react'
import { IState as IProps } from '../App'
//define the type of props being sent to List

const List:React.FC<IProps> = ({people}) => {


    //with this function, you want to return an array of JSX elements
    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return(
                <li className='List'>
                    <div className='List-header'>
                        <img className='List-img' src = {person.url}/>
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className='List-note'>{person.note}</p>
                </li>
            )
        })
    }

    return(
        <ul>
            {renderList()}
        </ul>
    )
}

export default List

//Alternatively, you can define the props on the function.
//ie:

// const List:FC<IProps> = () => {
//     return(
//         <div>

//         </div>
//     )
// }