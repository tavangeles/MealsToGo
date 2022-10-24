import styled from "styled-components/native";
import { StatusBar, Platform } from "react-native";

export const SafeArea = styled.SafeAreaView`
padding-top: ${
  Platform.OS === "android"
    ? StatusBar.currentHeight + "px"
    : (props) => props.theme.space[0]
}};
flex: 1;
backgroundcolor: ${(props) => props.theme.colors.bg.primary};
`;

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
