import './index.css'

const BrowserHistoryItem = props => {
  const {history, deleteClicked} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const onDelete = () => {
    deleteClicked(id)
  }

  return (
    <li className="history-item-container">
      <p className="item-time">{timeAccessed}</p>
      <div className="domain-container">
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="domain-title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <button type="button" className="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default BrowserHistoryItem
