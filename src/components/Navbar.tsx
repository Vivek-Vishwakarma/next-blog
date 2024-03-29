"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const isAdmin = true;
  const session = true;
  const pathName = usePathname();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blogs",
      path: "/blog",
    },
  ];
  return (
    <nav className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start ">
            <div className="flex space-x-4">
              {links.map((link) => {
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700
                        ${pathName === link.path && "bg-gray-600"}
                      `}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end ">
            <div className="flex space-x-4">
              {session ? (
                <>
                  {isAdmin && (
                    <Link
                      href="/login"
                      className="text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700"
                    >
                      Admin
                    </Link>
                  )}
                  <Link
                    href="/login"
                    className="text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700"
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <Link
                  href="/login"
                  className="text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
