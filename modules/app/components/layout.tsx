import Providers from "../hooks/Providers";
import Footer from "./footer";
import Meta from "./meta";
import Navbar from "./navbar";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <Providers>
      <Meta />
      <div className="bg-white text-[#313d41] dark:text-slate-100" >
      <Navbar/>
        <main className="overflow-hidden dark:bg-[#01375b] transition-all duration-300 font-text">
          {children}
        </main>
      </div>
      <Footer />
    </Providers>
  );
};

export default Layout;
