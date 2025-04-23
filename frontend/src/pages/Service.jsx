import InfiniteScroll from "../components/InfiniteScroll.jsx";
const Services = () => {
  const items = [
    {
      content: "Custom Web Development",
      para: `Your vision, my code — a perfect match.
From sleek business websites to interactive web apps, I craft solutions that are fast, responsive, and tailored to your
unique goals. No templates — just clean, scalable, and high-performance builds that stand out.`
    },
    {
      content: "Frontend Magic (React & Beyond",
      para: `Looks matter — but so does performance. Why not have both?
Using React, Tailwind, and JavaScript, I create pixel-perfect, dynamic user interfaces that feel smooth and look
stunning on any device. It’s more than design — it’s an experience.`
    },
    {
      content: "Backend Engineering",
      para: `Behind every great app is a rock-solid backend.
With Node.js, Express, and MongoDB, I build secure, scalable, and efficient server-side systems that handle data, users,
and business logic like a pro — ensuring your app works flawlessly.`
    },
    {
      content: "Full-Stack Power (MERN)",
      para: `Frontend meets backend — the full package.
Why hire two developers when you can get one who does it all? I build complete, end-to-end web applications using the
MERN stack — MongoDB, Express, React, and Node.js — delivering powerful, fully integrated solutions from idea to
launch.`
    },
    {
      content: "E-Commerce Solutions",

      para: `Turn visitors into customers — 24/7.
I design and develop user-friendly, high-converting online stores with secure payments, intuitive product pages, and
seamless checkout flows. Your e-commerce site won’t just look good — it’ll sell.`
    },
    {
      content: "API Development & Integration",
      para: `Let’s make your site smarter.
Need to pull data from another service? Want to connect payments, maps, or social logins? I create custom REST APIs and
seamlessly integrate third-party APIs to make your site do more — faster and smarter.`
    }
  ];

  return (
    <div className="h-screen flex w-full items-center justify-center ">
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <InfiniteScroll
          items={items}
          isTilted={true}
          tiltDirection="left"
          autoplay={true}
          autoplaySpeed={0.4}
          autoplayDirection="top"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
};

export default Services;
