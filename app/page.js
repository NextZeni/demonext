import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>My First Blog Post</title>
        <meta name="description" content="A simple blog about productivity." />

        {/* 🟢 Open Graph tags for preview */}
        <meta property="og:title" content="How to Stay Productive at Home" />
        <meta property="og:description" content="Tips to stay focused while working remotely." />
        <meta property="og:image" content="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D ?text=Productivity+Tips" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Optional: Twitter Card preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How to Stay Productive at Home" />
        <meta name="twitter:description" content="Tips to stay focused while working remotely." />
        <meta name="twitter:image" content="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />
      </Head>

      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
        <img
          src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D?text=Blog+Image"
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
