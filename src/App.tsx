import React from 'react';
import {
  Brain,
  Wallet,
  BarChart3,
  Rocket,
  Target,
  Shield,
  Users,
  Zap,
  ChevronRight,
  Mail,
  Globe,
  Bitcoin,
  Coins,
  Gem,
  ArrowRight,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-white">ChainifyAI</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-300 hover:text-purple-400 transition-colors">Products</a>
            <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors">Pricing</a>
            <a href="#community" className="text-gray-300 hover:text-purple-400 transition-colors">Community</a>
          </div>
          <button className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
            Launch App
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Your AI Navigator in the <span className="text-purple-400">Crypto Galaxy</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Navigate the complex world of cryptocurrencies with AI-powered insights, automated trading, and intelligent portfolio management.
            </p>
            <div className="mt-8 flex space-x-4">
              <button className="bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors flex items-center">
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-colors">
                Watch Demo
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-8">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-purple-400 mr-2" />
                <span className="text-gray-300">Bank-grade Security</span>
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 text-purple-400 mr-2" />
                <span className="text-gray-300">Real-time Analysis</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=800&q=80"
              alt="Crypto Trading Dashboard"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-900 bg-opacity-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Our AI-Powered Products
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Unlock the full potential of the crypto economy with our suite of intelligent tools
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors">
                <product.icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <a href="#" className="text-purple-400 flex items-center hover:text-purple-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-16">
            Why Choose ChainifyAI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <feature.icon className="h-8 w-8 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900 bg-opacity-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Start for free or upgrade to unlock advanced features
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-gray-800 rounded-xl p-8 ${plan.featured ? 'ring-2 ring-purple-400' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.price !== 'Free' && <span className="text-gray-400">/month</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <ChevronRight className="h-5 w-5 text-purple-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-purple-500 text-white hover:bg-purple-600'
                    : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
                alt="Crypto Community"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Join Our Growing Community
              </h2>
              <p className="text-gray-300 mb-8">
                Connect with fellow traders, share strategies, and earn $NOVA tokens for your contributions to the ecosystem.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {communityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <feature.icon className="h-6 w-6 text-purple-400" />
                    <span className="text-gray-300">{feature.text}</span>
                  </div>
                ))}
              </div>
              <button className="mt-8 bg-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Navigate the Crypto Galaxy?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of traders who trust ChainifyAI for smarter crypto investments
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-colors">
            Start Trading Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold text-white">ChainifyAI</span>
              </div>
              <p className="text-gray-400 max-w-sm">
                Your intelligent companion in the world of cryptocurrency and decentralized finance.
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:help@chainify.net" className="text-gray-400 hover:text-white transition-colors">
                  help@chainify.net
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-purple-400">NovaVault</a></li>
                  <li><a href="#" className="hover:text-purple-400">StellarYield</a></li>
                  <li><a href="#" className="hover:text-purple-400">LunaLens</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-purple-400">About</a></li>
                  <li><a href="#" className="hover:text-purple-400">Blog</a></li>
                  <li><a href="#" className="hover:text-purple-400">Careers</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-purple-400">Documentation</a></li>
                  <li><a href="#" className="hover:text-purple-400">API</a></li>
                  <li><a href="#" className="hover:text-purple-400">Status</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ChainifyAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const products = [
  {
    icon: Wallet,
    name: 'NovaVault',
    description: 'AI-powered portfolio management system that analyzes market trends and optimizes your crypto holdings.',
  },
  {
    icon: BarChart3,
    name: 'StellarYield',
    description: 'Smart yield farming optimizer that finds the best DeFi opportunities across multiple platforms.',
  },
  {
    icon: Target,
    name: 'LunaLens',
    description: 'Predictive analytics engine for forecasting crypto price movements using AI and blockchain data.',
  },
  {
    icon: Rocket,
    name: 'NovaTrader',
    description: 'Automated trading bot that executes strategies across major exchanges using machine learning.',
  },
  {
    icon: Globe,
    name: 'NebulaLearn',
    description: 'Interactive education platform with AI-generated lessons about crypto and blockchain.',
  },
  {
    icon: Users,
    name: 'GalaxyHive',
    description: 'Community-driven platform for sharing trading strategies and market insights.',
  },
];

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    description: 'Advanced machine learning algorithms analyze market trends and predict opportunities.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and security protocols protect your assets and data.',
  },
  {
    icon: Zap,
    title: 'Real-time Insights',
    description: 'Get instant updates and actionable trading signals based on market conditions.',
  },
  {
    icon: Coins,
    title: 'Multi-chain Support',
    description: 'Trade and manage assets across all major blockchain networks seamlessly.',
  },
  {
    icon: Bitcoin,
    title: 'DeFi Integration',
    description: 'Access the best yields and opportunities across the DeFi ecosystem.',
  },
  {
    icon: Gem,
    title: '$NOVA Rewards',
    description: 'Earn tokens for contributing to our community and completing tasks.',
  },
];

const plans = [
  {
    name: 'Basic',
    description: 'Perfect for crypto beginners',
    price: 'Free',
    features: [
      'Access to NebulaLearn',
      'Basic portfolio tracking',
      'Market analysis',
      'Community access',
    ],
    featured: false,
  },
  {
    name: 'Pro',
    description: 'For serious crypto traders',
    price: '€29.99',
    features: [
      'All Basic features',
      'StellarYield optimizer',
      'LunaLens predictions',
      'Priority support',
      'Custom alerts',
    ],
    featured: true,
  },
  {
    name: 'Elite',
    description: 'Maximum trading power',
    price: '€99.99',
    features: [
      'All Pro features',
      'NovaTrader bot access',
      'Custom trading strategies',
      'API access',
      'Personal advisor',
    ],
    featured: false,
  },
];

const communityFeatures = [
  {
    icon: Users,
    text: '50,000+ Active Traders',
  },
  {
    icon: Globe,
    text: 'Global Community',
  },
  {
    icon: Target,
    text: 'Daily Trading Signals',
  },
  {
    icon: Shield,
    text: 'Verified Strategies',
  },
];

export default App;