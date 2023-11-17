import {Component} from 'react'
import './index.css'
import BrowserHistoryItem from '../BrowserHistoryItem'
import EmptyHistoryView from '../EmptyHistoryView'

class BrowserHistory extends Component {
  state = {inputSearch: '', newList: []}

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({
      newList: initialHistoryList,
    })
  }

  searchInput = event => {
    this.setState({
      inputSearch: event.target.value,
    })
  }

  clickedDelete = id => {
    this.setState(prevState => ({
      newList: prevState.newList.filter(each => each.id !== id),
    }))
  }

  render() {
    const {inputSearch, newList} = this.state

    const updatedList = newList.filter(each =>
      each.title.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div className="container">
        <nav className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="app-logo"
          />
          <div className="input-container">
            <div className="search-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png "
                alt="search"
                className="search-image"
              />
            </div>
            <input
              type="search"
              className="input-search"
              placeholder="Search history"
              onChange={this.searchInput}
              value={inputSearch}
            />
          </div>
        </nav>
        <div className="card">
          <ul className="browser-history-container">
            {updatedList.length > 0 &&
              updatedList.map(each => (
                <BrowserHistoryItem
                  history={each}
                  key={each.id}
                  deleteClicked={this.clickedDelete}
                />
              ))}
            {updatedList.length === 0 && <EmptyHistoryView />}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
