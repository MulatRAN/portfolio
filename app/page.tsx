import Image from "next/image";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa6";
import profilePhoto from "../images/Capture d'écran 2025-12-10 182839.png";
import blindPhoto from "../images/blind.jpg";
import greenhousePhoto from "../images/serre2.jpeg";
import { ProjectsPanel, type Project } from "@/components/ProjectsPanel";

const navigation = [
  { label: "À propos", href: "#apropos" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Parcours", href: "#parcours" },
];

const skillGroups = [
  {
    number: "01",
    title: "Électronique embarquée",
    description: "Arduino IDE, PSpice, LTspice, Proteus, EasyEDA et FlatCAM.",
  },
  {
    number: "02",
    title: "Programmation",
    description: "C, C++, Python, Tkinter, PHP, Symfony, Java, JavaFX, HTML et CSS.",
  },
  {
    number: "03",
    title: "Bases de données",
    description: "PostgreSQL, MySQL et SQL Server Express.",
  },
  {
    number: "04",
    title: "Outils",
    description: "GitHub et Visual Studio Code.",
  },
];

const projects: Project[] = [
  {
    year: "2026",
    category: "Projet technique",
    title: "Serre intelligente",
    description:
      "Système d'agriculture connectée sur ESP32 pour suivre la température, l'humidité de l'air et du sol, la luminosité et la gestion de l'énergie.",
    details:
      "Le prototype utilise une carte ESP32 et des capteurs pour suivre la température, l'humidité de l'air et du sol ainsi que la luminosité. La conception prend également en compte la gestion de l'énergie.",
    tools: "ESP32, capteurs environnementaux",
    image: greenhousePhoto,
    imageAlt: "Prototype de serre intelligente avec ses capteurs environnementaux",
  },
  {
    year: "2025",
    category: "Projet informatique",
    title: "Applications de gestion de données",
    description:
      "Interfaces graphiques avec JavaFX et Python (Tkinter), ainsi qu'une application web dynamique avec Symfony et une base relationnelle MySQL.",
    details:
      "Le projet réunit des interfaces de bureau développées avec JavaFX et Tkinter, ainsi qu'une application web dynamique réalisée avec Symfony. Les données sont gérées dans une base relationnelle MySQL.",
    tools: "JavaFX, Tkinter, Symfony, MySQL",
  },
  {
    year: "2023",
    category: "Dispositif d'assistance",
    title: "Blind Eyes",
    description:
      "Canne d'assistance basée sur Arduino Uno, avec détection d'obstacles, de mouvement et d'humidité, et alertes sonores ou tactiles. Deuxième place au concours de projet.",
    details:
      "La canne utilise une carte Arduino Uno et des capteurs pour détecter les obstacles, les mouvements et l'humidité. Elle transmet des alertes sonores ou tactiles. Le projet a obtenu la deuxième place au concours de projet.",
    tools: "Arduino Uno, capteurs, alertes",
    image: blindPhoto,
    imageAlt: "Canne d'assistance Blind Eyes équipée de capteurs",
  },
];

export default function Page() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#accueil" aria-label="Mulat Ranaboson, accueil">
          MR<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">
          Contact <span aria-hidden="true">-&gt;</span>
        </a>
      </header>

      <main>
        <section className="hero" id="accueil" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-mark" /> Ingénieur en électronique</p>
            <h1 id="hero-title">
              Mulat
              <br />
              <span>Ranaboson.</span>
            </h1>
            <p className="hero-summary">
              Ingénieur en électronique, je conçois des cartes électroniques et des systèmes
              embarqués, du prototypage au développement logiciel.
            </p>
            <div className="hero-links">
              <a className="button-link" href="#competences">
                Decouvrir mon profil <span aria-hidden="true">-&gt;</span>
              </a>
              <a className="underlined-link" href="#contact">Me contacter</a>
            </div>
          </div>

          <figure className="hero-photo">
            <Image
              className="profile-photo"
              src={profilePhoto}
              alt="Portrait de Mulat Ranaboson"
              preload
            />
          </figure>
        </section>

        <section className="about-section content-section" id="apropos" aria-labelledby="about-title">
          <p className="section-index">01 / À propos</p>
          <div className="section-body about-body">
            <h2 id="about-title">Des idées aux solutions.</h2>
            <p>
              Diplômé d&apos;une Licence en électronique et actuellement en Master à l&apos;École
              Supérieure Polytechnique d&apos;Antananarivo, je suis spécialisé dans la conception de
              cartes électroniques (PCB), les systèmes embarqués et le développement logiciel.
              Autonome et rigoureux, je suis disponible pour des projets à distance.
            </p>
          </div>
        </section>

        <section className="skills-section content-section" id="competences" aria-labelledby="skills-title">
          <p className="section-index">02 / Compétences</p>
          <div className="section-body">
            <div className="section-heading">
              <h2 id="skills-title">Compétences techniques</h2>
              <p>Électronique, programmation et outils de conception.</p>
            </div>
            <div className="skill-list">
              {skillGroups.map((skill) => (
                <article className="skill-item" key={skill.number}>
                  <span className="skill-number">{skill.number}</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                </article>
              ))}
            </div>
            <div className="soft-skills">
              <h3>Soft skills</h3>
              <ul className="soft-skill-list">
                <li>Autonomie &amp; débrouillardise</li>
                <li>Rigueur &amp; méthode</li>
                <li>Curiosité &amp; appétence tech</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="projects-section content-section" id="projets" aria-labelledby="projects-title">
          <p className="section-index">03 / Projets</p>
          <div className="section-body">
            <div className="section-heading">
              <h2 id="projects-title">Réalisations</h2>
              <p>Des projets en électronique, systèmes embarqués et développement logiciel.</p>
            </div>
            <ProjectsPanel projects={projects} />
          </div>
        </section>

        <section className="career-section content-section" id="parcours" aria-labelledby="career-title">
          <p className="section-index">04 / Parcours</p>
          <div className="section-body">
            <div className="section-heading">
              <h2 id="career-title">Expérience &amp; formation</h2>
              <p>Un parcours en électronique à l&apos;École Supérieure Polytechnique d&apos;Antananarivo.</p>
            </div>
            <div className="career-grid">
              <div className="career-column">
                <h3>Expérience</h3>
                <article className="career-entry">
                  <div className="career-entry-heading">
                    <h4>Stagiaire en électronique</h4>
                    <span>Déc. 2025 - Janv. 2026</span>
                  </div>
                  <p className="career-place">Naturano, Ambatoroka</p>
                  <p>
                    Réalisation d&apos;un chargeur multiports 5 V sécurisé par RFID sous ESP32, avec
                    mesure de puissance en temps réel via INA226. Prototype validé sur banc d&apos;essai;
                    carte PCB conçue sous EasyEDA et préparée à la fabrication avec FlatCAM.
                  </p>
                </article>
              </div>
              <div className="career-column">
                <h3>Formation</h3>
                <article className="career-entry">
                  <div className="career-entry-heading">
                    <h4>Master en électronique</h4>
                    <span>En cours</span>
                  </div>
                  <p className="career-place">École Supérieure Polytechnique d&apos;Antananarivo</p>
                </article>
                <article className="career-entry">
                  <div className="career-entry-heading">
                    <h4>Licence en électronique</h4>
                    <span>2025</span>
                  </div>
                  <p className="career-place">École Supérieure Polytechnique d&apos;Antananarivo</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner">
            <p className="section-index">05 / Contact</p>
            <h2 id="contact-title">Parlons de tes idées.</h2>
            <p>Disponible pour échanger autour de projets électroniques et techniques.</p>
            <div className="contact-links">
              <a href="mailto:mulatranaboson@gmail.com">
                <FaEnvelope className="social-link-icon" aria-hidden="true" />
                <span>mulatranaboson@gmail.com</span>
              </a>
              <a href="tel:+261325405312">
                <FaPhone className="social-link-icon" aria-hidden="true" />
                <span>+261 32 54 053 12</span>
              </a>
              <a href="https://wa.me/261325405312" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="social-link-icon" aria-hidden="true" />
                <span>WhatsApp / +261 32 54 053 12</span>
              </a>
              <a href="https://github.com/MulatRAN" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-link-icon" aria-hidden="true" />
                <span>GitHub / MulatRAN</span>
              </a>
              <a href="https://www.linkedin.com/in/ranaboson-mulat-2828a6348/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-link-icon" aria-hidden="true" />
                <span>LinkedIn / ranaboson-mulat</span>
              </a>
              <a href="https://www.facebook.com/mulat.ranaboson" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="social-link-icon" aria-hidden="true" />
                <span>Facebook / Mulat Ranaboson</span>
              </a>
              <span>Mahabo Andoharanofotsy</span>
            </div>
            <div className="personal-details">
              <p><strong>Langues</strong> Malagasy (langue maternelle), français (courant), anglais (intermédiaire)</p>
              <p><strong>Intérêts</strong> Lecture, technologie, football</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Mulat Ranaboson</span>
        <span>Ingénieur en électronique</span>
      </footer>
    </>
  );
}
