// index.js/TabItem

import './index.css'

const TabItem = props => {
  const {eachObjectProp, clickedTabBtnProp, isActive} = props
  const {displayText, tabId} = eachObjectProp

  const clickedTabButton = () => {
    clickedTabBtnProp(tabId)
  }

  const borderStyleStatus = isActive ? 'borderStyle' : ''
  const textStyleStatus = isActive ? 'textStyle' : ''

  return (
    <li className={`liTabItemContainer ${borderStyleStatus}`}>
      <button
        type="button"
        className={`tabItemBtn ${textStyleStatus}`}
        onClick={clickedTabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
