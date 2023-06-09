//imeges
import photo from '../assets/img/123.png';
//icons
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variantes
import { fadeIn } from '../variants';
//

const Banner = () => {
  return (
    <section className="section h-[100vh] w-[100vw] flex items-center ">
      <div className="container mx-auto   ">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="h1 text-[50px] text-indigo-600 font-bold leading-none text- lg:text-[90px]"
            >
              WILLIAM <span>RODRIGUEZ</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <TypeAnimation
                sequence={[
                  'Web ',
                  2000,
                  'Development',
                  2000,
                  'Designer',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 mt-2 max-w-lg mx-auto lg:mx-0"
            >
              web developer with experience in the
              development of websites and web applications.
              I have knowledge in the development of
              frontend .
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg ">
                <a
                  href="https://www.linkedin.com/in/william-jose-rodriguez-rojas/"
                  target="_blank"
                >
                  Contact me
                </a>
              </button>
              <a
                href="https://drive.google.com/file/d/18ycigfovmveF1R2T6qotUgLPiMcAzgDN/view"
                target="_blank"
                className="text-gradient btn-link"
              >
                My Curriculum
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[25px] gap-6 max-w-max mx-auto  lg:mx-0"
            >
              <a href="">
                <FaLinkedinIn />
              </a>
              <a href="">
                <FaGithub />
              </a>
              <a href="">
                <FaFacebook />
              </a>
              <a href="">
                <FaInstagram />
              </a>
            </motion.div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            whileInView={'show'}
            className="overflow-hidden mr-36 lg:flex lg:flex-1 max-w-[320px] rounded-full  lg:max-w[482px] "
          >
            <img
              className="w-96 hidden  lg:block lg:opacity-80 lg:mx-auto"
              src={photo}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
