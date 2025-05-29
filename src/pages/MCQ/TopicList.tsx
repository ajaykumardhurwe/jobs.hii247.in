import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const topics = {
  'indian-constitution': [
    {
      id: 'part-1',
      title: 'भाग I: संघ और उसका क्षेत्र',
      description: '(अनुच्छेद 1 से 4)\nभारत का क्षेत्र, नए राज्यों का प्रवेश, राज्यों का गठन आदि।',
    },
    {
      id: 'part-2',
      title: 'भाग II: नागरिकता',
      description: '(अनुच्छेद 5 से 11)\nसंविधान के प्रारंभ पर नागरिकता और संबंधित प्रावधान।',
    },


    {
      id: 'part-3',
      title: 'भाग III: मूल अधिकार',
      description: '(अनुच्छेद 12 से 35)\nभारत के नागरिकों को दिए गए मूल अधिकार। इन अधिकारों में समानता का अधिकार, स्वतंत्रता का अधिकार, शारीरिक और मानसिक शोषण से सुरक्षा, आदि शामिल हैं।',
    },
    {
      id: 'part-4',
      title: 'भाग IV: राज्य के नीति निर्देशक सिद्धांत',
      description: '(अनुच्छेद 36 से 51)\nराज्य को नीति के निर्माण में दिशा-निर्देश देने वाले सिद्धांत। यह अधिकार नागरिकों के लिए नहीं होते, लेकिन राज्य को उन पर विचार करना होता है।',
    },
    {
      id: 'part-5',
      title: 'भाग V: संघ की कार्यकारी',
      description: '(अनुच्छेद 52 से 78)\nसंघ सरकार का संरचना, राष्ट्रपति, उपराष्ट्रपति, प्रधानमंत्री और मंत्रिपरिषद की भूमिका।',
    },
    {
      id: 'part-6',
      title: 'भाग VI: राज्य सरकार',
      description: '(अनुच्छेद 153 से 167)\nराज्य सरकार का गठन और उसके कार्य। इसमें राज्यपाल, मुख्यमंत्री, मंत्री और विधानमंडल की भूमिका शामिल है।',
    },
    {
      id: 'part-7',
      title: 'भाग VII: राज्यों का पुनर्गठन',
      description: '(अनुच्छेद 168 से 212)\nराज्यों के विधानसभाओं की संरचना और कार्य। यह भाग भारतीय संघ की राज्य सरकारों से संबंधित है।',
    },
    {
      id: 'part-8',
      title: 'भाग VIII: संघ और राज्यों के बीच वित्तीय संबंध',
      description: '(अनुच्छेद 268 से 293)\nसंघ और राज्य सरकारों के बीच वित्तीय अनुबंध, करों का बंटवारा, और वित्त आयोग की संरचना।',
    },
    {
      id: 'part-9',
      title: 'भाग IX: पंचायती राज',
      description: '(अनुच्छेद 243 से 243O)\nगांवों और नगरों में स्थानीय स्वशासन की व्यवस्था। इसमें पंचायतों का गठन और उनके अधिकार शामिल हैं।',
    },
    {
      id: 'part-10',
      title: 'भाग X: नगर निगम',
      description: '(अनुच्छेद 243P से 243ZG)\nनगर निगमों के गठन और उनके अधिकारों की व्यवस्था। नगर निगमों की कार्यप्रणाली और उनके अधिकारों को नियंत्रित करने के लिए यह भाग लागू होता है।',
    },
    {
      id: 'part-11',
      title: 'भाग XI: संघ और राज्यों के संबंध',
      description: '(अनुच्छेद 245 से 263)\nसंघ और राज्य सरकारों के बीच अधिकारों का बंटवारा, संसद और राज्य विधानमंडल की शक्तियाँ और कार्य।',
    },
    {
      id: 'part-12',
      title: 'भाग XII: न्यायपालिका',
      description: '(अनुच्छेद 124 से 147)\nभारत की न्यायपालिका का ढांचा और उसके अधिकार। इसमें उच्च न्यायालय, सर्वोच्च न्यायालय और न्यायधीशों की नियुक्ति, शक्तियाँ शामिल हैं।',
    },

    {
      id: 'part-13',
      title: 'भाग XIII: व्यापार, व्यवसाय और संवर्धन के अधिकार',
      description: '(अनुच्छेद 298 से 308)\nभारतीय संघ में व्यापार और व्यवसाय की स्वतंत्रता के अधिकारों और उनके विनियमन के बारे में प्रावधान।',
    },
    {
      id: 'part-14',
      title: 'भाग XIV: संघ और राज्यों का प्रशासन',
      description: '(अनुच्छेद 309 से 323)\nसंघ और राज्यों में प्रशासन और सेवाओं का गठन। इसमें सार्वजनिक सेवाओं के मामलों और उनके प्रबंधन के बारे में प्रावधान है।',
    },
    {
      id: 'part-15',
      title: 'भाग XV: चुनाव',
      description: '(अनुच्छेद 324 से 329)\nभारतीय चुनाव प्रणाली की संरचना, चुनाव आयोग की नियुक्ति और उनके कार्य।',
    },
    {
      id: 'part-16',
      title: 'भाग XVI: लोकसभा और राज्य विधानमंडल के सदस्य',
      description: '(अनुच्छेद 330 से 342)\nसंविधान में लोकसभा और राज्य विधानमंडल के सदस्य की संरचना, चुनाव प्रक्रिया और उनके अधिकारों की बात की गई है।',
    },
    {
      id: 'part-17',
      title: 'भाग XVII: भाषाएँ',
      description: '(अनुच्छेद 343 से 351)\nसंविधान में भाषाई विविधता की संरचना और भारतीय भाषाओं के इस्तेमाल के बारे में प्रावधान।',
    },
    {
      id: 'part-18',
      title: 'भाग XVIII: धर्मनिरपेक्षता',
      description: '(अनुच्छेद 350 से 352)\nधर्म, संस्कृति और राष्ट्रीयता के आधार पर भारतीय राज्य की नीति में प्रावधानों की संरचना।',
    },
    {
      id: 'part-19',
      title: 'भाग XIX: युद्ध और आपातकालीन स्थिति',
      description: '(अनुच्छेद 353 से 372)\nयुद्ध, आपातकालीन स्थिति और राज्य की विशेष शक्तियाँ, जब भारतीय संघ के सुरक्षा और संप्रभुता के लिए संकट हो।',
    },
    {
      id: 'part-20',
      title: 'भाग XX: विशेष शक्तियाँ',
      description: '(अनुच्छेद 373 से 376)\nविशेष मामलों में संवैधानिक अनुशासन और अधिकारों के लिए विशेष प्रावधान।',
    },
    {
      id: 'part-21',
      title: 'भाग XXI: संघीय ढांचा',
      description: '(अनुच्छेद 377 से 380)\nसंघ और राज्य सरकारों के बीच रिश्ते, विभाजन और संघर्ष।',
    },
    {
      id: 'part-22',
      title: 'भाग XXII: आंतरिक संघीय संरचना',
      description: '(अनुच्छेद 381 से 384)\nसंघीय राज्य के भीतर आंतरिक संरचनाओं और उनके प्रभावों को नियंत्रित करने के लिए प्रावधान।',
    },
    // Add more topics as needed
  ],

   'indian-polity':[
    
      {
        id: 'part-1',
        title: 'Coming soon',
        description: '',
      },
    
   ]
  // Add other subjects' topics
};

