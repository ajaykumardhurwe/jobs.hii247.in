// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./styles.css"; // Import CSS for animated background

// // Card data
// const cards = [
//   {
//     id: 1,
//     title: "Basic Plan",
//     images: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
//     ],
//     description: "A perfect plan for small businesses and startups.",
//     facilities: [
//       "🌐 Domain & Hosting Free for 1 Year",
//       "🔒 Free Valid SSL Certificate",
//       "📄 6-10 Pages (Depends on Plan)",
//       "💬 WhatsApp Integration",
//       "📱 Responsive for Mobile/Tablet",
//       "📧 Free Professional Emails",
//       "🛠️ Admin Panel",
//       "🌟 SEO Friendly",
//       "📲 Social Media Integration",
//       "🎨 Logo Design",
//       "📊 Website Visitor Counter",
//       "🛡️ 12 Months Free Support",
//     ],
//     price: "$199",
//     paymentRoute: "/payment/basic",
//   },
//   {
//     id: 2,
//     title: "Pro Plan",
//     images: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
//     ],
//     description: "Advanced features for growing businesses.",
//     facilities: [
//       "🌐 Domain & Hosting Free for 1 Year",
//       "🔒 Free Valid SSL Certificate",
//       "📄 6-10 Pages (Depends on Plan)",
//       "💬 WhatsApp Integration",
//       "📱 Responsive for Mobile/Tablet",
//       "📧 Free Professional Emails",
//       "🛠️ Advanced Admin Panel",
//       "🌟 Enhanced SEO Optimization",
//       "📲 Social Media Integration",
//       "🎨 Premium Logo Design",
//       "📊 Advanced Website Visitor Analytics",
//       "🛡️ 12 Months Free Support",
//     ],
//     price: "$399",
//     paymentRoute: "/payment/pro",
//   },
//   {
//     id: 3,
//     title: "Premium Plan",
//     images: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
//     ],
//     description: "All-in-one solution for large-scale businesses.",
//     facilities: [
//       "🌐 Domain & Hosting Free for 1 Year",
//       "🔒 Free Valid SSL Certificate",
//       "📄 6-10 Pages (Customizable)",
//       "💬 WhatsApp Integration",
//       "📱 Highly Responsive for All Devices",
//       "📧 Multiple Professional Emails",
//       "🛠️ Custom Admin Panel",
//       "🌟 Advanced SEO Friendly",
//       "📲 Social Media Campaign Integration",
//       "🎨 Premium Logo & Branding",
//       "📊 Website Visitor Counter with Analytics",
//       "🛡️ 12 Months Premium Support",
//     ],
//     price: "$599",
//     paymentRoute: "/payment/premium",
//   },



//   {
//     id: 4,
//     title: "Basic Plan",
//     images: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
//     ],
//     description: "Ideal for individuals or startups looking to create their first app.",
//     facilities: [
//       "📱 **Core App Features** (Basic functionality for one platform)",
//       "🛠️ **Customizable UI** with limited templates",
//       "📊 **Basic Analytics** for user insights",
//       "🔐 **Essential Security** protocols",
//       "🌐 **App Deployment** on one store (Google Play or App Store)",
//       "🛡️ **3 Months Support** for bug fixes and updates",
//     ],
//     price: "$199",
//     paymentRoute: "/app/payment/basic",
//   },


//   {
//     id: 5,
//     title: "Medium Plan",
//     images: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
//     ],
//     description: "Perfect for businesses aiming to expand with intermediate-level apps.",
//     facilities: [
//       "📱 **Advanced App Features** (Cross-platform support for iOS and Android)",
//       "🎨 **Custom UI/UX Design** tailored to your brand",
//       "📊 **Enhanced Analytics** with user behavior tracking",
//       "🔐 **Enhanced Security** with encryption",
//       "🌐 **App Deployment** on both Google Play and App Store",
//       "📧 **Push Notifications** for user engagement",
//       "📲 **In-App Payment Integration**",
//       "🛡️ **6 Months Support** for maintenance and updates",
//     ],
//     price: "$399",
//     paymentRoute: "/app/payment/medium",
//   },
//   {
//     id: 6,
//     title: "Pro Plan",
//     images: [
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
//     ],
//     description: "The ultimate solution for enterprises looking for high-end app development.",
//     facilities: [
//       "📱 **Comprehensive App Features** (Cross-platform with seamless integration)",
//       "🎨 **Premium UI/UX Design** with animations and interactivity",
//       "📊 **Advanced Analytics Dashboard** with real-time data",
//       "🔒 **Enterprise-Level Security** with multi-layer encryption",
//       "🌐 **App Deployment** on Google Play, App Store, and Web",
//       "📧 **Automated Notifications** with user segmentation",
//       "💳 **In-App Purchases and Subscriptions**",
//       "🔌 **Integration with Third-Party Services**",
//       "📲 **Social Media Integration** for sharing and connectivity",
//       "🛠️ **Custom Admin Panel** for app management",
//       "🛡️ **12 Months Premium Support** with regular updates and upgrades",
//     ],
//     price: "$599",
//     paymentRoute: "/app/payment/pro",
//   },

