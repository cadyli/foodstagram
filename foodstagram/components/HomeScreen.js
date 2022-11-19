import React from 'react';
import ThemeManager, { useTheme } from '../assets/themes';
import { Switch } from 'react-native';
import styled from 'styled-components/native';

  
function HomeScreen(props) {
    const theme = useTheme()
    return (
      <Container>
        <Title>Crowdbotics app</Title>
        <Switch 
          value={theme.mode === 'dark'}
          onValueChange={value => theme.setMode(value ? 'dark' : 'light')}
        />
      </Container>
    )
  }

export default HomeScreen;

const Container = styled.View`
  flex: 1;
  /* add this */
  background: ${props => props.theme.backgroundAlt};
  align-items: center;
  justify-content: center;
`

const Title = styled.Text`
  font-size: 24;
  /* add this */
  color: ${props => props.theme.text};
  `
