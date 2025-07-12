import React from 'react';
import { Upload, Cpu, Target, Download } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: 'Upload Documents',
      description: 'Upload job descriptions and resumes in PDF, DOC, or TXT format. Our system supports batch uploads for efficiency.',
      code: 'upload_documents(job_desc, resumes)'
    },
    {
      icon: Cpu,
      title: 'AI Processing',
      description: 'Our Python algorithms extract key information, analyze skills, and process natural language using advanced NLP techniques.',
      code: 'process_with_nlp(documents)'
    },
    {
      icon: Target,
      title: 'Smart Matching',
      description: 'Machine learning models calculate compatibility scores based on skills, experience, and job requirements.',
      code: 'calculate_match_scores()'
    },
    {
      icon: Download,
      title: 'Get Results',
      description: 'Receive ranked candidates with detailed match scores, skill analysis, and actionable insights.',
      code: 'export_ranked_results()'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes resume matching simple and efficient. 
            Here's how our Python-powered AI works its magic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-white">
                  <step.icon className="h-8 w-8" />
                </div>
                
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-sm">
                    STEP {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-3">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm text-green-400 overflow-x-auto">
                  {step.code}
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                    <div className="w-0 h-0 border-l-4 border-l-purple-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              See It In Action
            </h3>
            <p className="text-gray-600">
              Watch our AI analyze a real resume and job description
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                Job Description Analysis
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Required Skills Extracted:</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Experience Level:</span>
                  <span className="font-medium">Mid-Senior</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Key Technologies:</span>
                  <span className="font-medium">Python, ML, AI</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-6">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                Resume Match Score
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Overall Match:</span>
                  <span className="font-bold text-green-600">94%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-[94%]"></div>
                </div>
                <div className="text-xs text-gray-500">
                  Strong match in Python, Machine Learning, and relevant experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}