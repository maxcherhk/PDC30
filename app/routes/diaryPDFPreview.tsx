import { Box, Button, Container, Typography } from "@mui/joy";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import WebFont from "webfontloader";
import { usePageEffect } from "../core/page";
import {
  diaryContentAtom,
  diaryDateAtom,
  diaryThemeAtom,
  store,
} from "../core/store";

export const Component = function DiaryPDFPreview(): JSX.Element {
  usePageEffect({ title: "Tasks" });
  const diaryDate = store.get(diaryDateAtom);
  const diaryTheme = store.get(diaryThemeAtom);
  const diaryContent = store.get(diaryContentAtom);

  WebFont.load({
    google: {
      families: ["Didact Gothic"],
    },
  });

  const downloadPDF = () => {
    const input = document.getElementById("content-to-print");
    html2canvas(input)
      .then((canvas: any) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "JPEG", 0, 0);
        pdf.save("download.pdf");
      })
      .catch((error: any) => {
        console.error("Error generating PDF:", error);
      });
  };

  return (
    <Container>
      <div id="content-to-print">
        <Box
          sx={{
            width: "400px",
            height: "564px",
            border: "solid",
            padding: "10px",
          }}
        >
          <Typography sx={{ marginBottom: "20px" }}>Good Things Diary</Typography>

          <Typography sx={{ marginBottom: "20px" }}>
            Date: {diaryDate}
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            Theme: {diaryTheme}
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            Diary: {diaryContent}
          </Typography>
        </Box>
      </div>
      <Button sx={{ left: "5%", marginTop: "10px" }} onClick={downloadPDF}>
        Download PDF
      </Button>
    </Container>
  );
};
