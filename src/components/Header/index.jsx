import styled from './styles.module.scss';

export const Header = () => {
  return (
    <header className={styled.header}>
      <ul>
        <li>Inicio</li>
        <li>Buscar</li>
        <li>Suas Bibliotecas</li>
      </ul>
      <h1>Music Legends</h1>
      <div>
        <p>Lucas Lima</p>
        <img src="https://github.com/lucaslimasz.png" alt="" />
      </div>
    </header>
  );
};
