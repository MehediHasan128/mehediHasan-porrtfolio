import { Box, Container, Typography } from "@mui/material";
import { GoDotFill } from "react-icons/go";

import project1 from "../../../../assets/project/project1.png";
import project2 from "../../../../assets/project/project2.png";
import project3 from "../../../../assets/project/project3.png";

const Projects = () => {
  return (
    <div>
        <Container className="py-20">
          <Typography className="text-center" variant="h3">
            <p className="font-semibold">My <span className="text-blue-400">Projects</span></p>
          </Typography>

          <Box className="mt-20 flex flex-col lg:flex-row justify-center gap-5">
            <div>
              <div className="mockup-browser border bg-base-300">
                <div className="mockup-browser-toolbar">
                  <div className="input">https://blog-page-8238c.web.app/</div>
                </div>
                <div className="flex justify-center bg-base-200">
                  <img src={project1} alt="" />
                </div>
              </div>
              <div className="flex justify-between items-center px-10 mt-5">
                <div>
                  <Typography className="flex items-center gap-2" variant="h5">
                    <GoDotFill />
                    <p className="font-semibold">Blog Page</p>
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1">
                    <a
                      className="font-semibold bg-blue-400 px-3 py-2 text-white rounded-lg"
                      href="https://blog-page-8238c.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Preview
                    </a>
                  </Typography>
                </div>
              </div>
            </div>
            <div>
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
              <div className="flex justify-between items-center px-10 mt-5">
                <div>
                  <Typography className="flex items-center gap-2" variant="h5">
                    <GoDotFill />
                    <p className="font-semibold">E-Management</p>
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1">
                    <a
                      className="font-semibold bg-blue-400 px-3 py-2 text-white rounded-lg"
                      href="https://event-management-center-37b2f.web.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Preview
                    </a>
                  </Typography>
                </div>
              </div>
            </div>
            <div>
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
              <div className="flex justify-between items-center px-10 mt-5">
                <div>
                  <Typography className="flex items-center gap-2" variant="h5">
                    <GoDotFill />
                    <p className="font-semibold">Gamer</p>
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1">
                    <a
                      className="font-semibold bg-blue-400 px-3 py-2 text-white rounded-lg"
                      href="https://mehedihasan128.github.io/gamer-world/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Preview
                    </a>
                  </Typography>
                </div>
              </div>
            </div>
          </Box>
        </Container>
    </div>
  );
};

export default Projects;
