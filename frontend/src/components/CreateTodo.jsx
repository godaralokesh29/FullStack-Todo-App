import { useState } from "react";

export function CreateTodo(){
    // REACT-QUERY
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")


    return <div>
        <input style={{ padding:10,margin:10}} type="text" placeholder="title" onChange={function(e){
            const value=e.target.value;
            setTitle(e.target.value)
        }}/> <br />
        <input style={{ padding:10,margin:10}} type="text" placeholder="description" onChange={function(e){
            const value=e.target.value;
            setTitle(e.target.value)
        }} /> <br />

        <button style={{ padding:10,margin:10}} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body: JSON.stringify({
                    title,
                    description
                    
                }),
                header:{
                    "content-type":"applicaion/json"
                }

            }).then(async function (res) {
                const json=await res.json();
                alert("Todo Added");
                
            })

        }}>Add todo</button>
    </div>
}