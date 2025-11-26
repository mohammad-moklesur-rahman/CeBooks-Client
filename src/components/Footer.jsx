import Link from "next/link";
import { FaFacebook, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-primary text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/about" className="link link-hover">
          About
        </Link>
        <Link href="/blog" className="link link-hover">
          Blog
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href="/">
            <FaXTwitter size={24} />
          </Link>
          <Link href="/">
            <FaYoutube size={24} />
          </Link>
          <Link href="/">
            <FaFacebook size={24} />
          </Link>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by CeBooks
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
