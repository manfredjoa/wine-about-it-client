import { useState, useEffect, createElement } from "react";
import { useNavigate } from "react-router-dom";

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

// Creates menu when clicking on account icon
function AccountMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          style={{ color: "rgb(96, 20, 30)" }}
        >
          {createElement(UserCircleIcon, { className: "h-[24px] w-[24px]" })}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
            style={{ color: "rgb(96, 20, 30)" }}
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

        <Typography as="a" href="/sign-in">
          <MenuItem
            onClick={closeMenu}
            className={"flex items-center gap-2 rounded"}
            style={{ color: "rgb(96, 20, 30)" }}
          >
            {createElement(PowerIcon, {
              className: "h-4 w-4",
              strokeWidth: 2,
            })}
            Sign Out
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

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  // When productType button is clicked, it will navigate to the url
  const handleProductTypeFilter = async (e) => {
    if (e.target.id === "red") {
      navigate("/filter/red");
    } else if (e.target.id === "white") {
      navigate("/filter/white");
    } else if (e.target.id === "rose") {
      navigate("/filter/rose");
    } else if (e.target.id === "all") {
      navigate("/filter/all");
    }
  };

  return (
    <div>
      <Navbar className="max-w-full rounded-none">
        {/* ==================== */}
        <div
          className="relative mx-auto flex"
          style={{ color: "rgb(96, 20, 30)" }}
        >
          <Typography
            as="a"
            href="/"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-black text-5xl mx-auto"
            style={{ fontFamily: "Wine Date" }}
          >
            Wine About It
          </Typography>

          {/* Favorites and shopping cart icons */}
          <div className="absolute top-2/4 right-3 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
            <NavList />
          </div>

          {/* Responsive menu change (NavList > Bars2Icon) when Collapse is open (determined by useEffect above) */}
          <IconButton
            size="sm"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden my-auto"
            style={{ color: "rgb(96, 20, 30)" }}
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>

          <AccountMenu />
        </div>
        {/* ==================== */}

        <Collapse open={isNavOpen} className="overflow-scroll">
          <NavList />
        </Collapse>
      </Navbar>

      <div
        className="flex justify-center border-b border-t"
        style={{ borderColor: "rgb(96, 20, 30)" }}
      >
        <Button
          id="all"
          variant="text"
          onClick={handleProductTypeFilter}
          style={{ color: "rgb(96, 20, 30)" }}
        >
          All Wines
        </Button>

        <Button
          id="red"
          variant="text"
          onClick={handleProductTypeFilter}
          style={{ color: "rgb(96, 20, 30)" }}
        >
          Red Wines
        </Button>

        <Button
          id="white"
          variant="text"
          onClick={handleProductTypeFilter}
          style={{ color: "rgb(96, 20, 30)" }}
        >
          White Wines
        </Button>

        <Button
          id="rose"
          variant="text"
          onClick={handleProductTypeFilter}
          style={{ color: "rgb(96, 20, 30)" }}
        >
          Rosé Wines
        </Button>
      </div>
    </div>
  );
}
