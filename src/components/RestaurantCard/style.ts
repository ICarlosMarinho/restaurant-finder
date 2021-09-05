import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  width: 500px;
  padding: 10px;
  background-color: #fff;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
`;

export const CardTitle = styled.h2`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.darkerGray};
`;

export const CardText = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.lighterGray};
`;

export const CardImg = styled.img`
  border-radius: 5px;
  width: 30%;
  height: auto;
`;