// ];

// // Card Component
// const Card = ({ card }: { card: typeof cards[0] }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const navigate = useNavigate();

//   // Function to go to the next image
//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === card.images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   // Function to go to the previous image
//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? card.images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
//       {/* Image Carousel */}
//       <div className="w-full mb-4 relative">
//         {/* Carousel Image */}
//         <img
//           src={card.images[currentImageIndex]}
//           alt={`${card.title} Slide`}
//           className="rounded-lg w-full h-40 object-cover transition-all duration-500 ease-in-out"
//         />

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevImage}
//           className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray-600 p-2 rounded-full hover:bg-gray-700"
//         >
//           &#60;
//         </button>
//         <button
//           onClick={nextImage}
//           className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-600 p-2 rounded-full hover:bg-gray-700"
//         >
//           &#62;
//         </button>
//       </div>

//       {/* Card Content */}
//       <h2 className="text-xl font-bold mb-2">{card.title}</h2>
//       <p className="text-gray-700 mb-4">{card.description}</p>
//       <ul className="text-sm text-gray-600 space-y-2 mb-4">
//         {card.facilities.map((facility, index) => (
//           <li key={index} className="flex items-center">
//             ✅ {facility}
//           </li>
//         ))}
//       </ul>
//       <div className="text-lg font-semibold text-green-600 mb-4">
//         Price: {card.price}
//       </div>
//       <button
//         onClick={() => navigate(card.paymentRoute)}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Pay Now
//       </button>
//     </div>
//   );
// };





// export function Home() {
//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <h1 className="text-3xl font-bold text-center mb-6">Website Plans</h1>
//       <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
//         {cards.map((card) => (
//           <Card key={card.id} card={card} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;















import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; // Import CSS for animated background

