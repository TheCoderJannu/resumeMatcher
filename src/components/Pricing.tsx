import React from 'react';
import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: '',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 50 resume matches per month',
        'Basic AI matching algorithms',
        'PDF and DOC support',
        'Email support',
        'Basic analytics dashboard'
      ],
      buttonText: 'Get Started Free',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500 resume matches per month',
        'Advanced AI matching with NLP',
        'Bulk upload and processing',
        'Priority email support',
        'Advanced analytics and insights',
        'Custom matching criteria',
        'API access'
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited resume matches',
        'Custom AI model training',
        'White-label solution',
        'Dedicated account manager',
        'Advanced integrations',
        'Custom reporting',
        'SLA guarantee',
        'On-premise deployment option'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include our core AI matching technology 
            powered by advanced Python algorithms.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg border-2 p-8 ${
                plan.popular 
                  ? 'border-blue-600 transform scale-105' 
                  : 'border-gray-200 hover:border-gray-300'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include our core Python-powered AI technology
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              99.9% Uptime SLA
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              GDPR Compliant
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              SOC 2 Certified
            </div>
            <div className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}