import styled from "styled-components";
import theme from "../Assets/theme.json";

export const Container = styled.div`
  height: ${({ height }) => (height ? height : "auto")}px;
  margin-left: 8%;
  margin-right: 8%;
  display: ${({ row }) => (row ? "flex" : "")};
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "center")};
  margin-top: ${({ top }) => (top ? top : "")}%;
`;

export const Image = styled.img``;

export const ContainerInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 850px) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  max-width: 250px;
`;
export const Box = styled.div`
  background: ${({ color }) => (color ? theme.Colors[color] : "")};
  width: ${({ width }) => (width ? width : "auto")}%;
  height: ${({ height }) => (height ? height : "auto")}px;
  margin-left: ${({ left }) => (left ? left : "")}%;
  margin-right: ${({ right }) => (right ? right : "")}%;
  margin-top: ${({ top }) => (top ? top : "")}%;
  margin-bottom: ${({ bottom }) => (bottom ? bottom : "")}%;
  padding-top: ${({ paddingTop }) => (paddingTop ? paddingTop : "")}%;
  padding-left: ${({ paddingLeft }) => (paddingLeft ? paddingLeft : "")}%;
  padding: ${({ padding }) => (padding ? padding : "")};
  padding-right: ${({ paddingRight }) => (paddingRight ? paddingRight : "")}%;
  display: ${({ row }) => (row ? "flex" : "")};
  flex-direction: ${({ colum }) => (colum ? "colum" : "")};
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "center")};
  gap: ${({ gap }) => (gap ? gap : "")};
  cursor: ${({ cursor }) => (cursor ? "pointer" : "")};
`;

export const Title = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-size: ${({ size }) => (size ? size : "")}px;
  font-weight: ${({ bold }) => (bold ? "bold" : "lighter")};
  text-align: ${({ text }) => (text ? text : "")};
  margin-top: ${({ top }) => (top ? top : "")}%;
  margin-left: ${({ left }) => (left ? left : "")}%;
  letter-spacing: ${({ spacing }) => (spacing ? spacing : 0)}px;
  padding-left: ${({ paddingleft }) => (paddingleft ? paddingleft : "")}%;
  width: ${({ width }) => (width ? width : "auto")}%;
  color: ${({ color }) => (color ? theme.Colors[color] : "dark")};
  margin-bottom: ${({ bottom }) => (bottom ? bottom : "")}%;
  opacity: ${({ opacity }) => (opacity ? 0.8 : "")};
  cursor: ${({ cursor }) => (cursor ? "pointer" : "")};
`;
export const Space = styled.div`
  height: 20px;
`;
