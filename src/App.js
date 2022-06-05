import { ThemeProvider } from 'styled-components';
import theme from './assets/themes/default'
function App() {
  return (
    <ThemeProvider theme={theme}>
      Refactoring
    </ThemeProvider>
  );
}

export default App;
