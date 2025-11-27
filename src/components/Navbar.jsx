"use client";

import Link from "next/link";
import Logo from "./Logo";
import MyContainer from "./MyContainer";
import { useClerk, useUser } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { signOut } = useClerk();
  const { isLoaded, user } = useUser();

  // 2. Get the current path
  const pathname = usePathname();

  const getLinkClasses = (href) => {
    // 3. Check the current path
    const isActive = pathname === href;

    //active link style
    return isActive
      ? "text-white font-bold bg-secondary rounded-lg"
      : "text-gray-800 font-semibold";
  };

  const menu = (
    <>
      <li>
        <Link href="/" className={getLinkClasses("/")}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/all-ebooks" className={getLinkClasses("/all-ebooks")}>
          All eBooks
        </Link>
      </li>
      <li>
        <Link href="/about" className={getLinkClasses("/about")}>
          About
        </Link>
      </li>
      <li>
        <Link href="/blog" className={getLinkClasses("/blog")}>
          Blog
        </Link>
      </li>
    </>
  );

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
            <ul className="menu menu-horizontal px-1">{menu}</ul>
          </div>
          <div className="navbar-end">
            {!isLoaded ? (
              // Only button area loading spinner
              <div className="w-24 h-10 flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
              </div>
            ) : user ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  className="avatar avatar-online avatar-placeholder"
                >
                  <div className="bg-neutral text-neutral-content w-10 cursor-pointer rounded-full">
                    <span className="text-xl">
                      <Image
                        src={user?.imageUrl}
                        width={50}
                        height={50}
                        alt={user?.fullName || "User Avatar"}
                      />
                    </span>
                  </div>
                </div>

                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <Link href="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <button
                      onClick={() =>
                        signOut(() => (window.location.href = "/login"))
                      }
                    >
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link href="/login" className="btn myBtn rounded-full mr-4">
                  Login
                </Link>
                <Link href="/register" className="btn myBtn rounded-full">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
