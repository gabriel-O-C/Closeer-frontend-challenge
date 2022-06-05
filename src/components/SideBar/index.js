import React from 'react';
import * as S from './styles';
import profile from '../../assets/images/profile.png';
import data from '../../data/data.json';
import verified from '../../assets/images/verified.png'
const SideBar = () => {
  return (
    <S.SideBar>
      <p>Hoje - 15 de Janeiro de 2021 - 12:00</p>
      <div>
        <img src={profile} alt="user profile" />
        <h3>
          {data.first_name}
          {" "}
          {data.last_name}
          <img src={verified} alt="verified icon" />
          </h3>
          <S.UserInfo>
            Altura: {data.height}
            {" "}
            Manequim: {data.size}
            {" "}
            Calçado: {data.shoe}
          </S.UserInfo>
          <span>
          Tempo na Closeer: 1.2 anos
          </span>
      </div>
    </S.SideBar>
  )
}

export default SideBar