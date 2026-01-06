"use client";
import React, { useState } from "react";
import {
  CloudUpload,
  Code,
  CheckCircle,
  TrendingUp,
  Gauge,
  Server,
  Smartphone,
  Layout,
  Zap,
  Brain,
  Target,
  LifeBuoy,
  Search,
  ArrowUpRight,
} from "lucide-react";
import FormCTA from "@/components/Form-CTA/page";
import HeroButtons from "@/components/HeroButtons/page";
import FAQs from "@/components/Faqs/page";
import Technologies from "@/components/Technologies/page";
import HowAgencyWorks from "@/components/Process/page";
import { useTranslation } from "react-i18next";
import PortfolioModal from "@/components/PortfolioModal/page";

const TECHNOLOGIES = [
  {
    name: "React Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Angular Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Vue Js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    name: "Tailwind css",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Node js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
  },
  {
    name: "Ruby on Rails",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg",
  },
  {
    name: "Laravel",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "Webflow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg",
  },
  {
    name: "Wordpress",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg",
  },

  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
];

const steps = [
  {
    translationKey: "analysis",
    icon: <Brain className="text-white" size={80} />,
  },
  {
    translationKey: "wireframing",
    icon: <Target className="text-white" size={80} />,
  },
  {
    translationKey: "development",
    icon: <Code className="text-white" size={80} />,
  },
  {
    translationKey: "testing",
    icon: <CheckCircle className="text-white" size={80} />,
  },
  {
    translationKey: "deployment",
    icon: <CloudUpload className="text-white" size={80} />,
  },
];

const keyFeatures = [
  {
    translationKey: "mobileResponsive",
    serviceIcon: "Smartphone",
  },
  {
    translationKey: "seoFriendly",
    serviceIcon: "Search",
  },
  {
    translationKey: "cms",
    serviceIcon: "Server",
  },
  {
    translationKey: "speedOptimization",
    serviceIcon: "Gauge",
  },
];

const benefits = [
  {
    translationKey: "userExperience",
    serviceIcon: "Layout",
  },
  {
    translationKey: "loadingTimes",
    serviceIcon: "Zap",
  },
  {
    translationKey: "scalability",
    serviceIcon: "TrendingUp",
  },
  {
    translationKey: "support",
    serviceIcon: "LifeBuoy",
  },
];

const portfolioItems = [
  {
    image: "/portfolio/web-development-cover1.png",
    src: "https://aid-calculation.vercel.app/",
    translationName: "webDevelopment.portfolio.categories.solulec.name",
    translationContent: "webDevelopment.portfolio.categories.solulec.content",
    translationdesign: "webDevelopment.portfolio.categories.solulec.design",
    translationfrontendDevelopment:
      "webDevelopment.portfolio.categories.solulec.frontendDevelopment",
    translationbackendDevelopment:
      "webDevelopment.portfolio.categories.solulec.backendDevelopment",
    translationDatabase: "webDevelopment.portfolio.categories.solulec.database",
    bgColor: "bg-violet-100",
    dotColor: "bg-violet-500",
  },
  {
    image: "/portfolio/website1.png",
    src: "https://www.privatehonors.com/",
    translationName: "webDevelopment.portfolio.categories.private.name",
    translationContent: "webDevelopment.portfolio.categories.private.content",
    translationdesign: "webDevelopment.portfolio.categories.private.design",
    translationfontendDevelopment:
      "webDevelopment.portfolio.categories.private.frontendDevelopment",
    translationbackendDevelopment:
      "webDevelopment.portfolio.categories.private.backendDevelopment",
    translationDatabase: "webDevelopment.portfolio.categories.private.database",
    translationKey: "appDesign",
    bgColor: "bg-emerald-600",
    dotColor: "bg-emerald-500",
  },
  {
    image: "/portfolio/green-website-cover.png",
    src: "https://greenackors.com/",
    translationName: "webDevelopment.portfolio.categories.wiefly.name",
    translationContent: "webDevelopment.portfolio.categories.wiefly.content",
    translationdesign: "webDevelopment.portfolio.categories.wiefly.design",
    translationfrontendDevelopment:
      "webDevelopment.portfolio.categories.wiefly.frontendDevelopment",
    translationKey: "appDesign",
    bgColor: "bg-amber-400",
    dotColor: "bg-amber-500",
  },
];

