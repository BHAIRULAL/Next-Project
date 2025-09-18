"use client";
import Link from "next/link";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Blog", href: "/blog" },
    { title: "Products", href: "/products" },
    { title: "Articles", href: "/articles" },
  ];

  return (
    <header
      style={{
        backgroundColor: "lightblue",
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", // 🔥 Push nav links left, buttons right
      }}
    >
      {/* Left: Navigation Links */}
      <nav style={{ display: "flex", gap: "1rem" }}>
        {navLinks.map((link, index) => {
          const { title, href } = link;
          const isActive = pathName === href;

          return (
            <Link
              href={href}
              key={index}
              style={{
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal",
                color: isActive ? "blue" : "black",
              }}
            >
              {title}
            </Link>
          );
        })}
      </nav>

      {/* Right: Auth Buttons */}
      <div style={{ display: "flex", gap: "1rem" }}>
        <SignedOut>
          <SignInButton>
            <button className="auth-button sign-in">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          {/* <UserButton /> */}
          <Link href={"/user-profile"}> Profile</Link>
          <SignOutButton>
            <div>
              <button className="auth-button sign-out">Sign Out</button>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
