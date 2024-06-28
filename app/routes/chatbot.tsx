import { Container, Typography, useColorScheme } from "@mui/joy";
import { Helmet } from "react-helmet";
import WebFont from "webfontloader";
import { usePageEffect } from "../core/page";

const fontStyle = { fontFamily: "Didact Gothic" };
export const Component = function Chatbot(): JSX.Element {
  usePageEffect({ title: "Tasks" });
  const { mode } = useColorScheme();
  WebFont.load({
    google: {
      families: ["Didact Gothic"],
    },
  });
  let item = "";
  return (
    <Container
      sx={{ py: 2, zIndex: 50 }}
      backgroundColor={mode === "dark" ? "black" : "white"}
    >
      <Typography
        level="h2"
        gutterBottom
        style={{
          fontFamily: "Didact Gothic",
          textAlign: "center",
          fontSize: "2rem",
        }}
      >
        Chatbot
      </Typography>
      <Helmet>
        {/* <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
          <script src="https://mediafiles.botpress.cloud/82ad06f2-6974-4b0d-9960-53c01145c8ba/webchat/config.js"></script> */}
        {/* <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/1c91e33b-0693-4c5d-9cb9-efeac04b60ee/webchat/config.js"></script> */}
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script
          src="https://mediafiles.botpress.cloud/f88b7900-5ea2-4e3d-98f6-2efd3ff02fba/webchat/config.js"
          defer
        ></script>
      </Helmet>
    </Container>
  );
};
