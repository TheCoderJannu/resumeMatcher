import React from 'react';
import { Upload, Zap, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Match Resumes with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Precision</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our Python-powered AI analyzes resumes and job descriptions to find perfect matches. 
            Save time, reduce bias, and discover the best candidates with advanced machine learning algorithms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Try Free Demo
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-semibold text-lg">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Upload className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Upload & Analyze</h3>
            <p className="text-gray-600 leading-relaxed">
              Simply upload resumes and job descriptions. Our AI instantly processes and extracts key information.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Matching</h3>
            <p className="text-gray-600 leading-relaxed">
              Advanced Python algorithms analyze skills, experience, and requirements to calculate match scores.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Perfect Matches</h3>
            <p className="text-gray-600 leading-relaxed">
              Get ranked results with detailed insights and recommendations for the best candidate fits.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          <div className="bg-gray-900 rounded-2xl p-6 text-green-400 font-mono text-sm overflow-x-auto">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-4 text-gray-400">resume_matcher.py</span>
            </div>
            <div className="space-y-2">
              <div><span className="text-blue-400">import</span> pandas <span className="text-blue-400">as</span> pd</div>
              <div><span className="text-blue-400">from</span> sklearn.feature_extraction.text <span className="text-blue-400">import</span> TfidfVectorizer</div>
              <div><span className="text-blue-400">from</span> sklearn.metrics.pairwise <span className="text-blue-400">import</span> cosine_similarity</div>
              <div className="mt-4">
                <span className="text-purple-400">def</span> <span className="text-yellow-400">match_resumes</span>(job_description, resumes):
              </div>
              <div className="ml-4 text-gray-300"># AI-powered matching algorithm</div>
              <div className="ml-4"><span className="text-blue-400">return</span> ranked_matches</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}