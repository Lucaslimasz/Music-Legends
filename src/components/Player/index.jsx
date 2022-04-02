import styled from "./styles.module.scss";

import Heart from "../../assets/icons/heart.svg";
import Repeat from "../../assets/icons/rotate-cw.svg";
import Previous from "../../assets/icons/arrow-left.svg";
import Next from "../../assets/icons/arrow-right.svg";
import Play from "../../assets/icons/play.svg";
import Shuffle from "../../assets/icons/repeat.svg";
import Volume from "../../assets/icons/volume.svg";
import Minimize from "../../assets/icons/minimize.svg";

export const Player = () => {
  return (
    <div className={styled.player}>
      <div className={styled.information}>
        <img src={Heart} alt="Favoritar" />
        <div>
          <strong>Warrior</strong>
          <span>Riot games ft. Imagine Dragons</span>
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

      <div className={styled.buttonEffect}>
        <button>
          <img src={Volume} alt="" />
        </button>
        <button>
          <img src={Minimize} alt="" />
        </button>
      </div>
    </div>
  );
};
