//icon
import { BsArrowUpRight } from 'react-icons/bs';
//motion
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
//services data
import { services } from '../utils/services';

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:lg:bg-bottom bg-no-repeat  mb-12 lg:mb-0'
          >
            <div className=' max-w-[455px] h-[20rem] flex flex-col '>
              <h2 className='h2 text-accent mb-6'>What I Do.</h2>
              <h3 className='h3   '>
                I am a front end developer <br /> with knowledge in
                Html,Css,Javascript,<br />React,Tailwind, Bootstrap studying nodeJs
              </h3>
            </div>
            <button className='btn btn-sm mt-16'>See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                //destrucuture service
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476]'>
                      <h4 className='text-[20px] tracking-wider font-primary'>
                        {service.name}
                      </h4>
                      <p className='font-segundary leading-tight'>
                        {service.description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {service.link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
