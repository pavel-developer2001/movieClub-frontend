import { FC, useState } from "react"
import styles from "./UploadImage.module.scss"

interface UploadImageProps {
  image: File | string | null
  setImage: (e: File | string | null) => void
}
export const UploadImage: FC<UploadImageProps> = ({ image, setImage }) => {
  const [testIMG, setTestIMG] = useState<any>(null)
  const handleChangeImg = (e: any) => {
    const imageUrl = URL.createObjectURL(e.target.files[0])
    setTestIMG(imageUrl)
    setImage(e.target.files[0])
  }
  const handleDeleteImage = () => {
    setTestIMG("")
    setImage("")
  }
  return (
    <div>
      {image ? (
        <div className={styles.uploadBlock} onClick={handleDeleteImage}>
          <div className={styles.deleteImage}>x</div>
          <img src={testIMG} className={styles.imageBlock} alt="test img" />
        </div>
      ) : (
        <div className={styles.formGroup}>
          <label className={styles.label}>
            <span className={styles.title}>Добавить обложку</span>
            <input type="file" className={styles.input} onChange={handleChangeImg} />
          </label>
        </div>
      )}
    </div>
  )
}
