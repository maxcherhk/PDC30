/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { House } from "@mui/icons-material";
import { Box, BoxProps, IconButton, useColorScheme } from "@mui/joy";
import { Link } from "react-router-dom";

export function Logo(props: LogoProps): JSX.Element {
  const { mode } = useColorScheme();
  const { sx, ...other } = props;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        zIndex: 1,
        width: "50px",
        height: "50px",
        left: "-15px",
        py: 1,
        px: 2,
        display: "flex",
        alignItems: "center",
        gap: 1,
        ...sx,
      }}
      {...other}
      backgroundColor={mode === "dark" ? "black" : "white"}
    >
      <IconButton
        component={Link}
        to="/homepage"
        color="primary"
        variant="soft"
      >
        <House />
      </IconButton>
      {/* <Typography sx={{ fontSize: "1rem" }} level="h6" component="div">
        {import.meta.env.VITE_APP_NAME}
      </Typography> */}
    </Box>
  );
}

export type LogoProps = Omit<BoxProps, "children">;
