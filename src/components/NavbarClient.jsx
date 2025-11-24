"use client";

import { useClerk } from "@clerk/nextjs";

import Link from "next/link";

const NavbarClient = ({user}) => {
  const { signOut } = useClerk();
  return (
    <div>
      {!user ? (
        <button
          onClick={() => signOut(() => (window.location.href = "/login"))}
          className="btn mt-4"
        >
          Logout
        </button>
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
  );
};

export default NavbarClient;
