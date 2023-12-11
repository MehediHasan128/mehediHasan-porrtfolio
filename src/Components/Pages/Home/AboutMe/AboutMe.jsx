import { Box, Container, Typography } from "@mui/material";
import img from "../../../../assets/BannerImage/about.jpg";
import html from "../../../../assets/icons/html-5.svg";
import css from "../../../../assets/icons/css-3.svg";
import js from "../../../../assets/icons/javascript.svg";
import react from "../../../../assets/icons/react.svg";
import router from "../../../../assets/icons/router.svg";
import firebase from "../../../../assets/icons/firebase.svg";
import mongo from "../../../../assets/icons/mongo.svg";
import node from "../../../../assets/icons/node-js.svg";

import { FaGithub } from "react-icons/fa";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const AboutMe = () => {
  return (
    <div>
      <Container>
        <ThemeProvider theme={theme}>
          <Typography variant="h3" className="text-center">
            <h2 className="font-semibold mb-10 lg:mb-20">About Me</h2>
          </Typography>
          <Box className="flex justify-center items-center gap-24">
            <Box className="hidden lg:flex">
              <div className="bg-slate-50 w-[450px] h-[450px] rounded-full overflow-hidden">
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
                <p className="font-medium">
                  Hello! I’m Mehedi Hasan Bayzid, a MERN Stack developer. I’m
                  also studying at Uttara University Department of Computer
                  Science and Engineering. Web development is a passion for me.
                  Since last one year I have gained a lot of skill in this web
                  development sector which has helped me a lot to create some
                  projects.
                </p>
              </Typography>
              <Typography variant="h5">
                <p className="mt-10 font-semibold">My Skills</p>
              </Typography>
              <Box className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                  <Typography variant="body1">HTML5</Typography>
                  <img className="w-10" src={html} alt="" />
                </div>
                <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                  <Typography variant="body1">CSS3</Typography>
                  <img className="w-10" src={css} alt="" />
                </div>
                <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                  <Typography variant="body1">JavaScript</Typography>
                  <img className="w-10" src={js} alt="" />
                </div>
                <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                  <Typography variant="body1">React</Typography>
                  <img className="w-10" src={react} alt="" />
                </div>
                <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                  <Typography variant="body1">React Router</Typography>
                  <img className="w-10" src={router} alt="" />
                </div>
                <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                  <Typography variant="body1">Firebase</Typography>
                  <img className="w-10" src={firebase} alt="" />
                </div>
                <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                  <Typography variant="body1">MongoDB</Typography>
                  <img className="w-10" src={mongo} alt="" />
                </div>
                <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                  <Typography variant="body1">Node JS</Typography>
                  <img className="w-10" src={node} alt="" />
                </div>
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
        </ThemeProvider>
      </Container>
    </div>
  );
};

export default AboutMe;
