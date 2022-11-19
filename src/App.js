import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { publicRoutes } from './routes';
import { DefauLayout } from 'components/Layouts';
import { theme } from 'theme/global';
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box className='App'>
          <CssBaseline />
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout;
              switch (route.component) {
                case 'default':
                  Layout = DefauLayout;
                  break;
                default:
                  Layout = DefauLayout;
                  break;
              }
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
