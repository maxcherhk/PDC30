/* eslint-disable */
import {
  Button,
  Container,
  SvgIcon,
  Textarea,
  Typography,
  styled,
} from "@mui/joy";
import Divider from "@mui/material/Divider";
import axios from "axios";
import * as React from "react";
import WebFont from "webfontloader";
import { auth } from "../core/firebase";
import { usePageEffect } from "../core/page";
import { albumPhotoAtom, albumStoryAtom, store } from "../core/store";

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
async function handleClick() {
  const email = auth.currentUser.email;
  const formData = store.get(albumPhotoAtom);
  const userStory = store.get(albumStoryAtom);
  const time = Date.now();
  const UTCdate = new Date().toUTCString();
  const dayString = new Date().toDateString();
  const json = {
    userEmail: email,
    time: time,
    UTCdate: UTCdate,
    dayString: dayString,
    story: userStory,
  };
  formData.append("metadata", JSON.stringify(json));

  axios
    .post(
      "http://localhost:3000/album",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }, //change to server ip address
    )
    .then((response) => {
      console.log("image uploaded successfully");
      alert("image uploaded successfully");
    })
    .catch((error) => {
      console.log("Image upload failed");
      alert("image upload failed");
    });
}

const fontStyle = { fontFamily: "Didact Gothic", fontSize: "1.2rem" };

export const Component = function PostAlbumPage(): JSX.Element {
  usePageEffect({ title: "Dashboard" });
  const [text, setText] = React.useState("");
  const [previewImage, setPreviewImage] = React.useState(null);

  const addEmoji = (emoji: string) => () => setText(`${text}${emoji}`);
  WebFont.load({
    google: {
      families: ["Didact Gothic"],
    },
  });
  return (
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
        Photo Album
      </Typography>
      <Typography sx={{ fontFamily: "Didact Gothic", fontSize: "1.2rem" }}>
        This app helps you review your shared history with the care-receiver and
        rekindle your bond with him or her. Please find a favorite photo that
        helps you remember the care-receiver or past moments that you have
        shared with him or her, and write down some thoughts about it in the
        text box below.
      </Typography>
      <Button
        component="label"
        sx={fontStyle}
        role={undefined}
        tabIndex={-1}
        variant="outlined"
        color="neutral"
        startDecorator={
          <SvgIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>
          </SvgIcon>
        }
      >
        Upload a pic
        <VisuallyHiddenInput
          type="file"
          onChange={async (event: any) => {
            const file = event.target.files[0];
            const maxFileSize = 1024 * 1024 * 10; // 10MB
            const allowedFileTypes = ["image/jpeg", "image/png"];
            if (!allowedFileTypes.includes(file.type)) {
              alert("Invalid file type. Please upload a JPG or PNG image.");
              return;
            }

            if (file.size > maxFileSize) {
              alert(
                "File is too large, please upload a file smaller than 10MB.",
              );
              return;
            }
            const formData = new FormData();
            formData.append("image", file);
            store.set(albumPhotoAtom, formData);

            const fileURL = URL.createObjectURL(file);
            setPreviewImage(fileURL);
          }}
        />
      </Button>
      <Divider />
      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          style={{ width: "100%", height: "auto" }}
        />
      )}
      <br />
      {/* <IconButton
        isClick={() => {
          toggleEmoji;
        }}
      ></IconButton>
      <div ref={pickerContainer}></div> */}

      <Textarea
        placeholder="Type your story or reflection here…"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
          store.set(albumStoryAtom, event.target.value);
        }}
        minRows={2}
        maxRows={4}
        endDecorator={
          <Typography level="body-xs" sx={{ ml: "auto" }}>
            {text.length} character(s)
          </Typography>
        }
        sx={{ minWidth: 300 }}
      />
      <br />
      <Typography
        sx={{ fontFamily: "Didact Gothic", fontSize: "1.2rem", color: "blue" }}
      >
        Press the Save button below to save your input. After saving, you can
        find your record in the User Photo Album Log under the Apps Menu.
      </Typography>
      <Typography
        sx={{
          fontFamily: "Didact Gothic",
          marginBottom: "10px",
          fontSize: "1.2rem",
          color: "blue",
        }}
      >
        If you do not press Save, or if you navigate to a different page/app,
        your input here will be lost.
      </Typography>

      <Button sx={fontStyle} onClick={handleClick}>
        Save
      </Button>
    </Container>
  );
};
