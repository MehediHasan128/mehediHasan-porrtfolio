import { Box, Container, Typography } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

import project1 from "../../../../assets/project/project1.png";
import project2 from "../../../../assets/project/project2.png";
import project3 from "../../../../assets/project/project3.png";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const Projects = () => {
  return (
    <div className="bg-slate-100">
      <ThemeProvider theme={theme}>
        <Container className="mt-36 py-20">
          <Typography variant="h3">
            <p className="font-semibold">My Projects</p>
          </Typography>

          <Box className="mt-20 flex justify-center gap-5">
            <div className="mockup-browser border bg-base-300">
              <div className="mockup-browser-toolbar">
                <div className="input">
                https://blog-page-8238c.web.app/
                </div>
              </div>
              <div className="flex justify-center bg-base-200">
                <img src={project1} alt="" />
              </div>
            </div>
            <div className="mockup-browser border bg-base-300">
              <div className="mockup-browser-toolbar">
                <div className="input">
                https://event-management-center-37b2f.web.app/
                </div>
              </div>
              <div className="flex justify-center bg-base-200">
                <img src={project2} alt="" />
              </div>
            </div>
            <div className="mockup-browser border bg-base-300">
              <div className="mockup-browser-toolbar">
                <div className="input">
                  https://mehedihasan128.github.io/gamer-world/
                </div>
              </div>
              <div className="flex justify-center bg-base-200">
                <img src={project3} alt="" />
              </div>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Projects;
