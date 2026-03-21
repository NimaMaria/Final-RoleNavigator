import { useState } from "react";
import { UploadSection } from "@/components/upload-section";
import { ResultsDashboard } from "@/components/results-dashboard";
import { Button } from "@/components/ui/button";
import { FileText, Plus } from "lucide-react";
import type { ResumeAnalysis } from "@/lib/types";

export default function Home() {
  const [analysis, setAnalysis] = useState<ResumeAnalysis | null>(null);

  const handleAnalysisComplete = (newAnalysis: ResumeAnalysis) => {
    setAnalysis(newAnalysis);
    // Scroll to top to show results
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewAnalysis = () => {
    setAnalysis(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen pt-[70px]">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {analysis ? (
          <ResultsDashboard 
            analysis={analysis} 
            onNewAnalysis={handleNewAnalysis}
          />
        ) : (
          <UploadSection onAnalysisComplete={handleAnalysisComplete} />
        )}
      </main>


    </div>
  );
}
