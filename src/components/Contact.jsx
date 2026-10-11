import { useEffect, useRef, useState } from 'react';
import { useFormspark } from '@formspark/use-formspark';
import Icon from './Icon.jsx';
import SectionHeading from './SectionHeading.jsx';
import SocialLinks from './SocialLinks.jsx';
import { profile } from '../data.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const initial = { name: '', email: '', message: '' };

export default function Contact() {
  const [submit, submitting] = useFormspark({ formId: profile.formsparkId });
  const [values, setValues] = useState(initial);
  const [status, setStatus] = useState({ text: '', tone: 'muted' });
  const [sent, setSent] = useState(false);
  const [backup, setBackup] = useState(null); // { mailto, text } when delivery fails
  const [copied, setCopied] = useState('');
  const emailRef = useRef(null);
  const timers = useRef([]);

  // Clear pending timeouts if the form unmounts.
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const later = (fn, ms) => timers.current.push(setTimeout(fn, ms));

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const copyText = async (text, key, selectEl) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
    } catch {
      if (selectEl) {
        const r = document.createRange();
        r.selectNodeContents(selectEl);
        const s = window.getSelection();
        s.removeAllRanges();
        s.addRange(r);
      }
      setCopied(`${key}-manual`);
    }
    later(() => setCopied(''), 2000);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = values.name.trim();
    const email = values.email.trim();
    const message = values.message.trim();

    if (!name || !email || !message) {
      setStatus({ text: 'Fill in your name, email and a message first.', tone: 'error' });
      return;
    }
    if (!EMAIL_RE.test(email)) {
      setStatus({ text: 'That email address looks incomplete. Check it and try again.', tone: 'error' });
      return;
    }

    setBackup(null);
    setStatus({ text: '', tone: 'muted' });
    try {
      await submit({ name, email, message });
      setSent(true);
      setStatus({ text: `Thanks, ${name}. Your message was delivered and I will reply soon.`, tone: 'ok' });
      setValues(initial);
      later(() => setSent(false), 4000);
    } catch {
      const subject = `Portfolio enquiry from ${name}`;
      const body = `${message}\n\n${name}\n${email}`;
      setBackup({
        mailto: `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        text: `To: ${profile.email}\nSubject: ${subject}\n\n${body}`,
      });
      setStatus({
        text: `The message could not be delivered from here. Open it in your email app, or copy it and send it to ${profile.email}.`,
        tone: 'error',
      });
    }
  };

  const statusColor = { muted: '#9CA3AF', error: '#FCA5A5', ok: '#34D399' }[status.tone];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6" aria-labelledby="contact-title">
      <div className="glass grid gap-10 rounded-3xl p-6 sm:p-10 lg:grid-cols-2 lg:gap-14">
        <div className="min-w-0">
          <SectionHeading id="contact-title" eyebrow="Contact" title="Let's build something together." />
          <p className="mt-4 leading-relaxed text-[#9CA3AF]">Have a project, a role or an idea? Send a message and I'll reply as soon as I can.</p>

          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-3">
            <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
              <Icon name="mail" />
            </span>
            <span ref={emailRef} className="min-w-0 flex-1 select-all break-all font-mono text-sm">
              {profile.email}
            </span>
            <button type="button" className="btn glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium" onClick={() => copyText(profile.email, 'email', emailRef.current)}>
              <Icon name="copy" small />
              <span>{copied === 'email' ? 'Copied' : copied === 'email-manual' ? 'Select and copy' : 'Copy'}</span>
            </button>
          </div>

          <SocialLinks label="Social channels" className="mt-6" />
        </div>

        <form className="flex min-w-0 flex-col gap-4" onSubmit={onSubmit} noValidate>
          <div>
            <label htmlFor="f-name" className="mb-2 block text-sm font-medium">Name</label>
            <input id="f-name" name="name" type="text" className="field" placeholder="Your name" autoComplete="name" value={values.name} onChange={onChange} required />
          </div>
          <div>
            <label htmlFor="f-email" className="mb-2 block text-sm font-medium">Email</label>
            <input id="f-email" name="email" type="email" className="field" placeholder="you@example.com" autoComplete="email" value={values.email} onChange={onChange} required />
          </div>
          <div>
            <label htmlFor="f-message" className="mb-2 block text-sm font-medium">Message</label>
            <textarea id="f-message" name="message" rows={5} className="field resize-y" placeholder="Tell me about your project" value={values.message} onChange={onChange} required />
          </div>
          <button
            id="send-btn"
            type="submit"
            disabled={submitting}
            className="btn btn-primary grad-bg inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold disabled:opacity-70"
          >
            <span>{submitting ? 'Sending...' : sent ? 'Sent' : 'Send Message'}</span>
            <Icon name="send" small className="send-plane" />
          </button>
          <p className="min-h-[1.5rem] text-sm" style={{ color: statusColor }} role="status" aria-live="polite">
            {status.text}
          </p>
          {backup && (
            <div className="flex flex-wrap gap-3">
              <a href={backup.mailto} className="btn glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium hover:text-emerald-400">
                <Icon name="mail" small /> Open in email app
              </a>
              <button type="button" className="btn glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium hover:text-emerald-400" onClick={() => copyText(backup.text, 'message')}>
                <Icon name="copy" small />
                <span>{copied === 'message' ? 'Copied' : copied === 'message-manual' ? 'Copy failed, select the text' : 'Copy message'}</span>
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
