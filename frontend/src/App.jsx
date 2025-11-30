import Header from "./components/layout/Header";

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Testing Header Component
        </h2>
      </main>
    </div>
  );
}

export default App;
