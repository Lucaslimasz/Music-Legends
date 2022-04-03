import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import styled from "./styles.module.scss";

import Heart from "../../assets/icons/heart.svg";
import Repeat from "../../assets/icons/rotate-cw.svg";
import Previous from "../../assets/icons/arrow-left.svg";
import Next from "../../assets/icons/arrow-right.svg";
import Play from "../../assets/icons/play.svg";
import Shuffle from "../../assets/icons/repeat.svg";
import Volume from "../../assets/icons/volume.svg";
import Minimize from "../../assets/icons/minimize.svg";

import Server from "../../utils/server";

export const Player = () => {
  const option = Server[0];
  return (
    <>
      <div className={styled.Slider}>
        <Slider
          trackStyle={{ backgroundColor: "#4ac08f" }}
          railStyle={{ backgroundColor: "#2c123f" }}
          handleStyle={{ borderBlockColor: "#2EF4CC", borderWidth: 4 }}
        />
      </div>
      <div className={styled.player}>
        <div className={styled.information}>
          <img src={Heart} alt="Favoritar" />
          <div>
            <strong>{option.title}</strong>
            <span>{option.name}</span>
          </div>
        </div>

        <div className={styled.actions}>
          <button>
            <img src={Shuffle} alt="" />
          </button>
          <button>
            <img src={Previous} alt="" />
          </button>
          <button className={styled.buttonPlay}>
            <img src={Play} alt="" />
          </button>
          <button>
            <img src={Next} alt="" />
          </button>
          <button>
            <img src={Repeat} alt="" />
          </button>
        </div>

        <audio controls src={option.url} />
        {console.log(option.url)}

        <div className={styled.buttonEffect}>
          <button>
            <img src={Volume} alt="" />
          </button>
          <button>
            <img src={Minimize} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
