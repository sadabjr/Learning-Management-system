import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const user = true;
  const role = "instructor";

  const navItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    // {
    //   title: "Services",
    //   subItems: [
    //     { title: "Consulting", href: "/services/consulting" },
    //     { title: "Development", href: "/services/development" },
    //     { title: "Design", href: "/services/design" },
    //   ],
    // },
    { title: "Contact", href: "/contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-1 rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">
                <School size={"30"} />
              </span>
            </div>
            <span className="p-1 text-xl font-semibold uppercase">
              Engineers Hub
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
                        {item.subItems ? (
                          <>
                            <NavigationMenuTrigger className="px-4 h-9">
                              {item.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid w-48 gap-3 p-4 md:w-[200px]">
                                {item.subItems.map((subItem) => (
                                  <li key={subItem.title}>
                                    <NavigationMenuLink asChild>
                                      <a
                                        href={subItem.href}
                                        className="block p-3 space-y-1 leading-none no-underline transition-colors rounded-md outline-none select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                      >
                                        <div className="text-sm font-medium">
                                          {subItem.title}
                                        </div>
                                      </a>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                            >
                              {item.title}
                            </a>
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="mr-2"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                </Button>

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
                      <span>Profile</span>
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
                <Button variant="outline" className="">
                  Login
                </Button>
                <Button>Sign Up</Button>
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
                      {item.subItems ? (
                        <div className="space-y-3">
                          <div className="text-lg font-medium">
                            {item.title}
                          </div>
                          <div className="pl-4 space-y-2">
                            {item.subItems.map((subItem) => (
                              <a
                                key={subItem.title}
                                href={subItem.href}
                                className="block text-sm transition-colors text-muted-foreground hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.title}
                              </a>
                            ))}
                          </div>
                          
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          className="block text-lg font-medium transition-colors hover:text-primary"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </a>
                      )}
                     
                    </React.Fragment>
                    
                  ))}
                   {role === "instructor" && (
                            <div className="pl-4 space-y-2">
                              <SheetFooter>
                                <SheetClose asChild>
                                  <Button type="submit">Dashboard</Button>
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
