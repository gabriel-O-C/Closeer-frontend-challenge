import styled from 'styled-components';
export const SideBar = styled.div`
  width: 500px;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.purple};
  font-size: 1.6rem;
  color: #ffffff;
  border-top-right-radius: 24px;
  p{
    padding-left: 13px;
    padding-top: 16px;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
    img{
      border-radius: 50%;
      border: 3px solid #ffffff;
    }
    h3{
      font-weight: 700;
      font-size: 1.8rem;
      text-align: center;

      img{
        border: 0;
        padding-left: 5px;
      }
    }
  }
`;

export const UserInfo = styled.span`
  margin-top: 15px;
  margin-bottom: 5px;
  display: flex;

`;