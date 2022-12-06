import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  console.log(Header);
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
