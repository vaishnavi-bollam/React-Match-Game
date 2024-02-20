// AppItem

import './index.css'

const AppItem = props => {
  const {eachObjectItemProp, thumbnailTriggeredProp} = props
  const {thumbnailUrl, id} = eachObjectItemProp

  const clickedOnThumbnail = () => {
    thumbnailTriggeredProp(id)
  }

  return (
    <li className="liTabContainer">
      <button
        type="button"
        className="thumbnailBtn"
        onClick={clickedOnThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="tabItemImage" />
      </button>
    </li>
  )
}

export default AppItem
