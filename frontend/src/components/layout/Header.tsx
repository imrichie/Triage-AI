import { Shield, Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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

          {/* Settings icon */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Moon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
