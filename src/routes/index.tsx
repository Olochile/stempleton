import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  Feather,
  Languages,
  Menu,
  Quote,
  X,
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const books = [
  {
    title: 'Ocho mil millones, un caos',
    eyebrow: 'Ficción política · Distopía',
    description:
      'Dos figuras irreconciliables, una fortuna repartida al mundo entero y una economía global al borde del colapso.',
    image: '/books/ocho-mil-millones.jpg',
    accent: 'coral',
    link: 'https://ajstempleton.wordpress.com/2025/02/14/libro-ocho-mil-millones-un-caos/',
  },
  {
    title: 'Sin Cruz',
    eyebrow: 'Historia alternativa · IA',
    description:
      'Un mundo sin iglesias, tribunales gobernados por inteligencia artificial y una pregunta incómoda: ¿puede existir justicia sin compasión?',
    image: '/books/sin-cruz.jpg',
    accent: 'ink',
    link: 'https://ajstempleton.wordpress.com/2025/02/13/libro-sin-cruz-un-mundo-sin-iglesias/',
  },
  {
    title: 'Más allá del velo',
    eyebrow: 'Ciencia ficción · Filosofía',
    description:
      'Dos realidades que no pueden verse comienzan a comunicarse. Clara y Ezar buscan una verdad capaz de alterar ambos universos.',
    image: '/books/mas-alla-del-velo.jpg',
    accent: 'sage',
    link: 'https://ajstempleton.wordpress.com/2025/02/12/mas-alla-del-velo/',
  },
  {
    title: 'Los olvidados',
    eyebrow: 'Bilogía · Ficción histórica',
    description:
      'Una mirada a quienes quedaron fuera de la versión oficial de la historia y a las fuerzas que decidieron su destino.',
    image: '/books/los-olvidados.jpg',
    accent: 'ochre',
    link: 'https://ajstempleton.wordpress.com/2025/02/11/bilogia-los-olvidados/',
  },
  {
    title: 'El Clan | AnarKía',
    eyebrow: 'Saga · Thriller político',
    description:
      'Poder, lealtades rotas y una organización que se mueve en la frontera entre el orden y la rebelión.',
    image: '/books/el-clan.jpg',
    accent: 'blood',
    link: 'https://ajstempleton.wordpress.com/2025/02/10/el-clan-anarkia/',
  },
]

