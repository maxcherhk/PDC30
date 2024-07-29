/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import {
  AssignmentTurnedInOutlined,
  BookOutlined,
  CalendarMonth,
  Photo,
  QuestionAnswerOutlined,
  ReceiptLong,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  ListProps,
} from "@mui/joy";
import { ReactNode, memo } from "react";
import { Link, useMatch } from "react-router-dom";
import WebFont from "webfontloader";

export const Navigation = memo(function Navigation(
  props: NavigationProps,
): JSX.Element {
  const { sx, ...other } = props;
  WebFont.load({
    google: {
      families: ["Be Vietnam Pro"],
    },
  });

  return (
    <List
      sx={{ "--ListItem-radius": "4px", fontFamily: "Be Vietnam Pro", ...sx }}
      size="sm"
      role="navigation"
      {...other}
    >
      <NavItem
        path="/chatbot"
        label="Chatbot"
        icon={<QuestionAnswerOutlined />}
      />
      <NavItem
        path="/goodThingsDiary"
        label="Good Things Diary"
        icon={<BookOutlined />}
      />

      <NavItem path="/album" label="Photo Album" icon={<Photo />} />
      <NavItem
        path="/pleasantEventScheduling"
        label="Pleasant Event Scheduling"
        icon={<CalendarMonth />}
      />
      <NavItem
        path="/breathingExercise"
        label="Slow Breathing"
        icon={<AssignmentTurnedInOutlined />}
      />
      <NavItem
        path="/thoughtModificationRecord"
        label="Thought Modification Record"
        icon={<ReceiptLong />}
      />
      <NavItem
        path="/card"
        label="Crying Together, Laughing Together"
        icon={<ReceiptLong />}
        
      />
      <Box sx={{ height: "20" }}></Box>
      <br />
      <Divider />
      <NavItem
        path="/userDiaryRecord"
        label="User Good Things Diary Log"
        icon={<ReceiptLong />}
      />
      <NavItem
        path="/userPleasantEventSchedulingRecord"
        label="User Pleasant Event Scheduling Log"
        icon={<ReceiptLong />}
      />
      <NavItem
        path="/userBreathRecord"
        label="User Breathing Log"
        icon={<ReceiptLong />}
      />
      <NavItem
        path="/userThoughtModificationRecord"
        label="User Thought Modification Record Log"
        icon={<ReceiptLong />}
      />
      <NavItem
        path="/userAlbumRecord"
        label="User Photo Album Log"
        icon={<ReceiptLong />}
      />
    </List>
  );
});

function NavItem(props: NavItemProps): JSX.Element {
  return (
    <ListItem>
      <ListItemButton
        component={Link}
        selected={!!useMatch(props.path)}
        to={props.path}
        aria-current="page"
      >
        <ListItemDecorator children={props.icon} />
        <ListItemContent>{props.label}</ListItemContent>
      </ListItemButton>
    </ListItem>
  );
}

type NavigationProps = Omit<ListProps, "children">;
type NavItemProps = {
  path: string;
  label: string;
  icon: ReactNode;
};
