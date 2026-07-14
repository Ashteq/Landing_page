'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UltimateBoilerplateLanding() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] text-black font-sans pb-24 selection:bg-yellow-300">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
        >
          Launch your SaaS in days, not months.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl font-medium mb-10 max-w-3xl mx-auto"
        >
          The ultimate Next.js & FastAPI boilerplate with Auth, Stripe, and PostgreSQL pre-configured. Skip the boring setup, save 40+ hours, and start making money.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-6"
        >
          <motion.a 
            href="#pricing"
            whileHover={{ scale: 1.05, translateY: -4, boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
            whileTap={{ scale: 0.95, translateY: 0, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
            className="inline-block bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl px-10 py-5 text-2xl font-bold transition-all"
          >
            Get Ultimate Boilerplate
          </motion.a>

          {/* Social Proof */}
          <div className="flex items-center gap-4 mt-4">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-black bg-white overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 hover:z-20 relative transition-transform hover:scale-110">
                  <img src={`https://i.pravatar.cc/100?img=${i + 12}`} alt="User Avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <p className="font-bold text-lg">Trusted by 100+ developers shipping fast.</p>
          </div>
        </motion.div>
      </section>

      {/* 2. THE "PAIN" SECTION (Time Saved) */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* The Hard Way */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFB6C1] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 border-b-4 border-black pb-2 inline-block">The Hard Way 🥵</h3>
            <ul className="space-y-4 font-bold text-lg">
              <li>❌ 4 hrs setting up Auth</li>
              <li>❌ 6 hrs on Stripe Webhooks</li>
              <li>❌ 5 hrs configuring PostgreSQL</li>
              <li>❌ 10 hrs building UI components...</li>
            </ul>
            <div className="mt-8 pt-4 border-t-4 border-black border-dashed">
              <p className="text-2xl font-extrabold">= 40+ hours of headaches.</p>
            </div>
          </motion.div>

          {/* The Ultimate Way */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#98FF98] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 border-b-4 border-black pb-2 inline-block">The Ultimate Way 🚀</h3>
            <ul className="space-y-4 font-bold text-lg">
              <li>✅ 1. Download the Zip.</li>
              <li>✅ 2. Run <code className="bg-black text-[#98FF98] px-2 py-1 rounded">docker-compose up</code>.</li>
              <li>✅ 3. Start building your actual product.</li>
            </ul>
            <div className="mt-8 pt-4 border-t-4 border-black border-dashed">
              <p className="text-2xl font-extrabold">= 5 minutes.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURES GRID (Bento Box) */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-12">Everything you need to ship.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <BentoCard 
            title="Next.js App Router" 
            desc="Fast, SEO optimized frontend" 
            color="bg-[#AEC6CF]" 
            className="md:col-span-2"
          />
          <BentoCard 
            title="FastAPI Backend" 
            desc="Blazing fast Python backend" 
            color="bg-[#FFD1DC]" 
          />
          <BentoCard 
            title="Stripe Subscriptions" 
            desc="Webhooks ready to collect cash" 
            color="bg-[#FDFD96]" 
          />
          <BentoCard 
            title="PostgreSQL" 
            desc="Scalable database out of the box" 
            color="bg-[#CFCFC4]" 
          />
          <BentoCard 
            title="JWT Authentication" 
            desc="Secure login/signup ready" 
            color="bg-[#B39EB5]" 
          />

        </div>
      </section>

      {/* 4. PRICING SECTION */}
      <section id="pricing" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-16">Stop wasting time. Start building.</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-end">
          
          {/* Standard Tier */}
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl p-8 h-fit">
            <h3 className="text-3xl font-extrabold mb-2">Standard</h3>
            <p className="text-5xl font-black mb-4">$99</p>
            <p className="font-bold text-lg mb-6 border-b-4 border-black pb-6">Everything you need for a core SaaS.</p>
            <ul className="space-y-3 font-bold mb-8">
              <li>✔️ Next.js Frontend</li>
              <li>✔️ FastAPI Backend</li>
              <li>✔️ Stripe Billing</li>
              <li>✔️ JWT Auth</li>
              <li>✔️ Lifetime Updates</li>
            </ul>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05, translateY: -2, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
              whileTap={{ scale: 0.95, translateY: 0, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="block w-full text-center bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl px-6 py-4 text-xl font-bold transition-all"
            >
              Get Standard
            </motion.a>
          </div>

          {/* Premium AI Tier */}
          <div className="bg-[#FFB347] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] rounded-xl p-8 relative transform md:-translate-y-4">
            <div className="absolute -top-5 right-4 bg-black text-white font-bold px-4 py-1 border-2 border-white rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-3">
              MOST POPULAR
            </div>
            <h3 className="text-3xl font-extrabold mb-2">Premium AI</h3>
            <p className="text-5xl font-black mb-4">$149</p>
            <p className="font-bold text-lg mb-6 border-b-4 border-black pb-6">Supercharged with AI.</p>
            <ul className="space-y-3 font-bold mb-8">
              <li>✔️ Everything in Standard PLUS</li>
              <li>✔️ PGVector Database Setup</li>
              <li>✔️ OpenAI API Integrations</li>
              <li>✔️ AI Chat UI Components</li>
              <li className="opacity-0 cursor-default hidden md:block">Spacer</li>
            </ul>
            <motion.a 
              href="#"
              whileHover={{ scale: 1.05, translateY: -2, boxShadow: "6px 6px 0px 0px rgba(0,0,0,1)" }}
              whileTap={{ scale: 0.95, translateY: 0, boxShadow: "0px 0px 0px 0px rgba(0,0,0,1)" }}
              className="block w-full text-center bg-black text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl px-6 py-4 text-xl font-bold transition-all"
            >
              Get Premium
            </motion.a>
          </div>

        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <FAQItem question="Is this a subscription?" answer="No, it's a one-time payment for full source code." />
          <FAQItem question="Do I get the frontend and backend?" answer="Yes, you get both Next.js and FastAPI codebases." />
          <FAQItem question="Can I use this for client work?" answer="Yes, you can build unlimited projects." />
        </div>
      </section>

    </div>
  );
}

/* Subcomponents for cleaner code */

function BentoCard({ title, desc, color, className = "" }: { title: string, desc: string, color: string, className?: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02, translateY: -4, boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
      className={`${color} ${className} border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl p-8 flex flex-col justify-center transition-transform cursor-default`}
    >
      <h3 className="text-2xl font-black mb-2">{title}</h3>
      <p className="text-lg font-bold opacity-80">{desc}</p>
    </motion.div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-4 border-black rounded-xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 font-bold text-xl flex justify-between items-center bg-white hover:bg-gray-100 transition-colors"
      >
        {question}
        <span className="text-2xl leading-none">{isOpen ? '−' : '+'}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t-4 border-black bg-blue-100"
          >
            <p className="px-6 py-5 font-bold text-lg">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
