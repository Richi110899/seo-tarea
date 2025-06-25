import Head from "next/head";

export default function Blog() {
  // Simulamos datos de blog que podrían venir de una API o CMS
  const blogPosts = [
    {
      id: 1,
      title: "Optimización SEO con Next.js",
      excerpt: "Aprende las mejores técnicas para optimizar tu sitio web",
      date: "2025-06-20",
    },
    {
      id: 2,
      title: "Meta Tags Dinámicos: Guía Completa",
      excerpt: "Todo lo que necesitas saber sobre meta tags dinámicos",
      date: "2025-06-18",
    },
    {
      id: 3,
      title: "Sitemaps XML y su Importancia",
      excerpt: "Cómo crear y optimizar sitemaps para mejor SEO",
      date: "2025-06-15",
    },
  ];

  return (
    <>
      <Head>
        {/* Meta tags específicos para la página de blog */}
        <title>Blog de SEO y Desarrollo Web | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Lee los últimos artículos sobre SEO, optimización web y desarrollo con Next.js. Consejos prácticos y tutoriales actualizados."
        />
        <meta
          name="keywords"
          content="blog SEO, artículos desarrollo web, tutoriales Next.js, optimización web, meta tags, sitemap"
        />

        {/* Open Graph para blog */}
        <meta
          property="og:title"
          content="Blog de SEO y Desarrollo Web - Artículos Actualizados"
        />
        <meta
          property="og:description"
          content="Descubre los últimos artículos sobre SEO, optimización web y mejores prácticas de desarrollo."
        />
        <meta
          property="og:image"
          content="https://mi-sitio.com/images/blog-banner.png"
        />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://mi-sitio.com/blog" />

        {/* Twitter Cards específicas para blog */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Blog de SEO y Desarrollo Web" />
        <meta
          name="twitter:description"
          content="Artículos sobre SEO y optimización web"
        />

        {/* Meta tags adicionales para blog */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://mi-sitio.com/blog" />
        <meta property="article:section" content="Technology" />
        <meta property="article:tag" content="SEO, Web Development, Next.js" />
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">
            Blog de SEO y Desarrollo Web
          </h1>
          <p className="text-gray-700 text-lg">
            Artículos actualizados sobre las mejores prácticas de optimización
            web
          </p>
        </header>

        <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Publicado: {post.date}
              </p>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <a
                href={`/blog/${post.id}`}
                className="text-blue-600 hover:underline font-medium"
              >
                Leer más →
              </a>
            </article>
          ))}
        </section>

        <aside className="mt-12 p-6 bg-gray-100 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Categorías Populares</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/blog/categoria/seo"
                className="text-blue-600 hover:underline"
              >
                SEO (5 artículos)
              </a>
            </li>
            <li>
              <a
                href="/blog/categoria/nextjs"
                className="text-blue-600 hover:underline"
              >
                Next.js (3 artículos)
              </a>
            </li>
            <li>
              <a
                href="/blog/categoria/rendimiento"
                className="text-blue-600 hover:underline"
              >
                Rendimiento (4 artículos)
              </a>
            </li>
            <li>
              <a
                href="/blog/categoria/meta-tags"
                className="text-blue-600 hover:underline"
              >
                Meta Tags (2 artículos)
              </a>
            </li>
          </ul>
        </aside>
      </main>
    </>
  );
}
