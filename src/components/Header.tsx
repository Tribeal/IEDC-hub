import React from "react";
import { Menu, X, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleAuthAction = async () => {
    if (user) {
      await signOut();
    } else {
      navigate("/login");
    }
  };

  const handleStartJourney = () => {
    navigate("/register");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Navigation Sections */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">IEDC</h1>
              <p className="text-xs text-gray-600">Innovation Hub</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              About
            </a>
            <a
              href="#events"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Events
            </a>
            <a
              href="#programs"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Programs
            </a>
            <a
              href="#success"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Success Stories
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate("/dashboard")}
                  className="flex items-center gap-2"
                >
                  Dashboard
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAuthAction}
                  className="flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAuthAction}
                  className="flex items-center gap-2"
                >
                  <LogIn size={16} />
                  Login
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                  onClick={handleStartJourney}
                >
                  Start Your Journey
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                About
              </a>
              <a
                href="#events"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Events
              </a>
              <a
                href="#programs"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Programs
              </a>
              <a
                href="#success"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Success Stories
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                {user ? (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate("/dashboard")}
                      className="flex items-center gap-2 justify-center"
                    >
                      Dashboard
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleAuthAction}
                      className="flex items-center gap-2 justify-center"
                    >
                      <LogOut size={16} />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleAuthAction}
                      className="flex items-center gap-2 justify-center"
                    >
                      <LogIn size={16} />
                      Login
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-red-600 to-orange-600"
                      onClick={handleStartJourney}
                    >
                      Start Your Journey
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
