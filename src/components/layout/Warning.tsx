import React from "react";
import { AlertTriangle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface WarningProps {
  title: string;
  price: string;
}

export function Warning({ title, price }: WarningProps) {
  // Encode message for WhatsApp
  const whatsappMessage = encodeURIComponent(
    `Hello, I am interested in the "${title}" plan, which costs ${price}. Can you provide more details?`
  );

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg shadow-md min-w-md mx-auto mt-6">
      <AlertTriangle className="text-yellow-600 w-10 h-10 mb-2" />
      <h2 className="text-lg font-semibold text-yellow-800 flex items-center">
        ⚠️ Payment Link Not Generated
      </h2>
      <p className="text-yellow-700 text-center mt-2">
        Due to some security reasons, the payment link could not be generated.
        You can contact us on <strong>WhatsApp</strong> for more details.
      </p>

      {/* Plan Details */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-4 w-full text-center">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-700">Price: {price}</p>
      </div>

      {/* WhatsApp Contact Button with Pre-Filled Message */}
      <a
        href={`https://wa.me/+919301084259?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 flex items-center px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
      >
        <FaWhatsapp className="w-5 h-5 mr-2" />
        Contact on WhatsApp
      </a>
    </div>
  );
}






