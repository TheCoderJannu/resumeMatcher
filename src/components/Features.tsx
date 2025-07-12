import React from 'react';
import { Brain, Shield, Clock, BarChart3, Users, Sparkles } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Algorithms',
      description: 'Powered by state-of-the-art Python libraries including scikit-learn, NLTK, and spaCy for intelligent text analysis.',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Bias-Free Matching',
      description: 'Our AI focuses purely on skills and qualifications, eliminating unconscious bias in the hiring process.',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Lightning Fast',
      description: 'Process hundreds of resumes in seconds. What used to take hours now takes minutes.',
      color: 'purple'
    },
    {
      icon: BarChart3,
      title: 'Detailed Analytics',
      description: 'Get comprehensive match scores, skill gap analysis, and detailed candidate insights.',
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Bulk Processing',
      description: 'Upload multiple resumes and job descriptions for batch processing and comparison.',
      color: 'pink'
    },
    {
      icon: Sparkles,
      title: 'Smart Recommendations',
      description: 'Receive AI-generated suggestions for improving job descriptions and candidate selection.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      pink: 'bg-pink-100 text-pink-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features Built with Python
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging the latest in machine learning and natural language processing 
            to revolutionize your hiring process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${getColorClasses(feature.color)} group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Hiring?
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                Join thousands of companies already using AI-powered resume matching 
                to find the perfect candidates faster than ever before.
              </p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
                Start Free Trial
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Match Accuracy</span>
                  <span className="font-bold">98.5%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-[98.5%]"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">Time Saved</span>
                  <span className="font-bold">85%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-[85%]"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-blue-100">User Satisfaction</span>
                  <span className="font-bold">96%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div className="bg-white h-2 rounded-full w-[96%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}