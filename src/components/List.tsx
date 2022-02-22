
//define the type of props being sent to List

interface IProps {
    people: {
      name:string,
      age:number,
      url:string,
      note?:string
    }[]
  }

const List = (props:IProps) => {
    //you can destructure props as normal, ie, ({people}: IProps,)
    return(
        <div>
            This is the list
        </div>
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