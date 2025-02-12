import React from 'react';
import { TbSocial } from 'react-icons/tb';
import { MdContentPasteSearch } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdDesignServices } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
const skillsData = [
  {
    name: "Social Media Management",
    icon: <TbSocial className="text-4xl text-primary" />,
    link: "#",
    description: [
      " Account Setup & Optimization (Instagram, Facebook, LinkedIn)",
      " Content Creation (Reels, Carousels, Posts)",
      " Daily Engagement (Comments, DMs, Stories)",
      " Hashtag Strategy & Captions",
      " Post Scheduling & Reporting",
      " Social Media Ads (Boosting & Promotions)",
    ],
    aosDelay: "0",
  },
  {
    name: "Content Creation",
    icon: <MdContentPasteSearch className="text-4xl text-primary" />,
    link: "#",
    description: ["Graphic Design (Static Posts, Carousels, Stories)",
      "Video Editing (Reels, YouTube Shorts, Ads)",
      "Scriptwriting for Reels/Short Videos",
      "Blog Writing & Website Content",
      "Photography & Short Brand Videos (Collaboration with photographers)"], // Empty array for Web Designing
    aosDelay: "300",
  },
  {
    name: "Paid Advertisement",
    icon: <RiAdvertisementFill className="text-4xl text-primary" />,
    link: "#",
    description: ["Facebook & Instagram Ads",
      "LinkedIn Ads",
      "Retargeting Campaigns",
      "A/B Testing & Ad Optimization",
      "Monthly Ad Performance Reports"], 
    aosDelay: "500",
  },
  {
    name: "Website Design & Development",
    icon: <CgWebsite className="text-4xl text-primary" />,
    link: "#",
    description: ["Custom Website Development (WordPress, Shopify, Wix)",
      "Landing Page Creation",
      "Website Maintenance & SEO Optimization",
      "Mobile-Friendly & Fast Loading Websites",
      "E-Commerce Integration"], 
    aosDelay: "700",
  },
  {
    name: "Branding & Design",
    icon: <MdDesignServices className="text-4xl text-primary" />,
    link: "#",
    description: ["Logo Design",
      "Brand Identity (Colors, Fonts, Visual Guidelines)",
      "Business Cards & Brochures",
      "Packaging Design",
      "Event Posters & Flyers"], 
    aosDelay: "700",
  },
  {
    name: "Analytics and Report",
    icon: <MdAnalytics className="text-4xl text-primary" />,
    link: "#",
    description: ["Weekly/Monthly Performance Reports",
      "Insights on Engagement, Reach, and ROI",
      "Competitor Analysis",
      "Strategy Adjustments Based on Data"], 
    aosDelay: "700",
  },
  {
    name: "Google my Business",
    icon: <FaGoogle className="text-4xl text-primary" />,
    link: "#",
    description: ["Get noticed with a professional Google listing.",
      "Optimize your content with powerful keyword strategies.",
      "Achieve higher rankings to stay ahead of the competition.",
      "Publish seamlessly and stand out on Google."], 
    aosDelay: "700",
  },
];

const Services = () => {
  return (
    <>
      
      <div id="services" className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-primary dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              We are self-service data analytics software that lets you create
              visually.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mx-3">
          {/* <div className='flex flex-wrap mx-4'> */}
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <ul>{skill.description.length > 0 && ( // Check if description array has any items
                  <p className="text-gray-600 dark:text-gray-400">
                    
                      {skill.description.map((item, i) => (
                        <li key={i} className="list-none">{item}</li>
                      ))}
                   
                  </p>
                )}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;