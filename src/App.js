import React, { useState } from 'react';
import styled from '@emotion/styled';
import NavBar from 'unify-react-mobile/build/NavBar';
import Tab from 'unify-react-mobile/build/Tab';
import TabContent from 'unify-react-mobile/build/TabContent';
import Profile from './Profile';
import Wallet from './Wallet';

const NavBtn = styled.button(({ count, image }) => {
  return `
    position: relative;
    height: 52px;
    width: 32px;
    background-image: url("${image}");
    background-repeat: no-repeat;
    background-position: center;
    border: 0;
    outline: 0;
    background-color: transparent;

    &::before {
      content: ${count ? `'${count}'` : ''};
      position: absolute;
      top: 8px;
      right: -2px;
      font-weight: 600;
      background-color: #EA212D;
      color: white;
      height: 16px;
      padding: 2px ${count.length > 1 ? 4 : 6}px;
      font-size: 10px;
      border-radius: 8px;
    }
  `
});

const App = props => {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleToggleSidebar = () => {
    setDisplaySidebar(!displaySidebar);
  }

  const handleTabClick = (_, tabItem) => {
    const { index } = tabItem;

    setActiveTab(index);
  };

  return (
    <>
      <NavBar
        main
        hideNavButton
        title="Akun Saya"
        noShadow
        onBurgerClick={handleToggleSidebar}>
        <NavBtn count="2" image='https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/05f46596.svg' />
        <NavBtn count="5" image='https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/6444aedf.svg' style={{marginRight: '8px'}} />
      </NavBar>
      <Tab 
        indexActive={activeTab} 
        items={[
          { key: '1', text: 'Beli' },
          { key: '2', text: 'Jual' },
        ]}
        onItemClick={handleTabClick}>
        <TabContent>
          <Profile />
          <Wallet />
        </TabContent>
        <TabContent></TabContent>
      </Tab>
    </>
  );
}

export default App;
