import Script from "next/script";

const GoogleAnalytics = () => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C1N1TKVPKC"
        async
      />
      <Script id="google-analytics" async>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C1N1TKVPKC');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
