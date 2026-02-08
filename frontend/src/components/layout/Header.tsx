import { Shield, Moon } from "lucide-react";

interface HeaderProps {
  showStatusBadge?: boolean;
}

export default function Header({ showStatusBadge = false }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 w-full">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-base font-normal text-gray-800 leading-6 tracking-tight">
                Triage AI
              </h1>
              <p className="text-sm font-normal text-gray-500 leading-5">
                Privacy-First Clinical Assessment
              </p>
            </div>
          </div>

          {/* Right side */}
          {showStatusBadge ? (
            <div className="flex items-center gap-2 px-3 py-[1px] bg-green-50 border border-green-200 rounded-md h-[34px]">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-sm font-normal text-green-800 leading-5">
                System Ready
              </span>
            </div>
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
