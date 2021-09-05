import styled from "styled-components";

export interface SearchBarProps {
  containerWidth?: string;
  containerHeight?: string;
}

export const SearchContainer = styled.div<SearchBarProps>`
  width: ${(props) => props.containerHeight || "300px"};
  height: ${(props) => props.containerHeight || "40px"};
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  border: ${(props) => `2px solid ${props.theme.colors.lighterGray}`};
`;

export const SearchInput = styled.input`
  font-size: 16px;
  padding: 0 10px;
  width: 80%;
  height: 100%;
  border-radius: 4px 0 0 4px;
  border: none;

  &:focus {
    border: ${(props) => `2px solid ${props.theme.colors.secondary}`};
    outline: none;
  }
`;

export const SearchButton = styled.button`
  width: 20%;
  height: 100%;
  border: none;
  background-color: ${(props) => props.theme.colors.lighterGray};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;
