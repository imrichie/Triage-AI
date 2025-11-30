import { Shield, Brain, Activity, Lock, ChevronRight, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 mb-8">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-blue-600">
              Privacy-First Clinical AI
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 max-w-5xl mx-auto leading-[1.1] text-gray-900">
            AI-powered triage.
            <br />
            <span className="text-gray-600">Zero patient data shared.</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed text-gray-900">
            Triage AI analyzes patient urgency using Azure OpenAI while
            Microsoft Presidio ensures all personally identifiable information
            stays protected. HIPAA-compliant intelligence, without compromise.
          </p>

          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
            Launch Application
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          <div className="rounded-3xl p-8 border-2 bg-gray-50 border-gray-200">
            <div className="text-5xl mb-2 text-blue-600">100%</div>
            <div className="text-lg text-gray-900">PII Protection</div>
            <div className="text-sm mt-2 text-gray-600">
              All patient identifiers tokenized before AI analysis
            </div>
          </div>

          <div className="rounded-3xl p-8 border-2 bg-gray-50 border-gray-200">
            <div className="text-5xl mb-2 text-green-600">5 Levels</div>
            <div className="text-lg text-gray-900">ESI Triage</div>
            <div className="text-sm mt-2 text-gray-600">
              Emergency Severity Index classification system
            </div>
          </div>

          <div className="rounded-3xl p-8 border-2 bg-gray-50 border-gray-200">
            <div className="text-5xl mb-2 text-purple-600">85-92%</div>
            <div className="text-lg text-gray-900">AI Confidence</div>
            <div className="text-sm mt-2 text-gray-600">
              Real-time assessment reliability scoring
            </div>
          </div>
        </div>

        {/* Why Triage AI Section */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl mb-4 text-gray-900">
            Why Triage AI
          </h2>
          <p className="text-2xl md:text-3xl mb-16 text-gray-600">
            Intelligent clinical decisions with absolute privacy
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="rounded-3xl p-10 border-2 bg-gray-50 border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">
                Privacy by design, not afterthought
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Microsoft Presidio detects and removes all PII before data
                reaches Azure OpenAI. Patient names, demographics, and sensitive
                information are tokenized locally—the AI only sees anonymized
                clinical context.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-3xl p-10 border-2 bg-gray-50 border-gray-200 hover:border-green-600 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-green-600 flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">
                Clinical accuracy meets emergency standards
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Powered by ESI (Emergency Severity Index), the industry-standard
                5-level triage system. AI analyzes symptoms, vitals, and
                clinical presentation to recommend acuity levels from critical
                (Level 1) to non-urgent (Level 5).
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-3xl p-10 border-2 bg-gray-50 border-gray-200 hover:border-purple-600 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-purple-600 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">
                Transparency in every assessment
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Real-time privacy metrics show exactly what data was protected
                and how. AI confidence scores indicate reliability. Complete
                audit trail of what the AI analyzed vs. what stayed private.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-3xl p-10 border-2 bg-gray-50 border-gray-200 hover:border-yellow-600 hover:shadow-xl transition-all">
              <div className="w-14 h-14 rounded-2xl bg-yellow-600 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl mb-4 text-gray-900">
                Built for real clinical workflows
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                Quick templates, assessment history, export/print functionality,
                and dark mode for night shifts. Demo mode with realistic cases
                across all triage levels. Designed for speed without sacrificing
                thoroughness.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl mb-16 text-gray-900">
            How it works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rounded-3xl p-8 border-2 bg-gray-50 border-gray-200">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl bg-blue-50 text-blue-600">
                1
              </div>
              <h4 className="text-xl mb-3 text-gray-900">Enter patient data</h4>
              <p className="text-gray-600">
                Input demographics, chief complaint, clinical notes, and vitals
              </p>
            </div>

            <div className="rounded-3xl p-8 border-2 bg-gray-50 border-gray-200">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl bg-green-50 text-green-600">
                2
              </div>
              <h4 className="text-xl mb-3 text-gray-900">PII is tokenized</h4>
              <p className="text-gray-600">
                Presidio removes names, ages, and identifiers before AI analysis
              </p>
            </div>

            <div className="rounded-3xl p-8 border-2 bg-gray-50 border-gray-200">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl bg-purple-50 text-purple-600">
                3
              </div>
              <h4 className="text-xl mb-3 text-gray-900">
                AI analyzes content
              </h4>
              <p className="text-gray-600">
                Azure OpenAI evaluates clinical presentation and recommends
                triage level
              </p>
            </div>

            <div className="rounded-3xl p-8 border-2 bg-gray-50 border-gray-200">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl bg-yellow-50 text-yellow-600">
                4
              </div>
              <h4 className="text-xl mb-3 text-gray-900">
                Get recommendations
              </h4>
              <p className="text-gray-600">
                Receive triage level, confidence score, and clinical action
                items
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="rounded-3xl p-12 border-2 bg-gray-50 border-gray-200 mb-24">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-6 h-6 text-blue-600" />
            <h3 className="text-3xl text-gray-900">
              Enterprise-grade technology stack
            </h3>
          </div>
          <p className="text-lg mb-8 text-gray-600">
            Built with production-ready tools trusted by healthcare
            organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "React.js", desc: "Modern UI framework" },
              { name: "FastAPI", desc: "High-performance backend" },
              { name: "Azure OpenAI", desc: "GPT-4 intelligence" },
              { name: "Microsoft Presidio", desc: "PII detection & removal" },
            ].map((tech, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border bg-white border-gray-200"
              >
                <div className="mb-2 text-gray-900">{tech.name}</div>
                <div className="text-sm text-gray-600">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl mb-8 text-gray-900">
            Ready to experience privacy-first AI?
          </h2>
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
            Launch Application
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-gray-600">
            Demo mode available • No registration required
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Triage AI • A portfolio project demonstrating privacy-first
            healthcare AI • FastAPI + Azure OpenAI + Microsoft Presidio
          </p>
        </div>
      </div>
    </div>
  );
}
