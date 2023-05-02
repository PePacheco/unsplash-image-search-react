import './ImageList.css'

type ImageListProps = {
    images: string[]
}

export const ImageList = ({ images }: ImageListProps) => {
    return (
        <div className="image-list">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image} alt="" className="image" />
            </div>
          ))}
        </div>
      )
}