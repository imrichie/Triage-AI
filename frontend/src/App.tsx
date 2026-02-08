import { useState } from "react";
import Header from "./components/layout/Header";
import LandingPage from "./pages/LandingPage";
import EmptyState from "./components/EmptyState";

type ViewMode = "landing" | "app";
type AppState = "ready" | "processing" | "results";

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("landing");
  const [appState] = useState<AppState>("ready");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Landing Page View */}
      {viewMode === "landing" && (
        <div className="min-h-screen bg-white">
          <Header />
          <div className="max-w-[1200px] mx-auto">
            <LandingPage onEnterApp={() => setViewMode("app")} />
          </div>
        </div>
      )}

      {/* Main App View */}
      {viewMode === "app" && (
        <>
          <Header showStatusBadge />

          <div className="max-w-[1600px] mx-auto p-6">
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
          </div>
        </>
      )}
    </div>
  );
}

export default App;
