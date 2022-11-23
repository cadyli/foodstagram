import React from 'react';
import { Text } from 'react-native';
import styled from "styled-components/native";

const Profile = () => {
  return (
    <Container>
      <Text>Full Name</Text>
      <Text>@username</Text>
    </Container>
  )
}

export default Profile;

const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.backgroundAlt};
  align-items: center;
  justify-content: center;
  display: "flex";
  margintop: "20%";
`;