import Providers from "../hooks/Providers";
import Footer from "./footer";
import Meta from "./meta";
import Navbar from "./navbar";
import ScrollToTop from "./ScrollToTop";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <Providers>
      <Meta />
      <div className="bg-white text-main-text dark:text-slate-100" >
      <Navbar/>
        <main className="overflow-hidden dark:bg-[#01375b] transition-all duration-300 font-text">
          {children}
        </main>
      </div>
      <ScrollToTop />
      <Footer />
    </Providers>
  );
};

export default Layout;
