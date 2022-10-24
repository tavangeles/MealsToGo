import styled from "styled-components/native";
import { StatusBar, Platform, FlatList } from "react-native";

export const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantListContainer = styled(FlatList)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
