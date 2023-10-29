import { useId } from "react";
import { NavLink } from "react-router-dom";

import { Logo } from "$layout";
import { Heart, ShoppingCart, User2 } from "lucide-react";

const Nav = () => {
    
    const navItems = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Shop",
            url: "/shop",
        },
        {
            title: "About",
            url: "/about",
        },
        {
            title: "Contact",
            url: "/contact",
        },
    ];
    return (
        <nav
            className="w-10/12 mx-auto flex  items-center justify-between bg-gray-200 px-6 py-4 rounded-lg
          top-4 
        "
        >
            <Logo className="w-10 h-10 " />
            <div className="flex gap-x-6  ">
                {navItems.map((item) => {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const uuId = useId();

                    return (
                        <NavLink
                            to={item.url}
                            defaultValue={"/"}
                            key={uuId}
                            className="flex items-center relative group"
                        >
                            <p className="font-semibold text-lg text-gray-700 hover:text-gray-900 cursor-pointer">
                                {item.title}
                            </p>
                            <span className="w-0 duration-300  transition-all h-1 group-hover:w-full bg-teal-900 absolute -bottom-1 left-0"></span>
                        </NavLink>
                    );
                })}
            </div>
            <div className="flex  items-center gap-x-2">
                <Heart />
                <ShoppingCart />
                <User2 className="ml-4" />
            </div>
        </nav>
    );
};

export default Nav;
