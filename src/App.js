import React from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class Contacts extends React.Component {
  state =  {
    myContacts: contacts.splice(0, 5)
  }

  addRandomContact = () => {
    const myContactsCopy = [...this.state.myContacts];

    const index = Math.floor(Math.random() * contacts.length)

    myContactsCopy.push(contacts[index])

    this.setState({
      myContacts: myContactsCopy
    })
    
  }

  sortByName = () => {
    const myContactsToSort = [...this.state.myContacts];

    function compare(a, b) {
      if(a.name < b.name) {
        return -1;
      }
      if(a.name > b.name) {
        return 1;
      }

      return 0;
    }
      let mySortedContacts = myContactsToSort.sort(compare);

          this.setState({
      myContacts: mySortedContacts
    })
  }


    sortByPopularity = () => {
    const myContactsToSort = [...this.state.myContacts];

    function compare(a, b) {
      if(a.popularity < b.popularity) {
        return 1;
      }
      if(a.popularity > b.popularity) {
        return -1;
      }

      return 0;
    }
      let mySortedContacts = myContactsToSort.sort(compare);

    this.setState({
      myContacts: mySortedContacts
    })
  }

    deleteContact = (id) => {
      
      const myContactsCopy = [...this.state.myContacts];

      const contactToRemoveIndex = myContactsCopy.findIndex(item => item.id === id);

      myContactsCopy.splice(contactToRemoveIndex, 1);

      this.setState({
        myContacts: myContactsCopy
      })
    }
  
  render () {
    return(
      <div>
      <button onClick={this.addRandomContact}>Add random contact</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
                <th>picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {this.state.myContacts.map((item) => {
                return <tr>
                <td> <img style={{width:`50px`}} src={item.pictureUrl} alt={item.name}/></td>
                <td>{item.name}</td>
                <td>{item.popularity}</td>
                <td><button onClick={() => this.deleteContact(item.id)}>Delete</button></td>
                </tr>
               })}
          </tbody>
        </table>
        
      </div> 
    )
  }
}

function App() {
  return (
    <div className="App">

      <Contacts />


    </div>
  );
}

export default App;
