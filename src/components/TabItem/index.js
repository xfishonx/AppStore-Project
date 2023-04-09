// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabItemDetails

  const onClickTabBtn = () => {
    onClickTabItem(tabId)
  }

  const ActiveTabBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="li">
      <button
        className={`tab-btn ${ActiveTabBtnClassName}`}
        onClick={onClickTabBtn}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
