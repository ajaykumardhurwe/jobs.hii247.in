import React from "react";
import { Link } from "react-router-dom";

export function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: "🌐",
      thumbnail: "https://www.mooc.org/hubfs/web-programming-languages.jpg", // Replace with your thumbnail URL
      link: "/",
    },
    {
      id: 2,
      title: "App Development",
      icon: "📱",
      thumbnail: "https://media.licdn.com/dms/image/v2/D5612AQHdV7JF7Avgcw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711964512962?e=1742428800&v=beta&t=QZy59M78twTGFvLo9hjMefjm6fxuGAKyjrx1YCMmcHY", // Replace with your thumbnail URL
      link: "/",
    },
    {
      id: 3,
      title: "Graphic Design",
      icon: "🎨",
      thumbnail: "https://www.moople.in/blog/wp-content/uploads/2023/09/graphics-designer-course-15-09-2023.jpg", // Replace with your thumbnail URL
      link: "/",
    },
    {
      id: 4,
      title: "SEO Optimization",
      icon: "📈",
      thumbnail: "https://cdn.botpenguin.com/assets/website/Search_Engine_Optimization_d547319792.webp", // Replace with your thumbnail URL
      link: "/",
    },

    {
      id: 5,
      title: "Job Consultancy",
      icon: "💼",
      thumbnail: "https://3.imimg.com/data3/WW/RL/MY-9007608/job-consultancy-1000x1000.jpg", // Replace with your thumbnail URL
      link: "/jobs",
    },
    {
      id: 6,
      title: "eForm Fillup",
      icon: "📄",
      thumbnail: "https://opinionstage-res.cloudinary.com/image/upload/c_lfill,dpr_auto,f_auto,fl_lossy,q_auto:good,w_auto/v1/polls/uvyw1xuraegpsbhpoir0", // Replace with your thumbnail URL
      link: "/eformfillup",
    },
    {
      id: 7,
      title: "MCQ Test",
      icon: "📝",
      thumbnail: "https://educationaltechnology.net/wp-content/uploads/2020/11/multiple_choice_test.jpg", // Replace with your thumbnail URL
      link: "/mcq",
    },
    

  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service) => (
          <Link to={service.link} key={service.id}>
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 p-4 cursor-pointer">
              <img
                src={service.thumbnail}
                alt={service.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <div className="mt-4 text-center">
                <div className="text-4xl">{service.icon}</div>
                <h2 className="text-lg font-semibold mt-2">{service.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
