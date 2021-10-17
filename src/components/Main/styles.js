import styled from "styled-components";

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
  color: ${(props) => props.theme.colors.black}
`;

export const Main__container = styled.main`
  display: flex;
  justify-content: center;
  /* align-items: center;  */
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  margin-left: 130px;
`;

export const Main__text = styled.p`
  font-size: 18px;
  color: ${(props) => props.theme.colors.black};
  line-height: 23px;
  text-align: left;
`;

export const Input__container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input__large = styled.input`
  background-color: ${(props) => props.theme.colors.gray};
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.darkGray};
  width: 260px;
  border: none;
  height: 32px;
  padding-left: 5px;
  border-radius: 6px;
  margin-right: 20px;
`;

export const Input__small = styled.input`
  border: none;
  font-size: 14px;
  line-height: 18px;
  color: ${(props) => props.theme.colors.darkGray};
  background-color:  ${(props) => props.theme.colors.gray};
  border-radius: 6px 0px 0px 6px;
  height: 32px;
  margin-left: 2px;
  text-align: left;
  width: 98px;
`;

export const Input__medium = styled.div`
  border: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color:  ${(props) => props.theme.colors.white};
  background-color:  ${(props) => props.theme.colors.purple};
  height: 32px;
  width: 180px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 13px;
`;


export const Jobs__container = styled.section`
  border-radius: 8px;
  background-color:  ${(props) => props.theme.colors.purple};
  color:  ${(props) => props.theme.colors.white};
  min-width: 600px;
  min-height: 100px;
  margin-top: 15px;
`;

export const Future__job = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.blue};
  border: 1px solid ${(props) => props.theme.colors.lightBlue};
  margin-right: 8px;
  cursor: pointer;
`;

export const Initiated__job = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.red};
  border: 1px solid ${(props) => props.theme.colors.lightRed};
  margin-right: 8px;
  cursor: pointer;

`;

export const Next__job = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.yellow};
  border: 1px solid ${(props) => props.theme.colors.lightYellow};
  cursor: pointer;

`;

export const Job__circles__box = styled.div`
  display: flex;
  margin-top: 16px;
  margin-left: 16px;
  margin-bottom: 40px;
`;

export const Agenda__container = styled.article`
  display: flex;
  margin: 10px;
`;

export const AgendaItem = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.white};
  font-size: 14px;
  line-height: 18px;
  margin-left: 5px;
  margin-bottom: 10px;

`;