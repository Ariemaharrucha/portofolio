import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookText, Briefcase, MessageSquare, Menu, X, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/blog", label: "Blog", icon: BookText },
    { path: "/portfolio", label: "Portfolio", icon: Briefcase },
    { path: "/contact", label: "Contact", icon: MessageSquare },
    { path: "/game", label: "Game", icon: Gamepad2 },
  ];
  
  const toggleSidebar = () => setIsOpen(!isOpen);

  const sidebarVariants = {
    expanded: {
      width: "18rem",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    collapsed: {
      width: "5.6rem",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const linkVariants = {
    expanded: {
      width: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    collapsed: {
      width: "2.5rem",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const labelVariants = {
    expanded: {
      opacity: 1,
      x: 0,
      display: "inline-block",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.1
      }
    },
    collapsed: {
      opacity: 0,
      x: -10,
      display: "none",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 right-4 z-50 md:hidden neo-brutalist-sm"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </Button>
      
      {/* Desktop Sidebar */}
      <motion.div
        variants={sidebarVariants}
        initial="collapsed"
        animate={isHovered ? "expanded" : "collapsed"}
        className={cn(
          "fixed md:left-0 top-0 h-full bg-background border-r-2 border-black dark:border-white/20 z-40 hidden md:flex flex-col",
          "hover:shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_0px_0px_0px_rgba(255,255,255,0.8)]"
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-6 flex flex-col h-full w-full">
          <nav className="flex-1 w-full">
            <ul className="space-y-4 w-full">
              {menuItems.map((item) => (
                <li key={item.path} className="w-full">
                  <Link 
                    to={item.path}
                    className={cn(
                      "flex items-center gap-4 px-2 py-3 hover:bg-accent/10 transition-colors h-10 neo-brutalist-sm overflow-hidden whitespace-nowrap w-full",
                      location.pathname === item.path 
                        ? "bg-neoAccent text-black font-bold dark:bg-accent dark:text-white" 
                        : "hover:translate-x-1 transition-transform"
                    )}
                  >
                    <item.icon size={24} className="min-w-5" />
                    <motion.span
                      variants={labelVariants}
                      initial="collapsed"
                      animate={isHovered ? "expanded" : "collapsed"}
                      className="truncate"
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-auto pt-6 border-t border-border">
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              exit={{ y: -300 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-x-0 top-0 h-auto bg-background border-b-2 border-black dark:border-white/20 z-30 md:hidden p-4 pt-20"
            >
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: menuItems.indexOf(item) * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center gap-2 px-4 py-3 neo-brutalist-sm w-full",
                        location.pathname === item.path 
                          ? "bg-neoAccent text-black font-bold dark:bg-accent dark:text-white" 
                          : ""
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-20 md:hidden"
              onClick={toggleSidebar}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}