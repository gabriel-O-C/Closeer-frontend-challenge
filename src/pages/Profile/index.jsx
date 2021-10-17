/* eslint-disable react/jsx-pascal-case */
import React, {  useEffect, useState } from "react";
import {
  Aside,
  Container,
  Img,
  Logo__area,
  Profile__container,
  Profile__img,
  Profile__info,
  Profile__info__item,
  Profile__title,
  Profile__username,
  Register__time,
  Timer,
} from "./style";
import Verified from "../../assets/verified.png";
import clock from "../../assets/clock.png";
import logo from "../../assets/Logo.png";
import { Main } from '../../components/index'
import data from "../../data.json";
import { getCurrentDate, getYearDifference } from "../../utils/currentTime";
const Profile = () => {
  const userName = `${data.first_name} ${data.last_name} `;
  const userHeight = `Altura: ${data.height}`;
  const userSize = `Manequim: ${data.size}`;
  const userShoe = `Calçado: ${data.shoe}`;
  const [currentDate, setCurrentDate] = useState();
  const yearsAtCloseer = getYearDifference();

  useEffect(() => {
    setCurrentDate(getCurrentDate())
   
  }, [currentDate])

  return (
    <Container>
      <Aside>
        <Profile__container>
          
          <Timer>{currentDate}</Timer>
          <Profile__img src={data.picture} />
          <Profile__username>
            {userName}
            <Img src={Verified} alt="verified icon" />
          </Profile__username>
          <Profile__title>{data.role}</Profile__title>
          <Profile__info>
            <Profile__info__item>{userHeight}</Profile__info__item>
            <Profile__info__item>{userSize}</Profile__info__item>
            <Profile__info__item>{userShoe}</Profile__info__item>
          </Profile__info>
          <Register__time>
            <Img src={clock} alt="clock icon" /> {yearsAtCloseer}
          </Register__time>
        </Profile__container>
      </Aside>
      <Main></Main>
        <Logo__area>

        <img src={logo} alt="logo" style={{width: '80px', height: '30px' }} />
      </Logo__area>
      
    </Container>
  );
};

export default Profile;
