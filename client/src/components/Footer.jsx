import { SocialIcon } from 'react-custom-social-icons';

function Footer() {
  return (
    <footer className="bg-green-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
   
          <div>
            <h2 className="text-2xl font-bold text-green-400">
              AI Resume Checker
            </h2>
            <p className="mt-3 text-gray-300 text-sm">
              Improve your resume with AI-powered analysis, ATS scoring, and
              personalized suggestions.
            </p>
          </div>

      
          <div>
            <h3 className="font-semibold text-lg mb-3">Quick Links</h3>

            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
            </ul>
          </div>

    
          <div>
            <h3 className="font-semibold text-lg mb-3">Resources</h3>

            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Connect</h3>

            <div className="flex gap-4">
              <SocialIcon network="github" size={40} />
              <SocialIcon network="linkedin" size={40}/>
              <SocialIcon network="instagram" size={40}/>
              <SocialIcon network="whatsapp" size={40}/>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-10 pt-6 text-center text-sm text-gray-400">
          &#169; {new Date().getFullYear()} AI Resume Checker. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
