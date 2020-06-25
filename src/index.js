import React from "react"
import ReactDOM from "react-dom"
import "./index.css"



const PersonList = _ => {
  return (
    <section className="person__list">
      <Person img={Math.floor(Math.random() * 10)} name="john" job="developer" />
      <Person img={Math.floor(Math.random() * 10)} name="hossein" job="designer" />
      <Person img={Math.floor(Math.random() * 10)} name="ali" job="principle"><p>this is paragraph about this person</p></Person>
    </section>)
}

const Person = ({ img, name, job, children }) => {
  return (
    <div className="person__card" >
      <img src={`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  )
}

ReactDOM.render(<PersonList></PersonList>, document.getElementById("root"));