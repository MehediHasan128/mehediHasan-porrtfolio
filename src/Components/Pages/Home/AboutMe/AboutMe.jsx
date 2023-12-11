import { Box, Container, Typography } from "@mui/material";
import img from "../../../../assets/BannerImage/about.jpg";
import { MdDateRange } from "react-icons/md";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <div>
      <Container>
          <Typography variant="h3" className="text-center">
            <h2 className="font-semibold mb-10 lg:mb-20">About Me</h2>
          </Typography>
          <Box className="flex flex-col lg:flex-row justify-center items-center gap-24">
            <Box>
              <div className="bg-slate-50 w-[380px] h-[380px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden shadow-xl">
                <img src={img} alt="" />
              </div>
            </Box>
            <Box className="space-y-4">
              <Typography variant="h3">
                <p className="font-bold">
                  Mehedi <span className="text-blue-400">Hasan</span>
                </p>
              </Typography>
              <Typography variant="subtitle1">
                <p className="font-medium mb-10">
                  Hello! I’m Mehedi Hasan Bayzid, a MERN Stack developer. I’m
                  also studying at Uttara University Department of Computer
                  Science and Engineering. Web development is a passion for me.
                  Since last one year I have gained a lot of skill in this web
                  development sector which has helped me a lot to create some
                  projects.
                </p>
              </Typography>
              <Box className="grid lg:grid-cols-2 gap-10">
                <Typography>
                    <p className="flex items-center gap-3">
                      <IoIosMail className="text-2xl text-blue-500" />
                      mehedihasan120255@gmail.com
                    </p>
                </Typography>
                <Typography>
                    <p className="flex items-center gap-3">
                      <FaPhoneAlt className="text-2xl text-blue-500" />
                      (+88) 01302557956
                    </p>
                </Typography>
                <Typography>
                    <p className="flex items-center gap-3">
                      <MdDateRange className="text-2xl text-blue-500" />
                      21 August, 2000
                    </p>
                </Typography>
                <Typography>
                    <p className="flex items-center gap-3">
                      <FaLocationDot className="text-2xl text-blue-500" />
                      mehedihasan120255@gmail.com
                    </p>
                </Typography>
              </Box>
              <Box>
                <button className="bg-black text-white px-5 py-3 rounded-xl mt-10">
                   <a className="flex items-center gap-3" target="_blank" rel="noopener noreferrer" href="https://github.com/MehediHasan128">
                   <Typography variant="h6">
                   My GitHub
                   </Typography>
                   <FaGithub className="text-2xl" />
                   </a>
                </button>
              </Box>
            </Box>
          </Box>
      </Container>
    </div>
  );
};

export default AboutMe;
