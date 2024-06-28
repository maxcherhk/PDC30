import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import Slider from "@mui/joy/Slider";
import Typography from "@mui/joy/Typography";
import axios from "axios";
import { useState } from "react";
import { animated, useSpring } from "react-spring";
import WebFont from "webfontloader";
import { auth } from "../core/firebase";
import { usePageEffect } from "../core/page";
import { breatheModeAtom, breatheMoodAtom, store } from "../core/store";

export const Component = function BreatheAnimation() {
  usePageEffect({ title: "Tasks" });
  const [open, setOpen] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [breathingCycle, setBreathingCycle] = useState(0);
  const breathingMode = store.get(breatheModeAtom);
  const breathOutWord = "Breathe out";
  const breathInWord = "Breathe in";
  const holdWord = "Hold your breath";
  const scalingFactor = 3;
  const iconStyles = {
    transform: `scale(${scalingFactor})`,
  };
  let x = 4000;
  let y = 7000;
  let z = 8000;
  let x_m = 3800;
  let y_m = 6800;
  let z_m = 7800;
  let t = 0;
  const startTime = Date.now();

  if (breathingMode == "3-3-4") {
    x = 3000;
    y = 3000;
    z = 4000;
    x_m = 2700;
    y_m = 2700;
    z_m = 3700;
  } else if (breathingMode == "4-4-6") {
    x = 4000;
    y = 4000;
    z = 6000;
    x_m = 3700;
    y_m = 3700;
    z_m = 5700;
  } else if (breathingMode == "4-7-8") {
    x = 4000;
    y = 7000;
    z = 8000;
    x_m = 3700;
    y_m = 6700;
    z_m = 7700;
  }

  WebFont.load({
    google: {
      families: ["Didact Gothic"],
    },
  });

  function moodText(value: number): string {
    return value.toString();
  }

  const props = useSpring({
    from: { transform: "translate(-50%, -50%) scale(1)" },
    to: async (next: any) => {
      while (1) {
        await next({
          transform: "translate(-50%, -50%) scale(1.5)",
          config: { duration: x },
        });
        await new Promise((resolve) => setTimeout(resolve, y)); // Pause for 7 seconds
        await next({
          transform: "translate(-50%, -50%) scale(1)",
          config: { duration: z },
        });
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }
    },
    loop: true,
    reset: true,
  });

  const breathOutWordStyle = useSpring({
    from: { opacity: 0 },
    to: async (next: any) => {
      {
        while (1) {
          await next({ opacity: 0.001, config: { duration: x } });
          await next({ opacity: 0.002, config: { duration: y_m } });
          await next({ opacity: 0.2, config: { duration: 300 } });
          await next({ opacity: 0.99, config: { duration: 300 } });
          await next({ opacity: 1, config: { duration: z_m } });
          await next({ opacity: 0.2, config: { duration: 200 } });
          await next({ opacity: 0.01, config: { duration: 100 } });
          await next({ opacity: 0.002, config: { duration: 1700 } });
        }
      }
    },
    loop: true,
    reset: true,
  });
  const breathInWordStyle = useSpring({
    from: { opacity: 1 },
    to: async (next: any) => {
      {
        while (1) {
          await next({ opacity: 0.99, config: { duration: x_m + 200 } });
          await next({ opacity: 0.98, config: { duration: 100 } });
          await next({ opacity: 0.03, config: { duration: 300 } });
          await next({ opacity: 0.002, config: { duration: y_m } });
          await next({ opacity: 0.001, config: { duration: z } });
          await next({ opacity: 0, config: { duration: 1900 } });
          await next({ opacity: 0.98, config: { duration: 100 } });
        }
      }
    },
    loop: true,
    reset: true,
  });
  const holdStyle = useSpring({
    from: { opacity: 0 },
    to: async (next: any) => {
      {
        while (1) {
          await next({ opacity: 0.001, config: { duration: x_m } });
          await next({ opacity: 0.01, config: { duration: 100 } });
          await next({ opacity: 0.1, config: { duration: 100 } });
          await next({ opacity: 0.9, config: { duration: 100 } });
          await next({ opacity: 1, config: { duration: y_m } });
          await next({ opacity: 0.99, config: { duration: 300 } });
          await next({ opacity: 0.002, config: { duration: 300 } });
          await next({ opacity: 0.001, config: { duration: z_m } });
          await next({ opacity: 0, config: { duration: 2000 } });
        }
      }
    },
    loop: true,
    reset: true,
  });

  const circleStyle = {
    width: "40vmin",
    height: "40vmin",
    backgroundColor: "skyblue",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
  };
  const wordStyle = {
    textAlign: "center",
    position: "absolute",
    fontSize: "28px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Didact Gothic",
    color: "black",
  };

  //yellow indicator
  // const indicatorProps = useSpring({
  //   from: { transform: "rotate(-90deg)" },
  //   to: async (next: any) => {
  //     let rotation = -90;
  //     while (1) {
  //       rotation += 90;
  //       await next({
  //         transform: `rotate(${rotation}deg)`,
  //         config: { duration: x / 2 },
  //       });
  //       rotation += 90;
  //       await next({
  //         transform: `rotate(${rotation}deg)`,
  //         config: { duration: x / 2 },
  //       });
  //       await new Promise((resolve) => setTimeout(resolve, y));
  //       rotation += 90;
  //       await next({
  //         transform: `rotate(${rotation}deg)`,
  //         config: { duration: z / 2 },
  //       });
  //       rotation += 90;
  //       await next({
  //         transform: `rotate(${rotation}deg)`,
  //         config: { duration: z / 2 },
  //       });
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //     }
  //   },
  //   loop: true,
  //   reset: true,
  // });
  // const indicatorContainerStyle = {
  //   width: "100%",
  //   height: "100%",
  //   position: "absolute",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  // };

  // const indicatorStyle = {
  //   width: "5vh",
  //   height: "5vh",
  //   position: "relative",
  //   top: 0,
  //   left: "50%",
  //   marginLeft: "5vh", // half of width to center the circle
  //   backgroundColor: "yellow",
  //   borderRadius: "50%",
  // };

  async function recordBreathData() {
    const breathTime = totalTime;
    const breathCycle = breathingCycle;
    const breathMood = store.get(breatheMoodAtom);
    const time = Date.now();
    const UTCdate = new Date().toUTCString();
    const dayString = new Date().toDateString();
    const json = {
      userEmail: auth.currentUser.email,
      breatheCycle: breathCycle, //03062024 eed content edit
      breathTime: breathTime, //03062024 need content edit
      breathMood: breathMood, //03062024 eed content edit
      time: time,
      UTCdate: UTCdate,
      dayString: dayString,
    };
    try {
      //03062024
      const response = await axios.post("http://localhost:3000/breath", json, {
        headers: {
          "Content-Type": "application/json",
        },
        //03062024
      });
      if (response.ok) {
        console.log("ok");
      } else {
        console.log("error");
      }
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("error", error.message);
      }
    }
  }

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    store.set(breatheMoodAtom, newValue);
  };

  return (
    <>
      <animated.div
        style={{ ...props, ...circleStyle }}
        className="inner-Circle"
      >
        {/* <animated.div style={{ ...indicatorProps, ...indicatorContainerStyle }}>
          <animated.div style={indicatorStyle}></animated.div>
        </animated.div> */}
      </animated.div>
      <animated.div style={{ ...wordStyle, ...breathOutWordStyle, ...props }}>
        {breathOutWord}
      </animated.div>
      <animated.div style={{ ...wordStyle, ...breathInWordStyle, ...props }}>
        {breathInWord}
      </animated.div>
      <animated.div style={{ ...wordStyle, ...holdStyle, ...props }}>
        {holdWord}
      </animated.div>
      <Button
        style={{
          display: "flex",
          position: "absolute",
          top: "94vh",
          left: "50vw",
          transform: "translate(-50%, -50%)",
        }}
        onClick={() => {
          const endTime = Date.now();
          let totalTimeTemp = (endTime - startTime) / 1000;
          setTotalTime(Math.floor(totalTimeTemp));
          setBreathingCycle(
            Math.floor(totalTimeTemp / ((x + y + z + 2000) / 1000)),
          );
          setOpen(true);
        }}
      >
        End
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => {
          recordBreathData();
          setOpen(false);
        }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          {/* <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >Title
          </Typography> */}
          <Typography
            id="modal-desc"
            textColor="text.tertiary"
            style={{
              wordWrap: "break-word",
              fontFamily: "Didact Gothic",
              fontSize: "1.2rem",
            }}
          >
            Congratulations!
          </Typography>
          <Typography
            id="modal-desc"
            textColor="text.tertiary"
            style={{
              wordWrap: "break-word",
              fontFamily: "Didact Gothic",
              fontSize: "1.2rem",
            }}
          >
            Your breathing time is {totalTime} second.
          </Typography>
          <Typography
            id="modal-desc"
            textColor="text.tertiary"
            style={{
              wordWrap: "break-word",
              fontFamily: "Didact Gothic",
              fontSize: "1.2rem",
            }}
          >
            The total breathing cycle is {breathingCycle}.
          </Typography>
          <Typography style={{ fontFamily: "Didact Gothic" }}>---</Typography>
          <Typography
            id="modal-desc"
            textColor="text.tertiary"
            style={{
              wordWrap: "break-word",
              fontFamily: "Didact Gothic",
              fontSize: "1.2rem",
            }}
          >
            Please slide the dot to the left or right to indicate your mood
            right now:
          </Typography>
          <Box>
            <Box display="flex" justifyContent="space-between" p={2}>
              <IconButton sx={iconStyles}>
                <SentimentVeryDissatisfiedIcon />
              </IconButton>
              <IconButton sx={iconStyles}>
                <SentimentVerySatisfiedIcon />
              </IconButton>
            </Box>

            <Slider
              aria-label="Breathing mode"
              defaultValue={5}
              getAriaLabel={moodText}
              getAriaValueText={moodText}
              step={0.01}
              onChange={handleSliderChange}
              marks
              min={0}
              max={10}
              valueLabelDisplay="auto"
            />
            {/* <Button
              onClick={async () => {
                const userEmail = auth.currentUser.email;
                try {
                  const res = await axios.post(
                    "http://localhost:3000/breathexercise/22",
                    {
                      email: userEmail,
                      breathCycle: breathingCycle,
                      breathMode: breathingMode,
                    },
                    {
                      headers: {
                        "Content-Type": "application/json",
                      },
                    },
                  );
                  console.log(res);
                } catch (error: any) {
                  if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  } else if (error.request) {
                    console.log(error.request);
                  } else {
                    console.log("error", error.message);
                  }
                }
              }}
            >
              Submit
            </Button> */}
          </Box>
        </Sheet>
      </Modal>
    </>
  );
};
