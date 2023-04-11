import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
//img
import img from '../../src/assets/img/img1.png';
import img2 from '../../src/assets/img/img2.png';
import img3 from '../../src/assets/img/img3.png';
import img4 from '../../src/assets/img/img4.png';
import img5 from '../../src/assets/img/img5.png';

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto lg:mt-96'>
        <div className='flex flex-col lg:flex-row gap-x-10 '>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            {/* text */}
            <div>
              <h2 className='h2 leading-tight text-accent'>
                My Latest <br />
                Work.
              </h2>
              <p className='max-w-sm mb-16'>
                These projects have been made with react, javascript, Html, css,
                tailwind, bootstrap applying asynchronism for get requests, I am
                currently working on a complete e-commerce project where I would
                be working on redux in react, login routes, history of shopping
                etc
              </p>
              <button className='btn btn-sm'>
                <a href='https://github.com/WILLIAMJRR' target='_black'>
                  View all proyects
                </a>
              </button>
            </div>
            {/* image 1 */}
            <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='w-full group-hover:scale-125 transition-all duration-500'
                src={img}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Pokedex con React</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-1000 z-50'>
                <button className='btn pl-4 pr-4 pb-1'>
                  <a
                    className='text-sm'
                    href='https://pokedexreactwilliamjrr.netlify.app/'
                    target='_blank'
                  >
                    go to page
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
          {/* images R  */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* image 2 */}
            <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='w-full group-hover:scale-125 transition-all duration-500'
                src={img2}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Pokedex con React</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-1000 z-50'>
                <button className='btn pl-4 pr-4 pb-1'>
                  <a
                    className='text-sm'
                    href='https://williamjrr.netlify.app/'
                    target='_blank'
                  >
                    go to page
                  </a>
                </button>
              </div>
            </div>
            {/* image 3 */}
            <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img
                className='w-full group-hover:scale-125 transition-all duration-500'
                src={img3}
                alt=''
              />
              {/* pretitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Pokedex con React</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-5 transition-all duration-1000 z-50'>
                <button className='btn pl-4 pr-4 pb-1'>
                  <a
                    className='text-sm'
                    href='https://williamjrrformcss.netlify.app/'
                    target='_blank'
                  >
                    go to page
                  </a>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
