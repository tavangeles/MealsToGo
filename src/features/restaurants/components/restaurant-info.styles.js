import styled from "styled-components/native";
import { Card, Paragraph } from "react-native-paper";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled(Card.Content)``;

export const Section = styled.View`
  flex-direction: row;
`;
export const Rating = styled.View`
  flex-direction: row;
`;

export const SectionEnd = styled.View`
  flex-direction: row;
  margin-left: auto;
`;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const Address = styled(Paragraph)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;
