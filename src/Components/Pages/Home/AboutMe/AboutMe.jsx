import { Box, Container, Typography } from "@mui/material";
import img from '../../../../assets/BannerImage/about.png';

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
                <Box className="space-y-4">
                    <Typography variant="h3">
                        <p className="font-bold">Mehedi <span className="text-blue-400">Hasan</span></p>
                    </Typography>
                    <Typography variant="subtitle1">
                        <p className="font-medium">Hello! I’m Mehedi Hasan Bayzid, a MERN Stack developer. I’m also studying at Uttara University Department of Computer Science and Engineering. Web development is a passion for me. Since last one year I have gained a lot of skill in this web development sector which has helped me a lot to create some projects.</p>
                    </Typography>
                </Box>
                </Box>
            </Container>
        </div>
    );
};

export default AboutMe;