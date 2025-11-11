'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Star } from 'lucide-react'

export default function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const plans = [
    {
      name: 'Starter',
      price: '0',
      description: 'Perfect for trying out our platform',
      features: [
        'Up to 3 projects',
        '1GB database storage',
        'Basic authentication',
        'Community support',
        '99.9% uptime SLA',
      ],
      popular: false,
      cta: 'Get Started',
      gradient: 'from-gray-500 to-gray-700',
    },
    {
      name: 'Professional',
      price: '29',
      description: 'For growing teams and businesses',
      features: [
        'Unlimited projects',
        '10GB database storage',
        'Advanced authentication',
        'Priority support',
        '99.99% uptime SLA',
        'Custom domains',
        'Advanced analytics',
        'Team collaboration',
      ],
      popular: true,
      cta: 'Start Free Trial',
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      name: 'Enterprise',
      price: '99',
      description: 'For large-scale applications',
      features: [
        'Unlimited everything',
        'Unlimited database storage',
        'SSO & SAML authentication',
        'Dedicated support',
        '99.999% uptime SLA',
        'Custom contracts',
        'Advanced security',
        'Audit logs',
        'Private cloud options',
      ],
      popular: false,
      cta: 'Contact Sales',
      gradient: 'from-purple-500 to-purple-700',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
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
              Simple, Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`relative ${plan.popular ? 'lg:-mt-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className={`h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${
                plan.popular ? 'border-primary-500' : 'border-gray-200'
              } overflow-hidden`}>
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${plan.gradient} p-8 text-white`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/80 mb-6">{plan.description}</p>
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="ml-2 text-white/80">/month</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-3 rounded-lg font-semibold shadow-lg transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            All plans come with a 14-day free trial. No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
