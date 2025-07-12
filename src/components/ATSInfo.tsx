import React from 'react';
import { Info, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

export default function ATSInfo() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
      <div className="flex items-start space-x-4">
        <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
          <Info className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            What is ATS (Applicant Tracking System)?
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            ATS is software used by employers to filter and rank resumes before they reach human recruiters. 
            Over 90% of large companies use ATS to screen applications, making it crucial that your resume 
            is optimized for these systems.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Good ATS Score</h4>
                <p className="text-sm text-gray-600">80-100% compatibility</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Needs Improvement</h4>
                <p className="text-sm text-gray-600">60-79% compatibility</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <XCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-gray-900">Poor ATS Score</h4>
                <p className="text-sm text-gray-600">Below 60% compatibility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}