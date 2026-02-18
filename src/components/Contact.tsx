

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-emerald-950 text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Let's Grow <br /> <span className="text-emerald-500">Something Great</span> Together.
            </h3>
            <p className="text-emerald-100/70 text-lg mb-12 max-w-lg">
              Have questions about our products or need agricultural advice? Our team is ready to help you thrive.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-emerald-900/50 rounded-2xl group-hover:bg-emerald-500 transition-colors">
                  <Phone className="h-6 w-6 text-emerald-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-emerald-400 font-bold uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-xl font-semibold">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-emerald-900/50 rounded-2xl group-hover:bg-emerald-500 transition-colors">
                  <Mail className="h-6 w-6 text-emerald-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-emerald-400 font-bold uppercase tracking-wider mb-1">Email Us</p>
                  <p className="text-xl font-semibold">contact@pujatraders.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-emerald-900/50 rounded-2xl group-hover:bg-emerald-500 transition-colors">
                  <MapPin className="h-6 w-6 text-emerald-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-emerald-400 font-bold uppercase tracking-wider mb-1">Visit Us</p>
                  <p className="text-xl font-semibold">123 Agriculture Market, City Plaza, Bihar</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-700 font-semibold text-sm">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-slate-100 border-none rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-semibold text-sm">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 1234567890"
                    className="w-full px-5 py-4 bg-slate-100 border-none rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-slate-700 font-semibold text-sm">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full px-5 py-4 bg-slate-100 border-none rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-slate-700 font-semibold text-sm">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you?"
                  className="w-full px-5 py-4 bg-slate-100 border-none rounded-xl text-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none"
                />
              </div>

              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-5 px-8 rounded-xl transition-all shadow-xl hover:shadow-emerald-500/20 flex items-center justify-center gap-3 group">
                Send Message <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-slate-400 text-sm">
              <MessageSquare className="h-4 w-4" />
              <span>We usually respond within 24 hours</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
