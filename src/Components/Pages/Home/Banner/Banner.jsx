import { Box, Typography } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import banner from "../../../../assets/BannerImage/banner.jpg";
import { TypeAnimation } from "react-type-animation";

import { MdOutlineFileDownload } from "react-icons/md";
import axios from "axios";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Banner = () => {
  const handelDownload = () => {
    axios
      .get(
        "https://drive.google.com/file/d/175dOBao6JkjbHL-4QFQeVbS--g1Wzf8B/view?usp=drive_link"
      )
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Resume.pdf");
        document.body.appendChild(link);
        link.click();
      });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-[#121b24] to-[#2d435a] pt-32 lg:pt-48">
        <Box className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row justify-between items-center w-[80%] lg:w-[70%] mx-auto">
          <Box className="space-y-3 lg:w-[60%]">
            <ThemeProvider theme={theme}>
              <Typography variant="h2">
                <h1 className="text-white">
                  Hi, I'm{" "}
                  <span className="font-semibold text-blue-300">
                    Mehedi Hasan
                  </span>
                </h1>
              </Typography>
              <Typography className="h-10" variant="h4">
                <TypeAnimation
                  sequence={[
                    "A MERN Stack Developer",
                    1000,
                    "Let's build something amazing together!",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{
                    display: "inline-block",
                    color: "rgb(147, 197, 253)",
                  }}
                  repeat={Infinity}
                />
              </Typography>
              <Typography variant="h6">
                <p className="my-10 font-medium text-gray-500 text-justify">
                  Hi, I'm Mehedi Hasan, a MERN Stack Developer passionate about
                  building seamless web solutions. With a keen eye for detail
                  and a love for clean code, I transform ideas into digital
                  experiences. Let's connect and create something extraordinary
                  together!
                </p>
              </Typography>
            </ThemeProvider>
            <button
              onClick={handelDownload}
              className="flex items-center gap-2 md:text-lg font-semibold bg-blue-400 px-5 py-3 rounded-full text-white hover:bg-blue-500 duration-500"
            >
              Download Resume
              <MdOutlineFileDownload className="text-xl md:text-3xl" />
            </button>
          </Box>
          <Box>
            <div className="bg-white pt-5 rounded-t-3xl border overflow-hidden">
              <img className="relative top-2" src={banner} alt="" />
            </div>
          </Box>
        </Box>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2d435a"
          d="M0,96L48,90.7C96,85,192,75,288,101.3C384,128,480,192,576,197.3C672,203,768,149,864,154.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Banner;
