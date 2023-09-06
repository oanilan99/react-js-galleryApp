import './index.css'

const ThumbnailItem = props => {
  const {images, onSelectedImage, isActive} = props
  const {id, thumbnailAltText, thumbnailUrl} = images
  const isActiveClassName = isActive ? 'thumbnail-opacity' : 'thumbnail-image'

  const onClickThumbnail = () => {
    onSelectedImage(id)
  }

  return (
    <li className="list-item">
      <button className="image-button" type="button" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={isActiveClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
