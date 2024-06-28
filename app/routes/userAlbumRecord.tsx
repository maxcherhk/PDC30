/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Card, Container, Typography } from "@mui/joy";
import {
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID,
  experimental_extendTheme as extendMaterialTheme,
} from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import { auth } from "../core/firebase";

import { usePageEffect } from "../core/page";

const materialTheme = extendMaterialTheme();

const fontStyle = {
  fontFamily: "Didact Gothic",
  fontSize: "1.2rem",
  wordWrap: "break-word",
};

export const Component = function UserAlbumRecord(): JSX.Element {
  usePageEffect({ title: "Messages" });
  const [userHistory, setUserHistory] = useState([]);

  WebFont.load({
    google: {
      families: ["Didact Gothic"],
    },
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/album", {
        params: {
          userEmail: auth.currentUser.email,
        },
      })
      .then((response) => {
        let ReverseArray = [];
        let length = response.data.length;
        for (let i = length - 1; i >= 0; i--) {
          ReverseArray.push(response.data[i]);
        }
        setUserHistory(ReverseArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            User Photo Album Log
          </Typography>
          {userHistory.map((item, index) => (
            <>
              <Card>
                <img
                  src={item.path}
                  style={{
                    width: "80%",
                    height: "auto",
                    display: "block",
                    margin: "auto",
                  }}
                />
                <figcaption
                  style={{
                    margin: "auto",
                    display: "block",
                    width: "80%",
                    fontSize: "2rem",
                  }}
                >
                  {item.metadata.story}
                </figcaption>
                <Typography
                  style={{
                    fontFamily: "Didact Gothic",
                    fontSize: "1rem",
                    textAlign: "right",
                  }}
                >
                  Modify at: {item.metadata.UTCdate}
                </Typography>
              </Card>
              <br />
            </>
          ))}
        </Container>
      </LocalizationProvider>
    </MaterialCssVarsProvider>
  );
};
