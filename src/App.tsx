import './App.css';
import React, { useState } from 'react';


function AddPersonForm(props:any) {
  const [ person, setPerson ] = useState('');
    
  function handleChange(e:any) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e:any) {
    if(person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Einfügen</button>
    </form>
  );
}

function PeopleList(props:any) {
  const arr = props.data;
  const listItems = arr.map((val:any, index:any) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function ContactManager(props:any) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name:any) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}






const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

function App() {
  return (
    <div>
      <header className='App-header'> 
        <h1>Contact Manager</h1> 
      </header>
   
      
      <ContactManager data={contacts} />
      
       </div>
  );
}






export default App;