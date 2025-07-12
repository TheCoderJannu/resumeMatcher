import React from 'react';
import { CheckCircle, AlertTriangle, XCircle, TrendingUp, FileText, Eye } from 'lucide-react';

interface ResultsSectionProps {
  score: number;
  analysis: {
    strengths: string[];
    improvements: string[];
    keywords: string[];
    formatting: string;
    readability: string;
  };
}

export default function ResultsSection({ score, analysis }: ResultsSectionProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="h-8 w-8 text-green-500" />;
    if (score >= 60) return <AlertTriangle className="h-8 w-8 text-yellow-500" />;
    return <XCircle className="h-8 w-8 text-red-500" />;
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'from-green-500 to-green-600';
    if (score >= 60) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  return (
    <div className="space-y-8">
      {/* Overall Score */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            {getScoreIcon(score)}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">ATS Compatibility Score</h3>
          <div className={`text-6xl font-bold ${getScoreColor(score)} mb-4`}>
            {score}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div 
              className={`bg-gradient-to-r ${getScoreBg(score)} h-4 rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${score}%` }}
            ></div>
          </div>
          <p className="text-lg text-gray-600">
            {score >= 80 && "Excellent! Your resume is highly ATS-friendly."}
            {score >= 60 && score < 80 && "Good, but there's room for improvement."}
            {score < 60 && "Your resume needs significant ATS optimization."}
          </p>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Strengths */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-green-100 p-2 rounded-lg">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">Strengths</h4>
          </div>
          <ul className="space-y-3">
            {analysis.strengths.map((strength, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas for Improvement */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-orange-100 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900">Areas for Improvement</h4>
          </div>
          <ul className="space-y-3">
            {analysis.improvements.map((improvement, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700">{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FileText className="h-5 w-5 text-blue-600" />
            </div>
            <h5 className="font-semibold text-gray-900">Formatting</h5>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-2">{analysis.formatting}</p>
          <p className="text-sm text-gray-600">Structure and layout quality</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Eye className="h-5 w-5 text-purple-600" />
            </div>
            <h5 className="font-semibold text-gray-900">Readability</h5>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-2">{analysis.readability}</p>
          <p className="text-sm text-gray-600">How easy it is to scan</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <TrendingUp className="h-5 w-5 text-green-600" />
            </div>
            <h5 className="font-semibold text-gray-900">Keywords</h5>
          </div>
          <p className="text-2xl font-bold text-gray-900 mb-2">{analysis.keywords.length}</p>
          <p className="text-sm text-gray-600">Relevant keywords found</p>
        </div>
      </div>

      {/* Keywords Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
        <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Skills & Keywords Detected</h4>
        <div className="flex flex-wrap gap-2">
          {analysis.keywords.map((keyword, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}