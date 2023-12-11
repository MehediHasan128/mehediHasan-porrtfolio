import { Box, Container, Typography } from "@mui/material";
import img from '../../../../assets/BannerImage/about.png';
import html from '../../../../assets/icons/html-5.svg';
import css from '../../../../assets/icons/css-3.svg';
import js from '../../../../assets/icons/javascript.svg';
import react from '../../../../assets/icons/react.svg';
import router from '../../../../assets/icons/router.svg';
import firebase from '../../../../assets/icons/firebase.svg';
import mongo from '../../../../assets/icons/mongo.svg';
import node from '../../../../assets/icons/node-js.svg';
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
                <Typography variant="h3" className="text-center">
                    <h2 className="font-semibold mb-20">About Me</h2>
                </Typography>
                <Box className="flex justify-center items-center gap-24">
                <Box>
                   <div className="bg-slate-50 w-96 h-96 rounded-full overflow-hidden">
                   <img src={img} alt="" /> 
                   </div>
                </Box>
                <Box className="space-y-4 w-[70%]">
                    <Typography variant="h3">
                        <p className="font-bold">Mehedi <span className="text-blue-400">Hasan</span></p>
                    </Typography>
                    <Typography variant="subtitle1">
                        <p className="font-medium">Hello! I’m Mehedi Hasan Bayzid, a MERN Stack developer. I’m also studying at Uttara University Department of Computer Science and Engineering. Web development is a passion for me. Since last one year I have gained a lot of skill in this web development sector which has helped me a lot to create some projects.</p>
                    </Typography>
                    <Typography variant="h5">
                        <p className="mt-10 font-semibold">My Skills</p>
                    </Typography>
                    <Box className="grid grid-cols-4 gap-2">
                        <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                            <ThemeProvider theme={theme}>
                                <Typography variant="body1">HTML5</Typography>
                            </ThemeProvider>
                            <img className="w-10" src={html} alt="" />
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                            <ThemeProvider theme={theme}>
                                <Typography variant="body1">CSS3</Typography>
                            </ThemeProvider>
                            <img className="w-10" src={css} alt="" />
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                            <ThemeProvider theme={theme}>
                                <Typography variant="body1">JavaScript</Typography>
                            </ThemeProvider>
                            <img className="w-10" src={js} alt="" />
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                            <ThemeProvider theme={theme}>
                                <Typography variant="body1">React</Typography>
                            </ThemeProvider>
                            <img className="w-10" src={react} alt="" />
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                            <ThemeProvider theme={theme}>
                                <Typography variant="body1">React Router</Typography>
                            </ThemeProvider>
                            <img className="w-10" src={router} alt="" />
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                            <ThemeProvider theme={theme}>
                                <Typography variant="body1">Firebase</Typography>
                            </ThemeProvider>
                            <img className="w-10" src={firebase} alt="" />
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                            <ThemeProvider theme={theme}>
                                <Typography variant="body1">MongoDB</Typography>
                            </ThemeProvider>
                            <img className="w-10" src={mongo} alt="" />
                        </div>
                        <div className="flex items-center justify-center gap-2 bg-slate-200 px-5 py-2 rounded-lg">
                            <ThemeProvider theme={theme}>
                                <Typography variant="body1">Node JS</Typography>
                            </ThemeProvider>
                            <img className="w-10" src={node} alt="" />
                        </div>
                    </Box>
                </Box>
                </Box>
            </Container>
        </div>
    );
};

export default AboutMe;