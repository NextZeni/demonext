// app/page.js
const imageUrl = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630"; // Clean, optimized image URL

export const metadata = {
  title: "My First Blog Post",
  description: "A simple blog about productivity.",
  openGraph: {
    title: "How to Stay Productive at Home",
    description: "Tips to stay focused while working remotely.",
    url: "https://demonext-tan.vercel.app/",
    type: "website",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Stay Productive at Home",
    description: "Tips to stay focused while working remotely.",
    images: [imageUrl],
  },
};

export default function Home() {
  return (
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
  );
}