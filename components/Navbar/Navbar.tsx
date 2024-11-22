import { DarkMode } from "./DarkMode";
import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import Search from "./search";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex items-center my-4 gap-2 justify-between sm:flex-row sm:items-center ">
        <Logo />
        <Search />
        <div className="flex items-center gap-2">
          <DarkMode/>
          <DropdownListMenu/>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
