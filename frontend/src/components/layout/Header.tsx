import { Shield, Moon, Home } from "lucide-react";

interface HeaderProps {
  showBackButton?: boolean;
  onBackClick?: () => void;
}

export default function Header({
  showBackButton = false,
  onBackClick,
}: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 w-full">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-base font-semibold text-gray-900">
                Triage AI
              </h1>
              <p className="text-sm text-gray-500">
                Privacy-First Clinical Assessment
              </p>
            </div>
          </div>

          {/* Right side - Back button or Settings */}
          {showBackButton ? (
            <button
              onClick={onBackClick}
              className="flex items-center gap-2 px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
          ) : (
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Moon className="w-5 h-5 text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
