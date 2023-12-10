import { Box, Typography } from "@mui/material";
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import banner from "../../../../assets/BannerImage/banner.png";
import { TypeAnimation } from "react-type-animation";


let theme = createTheme();
theme = responsiveFontSizes(theme);

const Banner = () => {
  return (
    <div className="bg-[#f0d9bf3b] py-36">
      <Box className="flex flex-col lg:flex-row justify-between items-center w-[70%] mx-auto">
        <Box className="space-y-3 lg:w-[60%]">
          <ThemeProvider theme={theme}>
          <Typography variant="h2">
            <h1>
              Hi, I'm{" "}
              <span className="font-semibold text-blue-400">Mehedi Hasan</span>
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
              style={{ display: "inline-block", color: "rgb(96, 165, 250)" }}
              repeat={Infinity}
            />
          </Typography>
          <Typography variant="h6">
            <p className="my-10 font-medium text-gray-500 text-justify">
              Hi, I'm Mehedi Hasan, a MERN Stack Developer passionate about
              building seamless web solutions. With a keen eye for detail and a
              love for clean code, I transform ideas into digital experiences.
              Let's connect and create something extraordinary together!
            </p>
          </Typography>
          </ThemeProvider>
          
        </Box>
        <Box>
          <img src={banner} alt="" />
        </Box>
      </Box>
    </div>
  );
};

export default Banner;