const WebsiteDevelopment = () => {
  const { t } = useTranslation("webDevelopment");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");

  const openModal = (item) => {
    setSelectedModal(item);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className=" relative h-screen flex flex-col sm:flex-row justify-center items-center overflow-hidden bg-blue-200">
        <video
          title="agence-creation-site-web-hero-animation"
          autoPlay
          loop
          muted
          playsInline
          className="absolute opacity-60 inset-0 w-full h-full object-contain z-20 mix-blend-multiply"
        >
          <source
            src="https://d3h46s6jorvpfj.cloudfront.net/agence-creation-site-web-hero-animation.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className=" relative z-20 flex w-full h-screen gap-5 justify-center items-center">
          <div className="mt-10  sm:mt-0 flex flex-col justify-center items-center">
            <h1 className="text-4xl max-w-screen-xl text-gray-800 sm:text-6xl text-center font-extrabold">
              {t("webDevelopment.hero.title")}
            </h1>
            <span className="max-w-screen-xl my-3 text-gray-800 text-2xl text-center font-bold">
              {t("webDevelopment.hero.subtitle")}
            </span>
            <HeroButtons />
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <Technologies technologies={TECHNOLOGIES} />

      {/* Key Features */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("webDevelopment.keyFeatures.title")}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("webDevelopment.keyFeatures.titleHighlight")}{" "}
          </span>{" "}
          {t("webDevelopment.keyFeatures.titleEnd")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {keyFeatures.map((feature, index) => {
            const Icon = {
              Search,
              Smartphone,
              Gauge,
              Server,
            }[feature.serviceIcon];
            const key = `webDevelopment.keyFeatures.items.${feature.translationKey}`;

            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-14 h-14" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {t(`${key}.name`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="pb-16 bg-gray-50">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("webDevelopment.benefits.title")}
          </span>{" "}
          {t("webDevelopment.benefits.titleEnd")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4">
          {benefits.map((benefit, index) => {
            const Icon = {
              Zap,
              LifeBuoy,
              Layout,
              TrendingUp,
            }[benefit.serviceIcon];
            const key = `webDevelopment.benefits.items.${benefit.translationKey}`;

            return (
              <div
                key={index}
                className="flex flex-col items-center shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] p-6 rounded-2xl border border-slate-200 md:hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center p-2 bg-blue-200 rounded-2xl mb-4">
                  <Icon className="text-blue-600 w-14 h-14" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                  {t(`${key}.name`)}
                </h3>
                <p className="text-gray-600 text-center">
                  {t(`${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Process Section */}
      <HowAgencyWorks steps={steps} namespace="webDevelopment" />

      {/* Portfolio Section */}
      <div className="max-w-7xl mx-auto px-4 pt-12">
        <h2 className="text-4xl text-center font-bold text-gray-800">
          {t("webDevelopment.portfolio.title")}{" "}
          <span className="text-blue-600 bg-blue-200 p-2.5 rounded-2xl">
            {t("webDevelopment.portfolio.titleHighlight")}
          </span>
        </h2>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className={`shadow-[5px_5px_0px_4px_rgb(147,197,253),_-5px_-5px_0px_rgba(255,255,255,1)] relative rounded-3xl p-2 ${item.bgColor}`}
            >
              <div className="relative aspect-[4/3] rounded-2xl -mr-1 overflow-hidden mb-3">
                <img
                  src={item.image}
                  alt={t(item.translationName)}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">
                  {t(item.translationName)}
                </h3>
                <button
                  onClick={() => openModal(item)}
                  className="w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors"
                >
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PortfolioModal
        item={selectedModal}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        t={t}
      />

      {/* FAQs Section */}
      <FAQs
        faqData={Object.keys(
          t("webDevelopment.faq.items", { returnObjects: true })
        ).map((key) => ({
          question: t(`webDevelopment.faq.items.${key}.question`),
          answer: t(`webDevelopment.faq.items.${key}.answer`),
        }))}
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-12 text-gray-700 leading-7">
        <h2 className="font-bold text-xl">
          Agence de création de sites internet à Caen, Normandie et France
        </h2><br/>

        <p>
          Vous recherchez une{" "}
          <strong>agence de création de site internet à Caen</strong> ?
          Numispark,{" "}
          <strong>société de création de site internet à Caen</strong>, en
          Normandie et partout en France, vous accompagne dans la{" "}
          <strong>création de site internet sur mesure</strong> adapté à vos
          besoins. De la conception au référencement, nous transformons votre
          présence digitale en véritable levier de croissance pour votre
          entreprise.
        </p><br/>

        <p>
          Dans l'écosystème numérique actuel, disposer d'un site internet
          performant, esthétique et optimisé n'est plus une option mais une
          nécessité absolue pour toute entreprise souhaitant développer sa
          visibilité, conquérir de nouveaux clients et asseoir sa crédibilité
          sur son marché. Que vous soyez une start-up innovante cherchant à se
          faire connaître, une PME établie souhaitant moderniser sa présence en
          ligne, ou une grande entreprise nécessitant une plateforme web
          complexe et hautement personnalisée, la{" "}
          <strong>création de site internet à Caen</strong> représente un
          investissement stratégique dont les retombées se mesurent en termes de
          visibilité, de génération de leads et de développement commercial.
        </p><br/>

        <h3 className="font-bold">
          L'agence de création de sites internet : bien plus qu'un prestataire
          technique
        </h3>

        <p>
          Une agence de création de sites internet, également appelée agence
          web, constitue bien plus qu'un simple fournisseur de services
          techniques. Il s'agit d'une{" "}
          <strong>
            société experte dans l'amélioration de la présence en ligne des
            entreprises
          </strong>
          , capable d'offrir une palette complète et diversifiée de services
          incluant la <strong>création de site internet à Caen</strong> et
          ailleurs, le webdesign professionnel, le développement web sur mesure,
          le référencement SEO performant et l'accompagnement stratégique dans
          votre transformation digitale.
        </p><br/>

        <p>
          Depuis leur apparition dans les années 90, période marquée par
          l'émergence du web grand public, les agences web ont connu une
          évolution considérable, passant de la simple création de pages HTML
          statiques à la conception d'écosystèmes digitaux complexes,
          interactifs et hautement performants. Aujourd'hui, des métiers
          hautement spécialisés comme développeur web front-end et back-end,
          expert SEO, webdesigner UX/UI, chef de projet digital, architecte de
          l'information ou spécialiste en marketing digital illustrent
          parfaitement la diversité et la complexité des interventions
          nécessaires pour créer un site internet qui se démarque vraiment dans
          l'environnement digital ultra-compétitif actuel.
        </p><br/>

        <p>
          Que vous soyez une entreprise basée à Caen, une PME normande en pleine
          expansion ou une structure nationale recherchant un partenaire de
          confiance, une <strong>agence de création de site internet</strong>{" "}
          vous accompagne dans votre transformation digitale en apportant non
          seulement son expertise technique mais également sa vision stratégique
          et sa compréhension approfondie des enjeux business du digital.
        </p><br/>

        <p>
          L'<strong>agence de création de sites internet</strong> moderne joue
          un rôle absolument central dans la communication et le développement
          commercial d'une entreprise sur Internet. Elle ne se contente pas de
          créer votre site internet en assemblant quelques pages et
          fonctionnalités. Son intervention est beaucoup plus globale et
          stratégique : elle peut également concevoir et développer votre
          identité visuelle digitale, optimiser vos contenus pour le
          référencement naturel et la conversion, améliorer votre référencement
          naturel pour maximiser votre visibilité dans les moteurs de recherche,
          développer des stratégies d'acquisition de trafic et de génération de
          leads, et assurer l'évolution continue de votre plateforme web.
        </p><br/>

        <p>
          En résumé, une{" "}
          <strong>société de création de site internet à Caen</strong> n'est pas
          un simple prestataire que l'on sollicite ponctuellement pour une
          livraison technique. C'est un véritable partenaire stratégique qui
          accompagne les entreprises sur le long terme pour promouvoir leur
          image en ligne, développer leur visibilité digitale et générer des
          résultats commerciaux mesurables, en s'adaptant constamment aux
          évolutions technologiques rapides, aux changements d'algorithmes des
          moteurs de recherche et aux demandes spécifiques de ses clients.
        </p><br/>

        <h3 className="font-bold">
          Les services complets et diversifiés d'une agence de création de site
          internet à Caen et en Normandie
        </h3>

        <p>
          Une <strong>agence de création de site internet à Caen</strong> et en
          Normandie, comme Numispark, propose une gamme exceptionnellement
          diversifiée de services conçus pour répondre aux besoins spécifiques
          de chaque projet web, quelle que soit sa complexité ou son secteur
          d'activité. Nous intervenons activement auprès des entreprises de
          Caen, Rouen, Le Havre, Évreux, Cherbourg et toute la région Normandie,
          ainsi que partout en France grâce à notre méthodologie de travail à
          distance éprouvée. Que vous soyez une start-up en phase de lancement,
          une PME cherchant à moderniser sa présence digitale ou une grande
          entreprise nécessitant une plateforme web complexe, chaque service est
          méticuleusement adapté pour aider les entreprises à atteindre leurs
          objectifs commerciaux et digitaux spécifiques.
        </p><br/>

        <h4 className="font-bold">
          Création de site Internet : sites vitrines, e-commerce et plateformes
          sur mesure
        </h4>

        <p>
          La <strong>création de site Internet</strong> constitue naturellement
          le cœur de notre expertise. Vous recherchez un site vitrine élégant
          pour présenter votre entreprise et vos services, un site e-commerce
          performant pour développer vos ventes en ligne, un site institutionnel
          pour communiquer auprès de vos parties prenantes, ou une plateforme
          web totalement sur mesure avec des fonctionnalités spécifiques à votre
          activité ? Notre expertise approfondie en{" "}
          <strong>création de site internet à Caen</strong> nous permet de créer
          des sites web performants, sécurisés et parfaitement adaptés à vos
          besoins.
        </p><br/>

        <p>
          Nous maîtrisons un large éventail de technologies modernes pour
          répondre à tous les besoins : React, Angular et Vue.js pour des
          interfaces dynamiques et réactives, Node.js, Django et Laravel pour
          des backends robustes et évolutifs, ainsi que WordPress pour des sites
          facilement administrables. Nos créations bénéficient systématiquement
          de designs modernes et professionnels ainsi que d'une architecture
          responsive qui enrichit considérablement l'expérience utilisateur.
        </p><br/>

        <p>
          Tous nos sites sont systématiquement conçus pour être{" "}
          <strong>mobile-friendly</strong>, garantissant une expérience optimale
          sur tous les appareils sans exception. Cette approche mobile-first
          s'avère aujourd'hui absolument essentielle, sachant que plus de 60% du
          trafic web provient désormais des appareils mobiles et que Google
          privilégie les sites mobile-friendly dans ses résultats de recherche.
        </p><br/>

        <h4 className="font-bold">
          Webdesign et conception UX/UI : créer des expériences mémorables
        </h4>

        <p>
          L'expérience utilisateur et l'interface visuelle constituent les
          fondations absolues du succès de tout site internet moderne. Notre
          service de{" "}
          <strong>création de site internet mobile-friendly à Caen</strong> se
          concentre intensément sur la création d'interfaces intuitives,
          visuellement captivantes et parfaitement optimisées pour satisfaire
          les visiteurs, mettre en valeur votre marque de manière distinctive et
          favoriser la conversion de vos prospects en clients.
        </p><br/>

        <p>
          Nous utilisons les outils professionnels les plus performants du
          marché comme Figma, Sketch et Adobe XD pour concevoir des interfaces
          qui allient esthétique remarquable et fonctionnalité optimale. Chaque
          design est méticuleusement pensé pour s'adapter parfaitement aux
          écrans mobiles, tablettes et ordinateurs de bureau, garantissant une
          expérience utilisateur cohérente et agréable quel que soit le
          dispositif utilisé par vos visiteurs.
        </p><br/>

        <p>
          Notre processus de conception UX/UI démarre systématiquement par une
          phase de recherche utilisateur approfondie, incluant l'analyse
          détaillée des comportements de navigation, la définition précise des
          personas représentant vos différentes cibles, et la cartographie
          complète des parcours utilisateurs. Cette phase de recherche
          essentielle nous permet de concevoir des interfaces qui répondent
          précisément aux besoins, attentes et habitudes de votre audience
          cible, maximisant ainsi l'engagement et les taux de conversion.
        </p><br/>

        <h4 className="font-bold">
          Développement web : technologies modernes et architecture robuste
        </h4>

        <p>
          Nos développeurs web hautement qualifiés maîtrisent parfaitement les
          technologies front-end les plus modernes (React, Angular, Vue.js) et
          back-end les plus robustes (Node.js, Django, Laravel, Ruby on Rails)
          pour créer des sites web techniquement solides, évolutifs dans le
          temps et parfaitement adaptés à vos besoins spécifiques et à votre
          contexte business.
        </p><br/>

        <p>
          Notre approche de{" "}
          <strong>création de site internet sur mesure à Caen</strong> garantit
          une solution technologique parfaitement alignée avec votre activité,
          vos processus métiers et vos ambitions de développement. Nous ne nous
          contentons jamais de solutions génériques ou de templates
          préfabriqués, mais développons des plateformes web véritablement
          uniques qui reflètent l'identité de votre marque et répondent
          précisément à vos exigences fonctionnelles.
        </p><br/>

        <p>
          L'architecture technique que nous concevons est pensée pour la
          performance, la sécurité, la scalabilité et la maintenabilité à long
          terme. Nous accordons une attention particulière à l'optimisation des
          temps de chargement, à la sécurisation des données, à la conformité
          RGPD et aux bonnes pratiques de développement qui garantissent la
          pérennité de votre investissement digital.
        </p><br/>

        <h4 className="font-bold">
          Développement e-commerce : transformer votre site en machine à ventes
        </h4>

        <p>
          Le développement de sites e-commerce représente une spécialité à part
          entière nécessitant une expertise pointue en matière d'expérience
          utilisateur, de tunnel de conversion, de gestion de catalogue
          produits, de systèmes de paiement sécurisés et de logistique. Nous
          développons votre activité commerciale en ligne avec des solutions
          e-commerce performantes et complètes sur les plateformes les plus
          adaptées : WooCommerce pour une flexibilité maximale et une
          intégration WordPress, Shopify pour une mise en ligne rapide et une
          gestion simplifiée, ou PrestaShop pour des catalogues produits
          complexes.
        </p><br/>

        <p>
          Nos sites e-commerce bénéficient systématiquement d'une optimisation
          poussée du tunnel de conversion, incluant des processus de commande
          simplifiés, des fiches produits optimisées pour la conversion, des
          fonctionnalités de cross-selling et upselling, et une intégration
          soignée des solutions de paiement sécurisées les plus populaires.
        </p><br/>

        <p>
          Tous nos sites e-commerce sont systématiquement{" "}
          <strong>mobile-friendly</strong>, une caractéristique absolument
          cruciale sachant que le m-commerce (commerce mobile) représente
          aujourd'hui une part majoritaire et croissante des ventes en ligne.
          Nous optimisons chaque étape du parcours d'achat pour les utilisateurs
          mobiles, depuis la navigation dans le catalogue jusqu'à la
          finalisation de la commande.
        </p><br/>

        <h4 className="font-bold">
          Refonte de site web : moderniser et optimiser votre présence existante
        </h4>

        <p>
          Votre site internet actuel ne répond plus à vos attentes, présente un
          design daté, souffre de performances médiocres ou n'est pas adapté aux
          appareils mobiles ? Notre service de refonte de site web inclut la{" "}
          <strong>création de site internet mobile-friendly</strong> pour
          moderniser en profondeur votre présence digitale, améliorer
          radicalement son design visuel, optimiser ses performances techniques
          et son efficacité commerciale, tout en garantissant une compatibilité
          parfaite avec l'ensemble des appareils mobiles et tablettes.
        </p><br/>

        <p>
          La refonte d'un site web constitue une opportunité idéale pour
          repenser votre stratégie digitale, améliorer votre référencement
          naturel, moderniser votre identité visuelle en ligne et intégrer de
          nouvelles fonctionnalités répondant aux évolutions de votre activité
          et aux attentes de vos utilisateurs. Nous gérons également les aspects
          techniques critiques comme la migration de contenu, la préservation de
          votre référencement existant via des redirections appropriées, et
          l'amélioration de la sécurité de votre plateforme.
        </p><br/>

        <h4 className="font-bold">SEO : le référencement naturel au cœur de votre visibilité</h4>

        <p>
          Le référencement naturel (SEO) s'avère absolument vital pour toute{" "}
          <strong>création de site internet à Caen</strong> et ailleurs. Un site
          internet magnifique mais invisible dans les résultats de recherche
          Google ne génère aucun trafic qualifié et donc aucun résultat
          commercial. Numispark développe des stratégies SEO complètes et sur
          mesure utilisant les outils professionnels les plus performants comme
          Google Analytics pour l'analyse du trafic, Semrush et Ahrefs pour
          l'analyse concurrentielle et la recherche de mots-clés, afin
          d'améliorer significativement votre classement dans les résultats de
          recherche et d'augmenter substantiellement le trafic qualifié vers
          votre site.
        </p><br/>

        <p>
          Notre approche SEO est globale et technique, incluant l'optimisation
          de la structure du site, l'optimisation on-page de chaque contenu, la
          création de contenu SEO-friendly, le développement d'une stratégie de
          netlinking qualitative, l'optimisation technique (vitesse de
          chargement, balisage sémantique, données structurées), et le suivi
          régulier des performances avec des ajustements continus.
        </p><br/>

        <p>
          Que vous cibliez un marché local normand avec des requêtes
          géolocalisées, un marché national ou même international, notre
          expertise en référencement naturel vous permet d'atteindre et de
          dépasser vos objectifs de visibilité organique.
        </p><br/>

        <h4 className="font-bold">
          Maintenance de site web : garantir la pérennité de votre
          investissement
        </h4>

        <p>
          Chaque site internet nécessite des soins réguliers et une attention
          continue pour rester performant, sécurisé, à jour et compétitif dans
          un environnement digital en constante évolution. Nous proposons des
          services de maintenance web complets pour garantir la durabilité, la
          sécurité optimale et les mises à jour régulières de votre plateforme
          en ligne, que vous soyez situé à Caen, en Normandie ou ailleurs en
          France.
        </p><br/>

        <p>
          Notre service de maintenance inclut les mises à jour de sécurité
          critiques, les sauvegardes régulières de vos données, la surveillance
          continue de la disponibilité et des performances, la correction rapide
          des bugs éventuels, l'optimisation continue des performances, les
          mises à jour des contenus à votre demande, et le support technique
          réactif en cas de problème. Cette maintenance proactive prévient les
          problèmes avant qu'ils n'affectent vos utilisateurs et votre activité.
        </p><br/>

        <h4 className="font-bold">Hébergement web : performance, sécurité et disponibilité</h4>

        <p>
          La disponibilité permanente et la sécurité robuste de votre site
          internet constituent des éléments absolument primordiaux pour votre
          crédibilité et votre business. Nous offrons des solutions
          d'hébergement web professionnelles sur les infrastructures cloud les
          plus fiables et performantes du marché : AWS (Amazon Web Services),
          Google Cloud Platform ou Microsoft Azure.
        </p><br/>

        <p>
          Ces solutions d'hébergement garantissent une disponibilité maximale,
          des performances exceptionnelles même en cas de trafic important, une
          sécurité de niveau entreprise et une scalabilité permettant
          d'accompagner la croissance de votre activité. Nous proposons
          également une assistance technique disponible et réactive pour tous
          nos clients normands et français, garantissant une résolution rapide
          de tout problème technique éventuel.
        </p><br/>

        <h3 className="font-bold">
          Choisir la bonne agence de création de site internet à Caen : les
          critères déterminants
        </h3>

        <p>
          Choisir la bonne{" "}
          <strong>agence de création de site internet à Caen</strong> et en
          Normandie constitue une décision stratégique majeure qui influencera
          directement le succès de vos projets digitaux et donc de votre
          développement commercial en ligne. Que vous recherchiez une agence
          polyvalente capable d'intervenir sur tous les aspects de votre
          présence web ou une agence spécialisée dans un domaine particulier,
          plusieurs critères essentiels et discriminants doivent impérativement
          guider votre choix et votre processus de sélection.
        </p><br/>

        <p>
          L'examen minutieux des réalisations précédentes de l'agence constitue
          sans conteste un indicateur extrêmement fiable de ses compétences
          réelles, de son niveau de créativité et de la qualité tangible de ses
          livrables. Les projets précédents vous donnent une idée concrète et
          visuelle du style de l'agence, de sa maîtrise technique, de sa
          capacité à créer des designs originaux et de son expertise dans
          différents types de sites web. Consultez attentivement le portfolio de
          l'agence, notamment ses projets de{" "}
          <strong>création de site internet sur mesure à Caen</strong> et en
          Normandie, pour évaluer si leur style et leur niveau de qualité
          correspondent à vos attentes et à l'image que vous souhaitez projeter.
        </p><br/>

        <p>
          La réputation de l'agence, mesurable et vérifiable à travers les avis
          clients authentiques et les témoignages détaillés, fournit des
          informations extrêmement précieuses et révélatrices sur plusieurs
          aspects critiques : la satisfaction réelle des clients précédents, la
          fiabilité de l'agence dans le respect des engagements pris, la qualité
          de la communication tout au long du projet, le respect des délais
          annoncés, la qualité du support après le lancement du site, et la
          capacité de l'agence à gérer les imprévus et à trouver des solutions
          aux problèmes rencontrés. Numispark compte de nombreux témoignages
          authentiques et positifs de clients satisfaits dans toute la Normandie
          et en France, témoignant de notre engagement constant envers
          l'excellence et la satisfaction client.
        </p><br/>

        <p>
          La rencontre avec l'équipe qui travaillera concrètement sur votre
          projet revêt une importance absolument capitale et ne devrait jamais
          être négligée. Il s'avère essentiel de s'assurer que l'ensemble des
          professionnels de la{" "}
          <strong>société de création de site internet à Caen</strong> comprend
          parfaitement votre vision, partage vos valeurs d'entreprise, possède
          les qualifications techniques nécessaires pour transformer vos idées
          en réalité digitale, et démontre une véritable passion pour leur
          métier. La composition de l'équipe, incluant développeurs web
          front-end et back-end, webdesigners UX/UI, consultants SEO, chefs de
          projet digitaux et éventuellement experts en marketing digital,
          détermine très largement la qualité, la cohérence et l'efficacité du
          résultat final.
        </p><br/>

        <p>
          La qualité de la communication représente véritablement le ciment
          d'une collaboration réussie et d'un projet qui se déroule
          harmonieusement. Une communication claire, transparente, régulière et
          véritablement centrée sur vos besoins spécifiques garantit que le
          projet avance dans la bonne direction, que les ajustements nécessaires
          sont effectués rapidement et efficacement, que vous restez constamment
          informé de l'avancement à chaque étape importante, et que vos
          feedbacks sont pris en compte et intégrés. Chez Numispark, nous
          privilégions systématiquement une relation de proximité authentique et
          de transparence totale avec une communication régulière et structurée
          tout au long du projet, facilitée significativement par notre présence
          physique à Caen pour les clients normands qui souhaitent des
          rencontres en présentiel.
        </p><br/>

        <p>
          L'expertise mobile constitue aujourd'hui un critère absolument non
          négociable dans le choix d'une agence web. À l'ère du mobile-first où
          la majorité du trafic web provient des smartphones et tablettes, il
          est impératif de s'assurer que l'agence maîtrise parfaitement la{" "}
          <strong>création de site internet mobile-friendly à Caen</strong>.
          Tous nos sites sont systématiquement conçus avec une approche
          responsive design rigoureuse garantissant une expérience utilisateur
          optimale, fluide et agréable sur smartphone, tablette et ordinateur,
          sans aucun compromis sur l'esthétique ou la fonctionnalité.
        </p><br/>

        <p>
          La transparence tarifaire et l'adaptation aux budgets variés
          constituent également des critères de choix particulièrement
          importants dans votre processus de sélection. Les tarifs doivent être
          clairement et précisément explicités dès le départ, sans coûts cachés
          surprenants, avec un devis détaillé et compréhensible permettant de
          comprendre exactement la répartition des coûts entre les différentes
          phases et composantes du projet. Cette approche transparente garantit
          des solutions véritablement sur mesure, en parfaite adéquation avec
          votre budget disponible, tout en offrant un retour sur investissement
          optimal et mesurable.
        </p><br/>

        <p>
          Que vous soyez une entreprise locale solidement implantée à Caen, une
          PME normande en pleine phase d'expansion ou une société nationale
          recherchant un partenaire digital de confiance, le choix de votre{" "}
          <strong>agence de création de site internet</strong> détermine très
          largement le succès de votre projet web et donc de votre stratégie
          digitale globale. La proximité géographique facilite indéniablement
          les échanges en face à face et la création d'une relation de
          confiance, mais une agence réellement compétente et capable
          d'intervenir efficacement à distance sur toute la France offre
          également une grande flexibilité opérationnelle sans aucun compromis
          sur la qualité de la collaboration, la réactivité ou la compréhension
          de vos enjeux business.
        </p><br/>

        <p>
          Définir clairement vos attentes, vos objectifs commerciaux et vos
          contraintes dès le départ facilitera considérablement la communication
          avec l'agence et orientera efficacement votre choix vers le partenaire
          le plus adapté. Que vous cherchiez principalement du webdesign créatif
          et impactant, du développement web technique front-end ou back-end, de
          la stratégie digitale globale, du référencement SEO performant ou un
          accompagnement complet couvrant tous ces aspects, Numispark à Caen
          peut vous accompagner selon vos besoins spécifiques dans toute la
          Normandie et au-delà de la région.
        </p><br/>

        <h3 className="font-bold">
          Numispark : votre partenaire création web de confiance en Normandie et
          France
        </h3>

        <p>
          En tant que{" "}
          <strong>société de création de site internet à Caen</strong>{" "}
          solidement établie et reconnue, Numispark rayonne activement sur
          l'ensemble de la Normandie et intervient régulièrement auprès de
          clients situés partout en France. Notre position stratégique
          privilégiée à Caen nous permet intelligemment de combiner proximité
          régionale authentique et expertise nationale reconnue dans la{" "}
          <strong>création de site internet</strong>, offrant ainsi le meilleur
          des deux approches à nos clients.
        </p><br/>

        <p>
          Nos clients normands bénéficient concrètement de rencontres régulières
          et personnalisées dans nos locaux caennais accueillants situés au 16
          Bis Rue Froide, tandis que nos clients situés ailleurs en France
          profitent pleinement d'un accompagnement à distance tout aussi
          performant, structuré et personnalisé. Que vous ayez besoin de{" "}
          <strong>création de site internet à Caen</strong>, Rouen, Évreux, Le
          Havre, Paris, Lyon, Marseille ou toute autre ville française, notre
          processus éprouvé reste identique et notre engagement constant :
          écoute attentive de vos besoins, expertise technique de pointe et
          résultats mesurables alignés avec vos objectifs.
        </p><br/>

        <p>
          De la conception graphique initiale au développement technique
          complexe, en passant par le référencement SEO performant,
          l'optimisation continue des conversions et la maintenance préventive à
          long terme, nous sommes votre partenaire de confiance absolue pour
          tous vos projets web en Normandie et au-delà des frontières
          régionales. Notre approche particulièrement flexible et adaptative
          nous permet de nous adapter parfaitement à vos contraintes
          géographiques, à vos disponibilités et à vos préférences de
          communication, tout en maintenant systématiquement un niveau
          d'exigence technique et créatif élevé qui garantit l'excellence des
          livrables finaux.
        </p><br/>

        <p>
          Nous comprenons profondément et intuitivement les enjeux spécifiques
          des entreprises normandes, leur culture entrepreneuriale, leurs
          marchés cibles locaux et leurs ambitions de développement régional,
          tout en maîtrisant parfaitement les standards nationaux et
          internationaux du développement web professionnel, les meilleures
          pratiques de l'industrie digitale et les tendances émergentes en
          matière de design et d'expérience utilisateur. Notre expertise
          reconnue en{" "}
          <strong>création de site internet mobile-friendly à Caen</strong> et
          notre connaissance approfondie et actualisée du marché local font
          indiscutablement de Numispark le partenaire idéal pour les entreprises
          régionales souhaitant développer stratégiquement leur présence
          digitale localement tout en gardant un œil attentif sur les
          opportunités nationales et internationales.
        </p><br/>

        <p>
          Chaque <strong>création de site internet sur mesure à Caen</strong>{" "}
          que nous concevons et réalisons est méticuleusement pensée pour
          performer efficacement localement auprès de votre marché normand tout
          en ayant simultanément le potentiel technique et stratégique de
          conquérir des marchés géographiques plus larges, régionaux, nationaux
          voire internationaux. C'est précisément cette double approche
          stratégique et cette vision à long terme qui constituent notre force
          distinctive et notre valeur ajoutée pour vos projets digitaux.
        </p><br/>

        <h3 className="font-bold">
          Expertise sectorielle transversale et sites internet véritablement sur
          mesure
        </h3>

        <p>
          Dans l'écosystème des agences web, certaines structures se sont
          progressivement spécialisées et positionnées sur des secteurs
          d'activité spécifiques comme le tourisme avec ses problématiques de
          réservation et de visibilité saisonnière, l'industrie avec ses besoins
          en catalogues techniques et en portails B2B, l'agriculture avec ses
          enjeux de circuits courts et de traçabilité, ou le commerce avec ses
          impératifs de conversion et de performance e-commerce. Cette
          spécialisation sectorielle verticale permet effectivement de
          développer une expertise particulièrement pointue dans les
          problématiques spécifiques de chaque domaine et de proposer des
          solutions parfaitement adaptées aux réglementations particulières et
          aux attentes caractéristiques de chaque industrie.
        </p><br/>

        <p>
          Chez Numispark,{" "}
          <strong>agence de création de site internet à Caen</strong> et en
          Normandie reconnue pour sa polyvalence, nous avons délibérément fait
          le choix stratégique d'une approche différente mais tout aussi
          efficace et performante. Notre atout majeur et notre différenciation
          résident précisément dans notre capacité démontrée à répondre
          efficacement à des besoins extrêmement variés, dans n'importe quel
          secteur d'activité imaginable, que ce soit pour des projets à Caen, en
          Normandie ou partout en France. Notre équipe talentueuse et
          diversifiée a consciencieusement développé une expertise transversale
          remarquablement diversifiée à travers des collaborations réussies avec
          des clients dans l'e-commerce où nous créons des boutiques en ligne
          performantes et optimisées pour la conversion, les services B2B et B2C
          où nous développons des plateformes facilitant les interactions
          professionnelles ou grand public, l'éducation où nous concevons des
          plateformes d'apprentissage en ligne et des sites institutionnels pour
          établissements scolaires, le coaching et développement personnel avec
          des sites mettant en valeur l'expertise des coachs et facilitant la
          prise de rendez-vous, le tourisme avec des sites attractifs valorisant
          les destinations et simplifiant les réservations, l'immobilier avec
          des portails de recherche de biens et des outils de gestion locative,
          la santé avec des sites conformes aux réglementations strictes du
          secteur médical, l'industrie avec des catalogues techniques et des
          portails clients sophistiqués, et bien d'autres secteurs encore.
        </p><br/>

        <p>
          Que votre domaine d'activité soit la restauration nécessitant des
          fonctionnalités de réservation en ligne et de présentation de menus
          attractifs, le tourisme requérant des galeries photos immersives et
          des systèmes de réservation intégrés, l'industrie nécessitant des
          catalogues produits techniques détaillés et des espaces clients
          sécurisés, la mode exigeant des expériences visuelles exceptionnelles
          et des boutiques en ligne élégantes, la technologie nécessitant des
          interfaces modernes et des démonstrations de produits interactives, ou
          absolument tout autre secteur imaginable, nous élaborons
          méticuleusement des <strong>sites internet sur mesure à Caen</strong>{" "}
          et ailleurs qui incarnent parfaitement et authentiquement l'essence
          distinctive de votre marque, communiquent efficacement vos valeurs
          d'entreprise et captivent durablement votre audience cible grâce à une
          expérience utilisateur remarquable.
        </p><br/>

        <p>
          Chaque projet web que nous entreprenons bénéficie systématiquement de
          notre expertise technique approfondie en{" "}
          <strong>création de site internet mobile-friendly</strong> pour
          garantir une accessibilité maximale et une expérience optimale auprès
          de l'ensemble de vos cibles, quel que soit l'appareil qu'elles
          utilisent pour consulter votre site. Cette attention particulière
          portée à l'expérience mobile constitue aujourd'hui un facteur critique
          et non négociable de succès dans pratiquement tous les secteurs
          d'activité.
        </p><br/>

        <p>
          Pour en savoir plus en détail sur notre approche méthodologique
          éprouvée et découvrir concrètement nos nombreuses réalisations de{" "}
          <strong>création de site internet à Caen</strong>, en Normandie et
          partout en France, nous vous invitons chaleureusement à explorer notre
          portfolio complet et nos études de cas détaillées disponibles sur
          notre site web professionnel.
        </p><br/>

        <h3 className="font-bold">
          Tarification transparente, équitable et adaptée à tous les projets web
        </h3>

        <p>
          Les prix pratiqués par les différentes{" "}
          <strong>agences de création de site internet à Caen</strong> et dans
          le reste de la France peuvent varier très considérablement d'un projet
          à l'autre, d'une agence à l'autre et d'une région à l'autre. Cette
          variation tarifaire importante s'explique logiquement par plusieurs
          facteurs clés et structurants qui influencent directement et
          significativement la charge de travail nécessaire, la complexité
          technique du développement et donc le coût final du projet.
        </p><br/>

        <p>
          La complexité globale de votre projet web constitue indéniablement le
          premier facteur absolument déterminant du prix final. Un site vitrine
          relativement simple avec quelques pages statiques présentant votre
          entreprise, vos services et vos coordonnées nécessitera naturellement
          et logiquement beaucoup moins d'investissement en temps et en
          ressources qu'un site e-commerce sophistiqué avec des centaines ou des
          milliers de références produits, des fonctionnalités avancées de
          recherche et de filtrage, un système de gestion de stock intégré, ou
          encore qu'une plateforme web complexe et hautement personnalisée avec
          des espaces membres sécurisés, des workflows métiers spécifiques, des
          intégrations poussées avec vos systèmes d'information existants ou des
          fonctionnalités innovantes développées spécifiquement pour votre
          activité.
        </p><br/>

        <p>
          Le type précis de site internet souhaité influence également très
          significativement l'investissement nécessaire. Un site vitrine
          institutionnel, un site e-commerce transactionnel, un site sur mesure
          avec développement spécifique, une plateforme SaaS (Software as a
          Service), un portail collaboratif, un site d'actualités avec système
          de gestion de contenu éditorial, ou une marketplace mettant en
          relation acheteurs et vendeurs représentent des niveaux de complexité
          et donc d'investissement très différents.
        </p><br/>

        <p>
          Pour une{" "}
          <strong>création de site internet mobile-friendly à Caen</strong>, le
          prix inclut nécessairement et systématiquement l'optimisation
          responsive approfondie de l'ensemble des pages et fonctionnalités,
          ainsi que les tests rigoureux et méticuleux sur une large gamme
          d'appareils mobiles et de tablettes différents pour garantir une
          expérience utilisateur irréprochable sur tous les supports sans
          exception. Cette phase d'optimisation et de tests mobiles représente
          un investissement en temps significatif mais absolument indispensable
          dans le contexte digital actuel dominé par le trafic mobile.
        </p><br/>

        <p>
          Une <strong>création de site internet sur mesure à Caen</strong>{" "}
          nécessitera très naturellement un investissement financier plus
          important qu'un site web basé sur un template WordPress standard ou
          qu'une solution préfabriquée, mais offre en contrepartie des avantages
          considérables et stratégiques : une personnalisation complète et
          totale répondant exactement à vos besoins spécifiques, une meilleure
          différenciation concurrentielle sur votre marché, une scalabilité
          optimale permettant de faire évoluer le site selon la croissance de
          votre activité, et une propriété intellectuelle complète du code
          développé.
        </p><br/>

        <p>
          Les fonctionnalités requises et leur niveau de sophistication
          technique influencent également très directement le coût du projet.
          Des fonctionnalités relativement standard comme un formulaire de
          contact, une galerie photos ou une carte Google Maps intégrée
          représentent un investissement minimal, tandis que des fonctionnalités
          avancées comme un configurateur de produits interactif, un système de
          réservation en ligne complexe, une intégration CRM ou ERP poussée, un
          espace client personnalisé avec historique des commandes, ou encore
          des fonctionnalités d'intelligence artificielle ou de réalité
          augmentée nécessitent des développements spécifiques importants et
          donc un investissement proportionnel.
        </p><br/>

        <p>
          Chez Numispark,{" "}
          <strong>société de création de site internet à Caen</strong> reconnue
          pour sa transparence et son éthique professionnelle, nous évaluons
          systématiquement et minutieusement chaque projet en tenant compte
          simultanément de tous ces facteurs techniques, mais également et
          surtout de vos objectifs commerciaux stratégiques et de votre budget
          disponible réaliste. Nous proposons différentes formules soigneusement
          adaptées à tous les budgets pour rendre le digital véritablement
          accessible à toutes les entreprises sans discrimination, que vous
          soyez une très petite entreprise caennaise avec des ressources
          financières limitées, une PME normande en phase de croissance
          disposant d'un budget intermédiaire, ou une grande structure nationale
          ou multinationale disposant d'un budget conséquent pour un projet
          digital ambitieux et complexe.
        </p><br/>

        <p>
          Notre politique tarifaire demeure parfaitement cohérente, équitable et
          transparente, que vous soyez physiquement basé à Caen, ailleurs en
          Normandie ou dans n'importe quelle région de France. Nous croyons
          profondément et fermement en une tarification juste et éthique qui
          reflète précisément et honnêtement la valeur réelle apportée à votre
          entreprise, en tenant compte non seulement du coût de développement
          technique mais également et surtout du potentiel de retour sur
          investissement commercial de votre site internet, de l'impact attendu
          sur votre visibilité et votre image de marque, et de la contribution
          du site à vos objectifs business globaux.
        </p><br/>

        <p>
          De plus, nos devis sont systématiquement et invariablement très
          détaillés, exhaustifs et parfaitement compréhensibles, afin d'être le
          plus transparent possible sur la répartition précise des coûts
          associés à votre projet web entre les différentes phases (conception,
          développement, intégration de contenu, tests, formation, etc.) et les
          différentes composantes techniques et créatives. Cette transparence
          totale et cette clarté vous permettent de comprendre exactement et
          précisément où va chaque euro de votre investissement digital et de
          faire des choix véritablement éclairés et stratégiques sur les
          fonctionnalités à prioriser selon votre budget disponible et vos
          objectifs prioritaires.
        </p><br/>

        <p>
          Contactez-nous dès maintenant au <strong>+33 6 02 52 87 71</strong> ou
          par email à <strong>contact@numispark.com</strong> pour une
          consultation initiale gratuite et sans engagement, ainsi qu'un devis
          détaillé et personnalisé pour votre projet de{" "}
          <strong>création de site internet</strong>. Notre équipe expérimentée
          et passionnée se fera un réel plaisir d'analyser vos besoins
          spécifiques, de comprendre vos objectifs commerciaux et digitaux, et
          de vous proposer la solution optimale parfaitement adaptée à votre
          contexte, vos ambitions et votre budget.
        </p>
      </div>
      {/* Contact Section */}
      <FormCTA />
    </div>
  );
};

export default WebsiteDevelopment;
