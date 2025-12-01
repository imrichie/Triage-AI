import { useState } from "react";
import Header from "./components/layout/Header";
import LandingPage from "./pages/LandingPage";
import EmptyState from "./components//EmptyState";

type ViewMode = "landing" | "app";
type AppState = "ready" | "processing" | "results";

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("landing");
  const [appState, _setAppState] = useState<AppState>("ready");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* GLOBAL CONTAINER - Change width here only */}
      <div className="max-w-[1400px] mx-auto">
        {/* Landing Page View */}
        {viewMode === "landing" && (
          <>
            <Header />
            <LandingPage onEnterApp={() => setViewMode("app")} />
          </>
        )}

        {/* Main App View */}
        {viewMode === "app" && (
          <>
            {/* App Header */}
            <header className="bg-white border-b border-gray-200">
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl font-bold">T</span>
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

                  <button
                    onClick={() => setViewMode("landing")}
                    className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50"
                  >
                    ← Back to Home
                  </button>
                </div>
              </div>
            </header>

            {/* Main Content - Split Screen */}
            <main className="p-6">
              <div className="flex gap-6 h-[calc(100vh-140px)]">
                {/* Left Panel (40%) */}
                <div className="w-2/5 bg-white border border-gray-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">
                    Patient Intake Form
                  </h2>
                  <p className="text-gray-600">Form will go here (Phase 3)</p>
                </div>

                {/* Right Panel (60%) */}
                <div className="w-3/5 bg-white border border-gray-200 rounded-lg">
                  {appState === "ready" && <EmptyState />}
                  {appState === "processing" && (
                    <div className="p-6">
                      <p className="text-gray-600">
                        Processing animation will go here (Phase 4)
                      </p>
                    </div>
                  )}
                  {appState === "results" && (
                    <div className="p-6">
                      <p className="text-gray-600">
                        Results panel will go here (Phase 5)
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
