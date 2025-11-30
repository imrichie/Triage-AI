import { Shield } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center max-w-md">
        {/* Shield Icon */}
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Shield className="w-10 h-10 text-blue-600" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Ready to Analyze
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          Complete the patient intake form to receive an AI-powered triage
          assessment
        </p>

        {/* Privacy Callout */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-left">
          <div className="flex items-start gap-3 mb-3">
            <Shield className="w-5 h-5 text-green-600 mt-0.5" />
            <h3 className="font-semibold text-green-900">
              Privacy-Protected Analysis
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-green-800">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>
                Personal identifiable information is removed before AI analysis
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>
                Patient names and sensitive data never leave your system
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>Full transparency into what the AI sees and protects</span>
            </li>
          </ul>
        </div>

        {/* Status */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <span>Waiting for patient data</span>
        </div>
      </div>
    </div>
  );
}
