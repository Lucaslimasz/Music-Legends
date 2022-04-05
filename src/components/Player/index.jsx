import { useRef, useState, useEffect } from "react";
import api from "../../config/api";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import styled from "./styles.module.scss";

import Heart from "../../assets/icons/heart.svg";
import Repeat from "../../assets/icons/rotate-cw.svg";
import Previous from "../../assets/icons/arrow-left.svg";
import Next from "../../assets/icons/arrow-right.svg";
import Play from "../../assets/icons/play.svg";
import Muted from "../../assets/icons/muted.svg";
import Pause from "../../assets/icons/pause.svg";
import Shuffle from "../../assets/icons/repeat.svg";
import Volume from "../../assets/icons/volume.svg";
import Minimize from "../../assets/icons/minimize.svg";
import Maximize from "../../assets/icons/maximize.svg";

export const Player = () => {
  const audioRef = useRef(null);
  const [playAudio, setPlayAudio] = useState(false);
  const [progress, setProgress] = useState(0);
  const [positionMusic, setPositionMusic] = useState(0);
  const [songs, setSongs] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [hasFullScreen, setHasFullScreen] = useState(false);

  const option = songs[positionMusic];

  const handlePlayAudio = () => {
    if (playAudio) {
      audioRef.current.pause();
      setPlayAudio(false);
    } else {
      audioRef.current.play();
      setPlayAudio(true);
    }
  };

  const handleSeek = (amount) => {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  };

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  const nextMusic = () => {
    if (songs.length - 1 !== positionMusic) {
      setPositionMusic((prevState) => (prevState += 1));
      setPlayAudio(true);
    }
  };

  const playPreviousMusic = () => {
    if (positionMusic > 0) {
      setPositionMusic((prevState) => (prevState -= 1));
      setPlayAudio(true);
    }
  };

  const listSongs = async () => {
    const { data } = await api.get("/songs");
    setSongs(data);
  };

  const handleMutedMusic = () => {
    setIsMuted((prevState) => !prevState);
  };

  const handleFullScreen = () => {
    if (hasFullScreen) {
      document.exitFullscreen();
      setHasFullScreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setHasFullScreen(true);
    }
  };

  useEffect(() => {
    (async () => {
      await listSongs();
      setPlayAudio(true);
    })();
  }, []);

  return (
    <>
      <div className={styled.Slider}>
        <Slider
          trackStyle={{ backgroundColor: "#4ac08f" }}
          railStyle={{ backgroundColor: "#2c123f" }}
          handleStyle={{ borderBlockColor: "#2EF4CC", borderWidth: 4 }}
          onChange={(e) => handleSeek(Number(e))}
          value={progress}
          max={option?.duration}
        />
      </div>
      <div className={styled.player}>
        <div className={styled.information}>
          <img src={Heart} alt="Favoritar" />
          <div>
            <strong>{option?.title}</strong>
            <span>{option?.name}</span>
          </div>
        </div>

        <div className={styled.actions}>
          <button>
            <img src={Shuffle} alt="" />
          </button>
          <button onClick={playPreviousMusic}>
            <img src={Previous} alt="" />
          </button>
          <button className={styled.buttonPlay} onClick={handlePlayAudio}>
            {playAudio ? (
              <img
                src={Pause}
                alt=""
                style={{ position: "relative", left: "-4px" }}
              />
            ) : (
              <img src={Play} alt="" />
            )}
          </button>
          <button onClick={nextMusic}>
            <img src={Next} alt="" />
          </button>
          <button>
            <img src={Repeat} alt="" />
          </button>
        </div>
        {songs && (
          <audio
            controls
            autoPlay
            src={option?.url}
            ref={audioRef}
            onLoadedMetadata={setupProgressListener}
            muted={isMuted}
          />
        )}

        <div className={styled.buttonEffect}>
          <button onClick={handleMutedMusic}>
            <img src={isMuted ? Muted : Volume} alt="" />
          </button>
          <button onClick={handleFullScreen}>
            <img src={hasFullScreen ? Maximize : Minimize} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
