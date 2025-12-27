import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4 font-sans">
      <div className="max-w-md w-full bg-[#1A1A1A] border border-[#333] rounded-2xl shadow-2xl p-8 animate-fade-in-up">
        <h1 className="text-3xl font-semibold mb-3 tracking-tight">
          Unknown error
        </h1>

        <p className="text-gray-400 text-base mb-2">
          We couldn't load this page.
        </p>

        <p className="text-gray-500 text-sm mb-8">
          Try again or return to the dashboard.
        </p>

        <div className="grid grid-cols-2 gap-3 w-full">
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium border-0"
            onClick={() => navigate("/")}
          >
            Go to dashboard
          </Button>
          <Button
            variant="outline"
            className="w-full bg-transparent border-gray-700 hover:bg-gray-800 text-gray-300 hover:text-white"
            onClick={() => navigate(-1)}
          >
            Go back
          </Button>
          <Button
            variant="secondary"
            className="w-full bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800 text-gray-300"
            onClick={() => window.location.reload()}
          >
            Try again
          </Button>
          <Button
            variant="ghost"
            className="w-full text-gray-400 hover:text-gray-300 hover:bg-gray-800/30"
            onClick={() => {}} // Does nothing, just stays
          >
            Stay on this page
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800/50">
          <p className="text-xs text-gray-600 font-mono">
            Path: <span className="text-gray-500">{location.pathname}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
