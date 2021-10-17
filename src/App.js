import { ThemeProvider } from 'styled-components';
import  Profile  from './pages/Profile/index'
import theme from './theme'
function App() {
  return (
    <ThemeProvider theme={theme}>
        <Profile />
    </ThemeProvider>
  );
}

export default App;
