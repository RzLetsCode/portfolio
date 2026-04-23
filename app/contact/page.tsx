'use client';

import { useState, useEffect, Suspense, FormEvent, ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle, RefreshCcw } from 'lucide-react';
import emailjs from '@emailjs/browser';

const PLANS = [
  {
    id: 'explore',
    label: 'Explore',
    badge: 'Free forever',
    desc: 'Starter - just getting into AI',
  },
  {
    id: 'career-focus',
    label: 'Career Focus',
    badge: 'Most Popular',
    desc: '499 / month - build a real AI portfolio',
  },
  {
    id: 'mentor-loop',
    label: 'Mentor Loop',
    badge: '1:1 Deep Dive',
    desc: '1,999 / month - serious builders',
  },
  {
    id: 'general',
    label: 'General Inquiry',
    badge: '',
    desc: 'Not sure yet - just want to connect',
  },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  purpose: string;
  plan: string;
}

function ContactForm() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    purpose: '',
    plan: 'general',
  });

  useEffect(() => {
    const planParam = searchParams.get('plan');
    if (planParam && PLANS.find((p) => p.id === planParam)) {
      setFormData((prev) => ({ ...prev, plan: planParam }));
    }
  }, [searchParams]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidName = (name: string) => {
    const trimmed = name.trim();
    if (!/^[A-Za-z\s'.\-]+$/.test(trimmed)) return false;
    const letterCount = (trimmed.match(/[A-Za-z]/g) || []).length;
    return letterCount >= 2;
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());

  const isValidPhone = (phone: string) => {
    const normalized = phone.replace(/[\s\-]/g, '');
    if (/^\+91[6-9]\d{9}$/.test(normalized)) return true;
    if (/^0[6-9]\d{9}$/.test(normalized)) return true;
    if (/^[6-9]\d{9}$/.test(normalized)) return true;
    const digits = normalized.replace(/\D/g, '');
    return digits.length >= 7 && digits.length <= 15;
  };

  const selectedPlan = PLANS.find((p) => p.id === formData.plan);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!isValidName(formData.name)) {
      setErrorMessage('Please enter a valid name using only letters and spaces (no numbers).');
      return;
    }
    if (!isValidEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!isValidPhone(formData.phone)) {
      setErrorMessage('Please enter a valid phone number. For India, use a 10-digit mobile (e.g. +91 9876543210).');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const planLabel = selectedPlan
      ? `${selectedPlan.label}${selectedPlan.badge ? ' (' + selectedPlan.badge + ')' : ''}`
      : 'General Inquiry';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      selected_plan: planLabel,
      message: formData.purpose,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', email: '', purpose: '', plan: 'general' });
      }
    } catch (error: any) {
      setErrorMessage(`Error: ${error?.text || 'Failed to send message. Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage('');
  };

  if (isSuccess) {
    return (
      <div className="text-center py-16">
        <CheckCircle className="mx-auto mb-4 text-green-400" size={56} />
        <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
        <p className="text-slate-400 mb-8">
          Thank you for reaching out. I have received your message and will get back to you within 24 hours.
        </p>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-cyan-500 hover:text-cyan-300 transition"
        >
          <RefreshCcw size={16} />
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-3">
          Which plan are you interested in? *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PLANS.map((plan) => {
            const isActive = formData.plan === plan.id;
            return (
              <label
                key={plan.id}
                className={`relative flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                  isActive
                    ? 'border-cyan-400 bg-cyan-950/40'
                    : 'border-slate-700 bg-slate-800/50 hover:border-slate-500'
                }`}
              >
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  checked={isActive}
                  onChange={handleChange}
                  className="mt-1 accent-cyan-400 shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`font-semibold text-sm ${isActive ? 'text-cyan-300' : 'text-white'}`}>
                      {plan.label}
                    </span>
                    {plan.badge && (
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-900/60 text-cyan-400 border border-cyan-800">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs mt-0.5 ${isActive ? 'text-cyan-400/80' : 'text-slate-400'}`}>
                    {plan.desc}
                  </p>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name *</label>
        <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} required
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
          placeholder="Your full name" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address *</label>
        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
          placeholder="your.email@example.com" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Phone Number *</label>
        <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} required
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
          placeholder="+91 9876543210 or your country format" />
      </div>

      <div>
        <label htmlFor="purpose" className="block text-sm font-medium text-slate-300 mb-1">Purpose / Message *</label>
        <textarea id="purpose" name="purpose" value={formData.purpose} onChange={handleChange} required
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition resize-none h-32"
          placeholder="Tell me about your goals or any questions..." />
      </div>

      {errorMessage && (
        <div className="p-4 rounded-lg bg-red-900/30 border border-red-700 text-red-200">{errorMessage}</div>
      )}

      <button type="submit" disabled={isSubmitting}
        className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-slate-700 disabled:to-slate-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Mail size={20} />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link
          href="/portfolio/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-10 text-sm transition"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-3">Get in Touch</h1>
        <p className="text-slate-400 mb-10 leading-relaxed">
          Whether you are building GenAI solutions, RAG pipelines, MCP frameworks, LLMOps
          workflows, or multi-agent systems, or charting your AI career path, I would love to hear
          from you. Share your details and I will get back to you within 24 hours.
        </p>
        <Suspense fallback={<div className="text-slate-400">Loading form...</div>}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
