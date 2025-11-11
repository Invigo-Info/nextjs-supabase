'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Zap,
  Shield,
  Database,
  Users,
  Lock,
  BarChart,
  Smartphone,
  Globe,
  Clock,
} from 'lucide-react'

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Built on Next.js 14 with optimized performance and instant page loads.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Authentication',
      description: 'Enterprise-grade security with Supabase authentication and row-level security.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Real-time Database',
      description: 'PostgreSQL database with real-time subscriptions and automatic API generation.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Management',
      description: 'Complete user management system with profiles, roles, and permissions.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Privacy First',
      description: 'GDPR compliant with data encryption and secure storage by default.',
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Analytics Dashboard',
      description: 'Beautiful analytics and insights to track your application metrics.',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Responsive',
      description: 'Perfectly optimized for all devices with a mobile-first approach.',
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global CDN',
      description: 'Deploy globally with edge functions and fast content delivery.',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Instant Setup',
      description: 'Get started in minutes with our comprehensive documentation and templates.',
      color: 'from-orange-500 to-amber-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build modern, scalable applications with confidence.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-all duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to experience these features firsthand?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(14, 165, 233, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all"
          >
            Start Building Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
