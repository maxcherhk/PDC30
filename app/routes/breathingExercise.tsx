/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Box, Button, Container, Divider, Typography } from "@mui/joy";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import WebFont from "webfontloader";
import { breatheModeAtom, store } from "../core/store";
const customTheme = extendTheme({
  typography: {
    h1: {
      // `--joy` is the default CSS variable prefix.
      // If you have a custom prefix, you have to use it instead.
      // For more details about the custom prefix, go to https://mui.com/joy-ui/customization/using-css-variables/#custom-prefix
      background:
        "linear-gradient(-30deg, var(--joy-palette-primary-700), var(--joy-palette-primary-400))",
      // `Webkit*` properties must come later.
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    h2: {
      textAlign: "left",
    },
  },
});

const fontStyle = { fontFamily: "Didact Gothic" };

export const Component = function BreathingExercise(): JSX.Element {
  const [breathingMode, setBreathingMode] = useState("3-3-4");

  let mode = "";

  WebFont.load({
    google: {
      families: ["Didact Gothic"],
    },
  });

  function valuetext(value: number): string {
    switch (value) {
      case 1:
        mode = "3-3-4";
        store.set(breatheModeAtom, "3-3-4");
        setBreathingMode(mode);
        break;
      case 2:
        mode = "4-4-6";
        store.set(breatheModeAtom, "4-4-6");
        setBreathingMode(mode);
        break;
      case 3:
        mode = "4-7-8";
        store.set(breatheModeAtom, "4-7-8");
        setBreathingMode(mode);
        break;
      default:
        mode = "Unknown";
    }
    return mode;
  }
  return (
    <Fragment>
      <Container sx={{ py: 2 }}>
        <CssVarsProvider theme={customTheme}>
          <Typography level="h1" gutterBottom style={fontStyle}>
            Slow breathing
          </Typography>
          <Typography fontSize="1.5rem" style={fontStyle}>
            Please select your breathing mode below:
          </Typography>
          <Box display="flex" alignItems="center">
            <Button
              style={{
                marginTop: "20px",
                position: "relative",
                left: "40%",
                fontSize: "1.2rem",
              }}
              onClick={() => {
                store.set(breatheModeAtom, "3-3-4");
              }}
              component={Link}
              to="/breatheAnimation"
            >
              3-3-4
            </Button>
          </Box>
          <Box>
            <Typography fontSize="1.5rem" style={fontStyle}>
              Breathe in (inhale) for 3 seconds, hold your breath for 3 seconds,
              then breathe out (exhale) for 4 seconds.
            </Typography>
            <Divider />
          </Box>
          <Box display="flex" alignItems="center">
            <Button
              style={{
                marginTop: "20px",
                position: "relative",
                left: "40%",
                fontSize: "1.2rem",
              }}
              onClick={() => {
                store.set(breatheModeAtom, "4-4-6");
              }}
              component={Link}
              to="/breatheAnimation"
            >
              4-4-6
            </Button>
          </Box>
          <Box>
            <Typography fontSize="1.5rem" style={fontStyle}>
              Breathe in for 4 seconds, hold your breath for 4 seconds, then
              breathe out for 6 seconds.
            </Typography>
          </Box>
          <Divider />
          <Box display="flex" alignItems="center">
            <Button
              style={{
                marginTop: "20px",
                position: "relative",
                left: "40%",
                fontSize: "1.2rem",
              }}
              onClick={() => {
                store.set(breatheModeAtom, "4-7-8");
              }}
              component={Link}
              to="/breatheAnimation"
            >
              4-7-8
            </Button>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography fontSize="1.5rem" style={fontStyle}>
              Breathe in for 4 seconds, hold your breath for 7 seconds, then
              breathe out for 8 seconds.
            </Typography>
          </Box>
          {/* <Typography level="h2" fontSize="4rm" sx={{ mb: 0.5 }}>
            Your selected mode is {breathingMode}
          </Typography>
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "30vh",
            }}
          >
            <Slider
              aria-label="Breathing mode"
              defaultValue={1}
              getAriaLabel={valuetext}
              getAriaValueText={valuetext}
              step={1}
              marks
              min={1}
              max={3}
              valueLabelDisplay="auto"
            />
          </Box>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              bottom: "10vh",
            }}
          >
            <Button
              startIcon={<PlayArrow />}
              component={Link}
              to="/breatheAnimation"
            >
              Play
            </Button>
          </div> */}
        </CssVarsProvider>
      </Container>
    </Fragment>
  );
};
