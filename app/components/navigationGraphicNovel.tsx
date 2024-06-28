import { ReceiptLong } from "@mui/icons-material";
import {
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

export const NavigationGraphicNovel = memo(function Navigation(
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
      {/* <Typography
        sx={{
          marginLeft: "10px",
          marginRight: "10px",
          fontFamily: "Be Vietnam Pro",
          fontSize: "1rem",
        }}
      >
        &nbsp;Part 1: Taking Care of Yourself Amidst Caregiving Challenges
      </Typography> */}
      <Divider />
      <NavItem path="/module1" label="Ch.1" icon={<ReceiptLong />} />
      <NavItem path="/module2" label="Ch.2" icon={<ReceiptLong />} />
      {/* <Divider />
      <NavItem path="/module2" label="Module 1.2" icon={<ReceiptLong />} />
      <Divider />
      <NavItem path="/module3" label="Module 1.3" icon={<ReceiptLong />} />
      <Divider />
      <NavItem path="/module4" label="Module 1.4" icon={<ReceiptLong />} />
      <Divider />
      <NavItem path="/module5" label="Module 1.5" icon={<ReceiptLong />} />
      <Divider />
      <Typography
        sx={{
          marginLeft: "10px",
          marginRight: "10px",
          fontFamily: "Be Vietnam Pro",
          fontSize: "1rem",
        }}
      >
        &nbsp;Part 2: Dealing With Cognitive and Behavioral Problems
      </Typography>
      <Divider />
      <NavItem path="/module6" label="Module 2.1" icon={<ReceiptLong />} />
      <Divider />
      <NavItem path="/module7" label="Module 2.2" icon={<ReceiptLong />} />
      <Divider />
      <NavItem path="/module8" label="Module 2.3" icon={<ReceiptLong />} />
      <Divider />
      <NavItem path="/module9" label="Module 2.4" icon={<ReceiptLong />} />
      <Divider />
      <NavItem path="/module10" label="Module 2.5" icon={<ReceiptLong />} /> */}
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
        <ListItemContent
          sx={{ fontFamily: "Be Vietnam Pro", fontSize: "0.9rem" }}
        >
          {props.label}
        </ListItemContent>
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
