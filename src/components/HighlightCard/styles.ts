import styled from "styled-components/native";
import { DefaultTheme, css } from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { Feather } from "@expo/vector-icons";

interface TypeProps {
  type: "up" | "down" | "total";
}

export const Container = styled.View<TypeProps>`
  background-color: ${({ theme, type }: DefaultTheme) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }: DefaultTheme) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
`;

export const Icon = styled(Feather)<TypeProps>`
  font-size: ${RFValue(40)}px;

  ${(props: { type: any }) =>
    props.type === "up" &&
    css`
      color: ${({ theme }: DefaultTheme) => theme.colors.success};
    `};

  ${(props: { type: any }) =>
    props.type === "down" &&
    css`
      color: ${({ theme }: DefaultTheme) => theme.colors.attention};
    `};

  ${(props: { type: any }) =>
    props.type === "total" &&
    css`
      color: ${({ theme }: DefaultTheme) => theme.colors.shape};
    `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text<TypeProps>`
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }: DefaultTheme) =>
    type === "total" ? theme.colors.shape : theme.colors.text_dark};
  margin-top: 38px;
`;

export const LastTransaction = styled.Text<TypeProps>`
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }: DefaultTheme) =>
    type === "total" ? theme.colors.shape : theme.colors.text};
`;
