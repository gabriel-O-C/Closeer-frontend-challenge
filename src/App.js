import { ThemeProvider } from 'styled-components';
import theme from './assets/themes/default';
import { GlobalStyles } from './assets/themes/GlobalStyles';
import {SideBar} from './components';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SideBar />
    </ThemeProvider>
  );
}

export default App;
