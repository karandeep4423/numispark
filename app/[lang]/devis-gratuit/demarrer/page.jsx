"use client";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Code2,
  Building2,
  CalendarDays,
  ClipboardList,
  Target,
  Smartphone,
  Search,
  Phone,
  Users,
  CheckCircle,
  X,
  Smile,
  Lock,
  Wand2,
  Mail,
} from "lucide-react";

export default function DemarrerDevis() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [form, setForm] = useState({
    siteType: "",
    status: "",
    activity: "",
    objective: "",
    objectives: [],
    existingWebsite: "",
    projectDate: "",
    prenom: "",
    nom: "",
    societe: "",
    fonction: "",
    email: "",
    phone: "",
    consent: false,
  });

  // Refs for browser autofill nudging
  const prenomRef = useRef(null);
  const nomRef = useRef(null);
  const societeRef = useRef(null);
  const fonctionRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const autofillAttemptedRef = useRef(false);

  // Load/save draft from localStorage automatically
  useEffect(() => {
    try {
      const saved = localStorage.getItem("devisForm");
      if (saved) {
        const parsed = JSON.parse(saved);
        setForm((p) => ({ ...p, ...parsed }));
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("devisForm", JSON.stringify(form));
    } catch {}
  }, [form]);

  // Auto-trigger autofill when entering the last step (once)
  useEffect(() => {
    if (step === 6 && !autofillAttemptedRef.current) {
      // Only attempt if key fields are empty to avoid interrupting user edits
      const emptyKeyFields = !form.prenom && !form.nom && !form.email && !form.phone;
      if (emptyKeyFields) {
        autofillAttemptedRef.current = true;
        // slight delay to let inputs mount
        const t = setTimeout(() => {
          triggerBrowserAutofill();
        }, 200);
        return () => clearTimeout(t);
      }
    }
  }, [step]);

  // Basic validation helpers
  const isValidEmail = (v) => /.+@.+\..+/.test(String(v || "").trim());
  const isValidPhone = (v) => {
    const digits = String(v || "").replace(/\D/g, "");
    return digits.length >= 9;
  };

  const handleSelect = (key, value) => {
    setForm((p) => ({ ...p, [key]: value }));
    setStep((s) => Math.min(s + 1, 6));
  };

  // Toggle multi-select for objectives (step 3)
  const toggleObjective = (label) => {
    setForm((p) => {
      const list = Array.isArray(p.objectives) ? p.objectives : [];
      const exists = list.includes(label);
      const next = exists ? list.filter((o) => o !== label) : [...list, label];
      return { ...p, objectives: next };
    });
  };

  const handleSubmit = async () => {
    setAttemptedSubmit(true);
    if (!form.consent) return toast.warn("Veuillez accepter la politique de confidentialité.");
    if (!isValidEmail(form.email) || !isValidPhone(form.phone) || !form.prenom || !form.nom) return toast.error("Veuillez compléter correctement les champs requis.");

    setLoading(true);
    try {
  const message = `Demande de devis

Type de site: ${form.siteType}
Statut: ${form.status}
Activité: ${form.activity}
Objectifs: ${(form.objectives || []).join(', ') || 'Autre'}
Site existant: ${form.existingWebsite}
Date souhaitée: ${form.projectDate}`;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${form.prenom} ${form.nom}`.trim(),
          email: form.email,
          phone: form.phone,
          message,
          serviceType: form.siteType,
          company: form.societe,
        }),
      });
      if (!res.ok) throw new Error("Erreur d'envoi");
      toast.success("Merci ! Votre demande a été envoyée.");
      setStep(0);
      try { localStorage.removeItem("devisForm"); } catch {}
    } catch (e) {
      toast.error("Impossible d'envoyer la demande. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  // Determine if current step has a selection/value
  const isStepComplete = () => {
    switch (step) {
      case 0:
        return !!form.siteType;
      case 1:
        return !!form.status;
      case 2:
        return !!form.activity;
      case 3:
        return Array.isArray(form.objectives) && form.objectives.length > 0;
      case 4:
        return !!form.existingWebsite;
      case 5:
        return !!form.projectDate;
      case 6:
        return !!(form.prenom && form.nom && form.email && form.phone && form.consent);
      default:
        return false;
    }
  };

  const isFinalValid = () => !!(form.prenom && form.nom && isValidEmail(form.email) && isValidPhone(form.phone) && form.consent);

  // Manual navigation controls (Prev/Next) – auto-advance remains unchanged
  const handlePrev = () => setStep((s) => Math.max(s - 1, 0));
  const handleNext = () => {
    if (isStepComplete()) {
      setStep((s) => Math.min(s + 1, 6));
    }
  };

  // Try to fetch contact details (progressive enhancement)
  const triggerBrowserAutofill = async () => {
    // 1) Contact Picker API (Chrome/Android etc, secure context)
    try {
      if (typeof navigator !== 'undefined' && navigator.contacts && navigator.contacts.select) {
        const props = ['name', 'email', 'tel'];
        const res = await navigator.contacts.select(props, { multiple: false });
        if (res && res.length) {
          const c = res[0] || {};
          const name = Array.isArray(c.name) ? c.name[0] : c.name;
          const email = Array.isArray(c.email) ? c.email[0] : c.email;
          const tel = Array.isArray(c.tel) ? c.tel[0] : c.tel;
          let prenom = form.prenom;
          let nom = form.nom;
          if (name && (!prenom || !nom)) {
            const parts = String(name).trim().split(/\s+/);
            prenom = prenom || parts[0] || '';
            nom = nom || parts.slice(1).join(' ') || '';
          }
          setForm((p) => ({
            ...p,
            prenom: prenom || p.prenom,
            nom: nom || p.nom,
            email: email || p.email,
            phone: tel || p.phone,
          }));
          return;
        }
      }
    } catch (_) {
      // ignore and try fallbacks
    }

    // 2) Saved draft from localStorage
    try {
      const saved = localStorage.getItem('devisForm');
      if (saved) {
        const parsed = JSON.parse(saved);
        setForm((p) => ({
          ...p,
          prenom: parsed.prenom || p.prenom,
          nom: parsed.nom || p.nom,
          societe: parsed.societe || p.societe,
          fonction: parsed.fonction || p.fonction,
          email: parsed.email || p.email,
          phone: parsed.phone || p.phone,
          consent: typeof parsed.consent === 'boolean' ? parsed.consent : p.consent,
        }));
        return;
      }
    } catch (_) {}

    // 3) Fallback: nudge browser autofill pickers
    const chain = [prenomRef, nomRef, societeRef, fonctionRef, emailRef, phoneRef];
    let i = 0;
    const stepFocus = () => {
      if (i >= chain.length) return;
      const r = chain[i++].current;
      if (r) {
        r.focus();
        setTimeout(() => {
          r.blur();
          setTimeout(stepFocus, 60);
        }, 80);
      } else {
        setTimeout(stepFocus, 40);
      }
    };
    stepFocus();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with sticky progress bar */}
      <header className="bg-blue-200 text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-2 sm:px-6">
          <Link className="w-44 h-8 font-extrabold text-2xl" href="/devis-gratuit/demarrer">
            <span className="border-4 text-gray-800 border-blue-600 ">
              Numi
            </span>
            <span className="text-blue-600">Spark</span>
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="tel:+33602528771"
              className="flex items-center gap-2 text-gray-900 hover:text-blue-400 transition-colors"
            >
              <Phone size={20} />
              <span className="font-semibold">+33 6 02 52 87 71</span>
            </a>
          </div>
        </div>
        {/* Progress bar inside the sticky header for constant visibility */}
        <div
          className="w-full h-1 bg-blue-100 overflow-hidden"
          role="progressbar"
          aria-valuenow={Math.round((step / 6) * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="h-1 bg-blue-600 transition-all duration-300"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-10 pb-10">
        <div className="mt-10">
          {step === 0 && (
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4">Sélectionnez le type de site web</h1>
              <p className="text-center text-blue-600 font-bold mb-8">Devis Gratuit et Sans Engagement !</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { key: "siteType", val: "Site vitrine", Icon: Globe },
                  { key: "siteType", val: "Site e-commerce", Icon: ShoppingCart },
                  { key: "siteType", val: "Site sur mesure", Icon: Code2 },
                ].map(({ key, val, Icon }) => (
                  <button
                    key={val}
                    onClick={() => handleSelect(key, val)}
                    className={`rounded-2xl border p-6 text-center hover:shadow-lg transition shadow-sm ${form.siteType === val ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-200'}`}
                    aria-pressed={form.siteType === val}
                  >
                    <div className="flex justify-center mb-4">
                      <div className={`${form.siteType === val ? 'bg-blue-300' : 'bg-blue-200'} p-4 rounded-full`}><Icon className="text-blue-600" size={48} /></div>
                    </div>
                    <div className="font-semibold text-lg">{val}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="text-3xl font-extrabold text-center mb-8">Quel est votre statut ?</h3>
              <div className="space-y-4">
                {["Auto-entrepreneur / Micro-entrepreneur","Entreprise individuelle / Profession libérale","Société (SASU, SAS, SARL, EURL, etc.)","Association","Particulier"].map((v) => (
                  <button
                    key={v}
                    onClick={() => handleSelect("status", v)}
                    className={`w-full text-left rounded-xl border p-5 hover:shadow-md transition ${form.status === v ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}
                    aria-pressed={form.status === v}
                  >
                    <div className="flex items-center gap-4"><div className={`${form.status === v ? 'bg-blue-300' : 'bg-blue-200'} p-3 rounded-full`}><Building2 className="text-blue-600" /></div><span className="font-medium">{v}</span></div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-3xl font-extrabold text-center mb-6">Quelle est votre activité ?</h3>
              <label className="block text-sm text-gray-600 mb-2">Sélectionnez dans la liste ci-dessous</label>
              <select
                onChange={(e) => handleSelect("activity", e.target.value)}
                value={form.activity || ""}
                className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="" disabled>— Choisir —</option>
                {[
                  "Agriculture",
                  "Alimentation",
                  "Art et Culture",
                  "Automobile",
                  "Banque & Assurance",
                  "Bâtiment & Travaux Publics (BTP)",
                  "Commerce de Détail",
                  "Commerce en Gros",
                  "Conseil",
                  "Éducation & Formation",
                  "Énergie",
                  "Environnement",
                  "Finance",
                  "Hôtellerie/Restauration",
                  "Immobilier",
                  "Industrie",
                  "Informatique & Technologie",
                  "Logistique & Transport",
                  "Médias",
                  "Marketing & Communication",
                  "Mode et Beauté",
                  "Pharmaceutique & Santé",
                  "Services aux Entreprises",
                  "Services à la Personne",
                  "Sport & Loisirs",
                  "Tourisme/Voyages",
                  "Autre",
                ].map((v) => (
                  <option key={v} value={v}>{v}</option>
                ))}
              </select>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-3xl font-extrabold text-center mb-8">Quel est l'objectif de votre site ?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { label: "Vendre en ligne", Icon: ShoppingCart },
                  { label: "Présenter mon offre", Icon: ClipboardList },
                  { label: "Prendre rdv en ligne", Icon: CalendarDays },
                  { label: "Générer des devis / contacts", Icon: Target },
                  { label: "Click & Collect", Icon: Smartphone },
                  { label: "Autre", Icon: Search },
                ].map(({ label, Icon }) => (
                  <button
                    key={label}
                    onClick={() => toggleObjective(label)}
                    className={`rounded-2xl border p-6 text-center hover:shadow-lg transition ${Array.isArray(form.objectives) && form.objectives.includes(label) ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-200'}`}
                    aria-pressed={Array.isArray(form.objectives) && form.objectives.includes(label)}
                  >
                    <div className="flex justify-center mb-4"><div className={`${Array.isArray(form.objectives) && form.objectives.includes(label) ? 'bg-blue-300' : 'bg-blue-200'} p-4 rounded-full`}><Icon className="text-blue-600" size={48} /></div></div>
                    <div className="font-medium">{label}</div>
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">Vous pouvez choisir plusieurs options.</p>
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-3xl font-extrabold text-center mb-8">Possédez-vous déjà un site web ?</h3>
              <div className="grid grid-cols-2 gap-6">
                {["Oui","Non"].map((v) => (
                  <button
                    key={v}
                    onClick={() => handleSelect("existingWebsite", v)}
                    className={`rounded-2xl border p-6 text-center hover:shadow-lg transition ${form.existingWebsite === v ? 'border-blue-600 bg-blue-50 shadow-md' : 'border-gray-200'}`}
                    aria-pressed={form.existingWebsite === v}
                  >
                    <div className="flex justify-center mb-2"><div className={`${form.existingWebsite === v ? 'bg-blue-300' : 'bg-blue-200'} p-3 rounded-full`}>{v === "Oui" ? <CheckCircle className="text-blue-600" /> : <X className="text-blue-600" />}</div></div>
                    <div className="font-semibold">{v}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h3 className="text-3xl font-extrabold text-center mb-8">Quelle est la date de réalisation souhaitée ?</h3>
              <div className="space-y-4">
                {["Au plus vite","D'ici quelques semaines","D'ici quelques mois","Je me renseigne pour l'instant"].map((v) => (
                  <button
                    key={v}
                    onClick={() => handleSelect("projectDate", v)}
                    className={`w-full text-left rounded-xl border p-5 hover:shadow-md transition ${form.projectDate === v ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}
                    aria-pressed={form.projectDate === v}
                  >
                    <div className="flex items-center gap-4"><div className={`${form.projectDate === v ? 'bg-blue-300' : 'bg-blue-200'} p-3 rounded-full`}><CalendarDays className="text-blue-600" /></div><span className="font-medium">{v}</span></div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 6 && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-3xl font-extrabold text-center w-full">Dernière étape 🚀</h3>
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                <div className="text-xs text-gray-500 inline-flex items-center gap-2"><Lock size={14} /> Vos informations sont protégées et ne seront jamais partagées.</div>
                <button type="button" onClick={triggerBrowserAutofill} className="self-start md:self-auto text-blue-600 text-sm inline-flex items-center gap-1 hover:text-blue-700">
                  <Wand2 size={16} /> Remplir automatiquement
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`flex items-center gap-3 border rounded-xl p-3 transition overflow-hidden ${attemptedSubmit && !form.prenom ? 'border-red-400' : 'border-gray-200'}`}>
                  <span className="bg-blue-200 p-2 rounded-full flex-none"><Smile className="text-blue-600" /></span>
                  <input ref={prenomRef} name="given-name" autoComplete="given-name" value={form.prenom} onChange={(e)=>setForm({...form, prenom:e.target.value})} placeholder="Prénom" className="flex-1 min-w-0 w-full outline-none bg-blue-50/40 rounded-md px-3 py-2" />
                </div>
                <div className={`flex items-center gap-3 border rounded-xl p-3 transition overflow-hidden ${attemptedSubmit && !form.nom ? 'border-red-400' : 'border-gray-200'}`}>
                  <span className="bg-blue-200 p-2 rounded-full flex-none"><Users className="text-blue-600" /></span>
                  <input ref={nomRef} name="family-name" autoComplete="family-name" value={form.nom} onChange={(e)=>setForm({...form, nom:e.target.value})} placeholder="Nom" className="flex-1 min-w-0 w-full outline-none bg-blue-50/40 rounded-md px-3 py-2" />
                </div>
                <div className="flex items-center gap-3 border rounded-xl p-3 overflow-hidden">
                  <span className="bg-blue-200 p-2 rounded-full flex-none"><Building2 className="text-blue-600" /></span>
                  <input ref={societeRef} name="organization" autoComplete="organization" value={form.societe} onChange={(e)=>setForm({...form, societe:e.target.value})} placeholder="Société" className="flex-1 min-w-0 w-full outline-none bg-blue-50/40 rounded-md px-3 py-2" />
                </div>
                <div className="flex items-center gap-3 border rounded-xl p-3 overflow-hidden">
                  <span className="bg-blue-200 p-2 rounded-full flex-none"><Target className="text-blue-600" /></span>
                  <input ref={fonctionRef} name="organization-title" autoComplete="organization-title" value={form.fonction} onChange={(e)=>setForm({...form, fonction:e.target.value})} placeholder="Fonction" className="flex-1 min-w-0 w-full outline-none bg-blue-50/40 rounded-md px-3 py-2" />
                </div>
                <div className={`flex items-center gap-3 border rounded-xl p-3 md:col-span-2 transition overflow-hidden ${attemptedSubmit && !isValidEmail(form.email) ? 'border-red-400' : 'border-gray-200'}`}>
                  <span className="bg-blue-200 p-2 rounded-full flex-none"><Mail className="text-blue-600" size={18} /></span>
                  <input ref={emailRef} type="email" name="email" autoComplete="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value.trim()})} placeholder="E-mail" className="flex-1 min-w-0 w-full outline-none bg-blue-50/40 rounded-md px-3 py-2" />
                </div>
                <div className={`flex items-center gap-3 border rounded-xl p-3 md:col-span-2 transition overflow-hidden ${attemptedSubmit && !isValidPhone(form.phone) ? 'border-red-400' : 'border-gray-200'}`}>
                  <span className="bg-blue-200 p-2 rounded-full flex-none"><Phone className="text-blue-600" size={18} /></span>
                  <input ref={phoneRef} inputMode="tel" name="tel" autoComplete="tel" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} placeholder="+33 6 12 34 56 78" className="flex-1 min-w-0 w-full outline-none bg-blue-50/40 rounded-md px-3 py-2" />
                </div>
              </div>
              <label className="flex items-start gap-3 mt-4 p-4 border rounded-xl">
                <input type="checkbox" checked={form.consent} onChange={(e)=>setForm({...form, consent:e.target.checked})} className="mt-1" />
                <span>En cochant cette case, je consens à être contacté par un conseiller expert conformément à la <a href="/politique-de-confidentialite" target="_blank" className="text-blue-600 underline">politique de confidentialité</a>.</span>
              </label>
              <p className="text-xs text-gray-500 mt-2">Vous pourrez vous désinscrire à tout moment. Nous détestons le spam autant que vous.</p>
            </div>
          )}
        </div>

        {/* Form footer navigation (inside content) */}
        <div className="mt-10 border-t pt-4 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={step === 0}
            className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 disabled:opacity-50 hover:bg-gray-50"
          >
            ← Précédent
          </button>

          {step < 6 ? (
            <button
              onClick={handleNext}
              disabled={!isStepComplete()}
              className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              Suivant →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!isFinalValid() || loading}
              className="px-5 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-50"
            >
              {loading ? 'Envoi...' : 'Envoyer →'}
            </button>
          )}
        </div>
      </main>

      {/* Footer (minimal) */}
      <footer className="bg-gray-900 text-white py-8 px-6 mt-10">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-300">
          <Link className="hover:text-white" href="/mentions-legales">Mentions légales</Link>
          <span className="mx-3">|</span>
          <Link className="hover:text-white" href="/politique-de-confidentialite">Politique de confidentialité</Link>
          <p className="mt-2">© {new Date().getFullYear()} NumiSpark</p>
        </div>
      </footer>
    </div>
  );
}
