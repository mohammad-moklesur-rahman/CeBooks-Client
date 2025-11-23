import Link from "next/link";
import Logo from "./Logo";
import MyContainer from "./MyContainer";

const Navbar = () => {
  const menu = (
    <>
    <li><Link href='/'>Home</Link></li>
    <li><Link href='/'>All eBooks</Link></li>
    <li><Link href='/'>About</Link></li>
    <li><Link href='/'>Blog</Link></li>
    </>
  )
  return (
    <div className="bg-primary">
      <MyContainer>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {menu}
              </ul>
            </div>
            <Link href="/" className="text-xl font-bold">
              <Logo />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menu}
            </ul>
          </div>
          <div className="navbar-end">
            <Link href='/login' className="btn myBtn rounded-full mr-4">Login</Link>
            <Link href='/register' className="btn myBtn rounded-full">Register</Link>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