const journal = [
  {
    number: '01',
    title: 'De dónde nace la idea para «Sin Cruz»',
    text: 'Una batalla del año 1000, un emperador frente al papa y la posibilidad de imaginar otro curso para la historia.',
    link: 'https://ajstempleton.wordpress.com/2025/01/11/ideasc/',
  },
  {
    number: '02',
    title: 'Primeros capítulos de «Sin Cruz»',
    text: 'El fin de la cruz, la Ley de Hierro y el origen de una sociedad construida sobre una justicia radical.',
    link: 'https://ajstempleton.wordpress.com/2024/11/18/zidea/',
  },
  {
    number: '03',
    title: 'Las próximas historias',
    text: 'Civilizaciones perdidas, universos paralelos, ficción histórica y nuevos relatos sobre el poder.',
    link: 'https://ajstempleton.wordpress.com/2024/10/27/proximos/',
  },
]

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="A. J. Stempleton, inicio">
          <span>A.J.</span> Stempleton
        </a>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Navegación principal">
          <a href="#libros" onClick={closeMenu}>Libros</a>
          <a href="#autor" onClick={closeMenu}>El autor</a>
          <a href="#bitacora" onClick={closeMenu}>Bitácora</a>
          <a className="nav-cta" href="https://ajstempleton.wordpress.com/2024/10/26/amostras/" target="_blank" rel="noreferrer">
            Muestras gratuitas <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="kicker reveal reveal-1"><span /> Ficción que incomoda</div>
          <h1 className="reveal reveal-2">
            El mundo no es<br />
            lo que <em>parece.</em>
          </h1>
          <p className="hero-intro reveal reveal-3">
            Novelas sobre poder, tecnología y futuros posibles. Historias que empiezan con una pregunta y terminan cambiando la forma de mirar el presente.
          </p>
          <a className="text-link reveal reveal-4" href="#libros">
            Explorar las obras <ArrowDownRight size={20} />
          </a>
        </div>

        <div className="hero-art reveal reveal-3" aria-label="Selección de portadas de A. J. Stempleton">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <img className="hero-book hero-book-back" src="/books/sin-cruz.jpg" alt="Portada de Sin Cruz" />
          <img className="hero-book hero-book-front" src="/books/ocho-mil-millones.jpg" alt="Portada de Ocho mil millones, un caos" />
          <div className="hero-stamp"><Feather size={24} /><span>Ideas que<br />dejan huella</span></div>
        </div>

        <div className="hero-index" aria-hidden="true">01</div>
      </section>

      <section className="manifesto" aria-label="Manifiesto">
        <Quote className="manifesto-quote" size={34} strokeWidth={1.3} />
        <p>La ficción es el lugar donde ensayamos las consecuencias antes de que el mundo las convierta en realidad.</p>
        <span>A.J.S.</span>
      </section>

      <section className="books-section" id="libros">
        <div className="section-heading">
          <div>
            <span className="section-number">01 — Biblioteca</span>
            <h2>Historias para<br /><em>lectores inquietos</em></h2>
          </div>
          <p>Distopías, ficción política y universos alternativos que enfrentan las grandes preguntas de nuestro tiempo.</p>
        </div>

        <div className="books-grid">
          {books.map((book, index) => (
            <article className={`book-card book-card-${book.accent}`} key={book.title}>
              <a href={book.link} target="_blank" rel="noreferrer" aria-label={`Leer más sobre ${book.title}`}>
                <div className="book-visual">
                  <span className="book-count">0{index + 1}</span>
                  <img src={book.image} alt={`Portada de ${book.title}`} loading={index > 1 ? 'lazy' : 'eager'} />
                  <span className="book-arrow"><ArrowUpRight /></span>
                </div>
                <div className="book-copy">
                  <span>{book.eyebrow}</span>
                  <h3>{book.title}</h3>
                  <p>{book.description}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="author-section" id="autor">
        <div className="author-mark" aria-hidden="true">
          <span>A</span><i>J</i>
        </div>
        <div className="author-copy">
          <span className="section-number light">02 — El autor</span>
          <h2>Escribir para poner<br /><em>el presente a prueba.</em></h2>
          <p className="author-lead">
            A.J. Stempleton construye relatos donde la política, la historia y la tecnología dejan de ser contexto y se convierten en protagonistas.
          </p>
          <div className="author-columns">
            <p>Sus novelas parten de escenarios extremos —una riqueza universal, un mundo sin instituciones religiosas, una justicia administrada por máquinas— para explorar cómo reaccionamos cuando cambian las reglas.</p>
            <p>Publica en español y portugués, acercando sus historias a lectores de ambos lados del Atlántico.</p>
          </div>
          <div className="author-facts">
            <span><BookOpen /> Ficción especulativa</span>
            <span><Languages /> Español · Português</span>
          </div>
        </div>
      </section>

      <section className="journal-section" id="bitacora">
        <div className="section-heading journal-heading">
          <div>
            <span className="section-number">03 — Bitácora</span>
            <h2>Detrás de<br /><em>las historias</em></h2>
          </div>
          <a className="text-link" href="https://ajstempleton.wordpress.com/" target="_blank" rel="noreferrer">
            Ver todos los artículos <ArrowUpRight size={19} />
          </a>
        </div>

        <div className="journal-list">
          {journal.map((article) => (
            <a href={article.link} target="_blank" rel="noreferrer" className="journal-row" key={article.number}>
              <span>{article.number}</span>
              <h3>{article.title}</h3>
              <p>{article.text}</p>
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </section>

      <section className="closing-section">
        <p>¿Listo para cruzar el umbral?</p>
        <h2>Elige una historia.<br /><em>Cuestiona el mundo.</em></h2>
        <a href="#libros">Abrir la biblioteca <BookOpen size={19} /></a>
      </section>

      <footer>
        <a className="wordmark footer-wordmark" href="#inicio"><span>A.J.</span> Stempleton</a>
        <p>Ficción política, historia alternativa y ciencia ficción.</p>
        <div>
          <a href="https://ajstempleton.wordpress.com/" target="_blank" rel="noreferrer">WordPress</a>
          <a href="https://ajstempleton.com/" target="_blank" rel="noreferrer">Sitio original</a>
        </div>
        <small>© {new Date().getFullYear()} A.J. Stempleton</small>
      </footer>
    </main>
  )
}
