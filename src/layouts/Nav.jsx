import { useState, useEffect, createElement } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  Bars2Icon,
  HeartIcon,
  ShoppingCartIcon,
  // MagnifyingGlassIcon, // For navigating to browse page later on
} from "@heroicons/react/24/outline";

//dropdown menu
function AccountMenu({ user, handleLogOut }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  // Creates menu when clicking on account icon
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          style={{ color: "rgb(96, 20, 30)" }}
        >
          {createElement(UserCircleIcon, {
            className: "h-[24px] w-[24px]",
            style: { color: user ? "green" : "rgb(96, 20, 30)" },
          })}

          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
            style={{ color: user ? "green" : "rgb(96, 20, 30)" }}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1">
        <Typography as="a" href="/account-info">
          <MenuItem
            onClick={closeMenu}
            className={"flex items-center gap-2 rounded"}
            style={{ color: "rgb(96, 20, 30)" }}
          >
            {createElement(UserCircleIcon, {
              className: "h-4 w-4",
              strokeWidth: 2,
            })}
            My Account
          </MenuItem>
        </Typography>

        <Typography as="a" href="/account-info">
          <MenuItem
            onClick={closeMenu}
            className={"flex items-center gap-2 rounded"}
            style={{ color: "rgb(96, 20, 30)" }}
          >
            {createElement(Cog6ToothIcon, {
              className: "h-4 w-4",
              strokeWidth: 2,
            })}
            Edit Account
          </MenuItem>
        </Typography>

        <Typography
          as="a"
          onClick={user ? handleLogOut : undefined}
          href={user ? undefined : "/sign-in"}
        >
          <MenuItem
            onClick={closeMenu}
            className={"flex items-center gap-2 rounded"}
            style={{ color: "rgb(96, 20, 30)" }}
          >
            {createElement(PowerIcon, {
              className: "h-4 w-4",
              strokeWidth: 2,
            })}
            {user ? "Sign Out" : "Sign In"}
          </MenuItem>
        </Typography>
      </MenuList>
    </Menu>
  );
}

// Creates favorites and shopping cart icons
function NavList() {
  return (
    <div className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <Typography
        as="a"
        href="/favorites"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <MenuItem
          className="flex items-center gap-2 lg:rounded-full"
          style={{ color: "rgb(96, 20, 30)" }}
        >
          {createElement(HeartIcon, { className: "h-[24px] w-[24px]" })}
        </MenuItem>
      </Typography>

      <Typography
        as="a"
        href="/shopping-cart"
        variant="small"
        color="blue-gray"
        className="font-normal"
      >
        <MenuItem
          className="flex items-center gap-2 lg:rounded-full"
          style={{ color: "rgb(96, 20, 30)" }}
        >
          {createElement(ShoppingCartIcon, {
            className: "h-[24px] w-[24px]",
          })}
        </MenuItem>
      </Typography>
    </div>
  );
}

//real below
export default function Nav({ handleLogOut, user }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  // const [productTypeToggle, setProductTypeToggle] = useState(false);
  // let navigate = useNavigate();

  // When productType button is clicked, it will navigate to the url, with above useEffect re-rendering page
  // const handleProductTypeFilter = async (e) => {
  //   if (e.target.id === "red") {
  //     navigate("/filter/red");
  //     setProductTypeToggle(!productTypeToggle);
  //   } else if (e.target.id === "white") {
  //     navigate("/filter/white");
  //     setProductTypeToggle(!productTypeToggle);
  //   } else if (e.target.id === "rose") {
  //     navigate("/filter/rose");
  //     setProductTypeToggle(!productTypeToggle);
  //   } else if (e.target.id === "all") {
  //     navigate("/filter/all");
  //     setProductTypeToggle(!productTypeToggle);
  //   }
  // };

  return (
    <Navbar className="max-w-full rounded-none">
      {/* ==================== */}
      <div
        className="relative mx-auto flex"
        style={{ color: "rgb(96, 20, 30)" }}
      >
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-black text-5xl"
          style={{ fontFamily: "Wine Date", color: "rgb(96, 20, 30)" }}
        >
          Wine About It
        </Typography>

        <div className="flex justify-evenly grow">
          <NavLink to="/filter/all">
            <Typography
              id="all"
              // variant="text"
              // onClick={}
            >
              All Wines
            </Typography>
          </NavLink>

          <NavLink to="/filter/red">
            <Typography
              id="red"
              variant="text"
              // onClick={handleProductTypeFilter}
            >
              Red Wines
            </Typography>
          </NavLink>

          <NavLink to="/filter/white">
            <Typography
              id="white"
              variant="text"
              // onClick={handleProductTypeFilter}
            >
              White Wines
            </Typography>
          </NavLink>
          <NavLink to="/filter/rose">
            <Typography
              id="rose"
              variant="text"
              // onClick={handleProductTypeFilter}
            >
              Rose Wines
            </Typography>
          </NavLink>
        </div>

        {/* Favorites and shopping cart icons */}
        <div className="absolute top-2/4 right-3 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>

        {/* Responsive menu change (NavList > Bars2Icon) when Collapse is open (determined by useEffect above) */}
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <AccountMenu user={user} handleLogOut={handleLogOut} />
      </div>
      {/* ==================== */}

      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
