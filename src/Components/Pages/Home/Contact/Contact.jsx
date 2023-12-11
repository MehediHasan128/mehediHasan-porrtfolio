import { Box, Container, Typography } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zabuohn",
        "template_ywam5h2",
        form.current,
        "2atAOcZzMM_rQsFLq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="mt-36">
      <Container>
        <Typography className="text-center" variant="h3">
            <p className="mb-20">Contact Me</p>
        </Typography>
        <Box className="flex justify-center gap-20">
          <Box className='w-[50%]'>
            <Typography variant="h4">
              <p>Connect with me</p>
            </Typography>
            <Typography variant="body1">
              <p className="font-semibold mt-5">
                Thank you for reaching out! 🚀 I appreciate your message and
                will get back to you as soon as possible. Your interest means a
                lot to me. Have a great day!
              </p>
            </Typography>
          </Box>
          <Box className='w-[50%]'>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
              <label className="text-lg font-medium mb-2">Name</label>
              <input className="border block px-5 py-3 w-full rounded-md" type="text" name="from_name" placeholder="Enter your email" />
              </div>
              <div>
              <label className="text-lg font-medium mb-2">Email</label>
              <input className="border block px-5 py-3 w-full rounded-md" type="email" name="from_email" placeholder="Enter your email" />
              </div>
              <div>
              <label className="text-lg font-medium mb-2">Message</label>
              <textarea className="border block px-5 py-3 w-full rounded-md" name="message" placeholder="Message" />
              </div>
              <input className="bg-blue-400 cursor-pointer px-5 py-3 text-lg font-medium text-white rounded-lg" type="submit" value="Send" />
            </form>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Contact;
