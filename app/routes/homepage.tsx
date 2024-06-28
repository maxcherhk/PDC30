import { Container, Typography } from "@mui/joy";
import WebFont from "webfontloader";
import { usePageEffect } from "../core/page";

const fontStyle = { fontFamily: "Didact Gothic", fontSize: "1.2rem" };

export const Component = function Homepage(): JSX.Element {
  usePageEffect({ title: "Dashboard" });

  WebFont.load({
    google: {
      families: ["Didact Gothic"],
    },
  });

  return (
    <Container sx={{ py: 2 }}>
      <Typography
        sx={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}
        level="h2"
        gutterBottom
        style={{ fontFamily: "Didact Gothic" }}
      >
        Positive Dementia caregiving
      </Typography>
      <div
        style={{
          maxWidth: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/lbVi_aY_o1Q?si=2pnlt0rVFzDYBIey"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <br />
      <Typography style={fontStyle}>Program introduction</Typography>
    </Container>
  );
};
