import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
   return (
      <section className="section h-[100vh]  " id="contact">
         <div className="container mx-auto ">
            <div className="flex flex-col lg:flex-row">
               {/* text */}
               <motion.div
                  variants={fadeIn('right', 0.3)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.3 }}
                  className="flex-1 flex justify-start items-center"
               >
                  <div>
                     <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                        Get in touch
                     </h4>
                     <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                        Let's work <br />
                        together!
                     </h2>
                  </div>
               </motion.div>
               {/* form */}
               <motion.form
                  variants={fadeIn('left', 0.3)}
                  initial="hidden"
                  whileInView={'show'}
                  viewport={{ once: false, amount: 0.3 }}
                  className=" flex-1 border  rounded-3xl flex flex-col gap-y-6 pd-24 p-6 items-starte dark:border-black"
               >
                  <input
                     className=" bg-transparent border-b py-3 outline-none w-full focus:border-accent transition-all placeholder:text-white"
                     type="text"
                     placeholder="Your name"
                  />
                  <input
                     className=" bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                     type="text"
                     placeholder="Your email"
                  />
                  <input
                     className=" bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                     type="text"
                     placeholder="Business"
                  />
                  <textarea
                     className="text_area bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                     type="text"
                     placeholder="Your message"
                  ></textarea>
                  <button className="btn btn-lg cursor-pointer">
                     Send message
                  </button>
               </motion.form>
            </div>
         </div>
      </section>
   );
};

export default Contact;
