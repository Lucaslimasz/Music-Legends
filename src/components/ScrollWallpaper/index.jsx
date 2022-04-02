import styled from "./styles.module.scss";

import Lol from "../../assets/logo-lol.svg";

export const ScrollWallpaper = () => {
  return (
    <div className={styled.container}>
      <div>
        <img src={Lol} alt="League of Legens" />
        <strong>Riot Games</strong>
      </div>
    </div>
  );
};
