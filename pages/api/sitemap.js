// pages/api/sitemap.js - Sitemap Dinámico Avanzado
const BASE_URL = "https://mi-sitio.com";

// Simulamos datos que podrían venir de una base de datos o CMS
const getStaticPages = () => {
  return [
    { url: "/", changefreq: "daily", priority: "1.0", lastmod: "2025-06-24" },
    {
      url: "/blog",
      changefreq: "daily",
      priority: "0.9",
      lastmod: "2025-06-23",
    },
    {
      url: "/contacto",
      changefreq: "monthly",
      priority: "0.8",
      lastmod: "2025-06-20",
    },
    {
      url: "/servicios",
      changefreq: "weekly",
      priority: "0.8",
      lastmod: "2025-06-22",
    },
    {
      url: "/sobre-nosotros",
      changefreq: "monthly",
      priority: "0.7",
      lastmod: "2025-06-15",
    },
  ];
};

// Simulamos artículos de blog que vendrían de una base de datos
const getBlogPosts = async () => {
  // En un proyecto real, esto sería una consulta a la base de datos
  return [
    {
      id: 1,
      slug: "optimizacion-seo-nextjs",
      lastmod: "2025-06-20",
      priority: "0.8",
    },
    {
      id: 2,
      slug: "meta-tags-dinamicos-guia",
      lastmod: "2025-06-18",
      priority: "0.8",
    },
    {
      id: 3,
      slug: "sitemaps-xml-importancia",
      lastmod: "2025-06-15",
      priority: "0.7",
    },
    {
      id: 4,
      slug: "lazy-loading-next-js",
      lastmod: "2025-06-12",
      priority: "0.7",
    },
    {
      id: 5,
      slug: "optimizacion-imagenes-web",
      lastmod: "2025-06-10",
      priority: "0.6",
    },
  ];
};

// Simulamos productos o servicios dinámicos
const getDynamicServices = async () => {
  return [
    {
      slug: "consultoria-seo",
      lastmod: "2025-06-20",
      priority: "0.8",
    },
    {
      slug: "desarrollo-web-nextjs",
      lastmod: "2025-06-18",
      priority: "0.8",
    },
    {
      slug: "auditoria-tecnica-seo",
      lastmod: "2025-06-15",
      priority: "0.7",
    },
  ];
};

export default async function handler(req, res) {
  try {
    // Obtener todas las URLs dinámicamente
    const staticPages = getStaticPages();
    const blogPosts = await getBlogPosts();
    const services = await getDynamicServices();

    // Crear URLs para artículos de blog
    const blogUrls = blogPosts.map((post) => ({
      url: `/blog/${post.slug}`,
      changefreq: "weekly",
      priority: post.priority,
      lastmod: post.lastmod,
    }));

    // Crear URLs para servicios
    const serviceUrls = services.map((service) => ({
      url: `/servicios/${service.slug}`,
      changefreq: "monthly",
      priority: service.priority,
      lastmod: service.lastmod,
    }));

    // Combinar todas las URLs
    const allUrls = [...staticPages, ...blogUrls, ...serviceUrls];

    // Generar el XML del sitemap
    const sitemap = generateSitemapXml(allUrls);

    // Configurar headers
    res.setHeader("Content-Type", "text/xml");
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    );

    // Enviar el sitemap
    res.write(sitemap);
    res.end();
  } catch (error) {
    console.error("Error generando sitemap:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

// Función para generar el XML del sitemap
function generateSitemapXml(urls) {
  const urlEntries = urls
    .map((urlData) => {
      const { url, changefreq, priority, lastmod } = urlData;

      return `
    <url>
      <loc>${BASE_URL}${url}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlEntries}
</urlset>`;
}

// Función adicional para generar sitemap index si hay muchas URLs
export function generateSitemapIndex() {
  const sitemaps = [
    {
      loc: `${BASE_URL}/api/sitemap`,
      lastmod: new Date().toISOString().split("T")[0],
    },
  ];

  const sitemapEntries = sitemaps
    .map(
      (sitemap) => `
    <sitemap>
      <loc>${sitemap.loc}</loc>
      <lastmod>${sitemap.lastmod}</lastmod>
    </sitemap>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapEntries}
</sitemapindex>`;
}
