"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Search,
  Smartphone,
  Code,
  TrendingUp,
  Users,
  Target,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";
import {
  Gift,
  LifeBuoy,
  ShieldCheck,
  Infinity,
  X,
  Building2,
  CalendarDays,
  ClipboardList,
} from "lucide-react";
import { toast } from "react-toastify";

const DevisGratuitClient = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    siteType: "",
    status: "",
    activity: "",
    objective: "",
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

  const handleSelect = (key, value) => {
    setForm((p) => ({ ...p, [key]: value }));
    setStep((s) => Math.min(s + 1, 6));
  };

  const handleSubmit = async () => {
    if (!form.consent) {
      toast.error("Veuillez accepter la politique de confidentialité.");
      return;
    }
    if (!form.prenom || !form.nom || !form.email || !form.phone) {
      toast.error("Veuillez compléter les champs requis.");
      return;
    }
    setLoading(true);
    try {
      const message = `Demande de devis\n\nType de site: ${form.siteType}\nStatut: ${form.status}\nActivité: ${form.activity}\nObjectif: ${form.objective}\nSite existant: ${form.existingWebsite}\nDate souhaitée: ${form.projectDate}`;
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
      setShowForm(false);
      setStep(0);
      setForm({
        siteType: "",
        status: "",
        activity: "",
        objective: "",
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
    } catch (e) {
      toast.error("Impossible d'envoyer la demande. Réessayez.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo and Tagline */}
      <header className="bg-blue-200 text-white py-4 px-2 sm:px-6  sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link className="w-44 h-8 font-extrabold text-2xl" href="/devis-gratuit">
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
      </header>

      {/* Hero Section */}
      <section className="bg-blue-200 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h1 className="text-4xl md:text-5xl  font-extrabold text-gray-900 ">
                Obtenez un devis de création de site professionnel
              </h1>
              <p className="text-2xl md:text-3xl  font-extrabold text-blue-600">
                Devis Gratuit et Sans Engagement !
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">
                    Création de sites vitrines
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">
                    Développement sur mesure
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">
                    Sites e-commerce performants
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">Référencement SEO</p>
                </div>
              </div>
              <Link
                href="/devis-gratuit/demarrer"
                aria-label="Obtenir un devis maintenant"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold md:font-bold text-base md:text-lg px-6 py-4 md:px-10 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                Obtenir un devis maintenant
                <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl transform rotate-3 opacity-20"></div>
                <img
                  src="/portfolio/website1.png"
                  alt="Sites web professionnels"
                  className="relative rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="bg-blue-200/70  backdrop-blur-sm text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="flex justify-center mb-2">
                <Users className="text-blue-600" size={32} />
              </div>
              <p className="text-2xl font-bold text-blue-600">100</p>
              <p className="text-sm font-semibold">Clients satisfaits</p>
              <p className="text-xs text-gray-400">partout en France</p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center mb-2">
                <Users className="text-blue-600" size={32} />
              </div>
              <p className="text-2xl font-bold text-blue-600">50</p>
              <p className="text-sm font-semibold">Partenaires</p>
              <p className="text-xs text-gray-400">qui nous font confiance</p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center mb-2">
                <Award className="text-blue-600" size={32} />
              </div>
              <p className="text-2xl font-bold text-blue-600">10</p>
              <p className="text-sm font-semibold">Années d'expertise</p>
              <p className="text-xs text-gray-400">dans le domaine</p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center mb-2">
                <Globe className="text-blue-600" size={32} />
              </div>
              <p className="text-2xl font-bold text-blue-600">200</p>
              <p className="text-sm font-semibold">Sites professionnels</p>
              <p className="text-xs text-gray-400">créés par années</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/devis-gratuit/demarrer" className="inline-flex bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-xl px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 items-center gap-2 mx-auto">
            Obtenir un devis maintenant
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Expertises
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Service 1: Sites Vitrines */}
            <div className="shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-4 rounded-full">
                  <Globe className="text-blue-600" size={48} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                Création de sites internet
              </h3>
              <p className="text-gray-600 text-center  leading-relaxed">
                Sites web vitrines ou e-commerce performants, optimisés SEO avec
                un design personnalisé qui valorise votre identité visuelle.
              </p>
            </div>

            {/* Service 2: Solutions Métiers */}
            <div className="shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-200 p-4 rounded-full">
                  <Code className="text-blue-600" size={48} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                Solutions métiers
              </h3>
              <p className="text-gray-600 text-center  leading-relaxed">
                Solutions digitales adaptées à votre métier : réservation en
                ligne, Click&Collect, simulateurs pour booster votre
                productivité.
              </p>
            </div>

            {/* Service 3: Communication Digitale */}
            <div className="shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-200 p-4 rounded-full">
                  <TrendingUp className="text-blue-600" size={48} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                Communication digitale
              </h3>
              <p className="text-gray-600 text-center  leading-relaxed">
                Communication cohérente sur tous les médias digitaux avec
                solutions SEO/SEA pour générer du trafic et développer votre
                clientèle.
              </p>
            </div>

            {/* Service 4: Référencement */}
            <div className="shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-200 p-4 rounded-full">
                  <Search className="text-blue-600" size={48} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                Référencement
              </h3>
              <p className="text-gray-600 text-center  leading-relaxed">
                Stratégie SEO et SEA ciblée pour vous positionner sur des
                mots-clés stratégiques et générer plus de trafic qualifié.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Why Choose Us Section */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi choisir NumiSpark ?
            </h2>
          </div>

          {/* Conversion Guarantees */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* 1. Free domain & hosting */}
              <div className="shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-200 p-4 rounded-full">
                    <Gift className="text-blue-600" size={48} />
                  </div>
                </div>
                <h3 className="text-xl text-center font-bold text-gray-900 mb-2">
                  Nom de domaine & hébergement offerts 1 an
                </h3>
                <p className="text-gray-600 text-center">
                  Valeur approximative de 250€ — vous l'obtenez gratuitement avec
                  NumiSpark.
                </p>
            </div>

            {/* 2. 6 months support */}
              <div className="shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-200 p-4 rounded-full">
                    <LifeBuoy className="text-blue-600" size={48} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                  6 mois d'assistance après livraison
                </h3>
                <p className="text-gray-600 text-center">
                  Support technique et évolutions mineures inclus pour un
                  lancement serein.
                </p>
            </div>

            {/* 3. Refund guarantee */}
              <div className="shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-200 p-4 rounded-full">
                    <ShieldCheck className="text-blue-600" size={48} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                  Satisfait ou remboursé
                </h3>
                <p className="text-gray-600 text-center">
                  Si vous n'êtes pas satisfait de notre travail, nous vous
                  remboursons — aucun risque pour choisir NumiSpark.
                </p>
            </div>

            {/* 4. Unlimited changes */}
              <div className="shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  <div className="bg-blue-200 p-4 rounded-full">
                    <Infinity className="text-blue-600" size={48} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                  Modifications illimitées jusqu'à validation
                </h3>
                <p className="text-gray-600 text-center">
                  Nous ajustons le design et le contenu jusqu'à ce que vous soyez
                  totalement satisfait.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-200 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Obtenez votre devis gratuit et sans engagement dès aujourd'hui
          </p>
          <Link
            href="/devis-gratuit/demarrer"
            aria-label="Obtenir un devis maintenant"
            className="group inline-flex w-full sm:w-auto max-w-[28rem] items-center justify-center gap-2 bg-white text-blue-600 font-semibold md:font-bold text-base md:text-xl px-6 py-4 md:px-10 md:py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600 hover:bg-gray-50 mx-auto"
          >
            Obtenir un devis maintenant
            <ArrowRight size={22} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-gray-800">
            <a
              href="tel:+33602528771"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Phone size={24} />
              <span className="text-lg font-semibold">+33 6 02 52 87 71</span>
            </a>
            <span className="hidden md:block text-gray-400">|</span>
            <a
              href="mailto:contact@numispark.com"
              className="flex items-center gap-2 hover:text-blue-600 transition-colors"
            >
              <Mail size={24} />
              <span className="text-lg font-semibold">
                contact@numispark.com
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            <Link
              href="/mentions-legales"
              className="hover:text-blue-400 transition-colors"
            >
              Mentions légales
            </Link>
            <span className="mx-4">|</span>
            <Link
              href="/politique-de-confidentialite"
              className="hover:text-blue-400 transition-colors"
            >
              Politique de confidentialité
            </Link>
          </p>
          <p className="text-gray-500 mt-4">© 2025 NumiSpark</p>
        </div>
      </footer>
    </div>
  );
};

export default DevisGratuitClient;
