//Count
import CountUp from 'react-countup';
//intersection observer
import { useInView } from 'react-intersection-observer';
//motion
import { inView, motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';
//skill
import html from '../../src/assets/icon/html-5-svgrepo-com.svg';
import css from '../../src/assets/icon/css-3-svgrepo-com.svg';
import javascript from '../../src/assets/icon/javascript-svgrepo-com.svg';
import react from '../../src/assets/icon/react-svgrepo-com.svg';
import node from '../../src/assets/icon/node-js-svgrepo-com.svg';
import boostrap from '../../src/assets/icon/bootstrap-svgrepo-com.svg';
import tailwind from '../../src/assets/icon/tailwind-svgrepo-com.svg';

//other tools
import pshop from '../../src/assets/icon/photoshop-svgrepo-com.svg';
import adobexd from '../../src/assets/icon/adobe-xd-svgrepo-com.svg';
import figma from '../../src/assets/icon/figma-svgrepo-com.svg';
import git from '../../src/assets/icon/git-svgrepo-com.svg';

const About = () => {
  const [ref, useView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className='section ' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div>
          <div className='flex-1'>
            <motion.h2
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='h2 text-accent'
            >
              About me.
            </motion.h2>

            <motion.h3
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='h3 mb-4'
            >
              I'm a frontend Web Developer💻 As a passionate about web
              development, I focus on creating interactive and functional sites
              that meet the needs and preferences of customers. Also, I enjoy
              video games 🎮🕹️ and superhero movies 🦸, horror and suspense
              🧟🔪🔍. Your goal is to combine your programming skills and your
              passion for entertainment to create compelling and exciting online
              experiences for users.
            </motion.h3>
            <motion.p
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
            >
              I like to work in a team and share knowledge with my colleagues to
              achieve goals. I am a creative person who is passionate about the
              world of programming.
            </motion.p>

            {/* stats */}

            <motion.div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='flex flex-col '
            ></motion.div>

            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='mt-5 flex items-center gap-6'
            >
              <button className='btn btn-lg'>Contact me</button>
              <a className='text-gradient btn-link' href='#'>
                My Portafolio
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className=' mt-5'
            >
              <h2 className='text-gradient btn-link text-3xl mb-3'>Skill</h2>
              <div className='flex gap-5 '>
                <img className='w-[2.3rem]' src={html} alt='' />
                <img className='w-[2.3rem]' src={css} alt='' />
                <img className='w-[1.9rem]' src={javascript} alt='' />
                <img className='w-[2.3rem]' src={react} alt='' />
                <img className='w-[2.3rem]' src={node} alt='' />
                <img className='w-[2rem]' src={boostrap} alt='' />
                <img className='w-[2.9rem]' src={tailwind} alt='' />
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h2 className='text-gradient btn-link text-3xl mt-6'>
                Other Tools
              </h2>

              <div className='flex gap-5 mt-5'>
                <img className='w-[2.3rem]' src={pshop} alt='' />
                <img className='w-[2.3rem]' src={adobexd} alt='' />
                <img className='w-[2.3rem]' src={figma} alt='' />
                <img className='w-[2.3rem]' src={git} alt='' />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
