import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, 
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import SignOutIcon from 'react-native-vector-icons/Octicons';

import AvatarImg from '../../assets/images/avatar.png';

import {
  Container,
  Header,
  Avatar,
  UserInfo,
  Username,
  Nickname,
  ScreensSection,
  SignOutSection,
  SignOutButton,
  SignOutBtnText,
  NavBtnSection, 
  NavButton, 
  NavBtnText,
} from './styles';

const Drawer = () => {
  const { navigate } = useNavigation();

  function navigateToHome() {
    navigate('Home');
  }

  function navigateToPhonograms() {
    navigate('Phonograms');    
  }

  function navigateToYT() {
    navigate('Youtube');
  }

  function navigateToProfile() {
    navigate('Profile');
  }

  return (
    <Container>
      <Header>
        <Avatar source={AvatarImg} />

        <UserInfo>
          <Username>User Name</Username> 
          <Nickname>@username</Nickname>
        </UserInfo>
      </Header>

      <ScreensSection>
        <NavBtnSection>
          <NavButton onPress={navigateToHome}>
            <Icon name="home" size={24} color={'#efeff1'} />
            <NavBtnText>Início</NavBtnText>
          </NavButton>

          <NavButton onPress={navigateToPhonograms}>
            <Icon name="disc" size={24} color={'#efeff1'} />
            <NavBtnText>Fonogramas</NavBtnText>
          </NavButton>

          <NavButton onPress={navigateToYT}>
            <Icon name="logo-youtube" size={24} color={'#efeff1'} />
            <NavBtnText>Youtube</NavBtnText>
          </NavButton>

          <NavButton onPress={navigateToProfile}>
            <Icon name="person-sharp" size={24} color={'#efeff1'} />
            <NavBtnText>Perfil</NavBtnText>
          </NavButton>
        </NavBtnSection>
      </ScreensSection>

      <SignOutSection>
        <SignOutButton>
          <SignOutIcon name="sign-out" size={22} color={'#efeff1'} />
          <SignOutBtnText>Sair</SignOutBtnText>
        </SignOutButton>
      </SignOutSection>

    </Container>
  );
}

export default Drawer;