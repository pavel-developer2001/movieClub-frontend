import { Button } from "@mui/material"
import TextField from "@mui/material/TextField"
import { NextPage } from "next"
import React, { useState } from "react"
import VideoPlayer from "../../../components/UI/VideoPlayer"
import MainLayout from "../../../layouts/MainLayout"
import styles from "../../../styles/pages/UploadPage.module.scss"

const UploadPage: NextPage = () => {
  const [testVideo, setTestVideo] = useState<string | null>(null)
  const [season, setSeason] = useState<string | undefined | number>(undefined)
  const [episode, setEpisode] = useState<string | undefined | number>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [video, setVideo] = useState(null)
  const handleChangeVideo = (e: any) => {
    const video = URL.createObjectURL(e.target.files[0])
    setTestVideo(video)
    setVideo(e.target.files[0])
  }
  const handleRemoveVideo = () => {
    setTestVideo(null)
    setVideo(null)
  }
  const handleAddEpisode = async () => {
    if (!video) alert("Загрузите видео!")
    try {
      setIsLoading(true)
      console.log("episode", video)
      const payload = await { season, episode, video }
      console.log("data", payload)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        {testVideo ? (
          <>
            <VideoPlayer value={testVideo} />
            <div className={styles.file}>
              {" "}
              <Button onClick={handleRemoveVideo} variant="outlined">
                Удалить выбранное видео
              </Button>{" "}
            </div>
          </>
        ) : (
          <input type="file" onChange={handleChangeVideo} />
        )}

        <div className={styles.fields}>
          <TextField
            fullWidth
            type="number"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            label="Сезон"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            id="outlined-error-helper-text"
          />
          <TextField
            fullWidth
            label="Серия"
            type="number"
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            value={episode}
            onChange={(e) => setEpisode(e.target.value)}
            id="outlined-error-helper-text"
          />
          <span>
            Если вы загружаете фильм, вводить поля сезон и серия не надо!!!!
          </span>
        </div>

        <Button
          onClick={handleAddEpisode}
          disabled={isLoading}
          variant="contained"
        >
          {isLoading ? "loading..." : "Добавить"}
        </Button>
      </div>
    </MainLayout>
  )
}

export default UploadPage
