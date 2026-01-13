import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInput: '', userDetailsList: userDetailsList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUserDetails = uniqueNo => {
    const {userDetailsList} = this.state
    const filterDelete = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )

    this.setState({userDetailsList: filterDelete})
  }
  render() {
    const {searchInput, userDetailsList} = this.state
    const filterUsers = userDetailsList.filter(each_user =>
      each_user.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          placeholder="Search"
          className="input"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <ul className="list-container">
          {filterUsers.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUserDetails={this.deleteUserDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
