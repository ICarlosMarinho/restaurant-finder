import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  padding: 10px;
  column-gap: 10px;
  align-items: center;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.darkerGray};
`;

export const CardText = styled.p`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.lighterGray};
`;

export const CardImg = styled.img`
  border-radius: 5px;
  width: 80px;
  height: 80px;
  image-rendering: optimizeQuality;
`;
