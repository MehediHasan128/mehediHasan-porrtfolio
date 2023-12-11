import { Box, Container, Typography } from "@mui/material";
import ProgressBar from "@ramonak/react-progress-bar";

// Import Icon
import html from "../../../../assets/icons/html-5.svg";
import css from "../../../../assets/icons/css-3.svg";
import js from "../../../../assets/icons/javascript.svg";
import react from "../../../../assets/icons/react.svg";
import router from "../../../../assets/icons/router.svg";
import firebase from "../../../../assets/icons/firebase.svg";
import node from "../../../../assets/icons/node-js.svg";
import mongo from "../../../../assets/icons/mongo.svg";

const MySkill = () => {
  return (
    <div className="mt-36 bg-slate-100 py-36">
      <Container>
        <Typography variant="h3" className="text-center">
          <p className="font-bold">My <span className="text-blue-400">Skills</span></p>
        </Typography>
        <Box className="mt-20 grid grid-cols-2 gap-10">
            <div className="flex items-center gap-5">
                <div className="w-fit">
                    <img className="w-14 mx-auto" src={html} alt="" />
                    <Typography variant="body1">
                        <p className="text-center mt-2 font-semibold">HTML5</p>
                    </Typography>
                </div>
                <div className="flex-1 ">
                <ProgressBar completed={90} transitionDuration='3s' bgColor='#60a5fa' height='10px' labelAlignment='outside' labelColor='000' animateOnRender={true} />
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="w-fit">
                    <img className="w-14 mx-auto" src={css} alt="" />
                    <Typography variant="body1">
                        <p className="text-center mt-2 font-semibold">CSS3</p>
                    </Typography>
                </div>
                <div className="flex-1 ">
                <ProgressBar completed={80} transitionDuration='3s' bgColor='#60a5fa' height='10px' labelAlignment='outside' labelColor='000' animateOnRender={true} />
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="w-fit">
                    <img className="w-14 mx-auto" src={js} alt="" />
                    <Typography variant="body1">
                        <p className="text-center mt-2 font-semibold">JavaScript</p>
                    </Typography>
                </div>
                <div className="flex-1 ">
                <ProgressBar completed={75} transitionDuration='3s' bgColor='#60a5fa' height='10px' labelAlignment='outside' labelColor='000' animateOnRender={true} />
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="w-fit">
                    <img className="w-14 mx-auto" src={react} alt="" />
                    <Typography variant="body1">
                        <p className="text-center mt-2 font-semibold">React</p>
                    </Typography>
                </div>
                <div className="flex-1 ">
                <ProgressBar completed={50} transitionDuration='3s' bgColor='#60a5fa' height='10px' labelAlignment='outside' labelColor='000' animateOnRender={true} />
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="w-fit">
                    <img className="w-14 mx-auto" src={router} alt="" />
                    <Typography variant="body1">
                        <p className="text-center mt-2 font-semibold">React Router</p>
                    </Typography>
                </div>
                <div className="flex-1 ">
                <ProgressBar completed={55} transitionDuration='3s' bgColor='#60a5fa' height='10px' labelAlignment='outside' labelColor='000' animateOnRender={true} />
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="w-fit">
                    <img className="w-14 mx-auto" src={firebase} alt="" />
                    <Typography variant="body1">
                        <p className="text-center mt-2 font-semibold">Firebase</p>
                    </Typography>
                </div>
                <div className="flex-1 ">
                <ProgressBar completed={75} transitionDuration='3s' bgColor='#60a5fa' height='10px' labelAlignment='outside' labelColor='000' animateOnRender={true} />
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="w-fit">
                    <img className="w-14 mx-auto" src={node} alt="" />
                    <Typography variant="body1">
                        <p className="text-center mt-2 font-semibold">Node Js</p>
                    </Typography>
                </div>
                <div className="flex-1 ">
                <ProgressBar completed={35} transitionDuration='3s' bgColor='#60a5fa' height='10px' labelAlignment='outside' labelColor='000' animateOnRender={true} />
                </div>
            </div>
            <div className="flex items-center gap-5">
                <div className="w-fit">
                    <img className="w-14 mx-auto" src={mongo} alt="" />
                    <Typography variant="body1">
                        <p className="text-center mt-2 font-semibold">MongoDB</p>
                    </Typography>
                </div>
                <div className="flex-1 ">
                <ProgressBar completed={20} transitionDuration='3s' bgColor='#60a5fa' height='10px' labelAlignment='outside' labelColor='000' animateOnRender={true} />
                </div>
            </div>
        </Box>
      </Container>
    </div>
  );
};

export default MySkill;
