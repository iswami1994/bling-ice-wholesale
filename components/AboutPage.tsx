import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;

    try {
      if (formEndpoint) {
        // Submit to FormSubmit
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Partner Application: ${formData.businessName}`,
            _captcha: 'false'
          })
        });

        if (!response.ok) throw new Error('Form submission failed');
        const result = await response.json();
        if (result.success === 'false' || result.success === false) {
          throw new Error(result.message || 'Form submission failed');
        }
      } else {
        // Store locally when no endpoint configured
        const submissions = JSON.parse(localStorage.getItem('partnerSubmissions') || '[]');
        submissions.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('partnerSubmissions', JSON.stringify(submissions));
      }

      setSubmitStatus('success');
      setFormData({
        businessName: '',
        contactName: '',
        email: '',
        phone: '',
        businessType: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex-1 w-full">
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-10 bg-gradient-to-b from-neutral-100 to-white dark:from-[#0a0a0a] dark:to-[#050505]">
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">About Us</span>
            <h1 className="text-4xl lg:text-6xl font-black text-neutral-900 dark:text-white leading-tight tracking-tight mb-6">
              THE PREMIER B2B <br />LUXURY JEWELRY <br />DESTINATION
            </h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-xl leading-relaxed">
              Bling Ice Wholesale has been serving retailers globally with authenticated gold and diamond pieces since 2015. Our commitment to quality and craftsmanship has made us the trusted partner for urban luxury jewelry.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 lg:px-10 bg-white dark:bg-[#050505]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Retail Partners' },
              { value: '10K+', label: 'Products Delivered' },
              { value: '99%', label: 'Satisfaction Rate' },
              { value: '24/7', label: 'Support Available' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-neutral-500 text-sm font-medium uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 px-6 lg:px-10 bg-neutral-50 dark:bg-[#0a0a0a]">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-black text-neutral-900 dark:text-white">
              THE BLING ICE ADVANTAGE
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'verified',
                title: 'Authenticated Quality',
                description: 'Every piece is verified for authenticity with certificates of quality for gold purity and diamond grading.'
              },
              {
                icon: 'local_shipping',
                title: 'Fast Wholesale Shipping',
                description: 'Dedicated logistics network ensuring your inventory arrives on time, every time. Free shipping on orders over $5,000.'
              },
              {
                icon: 'support_agent',
                title: 'Dedicated Support',
                description: 'Your personal account manager is available 24/7 to help with orders, custom requests, and any questions.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white dark:bg-[#121212] rounded-2xl p-8 border border-neutral-200 dark:border-[#2a2a2a]">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">{item.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Form Section */}
      <section id="partner-form" className="py-20 px-6 lg:px-10 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern height="40" id="grid-pattern" patternUnits="userSpaceOnUse" width="40">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f2d00d" strokeWidth="0.3"></path>
              </pattern>
            </defs>
            <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-bold uppercase tracking-widest mb-4 block">Partner With Us</span>
              <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-6">
                GROW YOUR BUSINESS WITH BLING ICE
              </h2>
              <p className="text-neutral-400 text-lg leading-relaxed mb-8">
                Join our network of successful retailers and get access to exclusive wholesale pricing, custom design services, and dedicated support.
              </p>
              <div className="space-y-4">
                {[
                  'Minimum order of just $500',
                  'Net 30 payment terms available',
                  'Exclusive access to new collections',
                  'White-label packaging options'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Apply for Wholesale Access</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Business Name *</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your Business"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Contact Name *</label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@business.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-400 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Business Type *</label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="" className="bg-neutral-900">Select your business type</option>
                    <option value="retail" className="bg-neutral-900">Retail Store</option>
                    <option value="online" className="bg-neutral-900">Online Store</option>
                    <option value="both" className="bg-neutral-900">Both Retail & Online</option>
                    <option value="distributor" className="bg-neutral-900">Distributor</option>
                    <option value="other" className="bg-neutral-900">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your business and what you're looking for..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-green-400 text-sm">
                    Thank you for your application! We'll review your information and contact you within 24-48 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-400 text-sm">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-full h-12 bg-primary text-black text-base font-bold tracking-wide hover:bg-[#ffe033] transition-colors shadow-[0_0_20px_rgba(242,208,13,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
