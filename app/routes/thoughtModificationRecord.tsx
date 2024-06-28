import {
  Box,
  Button,
  Container,
  Slider,
  styled,
  Textarea,
  Typography,
} from "@mui/joy";
import {
  experimental_extendTheme as extendMaterialTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID,
} from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import WebFont from "webfontloader";
import { auth } from "../core/firebase";
import { usePageEffect } from "../core/page";
import {
  store,
  thoughtRecordDateAtom,
  thoughtRecordEmotionAtom,
  thoughtRecordEventAtom,
  thoughtRecordIntensityAtom,
  thoughtRecordPositiveThoughtAtom,
  thoughtRecordRewriteEventAtom,
  thoughtRecordThoughtAtom,
} from "../core/store";

const materialTheme = extendMaterialTheme();

const fontStyle = { fontFamily: "Didact Gothic", fontSize: "1.2rem" };

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function valueText(value: number) {
  return `${value}°C`;
}

export const Component = function ThoughtModificationRecord(): JSX.Element {
  usePageEffect({ title: "Dashboard" });
  const [value, setValue] = useState<Dayjs | null>(null);
  WebFont.load({
    google: {
      families: ["Didact Gothic"],
    },
  });

  const dateStr = store.get(thoughtRecordDateAtom).toString();
  const eventStr = store.get(thoughtRecordEventAtom).toString();
  const thoughtStr = store.get(thoughtRecordThoughtAtom).toString();
  const emotionStr = store.get(thoughtRecordEmotionAtom).toString();
  const intensityStr = store.get(thoughtRecordIntensityAtom).toString();
  const positiveStr = store.get(thoughtRecordPositiveThoughtAtom).toString();
  const rewriteEventStr = store.get(thoughtRecordRewriteEventAtom).toString();

  const recordDate = (value) => {
    store.set(thoughtRecordDateAtom, String(dayjs(value).format("DD/MM/YYYY")));
  };

  const recordEvent = (event) => {
    store.set(thoughtRecordEventAtom, event.target.value);
  };

  const recordThought = (event) => {
    store.set(thoughtRecordThoughtAtom, event.target.value);
  };

  const recordEmotion = (event) => {
    store.set(thoughtRecordEmotionAtom, event.target.value);
  };

  const recordIntensity = (event) => {
    store.set(thoughtRecordIntensityAtom, event.target.value);
  };

  const recordPositiveThought = (event) => {
    store.set(thoughtRecordPositiveThoughtAtom, event.target.value);
  };

  const recordRewriteEvent = (event) => {
    store.set(thoughtRecordRewriteEventAtom, event.target.value);
  };

  async function handleClick() {
    const email = auth.currentUser.email;
    const date = store.get(thoughtRecordDateAtom);
    const event = store.get(thoughtRecordEventAtom);
    const thought = store.get(thoughtRecordThoughtAtom);
    const emotion = store.get(thoughtRecordEmotionAtom);
    const intensity = store.get(thoughtRecordIntensityAtom);
    const positiveThought = store.get(thoughtRecordPositiveThoughtAtom);
    const rewriteEvent = store.get(thoughtRecordRewriteEventAtom);
    const time = Date.now();
    const UTCdate = new Date().toUTCString();
    const dayString = new Date().toDateString();
    const json = {
      userEmail: email,
      date: date,
      event: event,
      thought: thought,
      emotion: emotion,
      intensity: intensity,
      positiveThought: positiveThought,
      rewriteEvent: rewriteEvent,
      time: time,
      UTCdate: UTCdate,
      dayString: dayString,
    };

    axios
      .post("http://localhost:3000/thoughtmodificationrecord", json)
      .then((response) => {
        console.log(response);
        alert("saved");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <MaterialCssVarsProvider theme={{ [THEME_ID]: materialTheme }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Container sx={{ py: 2 }}>
            <Typography
              sx={{
                mb: 2,
                fontSize: "2rem",
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "Didact Gothic",
              }}
              level="h2"
            >
              Thought Modification Record
            </Typography>
            <br />
            <Typography style={fontStyle}>
              Psychiatrist Aaron Beck is among those who pioneered the idea that
              our emotion is not so much influenced by an event itself, but by
              the way we think about the event. If one is having troubling
              emotions, it follows that one is having certain thinking pattern
              that needs reconsideration. A thought record is a tool used in
              cognitive-behavioral therapy to help people identify the
              relationship between the thoughts they have and their (upsetting)
              emotional experiences.
            </Typography>
            <br />
            <Typography style={fontStyle}>
              This is an exercise to help you identify some of the maladaptive
              thoughts that have been harmful to your well-being. Think about
              events in the past few months that made you quite upset. Try to
              identify the thought that went through your mind and how it
              affected your emotional response to the event. Also try to work
              out how the thought could have been modified (such as turning a
              negative experience into a positive reward) to make you feel
              better.
            </Typography>
            <br />
            <Typography style={fontStyle}>
              You may use this tool to record maladaptive thoughts in future
              incidents.
            </Typography>
            <br />
            <Typography style={fontStyle}>Date</Typography>
            <br />
            <DatePicker onChange={recordDate} label="Select the date" />
            <br />
            <br />
            <Typography style={fontStyle}>Event/trigger</Typography>
            <Textarea onChange={recordEvent}></Textarea>
            <br />
            <Typography style={fontStyle}>
              Thought(s) or mental image(s) before, during or after the event
            </Typography>
            <Textarea onChange={recordThought}></Textarea>

            <br />
            <br />
            <Typography style={fontStyle}>
              Emotion (e.g., angry, sad)
            </Typography>
            <Textarea onChange={recordEmotion}></Textarea>
            <br />
            <Typography style={fontStyle}>
              How intense was the emotion
            </Typography>
            <Box sx={{ width: 300 }}>
              <Slider
                aria-label="Small steps"
                defaultValue={50}
                getAriaValueText={valueText}
                step={1}
                min={0}
                max={100}
                onChange={recordIntensity}
                marks={[
                  {
                    value: 0,
                    label: "0",
                  },
                  {
                    value: 100,
                    label: "100",
                  },
                ]}
                valueLabelDisplay="auto"
              />
            </Box>
            <br />
            <Typography style={fontStyle}>
              Alternative/positive thought
            </Typography>
            <Textarea onChange={recordPositiveThought}></Textarea>
            <br />
            <Typography style={fontStyle}>
              Rewrite the event using the alternative/positive thought
            </Typography>
            <Textarea onChange={recordRewriteEvent}></Textarea>
            <br />
            <Typography
              sx={{
                fontFamily: "Didact Gothic",
                fontSize: "1.2rem",
                color: "blue",
              }}
            >
              Press the Save button below to save your input. After saving, you
              can find your record in the User Thought Modification Record Log
              under the Apps Menu.
            </Typography>
            <Typography
              sx={{
                fontFamily: "Didact Gothic",
                marginBottom: "10px",
                fontSize: "1.2rem",
                color: "blue",
              }}
            >
              If you do not press Save, or if you navigate to a different
              page/app, your input here will be lost.
            </Typography>
            <Button onClick={handleClick}>Save</Button>
          </Container>
        </LocalizationProvider>
      </MaterialCssVarsProvider>
    </>
  );
};
