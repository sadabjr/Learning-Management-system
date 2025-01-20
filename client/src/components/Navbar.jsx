import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Menu,
  Sun,
  Moon,
  User,
  Settings,
  LogOut,
  School,
  DollarSign,
} from "lucide-react";
import { useTheme } from "next-themes";
import DarkMode from "@/pages/DarkMode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const user = true;
  const role = "instructor";

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="relative overflow-hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-blue-400/20 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-t from-indigo-500/20 to-transparent blur-3xl" />

      <div className="container relative px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600">
              <span className="text-xl font-bold text-white">
                <School size={"30"} />
              </span>
            </div>
            <span className="p-1 text-xl font-semibold text-transparent uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
              <Link to="/">Engineers Hub</Link>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {user ? (
              <>
                <NavigationMenu>
                  <NavigationMenuList>
                    {navItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors rounded-md group h-9 w-max bg-background hover:bg-blue-600/10 hover:text-blue-600 focus:bg-blue-600/10 focus:text-blue-600"
                          >
                            {item.title}
                          </a>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="relative rounded-full h-9 w-9"
                    >
                      <Avatar className="h-9 w-9">
                        <AvatarImage src="/api/placeholder/32/32" alt="User" />
                        <AvatarFallback>
                          <User className="w-5 h-5" />
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">
                          john@example.com
                        </p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <User className="w-4 h-4 mr-2" />
                      <Link to="profile">
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <User className="w-4 h-4 mr-2" />
                      <span>
                        <Link to="my-learning">My Learning</Link>
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <DollarSign className="w-4 h-4 mr-2" />
                      <span>Billing</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="w-4 h-4 mr-2" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <LogOut className="w-4 h-4 mr-2" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  className="text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Sign Up
                </Button>
              </div>
            )}
            <DarkMode />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex items-center space-x-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>

            {/* Mobile User Profile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative w-8 h-8 rounded-full"
                >
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/api/placeholder/32/32" alt="User" />
                    <AvatarFallback>
                      <User className="w-4 h-4" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">
                      john@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="w-4 h-4 mr-2" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col mt-6 space-y-4">
                  {navItems.map((item) => (
                    <React.Fragment key={item.title}>
                      <a
                        href={item.href}
                        className="block text-lg font-medium transition-colors hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </a>
                    </React.Fragment>
                  ))}
                  {role === "instructor" && (
                    <div className="pl-4 space-y-2">
                      <SheetFooter>
                        <SheetClose asChild>
                          <Button
                            type="submit"
                            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                          >
                            Dashboard
                          </Button>
                        </SheetClose>
                      </SheetFooter>
                    </div>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;