/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Box, ContainerProps } from "@mui/joy";
import "../components/css/emailPasswordAuth.css";
import EmailPasswordAuth from "../components/emailPasswordAuth";
export const Component = function Login(): JSX.Element {
  return (
    // <Container
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     height: "80%",
    //     gap: 1,
    //     maxWidth: "280px !important",
    //   }}
    //   maxWidth="xs"
    // >
    <Box
      sx={{
        backgroundColor: "#e6ffff",
        border: "1rem solid #9966ff",
        fontFamily: "cursive",
        textAlign: "left",
      }}
    >
      <div className="App">
        <EmailPasswordAuth></EmailPasswordAuth>
      </div>
    </Box>

    // </Container>
  );
};

export type LoginProps = Omit<ContainerProps, "children">;
