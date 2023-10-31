import Document, { Html, Head, Main, NextScript } from 'next/document'
class WebDocument extends Document {
  render() {
    return (
      <Html lang="es-MX">
        <Head>
          <link rel="icon" href="/favicon.svg" />

          <script async src="https://www.googletagmanager.com/gtag/js?id=G-KQ1HMF1P5H"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10829665062"></script>
          <script async src="/gtag.js"></script>

          <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1096253434249782');
          fbq('track', 'PageView');`}}></script>

          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
            {
              "@context": "https://schema.org/",
              "@type": "Corporation",
              "name": "Rabbit",
              "url": "https://rabbitmx.com/",
              "logo": "https://rabbitmx.com/logo.svg",
              "sameAs": [
                "https://www.facebook.com/mexrabbit",
                "https://www.instagram.com/rabbit.mexico/",
                "https://www.youtube.com/channel/UCIIMFO4mWIdDGIF3V3gdC7Q",
                "https://www.tiktok.com/@rabbit_mex"
              ],
              "alternateName": "Rabbit México"
              }
          `}}></script>

        </Head>
        <body>
            <noscript dangerouslySetInnerHTML={{__html: `<img height="1" width="1" 
            src="https://www.facebook.com/tr?id=1096253434249782&ev=PageView&noscript=1"/>`}}></noscript>
          <Main/>
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default WebDocument