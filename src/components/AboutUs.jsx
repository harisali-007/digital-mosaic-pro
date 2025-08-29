"use client";

import { Rocket, Users, Target, Star, Globe, Award, Heart, Zap, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const values = [
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe collaboration is the cornerstone of innovation. When diverse perspectives, skills, and experiences converge, extraordinary solutions are born.",
    detail: "Our teams operate in a cross-functional environment where designers, engineers, strategists, and product managers work side by side. This synergy allows us to approach challenges from every angle, ensuring that our solutions are not only technically sound but also human-centered, scalable, and impactful. By fostering open communication and a culture of shared ownership, we create products that truly resonate with people and deliver long-term value."
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We don’t just keep up with the future — we help shape it. Innovation is at the heart of every product, every feature, and every idea we bring to life.",
    detail: "With over 30% of our resources dedicated to research and development, we continuously explore emerging technologies like Artificial Intelligence, Blockchain, and Cloud-native solutions. Our teams are encouraged to experiment, prototype, and challenge traditional norms, ensuring that we stay ahead of industry trends. This relentless pursuit of innovation allows us to deliver solutions that not only solve today’s problems but also anticipate the challenges of tomorrow."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We set the bar high — and then raise it. Excellence is not just a goal; it is a standard we hold ourselves to in every project.",
    detail: "From initial concept to final deployment, every product we build goes through rigorous quality assurance and performance testing. Our obsession with detail ensures that we meet and often exceed client expectations. By adopting best practices, leveraging automation in testing, and maintaining an uncompromising focus on user experience, we deliver digital solutions that are fast, reliable, and polished to perfection. Excellence isn’t optional for us — it’s our way of working."
  },
  {
    icon: Rocket,
    title: "Impact",
    description: "We measure success not by what we build, but by the positive change it creates for people, businesses, and communities.",
    detail: "Our solutions have helped clients increase operational efficiency by over 40%, streamline processes across industries, and reach more than 2 million users worldwide. Beyond numbers, we’re driven by the tangible difference our products make — from enabling small businesses to scale globally, to creating digital platforms that empower individuals and foster inclusivity. Every line of code, every design decision, and every strategy we implement is aimed at creating impact that lasts far beyond project completion."
  },
];


  const milestones = [
    { year: "2019", text: "Founded with a vision to reimagine digital products." },
    { year: "2021", text: "Expanded globally and partnered with Fortune 500 companies." },
    { year: "2023", text: "Launched AI-powered platforms used by 50k+ users worldwide." },
    { year: "2025", text: "Pioneering the next wave of intelligent digital experiences." },
  ];

  return (
    <section className="relative overflow-hidden">

      {/* Hero */}
      <div className="relative py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* floating blobs */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/30 blur-3xl rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/30 blur-3xl rounded-full"></div>
        </div>

        <div className="mt-16 relative z-10 container mx-auto px-6 lg:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-7xl md:text-7xl font-black mb-6 font-bold"
          >
            About <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"style={{color:"#7D2DE1"}}>Us</span>
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We’re a team of <span style={{color:"#7D2DE1"}}> Dreamers, Builders, and Innovators</span> shaping digital experiences that transform how the world works.
          </p>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-12 text-gray-400 flex justify-center"
          >
            <ChevronDown className="w-7 h-7" />
          </motion.div>
        </div>
      </div>

     

      {/* Timeline */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our <span style={{color:"#7D2DE1"}}>Journey</span></h2>
            <p className="text-lg font-bold text-gray-600">From humble beginnings to global impact.</p>
          </div>
          <div className="relative border-l-2 border-blue-500/40">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="ml-10 mb-12 last:mb-0"
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text"style={{color:"#7D2DE1"}}>
                    {m.year}
                  </span>
                  <div className="h-px flex-1 ml-4 bg-gradient-to-r from-blue-500/30 to-transparent"></div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
                  <p className="text-gray-700 text-lg">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values */}
     {/* Core Values */}
<div className="py-24 bg-white">
  <div className="container mx-auto px-6 lg:px-12 text-center">
    <h2 className="text-4xl font-bold mb-6">
      Core <span style={{ color: "#7D2DE1" }}>Values</span>
    </h2>
    <p className="text-lg text-gray-600 mb-16">
      The principles that guide every decision we make.
    </p>

    {/* Grid - 2x2 layout */}
    <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {values.map((v, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ y: -8, scale: 1.02 }}
          className="p-8 rounded-2xl bg-white border shadow hover:shadow-xl transition relative flex flex-col"
        >
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-5">
            <v.icon style={{color:"#7D2DE1"}} className="w-7 h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-3" style={{color:"#7D2DE1"}}>{v.title}</h3>

          {/* Short description */}
          <p className="text-gray-600 mb-4">{v.description}</p>

          {/* Long detail */}
          <p className="text-gray-500 text-sm leading-relaxed">
            {v.detail}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</div>



    </section>
  );
};

export default About;
