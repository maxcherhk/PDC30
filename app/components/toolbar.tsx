/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import {
  Box,
  BoxProps,
  Button,
  Divider,
  Drawer,
  useColorScheme,
} from "@mui/joy";
import { Fragment, Suspense, useState } from "react";
import { Link } from "react-router-dom";
import WebFont from "webfontloader";
import { useCurrentUser } from "../core/auth";
import { ColorSchemeButton } from "./button-color-scheme";
import { UserAvatarButton } from "./button-user-avatar";
import { Navigation } from "./navigation";
import { NavigationModule } from "./navigationModule";

export function Toolbar(props: ToolbarProps): JSX.Element {
  const [openBook, setOpenBook] = useState(false);
  const [openApp, setOpenApp] = useState(false);
  const [openGraphicNovel, setOpenGraphicNovel] = useState(false);
  const { mode } = useColorScheme();
  const { sx, ...other } = props;
  WebFont.load({
    google: {
      families: ["Be Vietnam Pro"],
    },
  });

  const toggleAppDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenApp(inOpen);
    };

  const toggleBookDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenBook(inOpen);
    };

  const toggleGraphicNovelDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpenGraphicNovel(inOpen);
    };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: "25px",
        height: "50px",
        width: "calc(100% - 40px)",
        zIndex: 100,
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "divider",
        display: "flex",
        flexGrow: 1,
        gap: 0.3,
        px: 2,
        ...sx,
      }}
      component="header"
      backgroundColor={mode === "dark" ? "black" : "white"}
      {...other}
    >
      {/* <Button
        color="neutral"
        variant="plain"
        endDecorator={<ExpandMoreRounded />}
        children="Caregiver Guide"
      /> */}
      {/* <Dropdown>
        <MenuButton
          slots={{ root: IconButton }}
          slotProps={{ root: { variant: "outlined", color: "neutral" } }}
        >
          Caregiver Guide
          <MoreVert />
        </MenuButton>
        <Menu>
          <MenuItem>Module 1</MenuItem>
          <MenuItem>Module 2</MenuItem>
          <MenuItem>Module 3</MenuItem>
          <MenuItem>Module 4</MenuItem>
          <MenuItem>Module 5</MenuItem>
        </Menu>
      </Dropdown>
      <Dropdown>
        <MenuButton
          slots={{ root: IconButton }}
          slotProps={{ root: { variant: "outlined", color: "neutral" } }}
        >
          Apps
          <MoreVert />
        </MenuButton>
        <Menu>
          <MenuItem>Breathe Exercise</MenuItem>
          <MenuItem>Chatbot</MenuItem>
          <MenuItem>Dysfunctional Thought Record</MenuItem>
          <MenuItem>Photo Album</MenuItem>
          <MenuItem>Pleasant Event Scheduling</MenuItem>
        </Menu>
      </Dropdown> */}
      <Button
        variant="outlined"
        size="sm"
        color="neutral"
        onClick={toggleBookDrawer(true)}
        sx={{ fontFamily: "Be Vietnam Pro", lineHeight: "1", margin: "0" }}
      >
        Guide book
      </Button>
      <Drawer open={openBook} onClose={toggleBookDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleBookDrawer(false)}
          onKeyDown={toggleBookDrawer(false)}
        >
          <NavigationModule />
          <Divider />
          {/* <List>
            {[
              "Module 2.1",
              "Module 2.2",
              "Module 2.3",
              "Module 2.4",
              "Module 2.5",
            ].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>

      <Button
        variant="outlined"
        size="sm"
        color="neutral"
        sx={{ lineHeight: "1", fontFamily: "Be Vietnam Pro", margin: "0" }}
        onClick={toggleGraphicNovelDrawer(true)}
      >
        Graphic Novel
      </Button>
      {/* <Drawer open={openGraphicNovel} onClose={toggleGraphicNovelDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleGraphicNovelDrawer(false)}
          onKeyDown={toggleGraphicNovelDrawer(false)}
        >
          <NavigationGraphicNovel />
          <Divider />
        </Box>
      </Drawer> */}

      <Button
        variant="outlined"
        color="neutral"
        sx={{
          lineHeight: "0.5",
          fontFamily: "Be Vietnam Pro",
          margin: "0",
        }}
        size="sm"
        onClick={toggleAppDrawer(true)}
      >
        Apps
      </Button>
      <Drawer open={openApp} onClose={toggleAppDrawer(false)}>
        <Box
          role="presentation"
          onClick={toggleAppDrawer(false)}
          onKeyDown={toggleAppDrawer(false)}
        >
          {/* <List>
            {[
              "Breathing Exercise",
              "Chatbot",
              "Dysfunctional Thought Record",
              "Photo Album",
              "PleasantEventScheduling",
            ].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List> */}
          <Navigation />
          <Divider />
          {/* <List>
            {["Module 1", "Module 2", "Module 3"].map((text) => (
              <ListItem key={text}>
                <ListItemButton>{text}</ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>

      <Box sx={{ flexGrow: 1 }} component="span" />

      <Suspense>
        <ActionButtons />
      </Suspense>
    </Box>
  );
}

function ActionButtons(): JSX.Element {
  const user = useCurrentUser();

  return (
    <Fragment>
      <ColorSchemeButton variant="soft" size="sm" />

      {/* <IconButton variant="soft" size="sm">
        <NotificationsRounded />
      </IconButton> */}

      {user ? (
        <UserAvatarButton variant="soft" />
      ) : (
        <Button component={Link} size="sm" sx={{ lineHeight: "1" }} to="/login">
          Sign In
        </Button>
      )}
    </Fragment>
  );
}

type ToolbarProps = Omit<BoxProps<"header">, "children">;
