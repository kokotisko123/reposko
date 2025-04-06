import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, ChevronDown, Lock, Cpu, Globe2, Sparkles, Zap, Shield, Notebook as Robot, Check, Mail } from 'lucide-react';

function App() {
  const [selectedTier, setSelectedTier] = useState<string>('pro');

  const tiers = {
    starter: {
      name: 'Starter',
      price: '49',
      features: [
        'Basic AI Model Access',
        '100k API Calls/month',
        'Standard Support',
        'Basic Analytics'
      ]
    },
    pro: {
      name: 'Pro',
      price: '199',
      features: [
        'Advanced AI Models',
        'Unlimited API Calls',
        'Priority Support',
        'Advanced Analytics',
        'Custom Model Training'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'Full AI Suite Access',
        'Dedicated Infrastructure',
        '24/7 Premium Support',
        'Custom Solutions',
        'On-Premise Deployment',
        'SLA Guarantee'
      ]
    }
  };

  const handleGetStarted = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWatchDemo = () => {
    window.open('https://calendly.com/alxonai/demo', '_blank');
  };

  const handleSubscribe = (tier: string) => {
    if (tier === 'enterprise') {
      window.location.href = 'mailto:help@alxonai.net?subject=Enterprise Inquiry';
    } else {
      // In a real app, this would redirect to a payment gateway
      window.location.href = `https://buy.stripe.com/test_alxonai/${tier}`;
    }
  };

  const handleScheduleDemo = () => {
    window.open('https://calendly.com/alxonai/demo', '_blank');
  };

  const handleContactSales = () => {
    window.location.href = 'mailto:help@alxonai.net?subject=Sales Inquiry';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const scaleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-4 right-4 flex items-center gap-2 text-gray-300"
        >
          <Mail className="w-5 h-5" />
          <a href="mailto:help@alxonai.net" className="hover:text-white transition-colors">
            help@alxonai.net
          </a>
        </motion.div>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 z-10"
        >
          <div className="text-center">
            <motion.div 
              variants={scaleVariants}
              className="flex items-center justify-center mb-6"
            >
              <Brain className="w-16 h-16 text-blue-500" />
            </motion.div>
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
            >
              AlxonAI
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-2xl md:text-3xl text-gray-300 mb-8"
            >
              Where AI Evolves on the Blockchain
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 justify-center"
            >
              <button 
                onClick={handleGetStarted}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                Get Started
              </button>
              <button 
                onClick={handleWatchDemo}
                className="bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
              >
                Watch Demo
              </button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </motion.div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Revolutionary AI Solutions
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Lock, title: "Secure & Decentralized", color: "blue" },
              { icon: Cpu, title: "Advanced AI Processing", color: "purple" },
              { icon: Globe2, title: "Global Scale", color: "green" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm transform hover:scale-105 transition duration-300"
              >
                <div className="flex justify-center mb-6">
                  <feature.icon className={`w-12 h-12 text-${feature.color}-500`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">Leveraging blockchain technology for transparent and secure AI operations</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            AI Solutions
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Sparkles, title: "Natural Language AI", desc: "Advanced language models for human-like text generation and understanding", gradient: "from-blue-900/40 to-purple-900/40" },
              { Icon: Robot, title: "Computer Vision", desc: "State-of-the-art image and video analysis powered by neural networks", gradient: "from-purple-900/40 to-pink-900/40" },
              { Icon: Shield, title: "Predictive Analytics", desc: "Advanced forecasting and trend analysis using machine learning", gradient: "from-green-900/40 to-blue-900/40" },
              { Icon: Zap, title: "Automation AI", desc: "Intelligent process automation for business optimization", gradient: "from-red-900/40 to-orange-900/40" }
            ].map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl bg-gradient-to-br ${solution.gradient} hover:from-blue-800/40 hover:to-purple-800/40 transition duration-300`}
              >
                <solution.Icon className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{solution.title}</h3>
                <p className="text-gray-400">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900/50">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Subscription Plans
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(tiers).map(([key, tier], index) => (
              <motion.div 
                key={key}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`rounded-2xl p-8 ${
                  selectedTier === key 
                    ? 'bg-gradient-to-b from-blue-600/20 to-purple-600/20 border-2 border-blue-500' 
                    : 'bg-gray-800/50'
                } backdrop-blur-sm transition duration-300 hover:transform hover:scale-105`}
                onClick={() => setSelectedTier(key)}
              >
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  {key !== 'enterprise' && <span className="text-gray-400">/month</span>}
                </div>
                <ul className="space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => handleSubscribe(key)}
                  className={`w-full mt-8 py-3 px-6 rounded-full font-bold transition duration-300 ${
                    selectedTier === key 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                  }`}
                >
                  {key === 'enterprise' ? 'Contact Sales' : 'Subscribe Now'}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 relative z-10"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-8"
            >
              Transform Your Business with AI
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-400 mb-10"
            >
              Join the future of decentralized AI and unlock unlimited possibilities for your organization
            </motion.p>
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button 
                onClick={handleScheduleDemo}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Schedule Demo
              </button>
              <button 
                onClick={handleContactSales}
                className="border border-blue-600 text-blue-500 hover:bg-blue-600/10 font-bold py-3 px-8 rounded-full transition duration-300"
              >
                Contact Sales
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-gray-800">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4"
        >
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-blue-500" />
                <span className="text-xl font-bold">AlxonAI</span>
              </div>
              <p className="text-gray-400">Empowering the future with decentralized artificial intelligence</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Natural Language AI</li>
                <li>Computer Vision</li>
                <li>Predictive Analytics</li>
                <li>Automation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-500 pt-8 border-t border-gray-800">
            © 2025 AlxonAI. All rights reserved.
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;