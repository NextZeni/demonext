import Head from "next/head";

const Home = () => {
  const imageUrl = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630"; // Clean, optimized image

  return (
    <>
      <Head>
        <title>My First Blog Post</title>
        <meta name="description" content="A simple blog about productivity." />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="How to Stay Productive at Home" />
        <meta property="og:description" content="Tips to stay focused while working remotely." />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://demonext-tan.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Stay Productive at Home" />
        <meta name="twitter:description" content="Tips to stay focused while working remotely." />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <img
          src={imageUrl}
          alt="Blog"
          style={{ width: "100%", borderRadius: "10px" }}
        />
        <h1>How to Stay Productive While Working From Home</h1>
        <p>
          Working from home has its perks—but also its distractions. In this article,
          we'll share practical tips to stay focused, organized, and efficient while
          working remotely.
        </p>
      </div>
    </>
  );
};

export default Home;