export function TopicList() {
  const { subject } = useParams();
  const subjectTopics = topics[subject as keyof typeof topics] || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Topics</h1>
      <div className="space-y-4">
        {subjectTopics.map((topic) => (
          <div key={topic.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold">{topic.title}</h2>
            <p className="text-gray-600 mt-2 whitespace-pre-line">{topic.description}</p>
            <Link
              to={`/mcq/${subject}/${topic.id}`}
              className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Start Mock Test
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}




























// import React from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { ChevronRight } from 'lucide-react';

// const topics = {
//   'indian-constitution': [
//     {
//       id: 'part-1',
//       title: 'भाग I: संघ और उसका क्षेत्र',
//       description: '(अनुच्छेद 1 से 4)\nभारत का क्षेत्र, नए राज्यों का प्रवेश, राज्यों का गठन आदि।',
//     },
//     {
//       id: 'part-2',
//       title: 'भाग II: नागरिकता',
//       description: '(अनुच्छेद 5 से 11)\nसंविधान के प्रारंभ पर नागरिकता और संबंधित प्रावधान।',
//     },
//     // Add more topics as needed
//   ],
//   // Add other subjects' topics
// };

// export function TopicList() {
//   const { subject } = useParams();
//   const subjectTopics = topics[subject as keyof typeof topics] || [];

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-6">Topics</h1>
//       <div className="space-y-4">
//         {subjectTopics.map((topic) => (
//           <div key={topic.id} className="bg-white rounded-lg shadow-md p-4">
//             <h2 className="text-xl font-semibold">{topic.title}</h2>
//             <p className="text-gray-600 mt-2 whitespace-pre-line">{topic.description}</p>
//             <Link
//               to={`/mcq/${subject}/${topic.id}`}
//               className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800"
//             >
//               Start Learning
//               <ChevronRight className="w-4 h-4 ml-1" />
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }