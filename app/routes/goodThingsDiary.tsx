/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import {
  Button,
  Container,
  Option,
  Select,
  Textarea,
  Typography,
} from "@mui/joy";
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID,
  experimental_extendTheme as extendMaterialTheme,
} from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import WebFont from "webfontloader";

import { auth } from "../core/firebase";
import { usePageEffect } from "../core/page";
import {
  diaryContentAtom,
  diaryDateAtom,
  diaryThemeAtom,
  store,
} from "../core/store";

const materialTheme = extendMaterialTheme();

const fontStyle = { fontFamily: "Didact Gothic", fontSize: "1.2rem" };

const items = [
  "Accepting things I cannot change",
  "Finding purpose in what I do",
  "Achieved something",
  "Feel great after hard work",
  "Feel appreciated for what I did",
  "Learned something useful",
  "Discovered or improved capabilities",
  "Someone being nice to me",
  "Someone showing affection",
  "Strengthened relationship",
  "Letting go of unrealistic desires",
  "Being useful to others",
  "Other",
];

export const Component = function GoodThingsDiary(): JSX.Element {
  usePageEffect({ title: "Messages" });

  const recordTheme = (
    event: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    store.set(diaryThemeAtom, newValue);
  };

  WebFont.load({
    google: {
      families: ["Didact Gothic"],
    },
  });

  const recordDate = (value) => {
    store.set(diaryDateAtom, String(dayjs(value).format("DD/MM/YYYY")));
  };

  const recordContent = (event) => {
    store.set(diaryContentAtom, String(event.target.value));
  };

  async function handleClick() {
    const email = auth.currentUser.email;
    const date = store.get(diaryDateAtom);
    const theme = store.get(diaryThemeAtom);
    const content = store.get(diaryContentAtom);
    const time = Date.now();
    const UTCdate = new Date().toUTCString();
    const dayString = new Date().toDateString();
    const json = {
      userEmail: email,
      date: date,
      theme: theme,
      content: content,
      time: time,
      UTCdate: UTCdate,
      dayString: dayString,
    };

    axios
      .post("http://localhost:3000/goodthingsdiary", json)
      .then((response) => {
        console.log(response);
        alert("saved");
      })
      .catch((error) => {
        console.error(error);
        alert("error");
      });
  }

  // const doc = new jsPDF();
  // doc.text("Hello world!", 10, 10);
  // doc.save("a4.pdf");

  const html = document.getElementById("print");

  return (
    <MaterialCssVarsProvider theme={{ [THEME_ID]: materialTheme }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container sx={{ py: 2 }}>
          <Typography
            sx={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}
            level="h2"
            gutterBottom
            style={{ fontFamily: "Didact Gothic" }}
          >
            Good Things Diary
          </Typography>
          <Typography style={fontStyle}>
            Everyday may not be good … but there is something good in everyday.
            — Alice Morse Earl
          </Typography>
          <br />
          <Typography style={fontStyle}>
            And so whether big or small, there are encounters that light up your
            day. This exercise helps you take stock of these uplifting moments.
            Remember – it is what means to you personally that matters, not what
            others think!
          </Typography>
          <br />
          <Typography style={fontStyle}>Date:</Typography>
          <br />
          <DatePicker
            defaultValue={dayjs("2024-01-01")}
            onChange={(newValue) => {
              recordDate(newValue);
            }}
            label="Select the date"
          />
          <br />
          <br />
          <Typography style={fontStyle}>Choose a theme:</Typography>
          <Select defaultValue="Select theme..." onChange={recordTheme}>
            <Option value="Select theme...">Select theme...</Option>
            {items.map((item, index) => (
              <Option value={item} key={index}>
                {item}
              </Option>
            ))}
          </Select>
          <br />
          <Typography style={fontStyle}>
            Describe in detail the event and explain what made you feel good:
          </Typography>
          <Textarea
            onChange={recordContent}
            minRows={3}
            placeholder="type in here..."
          ></Textarea>
          <br />
          <Typography
            sx={{
              fontFamily: "Didact Gothic",
              fontSize: "1.2rem",
              color: "blue",
            }}
          >
            Press the Save button below to save your input. After saving, you
            can find your record in the User Good Things Diary Log under
            the Apps Menu.
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

          <Button onClick={handleClick} component={Link} to="/diaryPDFPreview">
            Save
          </Button>
        </Container>
      </LocalizationProvider>
    </MaterialCssVarsProvider>
  );
};
