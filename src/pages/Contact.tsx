
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Globe, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const ContactPage = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 bg-ielts-blue/10 text-ielts-blue rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Get in touch with our team</h1>
          <p className="text-lg text-gray-600">
            Have questions about our platform, pricing, or need assistance? We're here to help you succeed in your IELTS journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="What is this regarding?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Please provide as much detail as possible..." 
                  rows={6}
                />
              </div>

              <Button type="submit" className="w-full bg-ielts-blue hover:bg-ielts-blue/90">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-6">Contact information</h2>
            
            <div className="space-y-6 mb-10">
              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="bg-ielts-blue/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-ielts-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-gray-600">support@aielts.org</p>
                  <p className="text-gray-600">info@aielts.org</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="bg-ielts-blue/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-ielts-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-gray-600">+880 1946 303020</p>
                  <p className="text-gray-600">Sat-Thu, 9AM-5PM UTC +6:00</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="bg-ielts-blue/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-ielts-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Office</h3>
                  <p className="text-gray-600">01, Central Road More, Khan Jahan Ali Main Road</p>
                  <p className="text-gray-600">Khulna, Bangladesh 9100</p>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-start gap-4">
                <div className="bg-ielts-blue/10 p-3 rounded-full">
                  <Globe className="h-6 w-6 text-ielts-blue" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Support Hours</h3>
                  <p className="text-gray-600">24/7 AI Chat Support</p>
                  <p className="text-gray-600">Human support: Sat-Thu, 9AM-5PM UTC +6:00</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={fadeInUp}
              className="mt-8"
            >
              <h3 className="font-bold mb-4">Connect with us</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-ielts-blue/10 transition-colors">
                  <Facebook className="h-5 w-5 text-ielts-blue" />
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-ielts-blue/10 transition-colors">
                  <Twitter className="h-5 w-5 text-ielts-blue" />
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-ielts-blue/10 transition-colors">
                  <Instagram className="h-5 w-5 text-ielts-blue" />
                </a>
                <a href="#" className="bg-gray-100 p-3 rounded-full hover:bg-ielts-blue/10 transition-colors">
                  <Linkedin className="h-5 w-5 text-ielts-blue" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="rounded-xl overflow-hidden h-[400px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8860427521654!2d89.567636!3d22.806686100000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff8f91cc4c74f9%3A0xf96ef1aae11f6067!2sAIELTS!5e0!3m2!1sen!2sbd!4v1744386544097!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            loading="lazy"
            title="AIELTS Office Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
