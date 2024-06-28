/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import CancelIcon from "@mui/icons-material/Cancel";
import {
  Button,
  Container,
  Option,
  Select,
  Textarea,
  Typography,
} from "@mui/joy";
import IconButton from "@mui/joy/IconButton";
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID,
  experimental_extendTheme as extendMaterialTheme,
} from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import dayjs from "dayjs";
import { React, useEffect, useState } from "react";
import WebFont from "webfontloader";
import { auth } from "../core/firebase";
import { usePageEffect } from "../core/page";
import {
  pleasantEventActivitiesAtom,
  pleasantEventEndTimeAtom,
  pleasantEventFirstActivityAtom,
  pleasantEventLocationAtom,
  pleasantEventPeopleInvolvedAtom,
  pleasantEventSecondActivityAtom,
  pleasantEventStartTimeAtom,
  store,
} from "../core/store";

const materialTheme = extendMaterialTheme();

const fontStyle = { fontFamily: "Didact Gothic", fontSize: "1.3rem" };

export const Component = function PleasantEventScheduling(): JSX.Element {
  usePageEffect({ title: "Messages" });
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  WebFont.load({
    google: {
      families: ["Didact Gothic"],
    },
  });

  const activities = store.get(pleasantEventActivitiesAtom).toString();
  const startTime = store.get(pleasantEventStartTimeAtom).toString();
  const endTime = store.get(pleasantEventEndTimeAtom).toString();
  const firstActivity = store.get(pleasantEventFirstActivityAtom).toString();
  const peopleInvolved = store.get(pleasantEventPeopleInvolvedAtom).toString();
  const location = store.get(pleasantEventLocationAtom).toString();
  const secondActivity = store.get(pleasantEventSecondActivityAtom).toString();

  useEffect(() => {
    store.set(pleasantEventActivitiesAtom, items.toString());
  }, [items]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleAddItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input.trim()]);
      setInput("");
    }
  };

  const handleRemoveItem = (indexToRemove) => {
    setItems(items.filter((item, index) => index !== indexToRemove));
  };

  const handleChange = (
    event: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    // alert(`You chose "${newValue}"`);
  };

  const recordStartTime = (value) => {
    store.set(
      pleasantEventStartTimeAtom,
      String(dayjs(value).format("DD/MM/YYYY hh:mm A")),
    );
  };

  const recordEndTime = (value) => {
    store.set(
      pleasantEventEndTimeAtom,
      String(dayjs(value).format("DD/MM/YYYY hh:mm A")),
    );
  };

  const recordFirstEvent = (
    event: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    store.set(pleasantEventFirstActivityAtom, newValue);
  };

  const recordSecondEvent = (
    event: React.SyntheticEvent | null,
    newValue: string | null,
  ) => {
    store.set(pleasantEventSecondActivityAtom, newValue);
  };

  const recordPeopleInvolved = (event) => {
    store.set(pleasantEventPeopleInvolvedAtom, event.target.value);
  };

  const recordLocation = (event) => {
    store.set(pleasantEventLocationAtom, event.target.value);
  };

  async function handleClick() {
    const email = auth.currentUser.email;
    const activities = store.get(pleasantEventActivitiesAtom);
    const startTime = store.get(pleasantEventStartTimeAtom).toString();
    const endTime = store.get(pleasantEventEndTimeAtom).toString();
    const firstActivity = store.get(pleasantEventFirstActivityAtom).toString();
    const secondActivity = store
      .get(pleasantEventSecondActivityAtom)
      .toString();
    const peopleInvolve = store.get(pleasantEventPeopleInvolvedAtom);
    const location = store.get(pleasantEventLocationAtom);
    const time = Date.now();
    const UTCdate = new Date().toUTCString();
    const dayString = new Date().toDateString();
    const json = {
      userEmail: email,
      activities: activities,
      startTime: startTime,
      endTime: endTime,
      firstActivity: firstActivity,
      secondActivity: secondActivity,
      peopleInvolve: peopleInvolve,
      location: location,
      time: time,
      UTCdate: UTCdate,
      dayString: dayString,
    };

    axios
      .post(
        "http://localhost:3000/pleasanteventscheduling",
        json, //change to server ip address
      )
      .then((response) => {
        alert("Saved");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <MaterialCssVarsProvider theme={{ [THEME_ID]: materialTheme }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Container sx={{ py: 2 }}>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
              fontFamily: "Didact Gothic",
            }}
            level="h2"
            gutterBottom
          >
            Pleasant Event Scheduling
          </Typography>
          <Typography style={fontStyle}>
            When downhearted, people tend to disengage from activities (e.g.,
            withdrawing from social interactions), resulting in a vicious cycle
            of inactivity and lack of pleasure. Pleasant event scheduling is a
            technique used in cognitive-behavioral therapy to target this trap.
          </Typography>
          <br />
          <Typography style={fontStyle}>
            The purpose of this exercise is to help you identify enjoyable
            activities and to increase engagement in such activities through
            planning. Some of these will be social activities that are conducted
            with people; others are solitary activities. Try to think about both
            types of activities and make a list below. Update the list from time
            to time when new ideas come up.
          </Typography>
          <br />
          <Typography style={fontStyle}>
            Instruction: Click 'Add to List' <u>each time</u> after you have
            entered an activity into the box.
          </Typography>
          <br />
          <Typography style={fontStyle}>
            List of Enjoyable Activities
          </Typography>
          <Textarea type="text" value={input} onChange={handleInputChange} />
          <br />

          <Button onClick={handleAddItem}>Add to List</Button>

          <ul style={fontStyle}>
            {items.map((item, index) => (
              <li key={index}>
                {item}
                <IconButton onClick={() => handleRemoveItem(index)}>
                  <CancelIcon />
                </IconButton>
              </li>
            ))}
          </ul>

          <Typography style={fontStyle}>Scheduling Activities</Typography>
          <Typography style={fontStyle}>
            Referring to the list of enjoyable activities you have just
            constructed, use the calendar below to schedule your activities. Try
            to plan at least one pleasant activity per day. Besides your most
            preferred activity for a particular date and time, try to think of a
            substitute pleasant activity in case the original activity cannot be
            implemented due to unforeseen reasons. The substitute activity
            should be more achievable than the original activity.
          </Typography>

          <br />
          <Typography style={fontStyle}>
            Please select the time range below:
          </Typography>
          <br />
          <DateTimePicker onChange={recordStartTime} label="Event start time" />
          <br />
          <DateTimePicker onChange={recordEndTime} label="Event end time" />
          <br />
          <br />
          <Typography style={fontStyle}>Pleasant event</Typography>
          <Select defaultValue="Select event..." onChange={recordFirstEvent}>
            <Option value="Select event...">Select event...</Option>
            {items.map((item, index) => (
              <Option value={item} key={index}>
                {item}
              </Option>
            ))}
          </Select>
          <br />

          <Typography style={fontStyle}>People involved (with whom)</Typography>
          <Textarea onChange={recordPeopleInvolved}></Textarea>
          <br />
          <Typography style={fontStyle}>Location of activity</Typography>
          <Textarea onChange={recordLocation}></Textarea>
          <br />
          <Typography style={fontStyle}>
            Substitute activity (more achievable)
          </Typography>
          <Select defaultValue="Select event..." onChange={recordSecondEvent}>
            <Option value="Select event...">Select event...</Option>
            {items.map((item, index) => (
              <Option value={item} key={index}>
                {item}
              </Option>
            ))}
          </Select>

          <br />
          <br />
          <Typography
            sx={{
              fontFamily: "Didact Gothic",
              fontSize: "1.2rem",
              color: "blue",
            }}
          >
            Press the Save button below to save your input. After saving, you
            can find your record in the User Pleasant Event Scheduling Log
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
  );
};