// Card data
const cards = [
  // {
  //   id: 1,
  //   title: "Basic Plan",
  //   images: [
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
  //   ],
  //   description: "A perfect plan for small businesses and startups.",
  //   facilities: [
  //     "🌐 Domain & Hosting Free for 1 Year",
  //     "🔒 Free Valid SSL Certificate",
  //     "📄 6-10 Pages (Depends on Plan)",
  //     "💬 WhatsApp Integration",
  //     "📱 Responsive for Mobile/Tablet",
  //     "📧 Free Professional Emails",
  //     "🛠️ Admin Panel",
  //     "🌟 SEO Friendly",
  //     "📲 Social Media Integration",
  //     "🎨 Logo Design",
  //     "📊 Website Visitor Counter",
  //     "🛡️ 12 Months Free Support",
  //   ],
  //   price: "$199",
  //   paymentRoute: "/payment/basic",
  // },
  // Other plans here...



  {
    id: 1,
    title: "Basic Plan",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
    ],
    description: "A perfect plan for small businesses and startups.",
    facilities: [
      "🌐 Domain & Hosting Free for 1 Year",
      "🔒 Free Valid SSL Certificate",
      "📄 6-10 Pages (Depends on Plan)",
      "💬 WhatsApp Integration",
      "📱 Responsive for Mobile/Tablet",
      "📧 Free Professional Emails",
      "🛠️ Admin Panel",
      "🌟 SEO Friendly",
      "📲 Social Media Integration",
      "🎨 Logo Design",
      "📊 Website Visitor Counter",
      "🛡️ 12 Months Free Support",
    ],
    price: "$199",
    paymentRoute: "/payment/basic",
  },
  {
    id: 2,
    title: "Pro Plan",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
    ],
    description: "Advanced features for growing businesses.",
    facilities: [
      "🌐 Domain & Hosting Free for 1 Year",
      "🔒 Free Valid SSL Certificate",
      "📄 6-10 Pages (Depends on Plan)",
      "💬 WhatsApp Integration",
      "📱 Responsive for Mobile/Tablet",
      "📧 Free Professional Emails",
      "🛠️ Advanced Admin Panel",
      "🌟 Enhanced SEO Optimization",
      "📲 Social Media Integration",
      "🎨 Premium Logo Design",
      "📊 Advanced Website Visitor Analytics",
      "🛡️ 12 Months Free Support",
    ],
    price: "$399",
    paymentRoute: "/payment/pro",
  },
  {
    id: 3,
    title: "Premium Plan",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
    ],
    description: "All-in-one solution for large-scale businesses.",
    facilities: [
      "🌐 Domain & Hosting Free for 1 Year",
      "🔒 Free Valid SSL Certificate",
      "📄 6-10 Pages (Customizable)",
      "💬 WhatsApp Integration",
      "📱 Highly Responsive for All Devices",
      "📧 Multiple Professional Emails",
      "🛠️ Custom Admin Panel",
      "🌟 Advanced SEO Friendly",
      "📲 Social Media Campaign Integration",
      "🎨 Premium Logo & Branding",
      "📊 Website Visitor Counter with Analytics",
      "🛡️ 12 Months Premium Support",
    ],
    price: "$599",
    paymentRoute: "/payment/premium",
  },



  {
    id: 4,
    title: "Basic Plan",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
    ],
    description: "Ideal for individuals or startups looking to create their first app.",
    facilities: [
      "📱 **Core App Features** (Basic functionality for one platform)",
      "🛠️ **Customizable UI** with limited templates",
      "📊 **Basic Analytics** for user insights",
      "🔐 **Essential Security** protocols",
      "🌐 **App Deployment** on one store (Google Play or App Store)",
      "🛡️ **3 Months Support** for bug fixes and updates",
    ],
    price: "$199",
    paymentRoute: "/app/payment/basic",
  },


  {
    id: 5,
    title: "Medium Plan",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
    ],
    description: "Perfect for businesses aiming to expand with intermediate-level apps.",
    facilities: [
      "📱 **Advanced App Features** (Cross-platform support for iOS and Android)",
      "🎨 **Custom UI/UX Design** tailored to your brand",
      "📊 **Enhanced Analytics** with user behavior tracking",
      "🔐 **Enhanced Security** with encryption",
      "🌐 **App Deployment** on both Google Play and App Store",
      "📧 **Push Notifications** for user engagement",
      "📲 **In-App Payment Integration**",
      "🛡️ **6 Months Support** for maintenance and updates",
    ],
    price: "$399",
    paymentRoute: "/app/payment/medium",
  },
  {
    id: 6,
    title: "Pro Plan",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-L-jyGWUPDea_qpNgxva7WSFtERia-Hc6eLUN84zCwO8g1a84zezgjnWaPYk_IUDZ04&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6YoZjXwHHnRXtQegP9GeB0QuoecqA55UUEJev2PDnoGj-ZKjgZAFU-MYMZx6MFlEy8g&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5tqE9266RK8p3cQ-bHtq-6Jl1HAQ_YrNMPSeYvmV2fiuUEoTgx6lR6NrfyoSKu_7rhs&usqp=CAU",
    ],
    description: "The ultimate solution for enterprises looking for high-end app development.",
    facilities: [
      "📱 **Comprehensive App Features** (Cross-platform with seamless integration)",
      "🎨 **Premium UI/UX Design** with animations and interactivity",
      "📊 **Advanced Analytics Dashboard** with real-time data",
      "🔒 **Enterprise-Level Security** with multi-layer encryption",
      "🌐 **App Deployment** on Google Play, App Store, and Web",
      "📧 **Automated Notifications** with user segmentation",
      "💳 **In-App Purchases and Subscriptions**",
      "🔌 **Integration with Third-Party Services**",
      "📲 **Social Media Integration** for sharing and connectivity",
      "🛠️ **Custom Admin Panel** for app management",
      "🛡️ **12 Months Premium Support** with regular updates and upgrades",
    ],
    price: "$599",
    paymentRoute: "/app/payment/pro",
  },

];

// Card Component
const Card = ({ card }: { card: typeof cards[0] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Function to go to the next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === card.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? card.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      {/* Image Carousel */}
      <div className="w-full mb-4 relative">
        <img
          src={card.images[currentImageIndex]}
          alt={`${card.title} Slide`}
          className="rounded-lg w-full h-40 object-cover transition-all duration-500 ease-in-out"
        />
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-gray-600 p-2 rounded-full hover:bg-gray-700"
        >
          &#60;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-gray-600 p-2 rounded-full hover:bg-gray-700"
        >
          &#62;
        </button>
      </div>

      {/* Card Content */}
      <h2 className="text-xl font-bold mb-2">{card.title}</h2>
      <p className="text-gray-700 mb-4">{card.description}</p>
      <ul className="text-sm text-gray-600 space-y-2 mb-4">
        {card.facilities.map((facility, index) => (
          <li key={index} className="flex items-center">
            ✅ {facility}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-green-600 mb-4">
        Price: {card.price}
      </div>
      <button
        onClick={() => navigate(card.paymentRoute)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Pay Now
      </button>
    </div>
  );
};

export function Home() {
  return (
    <div className="animated-bg min-h-screen p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Website Plans
      </h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

// ✅ Proper Export
export default Home;


