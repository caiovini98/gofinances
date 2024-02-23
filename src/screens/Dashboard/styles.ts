import { DefaultTheme } from "styled-components";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }: DefaultTheme) => theme.colors.primary};
  padding-top: ${RFValue(50)}px;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Photo = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }: DefaultTheme) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.regular};
`;

export const UserName = styled.Text`
  color: ${({ theme }: DefaultTheme) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }: DefaultTheme) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
  color: ${({ theme }: DefaultTheme) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;
