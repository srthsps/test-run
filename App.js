import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '8921980007' }]) 

  const [search,setSearch] = useState('')


  const [newNumber,setNewNumber] = useState('')

  const [ newName, setNewName ] = useState('')

  

  const handleToChange=(event)=>{
    setNewName(event.target.value)
    console.log(event.target.value)
  }

  const handle2ToChange=(event)=>{
    setNewNumber(event.target.value)
    console.log(event.target.value);
  }

  const handle3ToChange=(event)=>{
    setSearch(event.target.value)
    console.log(event.target.value);
  }

 

  const addPerson=(event)=>{
    event.preventDefault()
    const numObject={
      name: newName,
      number: newNumber
    }
    const regexp = `^${newName}$`
    
    const res =persons.filter(person => new RegExp(regexp,"i").test(person.name))

    //another way

    //const res= persons.filter(person=>person.name===newName)

    console.log(res);
    
    if(res.length>0){
      window.alert(`${newName} is already in the contacts  `)
      console.log("blaaaaaah")
    }
    else{
      setPersons(persons.concat(numObject))
      console.log("bloooooooooh");  
    }  

    setNewNumber(" ")
    setNewName(" ")
    
  }
  
  return (
    <div><center>
      <h1>Phonebook</h1>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName}
          onChange={handleToChange}
          />
          </div>
          <br/>
          <div>
          number: <input value={newNumber}
          onChange={handle2ToChange}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Contacts</h2>
        <div>
          Search<br/>
          <input defaultValue={search}
          onChange={handle3ToChange} />
        </div>
      <br/>
      <FilterResult persons={persons} search={search} />
      </center>
    </div>
  )
}


const FilterResult=({persons,search})=>{
  let searchData=persons
  if(search){
    searchData=persons.filter(person=> new RegExp(search,"i").test(person.name))
  }
  return searchData.map((person,id)=><p key={id}>{person.name} : {person.number}</p>)
}

export default App