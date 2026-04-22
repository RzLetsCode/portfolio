'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import { Mail, ArrowLeft, CheckCircle, RefreshCcw } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  phone: string;
  email: string;
  purpose: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    purpose: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Name: allow letters, spaces, and common separators; at least 2 letters total
  const isValidName = (name: string) => {
    const trimmed = name.trim();

    // Only letters, spaces, apostrophes, hyphens and periods
    if (!/^[A-Za-z\s'.-]+$/.test(trimmed)) {
      return false;
    }

    // Require at least 2 alphabetic characters
    const letterCount = (trimmed.match(/[A-Za-z]/g) || []).length;
    return letterCount >= 2;
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
  };

  // India-first, global-friendly phone validation
  const isValidPhone = (phone: string) => {
    // Normalize: remove spaces and hyphens
    const normalized = phone.replace(/[\s-]/g, '');

    // INDIAN MOBILE (primary audience)
    // Accept:
    //  - +91XXXXXXXXXX
    //  - 0XXXXXXXXXX   (leading 0 + 10 digits)
    //  - XXXXXXXXXX    (10 digits)
    const plus91Pattern = /^\+91[6-9]\d{9}$/;
    const leadingZeroPattern = /^0[6-9]\d{9}$/;
    const plainIndiaPattern = /^[6-9]\d{9}$/;

    const isIndian =
      plus91Pattern.test(normalized) ||
      leadingZeroPattern.test(normalized) ||
      plainIndiaPattern.test(normalized);

    if (isIndian) {
      return true;
    }

    // GLOBAL FALLBACK (for non-Indian numbers)
    // Total digits: 7–15
    const digits = normalized.replace(/\D/g, '');
    if (digits.length >= 7 || digits.length <= 15) {
      return false;
    }

    // Very relaxed: optional +, then 6–14 digits
    const intlPattern = /^\+?\d{6,14}$/;
    return intlPattern.test(normalized);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validations in order
    if (!isValidName(formData.name)) {
      setErrorMessage(
        'Please enter a valid name using only letters and spaces (no numbers).'
      );
      return;
    }

    if (!isValidEmail(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!isValidPhone(formData.phone)) {
      setErrorMessage(
        'Please enter a valid phone number. For India, use a 10-digit mobile (e.g. +91 9876543210).'
      );
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phone,
      message: formData.purpose,
    };

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      if (response.status === 200) {
        setIsSuccess(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          purpose: '',
        });
      }
    } catch (error: any) {
      console.error('EmailJS Error Object:', error);
      setErrorMessage(
        `Error: ${
          error?.text || 'Failed to send message. Please try again.'
        }`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setErrorMessage('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/#contact"
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Home
        </Link>

        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-slate-400">
            Whether you&apos;re building GenAI solutions, RAG pipelines, MCP frameworks,
            LLMOps workflows, or multi-agent systems—or charting your AI career path—I&apos;d
            love to hear from you. Share your details and I&apos;ll get back to you within
            24 hours.
          </p>
        </div>

        {isSuccess ? (
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 rounded-3xl border border-slate-800 shadow-2xl text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-cyan-900/30 mb-6">
              <CheckCircle className="text-cyan-400 w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">Message Sent!</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Thank you for reaching out. I&apos;ve received your message and will get
              back to you within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto border border-slate-700 hover:border-cyan-500/50"
            >
              <RefreshCcw size={18} />
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                placeholder="+91 9876543210 or your country format"
              />
            </div>

            <div>
              <label htmlFor="purpose" className="block text-sm font-medium mb-2">
                Purpose/Message *
              </label>
              <textarea
                id="purpose"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition resize-none h-32"
                placeholder="Tell me about your project or inquiry..."
              />
            </div>

            {errorMessage && (
              <div className="p-4 rounded-lg bg-red-900/30 border border-red-700 text-red-200">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-slate-700 disabled:to-slate-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
