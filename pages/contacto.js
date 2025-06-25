// pages/contacto.js - Página Contacto con Meta Tags Optimizados y Tailwind CSS
import Head from "next/head";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        {/* Meta tags específicos para la página de contacto */}
        <title>Contacto - Mi Sitio Web Optimizado | Ponte en Contacto</title>
        <meta
          name="description"
          content="¿Tienes preguntas sobre SEO o desarrollo web? Contáctanos y te ayudaremos con tus proyectos de optimización web y Next.js."
        />
        <meta
          name="keywords"
          content="contacto, consultoría SEO, desarrollo web, Next.js, optimización web, soporte técnico"
        />

        {/* Open Graph para página de contacto */}
        <meta
          property="og:title"
          content="Contacto - Consultoría SEO y Desarrollo Web"
        />
        <meta
          property="og:description"
          content="Ponte en contacto con nosotros para consultas sobre SEO, desarrollo web y optimización de sitios."
        />
        <meta
          property="og:image"
          content="https://seo-tarea.vercel.app/images/contact-banner.png"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://seo-tarea.vercel.app/contacto"
        />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contacto - Consultoría SEO" />
        <meta
          name="twitter:description"
          content="Contáctanos para proyectos de SEO y desarrollo web"
        />
        <meta
          name="twitter:image"
          content="https://seo-tarea.vercel.app/images/contact-banner.png"
        />

        {/* Meta tags adicionales */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://seo-tarea.vercel.app/contacto" />

        {/* Schema.org para datos estructurados de contacto */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contacto - Mi Sitio Web Optimizado",
            description:
              "Página de contacto para consultas sobre SEO y desarrollo web",
            url: "https://seo-tarea.vercel.app/contacto",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              email: "contacto@mi-sitio.com",
              availableLanguage: "Spanish",
            },
          })}
        </script>
      </Head>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold mb-2">Ponte en Contacto</h1>
          <p className="text-gray-700 text-lg">
            ¿Tienes preguntas sobre SEO o desarrollo web? ¡Estamos aquí para
            ayudarte!
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">
              Información de Contacto
            </h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-1">📧 Email</h3>
              <p className="text-gray-700">contacto@mi-sitio.com</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-1">📱 Teléfono</h3>
              <p className="text-gray-700">+51 999 888 777</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-1">📍 Ubicación</h3>
              <p className="text-gray-700">Arequipa, Perú</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-1">
                🕒 Horario de Atención
              </h3>
              <p className="text-gray-700">
                Lunes a Viernes: 9:00 AM - 6:00 PM
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Nuestros Servicios
              </h3>
              <ul className="list-none p-0 space-y-3">
                <li className="border-b border-gray-300 pb-2">
                  Consultoría SEO
                </li>
                <li className="border-b border-gray-300 pb-2">
                  Desarrollo web con Next.js
                </li>
                <li className="border-b border-gray-300 pb-2">
                  Optimización de rendimiento
                </li>
                <li className="border-b border-gray-300 pb-2">
                  Auditorías técnicas
                </li>
                <li>Implementación de meta tags</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="nombre"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="mensaje"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900 resize-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
