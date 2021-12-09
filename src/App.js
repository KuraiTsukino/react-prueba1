// Importaciones
import './App.css';
import React, { useState } from "react"

function App() {
 
  const [comment, setComment] = useState({
    title: "",
    description: ""
  })

  const [commentList, setCommentList] = useState([])
  /*
  const generateMessage = () => {
    return console.log("Hola mundo")
  }
  */

  const enterData = (e) => {
    console.log(e)
    console.log(e.target.value)
  

  return setComment({
    ...comment,
    [e.target.name]: e.target.value
  })
}
  //Create and read

  const addComment = (e) => {
    e.preventDefault()

    setCommentList([
      ...commentList,
      comment
    ])

    setComment({
      title: "",
      description: ""
    })
  }

  return (
    <>
      <h1>Write a comment</h1>
      <form onSubmit={(e) => {addComment(e)}}>
        <h3>Write a title</h3>
          <input 
            name="title"
            value={comment.title}
            onChange={(e) => { enterData(e) }}
          />
        <h3>Write a description</h3>
          <input 
            name= "description"
            value= {comment.description}
            onChange={(e) => { enterData(e) }}
          />
        <button>Write comment</button>
      </form>

      <h2>Comment List</h2>
      {
        commentList.map((elem) => {
          return(
            <>
              <h4>{elem.title}</h4>
              <p>{elem.description}</p>
            </>
          )
        })
      }

    </>
  )

}

export default App;
