import { useState, useEffect, useMemo, ChangeEvent } from "react";

const useVideoPlayer = (
  videoElement: any,
  figureRef: any,
  progressRef: any,
  progressBarRef: any
) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    speed: 1,
    isMuted: false,
    isFullScreen: false,
  });
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);

  useEffect(() => {
    if (videoElement.current?.duration)
      setVideoTime(videoElement.current.duration);
  }, [videoElement.current?.duration]);
  useEffect(() => {
    const video = videoElement.current;

    if (!video) return;

    const updateProgress = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / videoTime) * 100);
    };

    video.addEventListener("timeupdate", updateProgress);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, [videoTime]);
  const fastForward = () => {
    if (videoElement.current) videoElement.current.currentTime += 10;
  };

  const revert = () => {
    if (videoElement.current) videoElement.current.currentTime -= 10;
  };
  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    if (!progressRef.current.getAttribute("max"))
      progressRef.current.setAttribute("max", videoElement.current.duration);
    progressRef.current.value = videoElement.current.currentTime;
    progressBarRef.current.style.width =
      Math.floor(
        (videoElement.current.currentTime / videoElement.current.duration) * 100
      ) + "%";
    setProgress(progress);
    // setPlayerState({
    //   ...playerState,
    //   progress,
    // });
  };

  const handleVideoProgress = (event: any) => {
    console.log(event);
    const pos =
      (event.pageX - progressRef.current.offsetLeft) /
      progressRef.current.offsetWidth;
    videoElement.current.currentTime = pos * videoElement.current.duration;
    setProgress(Math.floor(pos));
    // const manualChange = event.offsetX - progressBarRef.current.offsetWidth;
    // videoElement.current.currentTime =
    //   videoElement.current.duration * manualChange;
    // setProgress(Math.floor(manualChange / 100));
  };

  const handleVideoSpeed = (event: ChangeEvent<HTMLSelectElement>) => {
    const speed = Number(event.target.value);
    videoElement.current.playbackRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMute = () => {
    setPlayerState({
      ...playerState,
      isMuted: !playerState.isMuted,
    });
  };

  const toggleFullScreen = () => {
    setPlayerState({
      ...playerState,
      isFullScreen: !playerState.isFullScreen,
    });
  };
  useEffect(() => {
    if (playerState.isFullScreen) {
      //@ts-ignore
      document.fullScreen = true;
      if (figureRef.current.requestFullscreen)
        figureRef.current.requestFullscreen();
      // if (figureRef.current.requestFullscreen)
      //   figureRef.current.requestFullscreen();
      // else if (figureRef.current.mozRequestFullScreen)
      //   figureRef.current.mozRequestFullScreen();
      // else if (figureRef.current.webkitRequestFullScreen) {
      //   videoElement.current.webkitRequestFullScreen();
      // } else if (figureRef.current.msRequestFullscreen)
      //   figureRef.current.msRequestFullscreen();
      console.log("+");
    } else {
      console.log("-");
      //@ts-ignore
      if (document.fullScreen) {
        //@ts-ignore
        document.fullScreen = false;
        if (document.exitFullscreen) document?.exitFullscreen();
      }
    }
  }, [playerState.isFullScreen, videoElement]);

  useEffect(() => {
    figureRef.current.setAttribute(
      "data-fullscreen",
      !playerState.isFullScreen
    );
  }, [playerState.isFullScreen, figureRef]);

  useEffect(() => {
    playerState.isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [playerState.isMuted, videoElement]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case "arrowright": {
          fastForward();
          break;
        }

        case "arrowleft": {
          revert();
          break;
        }

        case " ": {
          e.preventDefault();
          togglePlay();
          break;
        }

        case "f": {
          toggleFullScreen();
          break;
        }
        case "m": {
          toggleMute();
          break;
        }

        default: {
          return;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [togglePlay]);

  const value = useMemo(
    () => ({
      playerState,
      actions: {
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
        toggleFullScreen,
        revert,
        fastForward,
      },
      video: {
        currentTime,
        videoTime,
      },
    }),
    [playerState, currentTime, videoTime, progress]
  );
  return value;
};

export default useVideoPlayer;
