import React from "react";
import news1 from "../../../assets/images/news1.png"
import news2 from "../../../assets/images/news2.png"
import news3 from "../../../assets/images/news3.png"
import SectionHead from "../../../components/SectionHead/SectionHead";
import Article from "./Article";


const News = () => {
  const newsData = [
    {
      img: news1,
      name: "Breaking stereotypes: Female basketball stars rise at Uttara tournament",
      des: "Deshi Ballers is a pioneer. It has been seven years of constant efforts to dismantle gender stereotypes and create a supportive space where female basketball lovers can dream.",
    },
    {
      img: news2,
      name: "Ratargul and rain: A monsoon tale in motion",
      des: "Experience serene monsoon travel in Sunamganj and enjoy a peaceful Tanguar Haor boat stay, breathtaking Niladri...",
    },
    {
      img: news3,
      name: "The agencies had information, but not about the violence",
      des: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
    },
  ];

  return (
    <div className="px-4 md:px-29 py-0 md:py-20 md:pb-20">
      <SectionHead
        title="News & Events"
        des="A professional doctor website offering trusted medical information, online appointments, healthcare services, and patient support for convenient, reliable, and compassionate care."
      ></SectionHead>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 ">
        {newsData?.map((news, i) => (
          <Article key={i} news={news}></Article>
        ))}
      </div>
    </div>
  );
};

export default News;
