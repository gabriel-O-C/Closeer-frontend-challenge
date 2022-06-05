import SideBar from ".";
import { ThemeProvider } from "styled-components";
import theme from "../../assets/themes/default";
import { render } from "@testing-library/react";

it('Should render the SideBar component', () => {
  const component = render(
  <ThemeProvider theme={theme}>
    <SideBar />
  </ThemeProvider>
  )
  expect(component).toBeTruthy();
})