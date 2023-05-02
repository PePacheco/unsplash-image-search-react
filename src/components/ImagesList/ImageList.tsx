import './ImageList.css'

type ImageListProps = {
    images: Image[]
}

export type Image = {
  id: number;
  url: string;
}

export const ImageList = ({ images }: ImageListProps) => {
    return (
        <div className="image-list">
          {images.map((image) => (
            <div key={image.id} className="image-container">
              <img src={image.url} alt="" className="image" />
            </div>
          ))}
        </div>
      )
}