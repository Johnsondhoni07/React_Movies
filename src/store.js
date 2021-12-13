import { useState } from "react";
const Store =({movies})=>{

const[store,setstore] = useState([])    
    
// console.log(movies);
    return(
        <div>
            {movies.map((e)=>{
                return(
                <p>{e.title}</p>
                // console.log(e.title)
                );

            })}
        </div>
    )
}

export default Store;