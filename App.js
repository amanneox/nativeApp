import React from 'react';
import { ApplicationProvider, Layout, Text, IconRegistry  } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as appTheme } from './custom-theme.json'; // <-- Import app theme
import  AppContainer  from './components/AppNavigator';
const theme = { ...lightTheme, ...appTheme };

const App = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack}></IconRegistry>
    <ApplicationProvider mapping={mapping} theme={theme}>
       <AppContainer/>
    </ApplicationProvider>
  </React.Fragment>
);

export default App;