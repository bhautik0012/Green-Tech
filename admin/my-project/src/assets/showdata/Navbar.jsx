import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > lastScrollPos) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
  }, [lastScrollPos]);

  return (
    <header
      className={`shadow-lg lg:bg-zinc-900 sticky top-0 transition-transform duration-300 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="flex">
        <ul className="lg:flex lg:gap-[100px] lg:mt-[10px] lg:ml-[120px] md:hidden sm:hidden">
          {["/viewdata","/dashboard",].map(
            (path, index) => (
              <li key={index} className="lg:mt-[20px] lg:mb-[20px]">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `transition-all cursor-pointer text-gray-400 font-bold duration-500 hover:scale-110 ${
                      isActive ? "text-white" : "hover:text-white"
                    }`
                  }
                >
                  {path.slice(1).toUpperCase() || "HOME"}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* login and registration */}

       
      </nav>
    </header>
  );
};

export default Navbar;