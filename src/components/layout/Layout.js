import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import GlobalStyles from '../../components/styles/Global';
import { lightTheme, darkTheme } from '../../themes';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
import { Toggler } from '../styles/Toggler.styles';
import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const icon =
    theme === 'light' ? (
      <FiSun size={26} />
    ) : (
      <FaMoon size={26} color="white" />
    );

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Navbar>
          <Toggler onClick={toggleTheme}>{icon}</Toggler>
        </Navbar>
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Layout;
