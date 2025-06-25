const BASE_URL = "https://seo-tarea.vercel.app";

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

const getBlogPosts = async () => {
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
    const staticPages = getStaticPages();
    const blogPosts = await getBlogPosts();
    const services = await getDynamicServices();

    const blogUrls = blogPosts.map((post) => ({
      url: `/blog/${post.slug}`,
      changefreq: "weekly",
      priority: post.priority,
      lastmod: post.lastmod,
    }));

    const serviceUrls = services.map((service) => ({
      url: `/servicios/${service.slug}`,
      changefreq: "monthly",
      priority: service.priority,
      lastmod: service.lastmod,
    }));

    const allUrls = [...staticPages, ...blogUrls, ...serviceUrls];
    const sitemap = generateSitemapXml(allUrls);

    // 👇 Cambios clave aquí
    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "public, max-age=0, must-revalidate");

    res.status(200).end(sitemap);
  } catch (error) {
    console.error("Error generando sitemap:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

function generateSitemapXml(urls) {
  const urlEntries = urls
    .map(({ url, changefreq, priority, lastmod }) => {
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
