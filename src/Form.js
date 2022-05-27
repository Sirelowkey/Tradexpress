// import React, { useState } from 'react'

// const Form = () => {
//     const [fullName, settFullName] = useState('')
//     const [email, useEmail] = useState('')
//     const [people, usePeople] = useState([])
//     function handleSumbit (e){
//         e.preventDefault()
//         console.log(fullName, email);

//         if(fullName && email){
//             const person = {id: new Date().getTime().toString(),fullName,email}
//             console.log(person);
//             setPeople([...people, person])
//             setFullName('')
//             setEmail('')
//         }
//     }

//     function remove(id){
//         let xvi = people.filter((person)=>person.id !==id)
//         setPeople(xvi)
//     }

//     function clear(){
//         setPeople([])
//     }

//     let handleFullName = (e)=>{
//         settFullName(e.target.value)
//     }
//     const handleEmail = function(e){
//         setEmail(e.target.value)
//     }

//   return (
//     <div>
       

//     </div>
//   )
// }

// export default Form