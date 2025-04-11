
import { CheckCircle } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "SK. Yeasin Ahsanullah Al Galib",
      role: "Founder & CEO",
      image: "https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/472557464_1810231639750125_1071930846531317101_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ROMdG8ZxtxAQ7kNvwH_rQG9&_nc_oc=AdmBFhErCaZEULEbPE6Gvm_MdG0Yga1B35CTB8ODWu1CCz0eBZkfTPkoxRz7WoXdHJp98OlqovEtvDK19LBXT-KP&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=1e_EFWf0_8eFeg3bdeaY4A&oh=00_AfH54dwilmshCwV7VBxxn7RfBObCgs49APpAbsUcAn7fsg&oe=67FF08EA",
      bio: "AI specialist with expertise in educational technology and natural language processing."
    },
    {
      name: "Aiman Al Mahmud",
      role: "Co-Founder & COO",
      image: "https://media.licdn.com/dms/image/v2/D5603AQFMhG0_bcEn3g/profile-displayphoto-shrink_800_800/B56ZNw2NaPGkAg-/0/1732765079791?e=1749686400&v=beta&t=Bwdo3qT7jXEn6TzgqD-KyR-8dutivKovac5nikahjng",
      bio: "AI specialist with expertise in educational technology and natural language processing."
    },
    {
      name: "Mehnaz Ahammed",
      role: "Co-Foundear & CMO",
      image: "https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/475455983_1359127368586831_705075950552810314_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeH9q7kWgUtAvLcTorcqtXXm7b5mHY7gPBftvmYdjuA8F4pT2Hj78fZdOEu-TIGj7K6mbzZE3RQI1r41LpDNzzpl&_nc_ohc=3yQekLLpGycQ7kNvwHUgx6o&_nc_oc=AdkZK-PSMP3WeeI37Q5J_OShTZd0E9o1LZSU3-gImMvZEIGFL1I30NdlThIXptv1Zr9HWWmoCrvWrpOSKvTyrgFg&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=1N8ngWleoHYRLGJkuYjrIw&oh=00_AfFiOI26TyKrbkkSiW7CPmtPxWYQadfwT6UJHFxAiEAb8g&oe=67FF0F7C",
      bio: "IELTS trainer and curriculum developer with over 10 years in test preparation."
    },
    {
      name: "Shamim Reza",
      role: "CTO",
      image: "https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/462606614_27098676603113901_2448135000954095443_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeH72xFc_iwaLZAmiqGvk-tE01D4r16Trv7TUPivXpOu_mrg1sPVSVvEPILHm6Ljvz2OAmJw2dp58JtwOWfWsw3g&_nc_ohc=eM2lFVDnCbkQ7kNvwElmbV1&_nc_oc=AdmeYl1tkhdAqhfWX29gULo7dIQ3m7vG186XU4X8MCbOCFYhhtdK9OBwZlaENrW9rM1n4XpKWcL0g3qQyCxWe1u2&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=DwyJVhIauzS6KCrIizMpIg&oh=00_AfHBNfCTEJd-Q4CA-igCiClMOolNQWAoe8Bz3_TEo1Jy6A&oe=67FF2CBC",
      bio: "AI specialist with expertise in educational technology and natural language processing."
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* About Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 bg-ielts-blue/10 text-ielts-blue rounded-full text-sm font-medium mb-4">
            About Us
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Our mission is to revolutionize IELTS preparation</h1>
          <p className="text-lg text-gray-600 mb-8">
            At AIELTS.org, we're combining cutting-edge AI technology with expert knowledge of the IELTS exam 
            to create the most effective preparation platform available.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              AIELTS.org was founded in 2024 by a team of experienced IELTS examiners and AI specialists who 
              recognized the limitations of traditional test preparation methods.
            </p>
            <p className="text-gray-600 mb-4">
              Having worked with thousands of students, we understood the challenges they faced: generic feedback, 
              lack of personalization, and limited speaking practice opportunities.
            </p>
            <p className="text-gray-600 mb-6">
              We set out to build a platform that uses the latest advancements in artificial intelligence to 
              provide personalized, detailed feedback and create an immersive learning experience that helps 
              students achieve their target band scores more efficiently.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle size={20} className="text-ielts-green mt-1 shrink-0" />
                <p className="text-gray-600">Founded by IELTS experts with examiner experience</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={20} className="text-ielts-green mt-1 shrink-0" />
                <p className="text-gray-600">Developed with input from a large number of IELTS test-takers</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle size={20} className="text-ielts-green mt-1 shrink-0" />
                <p className="text-gray-600">Continuously improved based on student results and feedback</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-ielts-blue to-blue-400 rounded-xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Our Values</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Innovation in Education</h4>
                <p className="text-white/90">We leverage the latest AI advancements to create effective learning experiences.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Personalization</h4>
                <p className="text-white/90">We believe every student deserves a learning path tailored to their specific needs.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <p className="text-white/90">We strive to make high-quality IELTS preparation accessible to students worldwide.</p>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Continuous Improvement</h4>
                <p className="text-white/90">We're committed to constantly enhancing our platform based on user feedback and results.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 bg-ielts-blue/10 text-ielts-blue rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Meet the experts behind AIELTS</h2>
            <p className="text-gray-600">
              Our team combines expertise in IELTS examination, AI technology, and educational content development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-48 object-cover" 
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-ielts-blue font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
