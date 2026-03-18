import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { PERSONAL_INFO } from '@/data/resume';
import type { ContactFormData } from '@/types';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'pelumi-longe',
    href: PERSONAL_INFO.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Orelongz',
    href: PERSONAL_INFO.github,
  },
];

export function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');

    // Replace these with your EmailJS credentials in a .env file:
    // VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

    if (!serviceId || !templateId || !publicKey) {
      // EmailJS not yet configured — log to console in development
      console.log('Contact form submission (EmailJS not configured):', data);
      setSubmitStatus('success');
      reset();
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: PERSONAL_INFO.firstName,
          time: new Date().toLocaleString('en-GB', {
            dateStyle: 'full',
            timeStyle: 'short',
          }),
        },
        publicKey,
      );
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact">
      <div className="section-container">
        <h2 className="section-title">Get In <span className="text-primary">Touch</span></h2>
        <div className="section-divider" />

        <p className="text-muted-foreground max-w-lg mb-10">
          I'm open to full-time roles, contract work, and interesting collaborations. Whether you
          have a question or just want to say hi — my inbox is open.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Contact form (3 cols) ── */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="name" className="text-sm text-foreground/80">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-card border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs">{errors.name.message}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="email" className="text-sm text-foreground/80">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-card border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email address' },
                    })}
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="message" className="text-sm text-foreground/80">Message</Label>
                <Textarea
                  id="message"
                  placeholder="What's on your mind?"
                  rows={5}
                  className="bg-card border-white/10 focus:border-primary/50 placeholder:text-muted-foreground/50 resize-none"
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && (
                  <p className="text-destructive text-xs">{errors.message.message}</p>
                )}
              </div>

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 gap-2"
                >
                  <Send size={15} />
                  {submitStatus === 'loading' ? 'Sending…' : 'Send Message'}
                </Button>

                {submitStatus === 'success' && (
                  <span className="flex items-center gap-1.5 text-sm text-green-400">
                    <CheckCircle size={15} /> Message sent!
                  </span>
                )}
                {submitStatus === 'error' && (
                  <span className="flex items-center gap-1.5 text-sm text-destructive">
                    <AlertCircle size={15} /> Something went wrong. Try again.
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* ── Social links (2 cols) ── */}
          <div className="lg:col-span-2 flex flex-col gap-4 lg:pt-1">
            {SOCIAL_LINKS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-foreground/90 group-hover:text-primary transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
