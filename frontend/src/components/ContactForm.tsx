'use client';

import { useState } from 'react';

interface ContactFormProps {
  translations: {
    formName: string;
    formEmail: string;
    formMessage: string;
    formSend: string;
    formSending: string;
    formSuccess: string;
    formError: string;
  };
}

export default function ContactForm({ translations }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Send email via EmailJS or similar service
      // For now, we'll simulate the submission
      // In production, replace with actual email service endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">{translations.formName}</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">{translations.formEmail}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="message">{translations.formMessage}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          rows={5}
          required
          disabled={isSubmitting}
        />
      </div>

      <button
        type="submit"
        className="primary-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? translations.formSending : translations.formSend}
      </button>

      {status === 'success' && (
        <div className="form-message form-message-success">
          {translations.formSuccess}
        </div>
      )}

      {status === 'error' && (
        <div className="form-message form-message-error">
          {translations.formError}
        </div>
      )}
    </form>
  );
}
