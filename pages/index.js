import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        {/* Meta tags básicos para SEO */}
        <title>Mi Sitio Web Optimizado - Inicio | SEO y Rendimiento Web</title>
        <meta
          name="description"
          content="Descubre las mejores técnicas de optimización SEO y rendimiento web con Next.js. Aprende sobre meta tags dinámicos, sitemaps y lazy loading."
        />
        <meta
          name="keywords"
          content="Next.js, SEO, optimización web, meta tags, sitemap, rendimiento web, desarrollo web"
        />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta
          property="og:title"
          content="Mi Sitio Web Optimizado - Técnicas Avanzadas de SEO"
        />
        <meta
          property="og:description"
          content="Aprende las mejores prácticas de SEO y optimización web con Next.js. Guía completa con ejemplos prácticos."
        />
        <meta
          property="og:image"
          content="https://seo-tarea.vercel.app/images/seo-home.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seo-tarea.vercel.app/" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mi Sitio Web Optimizado - SEO y Rendimiento"
        />
        <meta
          name="twitter:description"
          content="Técnicas avanzadas de SEO con Next.js"
        />
        <meta
          name="twitter:image"
          content="https://seo-tarea.vercel.app/images/seo-home.png"
        />

        {/* Extras */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://seo-tarea.vercel.app/" />
      </Head>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">
            Bienvenido a Mi Sitio Web Optimizado
          </h1>
          <p className="text-lg text-gray-700">
            Descubre las mejores técnicas de SEO y optimización web
          </p>
        </header>

        <section className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex-shrink-0">
            <Image
              src="/images/seo-image.png"
              width={400}
              height={400}
              alt="Técnicas de SEO y optimización web con Next.js"
              priority
              className="rounded-lg shadow-md"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              ¿Por qué optimizar tu sitio web?
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              La optimización SEO es crucial para mejorar la visibilidad en
              motores de búsqueda y proporcionar una mejor experiencia de
              usuario. Con Next.js puedes implementar técnicas avanzadas de
              manera sencilla.
            </p>

            <h3 className="text-xl font-medium mb-2">
              Beneficios principales:
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Mejor posicionamiento en Google</li>
              <li>Mayor velocidad de carga</li>
              <li>Mejor experiencia de usuario</li>
              <li>Aumento del tráfico orgánico</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
