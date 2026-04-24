'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Reveal from '@/components/Reveal';
import Footer from '@/components/Footer';
import { ACCENT, BG, BORDER, CARD_BG, FG, MUTED } from '@/components/theme';

const STEPS = ['The Trip', 'About You', 'The Real Question'] as const;

const TRIP_OPTIONS = [
  { id: 'patagonia', t: 'Patagonia · Torres del Paine', sub: 'Mar 14–22, 2026 · 6 seats', img: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400&q=80' },
  { id: 'faroe', t: 'Faroe Islands · Stórá Dímun', sub: 'Jun 12–21, 2026 · 8 seats', img: 'https://images.unsplash.com/photo-1504826260979-242151ee45b7?w=400&q=80' },
  { id: 'hokkaido', t: 'Hokkaido · Backcountry ski', sub: 'Feb 07–17, 2027 · 4 seats', img: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=400&q=80' },
  { id: 'oman', t: 'Empty Quarter · Oman', sub: 'Nov 08–15, 2026 · 6 seats', img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80' },
  { id: 'open', t: 'Open — any trip', sub: "We'll match you to the best cohort", img: null as string | null },
];

export default function Apply() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    trip: 'patagonia', name: '', email: '', company: '', role: 'Founder/CEO', stage: 'Seed',
    why: '', carrying: '', fitness: 'Moderate — I walk regularly', referral: '',
  });
  const upd = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const pct = ((step + 1) / 3) * 100;

  const fieldStyle: React.CSSProperties = {
    width: '100%', padding: '14px 16px', border: `1px solid ${BORDER}`, borderRadius: 10,
    fontSize: 15, fontFamily: 'inherit', background: '#fff', color: FG, outline: 'none',
  };
  const labelStyle: React.CSSProperties = { fontSize: 13, fontWeight: 600, letterSpacing: '-0.01em', marginBottom: 8, display: 'block' };
  const helpStyle: React.CSSProperties = { fontSize: 12, color: MUTED, marginTop: 6 };

  return (
    <div style={{ background: BG, color: FG, minHeight: 1200 }}>
      <div style={{ padding: '32px 24px 0', maxWidth: 880, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 600, color: MUTED }}>
            ◆ APPLY · COHORT 14 · STEP {Math.min(step + 1, 3)} / 3
          </div>
          <div style={{ fontSize: 12, color: MUTED }}>Takes about 10 minutes · save &amp; resume</div>
        </div>
        <div style={{ height: 4, background: BORDER, borderRadius: 2, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: ACCENT, transition: 'width .4s cubic-bezier(.2,.7,.3,1)' }} />
        </div>
        <div style={{ display: 'flex', gap: 24, marginTop: 16 }}>
          {STEPS.map((s, i) => (
            <div key={s} style={{
              fontSize: 13, fontWeight: 600,
              color: i === step ? FG : i < step ? ACCENT : MUTED,
              letterSpacing: '-0.01em',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{
                width: 22, height: 22, borderRadius: '50%',
                background: i === step ? FG : i < step ? ACCENT : 'transparent',
                color: i === step ? BG : '#0a0a0a',
                border: i > step ? `1px solid ${BORDER}` : 'none',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 700,
              }}>{i < step ? '✓' : i + 1}</span>
              {s}
            </div>
          ))}
        </div>
      </div>

      <section className="fe-mob-stack" style={{ padding: '48px 24px 80px', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'flex-start', maxWidth: 880, margin: '0 auto' }}>
        <div>
          {step === 0 && (
            <Reveal>
              <div>
                <h1 style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1, margin: 0 }}>
                  Which trip?
                </h1>
                <p style={{ marginTop: 16, fontSize: 15, color: MUTED, maxWidth: 500, lineHeight: 1.55 }}>
                  Pick one. If you get in and a better date comes up, we&apos;ll move you. No penalty.
                </p>
                <div style={{ display: 'grid', gap: 12, marginTop: 36 }}>
                  {TRIP_OPTIONS.map((t) => (
                    <label key={t.id} style={{
                      display: 'flex', alignItems: 'center', gap: 16,
                      padding: 16, borderRadius: 12, cursor: 'pointer',
                      background: form.trip === t.id ? ACCENT : CARD_BG,
                      color: form.trip === t.id ? '#0a0a0a' : FG,
                      border: `1.5px solid ${form.trip === t.id ? ACCENT : BORDER}`,
                      transition: 'all .2s',
                    }}>
                      <input type="radio" name="trip" checked={form.trip === t.id} onChange={() => upd('trip', t.id)} style={{ accentColor: '#0a0a0a' }} />
                      {t.img ? (
                        <div style={{ width: 64, height: 64, borderRadius: 8, backgroundImage: `url(${t.img})`, backgroundSize: 'cover', flexShrink: 0 }} />
                      ) : (
                        <div style={{ width: 64, height: 64, borderRadius: 8, background: form.trip === t.id ? 'rgba(0,0,0,0.1)' : BORDER, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: 28 }}>✦</div>
                      )}
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 17, fontWeight: 600 }}>{t.t}</div>
                        <div style={{ fontSize: 13, marginTop: 3, opacity: 0.75 }}>{t.sub}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {step === 1 && (
            <Reveal>
              <div>
                <h1 style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1, margin: 0 }}>About you.</h1>
                <p style={{ marginTop: 16, fontSize: 15, color: MUTED, maxWidth: 500, lineHeight: 1.55 }}>
                  Quick facts. We read these — promise.
                </p>
                <div style={{ marginTop: 36, display: 'grid', gap: 20 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Name</label>
                      <input style={fieldStyle} value={form.name} onChange={(e) => upd('name', e.target.value)} placeholder="Marcus Okonkwo" />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input style={fieldStyle} value={form.email} onChange={(e) => upd('email', e.target.value)} placeholder="you@company.com" />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Company / project</label>
                    <input style={fieldStyle} value={form.company} onChange={(e) => upd('company', e.target.value)} placeholder="Ridgeline" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Role</label>
                      <select style={fieldStyle} value={form.role} onChange={(e) => upd('role', e.target.value)}>
                        {['Founder/CEO', 'Co-founder', 'COO/President', 'CTO', 'Operator (VP+)', 'Investor', 'Other'].map((r) => <option key={r}>{r}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Stage</label>
                      <select style={fieldStyle} value={form.stage} onChange={(e) => upd('stage', e.target.value)}>
                        {['Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C+', 'Public', 'Bootstrapped', 'Between things'].map((r) => <option key={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Fitness — honestly</label>
                    <div style={{ display: 'grid', gap: 8 }}>
                      {['Athletic — I train for this stuff', 'Moderate — I walk regularly', "Rusty — haven't hiked in a while", "Starting from zero (that's okay)"].map((f) => (
                        <label key={f} style={{
                          display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 8, cursor: 'pointer',
                          border: `1px solid ${form.fitness === f ? FG : BORDER}`, background: form.fitness === f ? 'rgba(0,0,0,0.03)' : 'transparent',
                        }}>
                          <input type="radio" name="fit" checked={form.fitness === f} onChange={() => upd('fitness', f)} />
                          <span style={{ fontSize: 14 }}>{f}</span>
                        </label>
                      ))}
                    </div>
                    <div style={helpStyle}>We send an 8-week training plan once you&apos;re accepted.</div>
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {step === 2 && (
            <Reveal>
              <div>
                <h1 style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1, margin: 0 }}>
                  The <span style={{ fontStyle: 'italic', fontWeight: 500, fontFamily: 'var(--font-cormorant), "Cormorant Garamond", serif' }}>real</span> question.
                </h1>
                <p style={{ marginTop: 16, fontSize: 15, color: MUTED, maxWidth: 500, lineHeight: 1.55 }}>
                  No wrong answer. Just be honest. A human reads every word of this.
                </p>
                <div style={{ marginTop: 36, display: 'grid', gap: 24 }}>
                  <div>
                    <label style={labelStyle}>What&apos;s actually on your mind right now?</label>
                    <textarea style={{ ...fieldStyle, minHeight: 120, resize: 'vertical', lineHeight: 1.5 }} value={form.carrying} onChange={(e) => upd('carrying', e.target.value)} placeholder="The thing you'd bring up if we were on a chairlift with nobody else around..." />
                    <div style={helpStyle}>A few sentences. Specifics help us balance the cohort.</div>
                  </div>
                  <div>
                    <label style={labelStyle}>Why this trip, why now?</label>
                    <textarea style={{ ...fieldStyle, minHeight: 100, resize: 'vertical', lineHeight: 1.5 }} value={form.why} onChange={(e) => upd('why', e.target.value)} />
                  </div>
                  <div>
                    <label style={labelStyle}>Who referred you? (optional)</label>
                    <input style={fieldStyle} value={form.referral} onChange={(e) => upd('referral', e.target.value)} placeholder="Alumni name, or where you heard about us" />
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 48, paddingTop: 28, borderTop: `1px solid ${BORDER}` }}>
            <button onClick={() => (step === 0 ? router.push('/') : setStep(step - 1))} style={{
              background: 'transparent', color: FG, border: `1px solid ${FG}`,
              padding: '14px 24px', borderRadius: 100, fontSize: 14, fontWeight: 500, cursor: 'pointer',
            }}>{step === 0 ? '← Cancel' : '← Back'}</button>
            <button onClick={() => (step === 2 ? setStep(3) : setStep(step + 1))} style={{
              background: FG, color: BG, border: 'none',
              padding: '14px 32px', borderRadius: 100, fontSize: 14, fontWeight: 600, cursor: 'pointer',
            }}>{step === 2 ? 'Submit application →' : 'Continue →'}</button>
          </div>

          {step === 3 && (
            <div style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100,
            }}>
              <div style={{ background: ACCENT, color: '#0a0a0a', padding: 48, borderRadius: 16, maxWidth: 480, textAlign: 'center' }}>
                <div style={{ fontSize: 48 }}>✦</div>
                <div style={{ fontSize: 11, letterSpacing: '0.2em', fontWeight: 600, marginTop: 12 }}>◆ APPLICATION RECEIVED</div>
                <h2 style={{ fontSize: 36, fontWeight: 800, margin: '12px 0 16px', letterSpacing: '-0.03em' }}>We&apos;ve got it.</h2>
                <p style={{ fontSize: 15, lineHeight: 1.55, margin: '0 0 24px' }}>
                  A real human will read your application this week. You&apos;ll hear back within 14 days, promise.
                </p>
                <button onClick={() => { setStep(0); router.push('/'); }} style={{
                  background: '#0a0a0a', color: ACCENT, border: 'none',
                  padding: '14px 28px', borderRadius: 100, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                }}>Back to trips →</button>
              </div>
            </div>
          )}
        </div>

        <div style={{ position: 'sticky', top: 100 }}>
          <div style={{ background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: MUTED, fontWeight: 600 }}>◆ YOUR APPLICATION</div>
            <div style={{ marginTop: 20, display: 'grid', gap: 14, fontSize: 13 }}>
              <div><span style={{ color: MUTED }}>Trip: </span><b>{form.trip}</b></div>
              <div><span style={{ color: MUTED }}>Name: </span><b>{form.name || '—'}</b></div>
              <div><span style={{ color: MUTED }}>Company: </span><b>{form.company || '—'}</b></div>
              <div><span style={{ color: MUTED }}>Role: </span><b>{form.role}</b> · <b>{form.stage}</b></div>
              <div><span style={{ color: MUTED }}>Fitness: </span><b>{form.fitness}</b></div>
            </div>
            <div style={{ height: 1, background: BORDER, margin: '20px 0' }} />
            <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.6 }}>
              No fee to apply. If selected, $1,200 deposit secures your seat. Balance 60 days before departure.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
