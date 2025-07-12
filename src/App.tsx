import React, { useState } from 'react';
import Header from './components/Header';
import UploadSection from './components/UploadSection';
import ATSInfo from './components/ATSInfo';
import ResultsSection from './components/ResultsSection';

function App() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<{
    score: number;
    analysis: {
      strengths: string[];
      improvements: string[];
      keywords: string[];
      formatting: string;
      readability: string;
    };
  } | null>(null);

  const handleFileUpload = async (file: File) => {
    setIsAnalyzing(true);
    setResults(null);

    // Simulate AI analysis with realistic delay
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock analysis results - in real app, this would come from your Python backend
    const mockResults = {
      score: Math.floor(Math.random() * 40) + 60, // Random score between 60-100
      analysis: {
        strengths: [
          "Clear section headers and structure",
          "Professional email address format",
          "Consistent date formatting",
          "Appropriate use of bullet points",
          "Standard resume sections present"
        ],
        improvements: [
          "Add more industry-specific keywords",
          "Include quantifiable achievements with numbers",
          "Optimize for ATS by using standard section names",
          "Remove graphics and images that ATS cannot read",
          "Use a more common font like Arial or Calibri"
        ],
        keywords: [
          "Project Management", "Python", "Data Analysis", "Leadership", 
          "Communication", "Problem Solving", "Team Collaboration", 
          "Strategic Planning", "Microsoft Office", "SQL"
        ],
        formatting: "Good",
        readability: "Excellent"
      }
    };

    setResults(mockResults);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <UploadSection onFileUpload={handleFileUpload} isAnalyzing={isAnalyzing} />
        
        {!results && !isAnalyzing && <ATSInfo />}
        
        {results && (
          <div className="mt-12">
            <ResultsSection score={results.score} analysis={results.analysis} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;