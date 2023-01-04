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
      <div>
      <Navbar/>
        <main className="overflow-hidden dark:bg-zinc-800 transition-all duration-300">
          {children}
        </main>
      </div>
      <Footer />
    </Providers>
  );
};

export default Layout;
