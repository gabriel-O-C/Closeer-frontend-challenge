import styled from "styled-components";

export const Aside = styled.aside`
  background-color: ${(props) => props.theme.colors.purple};
  height: 100vh;
  max-width: 38vw;
  min-width: 28vw;
  display: flex;
  justify-content: center;
  align-items: top;
  border-radius: 0px 24px 0px 0px;
`;

export const Profile__container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};

`;


export const Profile__img = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-top: 100px;
`;

export const Profile__username = styled.h3`
  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
  line-height: 22px;  
`;

export const Profile__title = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-style: italic;
  color: ${(props) => props.theme.colors.white};
  line-height: 20px;
  margin-bottom: 10px;
`;

export const Profile__info = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Profile__info__item = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.theme.colors.white};
  margin-right: 8px;
`;

export const Register__time = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: ${(props) => props.theme.colors.white};
  padding: 5px;
`;

export const Img = styled.img`
  margin-right: 5px;
  margin-left: 5px;
`;

export const Logo__area = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 20px;
  width: 80vw;
  margin: 10px;
`;

export const Container = styled.div`
  display: flex;
`;

export const Timer = styled.div`
  margin-top: 15px;
`;