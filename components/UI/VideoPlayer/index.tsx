import { useRef } from "react"
import styles from "./VideoPlayer.module.scss"
import useVideoPlayer from "./useVideoPlayer"

const VideoPlayer = ({ value = "" }) => {
  const videoElement = useRef(null)
  const figureRef = useRef<HTMLElement | null>(null)
  const progressRef = useRef<HTMLProgressElement | null>(null)
  const progressBarRef = useRef<HTMLSpanElement | null>(null)
  const { playerState, actions, video } = useVideoPlayer(
    videoElement,
    figureRef,
    progressRef,
    progressBarRef
  )

  return (
    <div className={styles.container}>
      <figure
        className={styles.videoWrapper}
        ref={figureRef}
        id="videoContainer"
        data-fullscreen={playerState.isFullScreen}
      >
        {/* На десять секунд назад */}
        <div className={styles.leftTimeBtn}>
          <button onClick={actions.revert}>10 сек. назад</button>
        </div>
        {/* Центральная кнопка play */}
        <div onClick={actions.togglePlay} className={styles.bigBtn}>
          <button>
            {!playerState.isPlaying ? (
              <svg
                height="100%"
                version="1.1"
                viewBox="0 0 36 36"
                width="100%"
                className={styles.iconPlay}
              >
                <path
                  fill="#fff"
                  d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
                  id="ytp-id-48"
                ></path>
              </svg>
            ) : (
              <svg
                height="100%"
                version="1.1"
                viewBox="0 0 36 36"
                width="100%"
                className={styles.iconPlay}
              >
                <path
                  fill="#fff"
                  d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"
                  id="ytp-id-61"
                ></path>
              </svg>
            )}
          </button>
        </div>
        <video
          src={value}
          ref={videoElement}
          onTimeUpdate={actions.handleOnTimeUpdate}
        />

        <div className={styles.controls}>
          <div className={styles.actions}>
            <div className={styles.progress}>
              <progress
                ref={progressRef}
                value={0}
                // onClick={(e: any) => actions.handleVideoProgress(e)}
                //@ts-ignore
                min="0"
              >
                <span ref={progressBarRef} id="progress-bar"></span>
              </progress>
            </div>
            <div className={styles.buttonBlock}>
              <div className={styles.left}>
                {/* Кнопка play */}
                <button onClick={actions.togglePlay}>
                  {!playerState.isPlaying ? (
                    <svg
                      height="100%"
                      version="1.1"
                      viewBox="0 0 36 36"
                      width="100%"
                      className={styles.iconPlay}
                    >
                      <path
                        fill="#fff"
                        d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"
                        id="ytp-id-48"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      height="100%"
                      version="1.1"
                      viewBox="0 0 36 36"
                      width="100%"
                      className={styles.iconPlay}
                    >
                      <path
                        fill="#fff"
                        d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"
                        id="ytp-id-61"
                      ></path>
                    </svg>
                  )}
                </button>
                {/* Звук */}
                <button className={styles.muteBtn} onClick={actions.toggleMute}>
                  {!playerState.isMuted ? (
                    <svg
                      height="100%"
                      className={styles.iconPlay}
                      version="1.1"
                      viewBox="0 0 36 36"
                      width="100%"
                    >
                      <defs>
                        <clipPath id="ytp-svg-volume-animation-mask">
                          <path
                            fill="#fff"
                            d="m 14.35,-0.14 -5.86,5.86 20.73,20.78 5.86,-5.91 z"
                          ></path>
                          <path
                            fill="#fff"
                            d="M 7.07,6.87 -1.11,15.33 19.61,36.11 27.80,27.60 z"
                          ></path>
                          <path
                            fill="#fff"
                            className="ytp-svg-volume-animation-mover"
                            d="M 9.09,5.20 6.47,7.88 26.82,28.77 29.66,25.99 z"
                            transform="translate(0, 0)"
                          ></path>
                        </clipPath>
                        <clipPath id="ytp-svg-volume-animation-slash-mask">
                          <path
                            fill="#fff"
                            className="ytp-svg-volume-animation-mover"
                            d="m -11.45,-15.55 -4.44,4.51 20.45,20.94 4.55,-4.66 z"
                            transform="translate(0, 0)"
                          ></path>
                        </clipPath>
                      </defs>
                      <path
                        className="ytp-svg-fill ytp-svg-volume-animation-speaker"
                        clipPath="url(#ytp-svg-volume-animation-mask)"
                        d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
                        fill="#fff"
                        id="ytp-id-14"
                      ></path>
                      <path
                        className="ytp-svg-fill ytp-svg-volume-animation-hider"
                        clipPath="url(#ytp-svg-volume-animation-slash-mask)"
                        d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z"
                        fill="#fff"
                        id="ytp-id-15"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      height="100%"
                      version="1.1"
                      className={styles.iconPlay}
                      viewBox="0 0 36 36"
                      width="100%"
                    >
                      <path
                        className="ytp-svg-fill"
                        d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"
                        id="ytp-id-67"
                        fill="#fff"
                      ></path>
                    </svg>
                  )}
                </button>
                {/* Время */}
                <div className={styles.time}>
                  {Math.floor(video.currentTime / 60) +
                    ":" +
                    ("0" + Math.floor(video.currentTime % 60)).slice(-2)}
                  /{" "}
                  {Math.floor(video.videoTime / 60) +
                    ":" +
                    ("0" + Math.floor(video.videoTime % 60)).slice(-2)}
                </div>
              </div>
              <div className={styles.rigth}>
                {/* Скорость видео */}
                <select
                  className={styles.velocity}
                  value={playerState.speed}
                  onChange={(e) => actions.handleVideoSpeed(e)}
                >
                  <option value="0.50">0.50x</option>
                  <option value="1">1x</option>
                  <option value="1.25">1.25x</option>
                  <option value="2">2x</option>
                </select>
                {/* FullScreen */}
                <div className={styles.full}>
                  <button onClick={actions.toggleFullScreen}>
                    <svg
                      className={styles.iconPlay}
                      height="100%"
                      version="1.1"
                      viewBox="0 0 36 36"
                      width="100%"
                    >
                      <g className="ytp-fullscreen-button-corner-0">
                        <path
                          fill="#fff"
                          d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"
                          id="ytp-id-6"
                        ></path>
                      </g>
                      <g className="ytp-fullscreen-button-corner-1">
                        <path
                          fill="#fff"
                          d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"
                          id="ytp-id-7"
                        ></path>
                      </g>
                      <g className="ytp-fullscreen-button-corner-2">
                        <path
                          fill="#fff"
                          d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"
                          id="ytp-id-8"
                        ></path>
                      </g>
                      <g className="ytp-fullscreen-button-corner-3">
                        <path
                          fill="#fff"
                          d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"
                          id="ytp-id-9"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* На десять секунд вперёд */}
        <div className={styles.rightTimeBtn}>
          <button onClick={actions.fastForward}>10 сек. вперёд</button>
        </div>
      </figure>
    </div>
  )
}

export default VideoPlayer
