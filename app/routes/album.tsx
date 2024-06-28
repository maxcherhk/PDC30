/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { Box, Button, Typography } from "@mui/joy";
import { Link } from "react-router-dom";
import WebFont from "webfontloader";
import InstagramPost from "../components/InstagramPost";
import { usePageEffect } from "../core/page";

const fontStyle = { fontFamily: "Didact Gothic" };

export const Component = function Album(): JSX.Element {
  usePageEffect({ title: "Dashboard" });

//   let imagesURL = [];

//   axios.get('http://localhost:3000/album', {
//   params: {
//     userEmail: auth.currentUser.email
//   }
// }).then((response) => {
//   imagesURL = response.data;
// }).catch((error) => {
//   console.error(error);});



  // const cardLimit = 99;
  // const cardContainer = useRef(null);

  // useEffect(() => {
  //   console.log("myContainer..", cardContainer.current);
  // });
  // const cardContainer = document.getElementById("card-container");
  // const cardCountElem = document.getElementById("card-count");
  // const cardTotalElem = document.getElementById("card-total");
  // const loader = document.getElementById("loader");
  // cardTotalElem.innerHTML = cardLimit;
  // const cardIncrease = 3;
  // const pageCount = Math.ceil(cardLimit / cardIncrease);
  // let currentPage = 1;
  // const handleInfiniteScroll = () => {
  //   const endOfPage =
  //     window.innerHeight + window.scrollY >= document.body.offsetHeight;
  //   if (endOfPage) {
  //     addCards(currentPage + 1);
  //   }
  // };
  // window.addEventListener("scroll", handleInfiniteScroll);
  WebFont.load({
    google: {
      families: ["Didact Gothic"],
    },
  });

  const albums = [
    {
      postUserName: "henry2",
      postContent: "hello",
      postTime: "1/3/22323",
      postComment: "hh",
    },
    {
      postUserName: "henry",
      postContent: "hello",
      postTime: "1/3/22323",
      postComment: "hh",
      imgURL: "https://picsum.photos/1400/700",
    },
    {
      postUserName: "henry3",
      postContent: "hello",
      postTime: "1/3/22323",
      postComment: "hh",
      imgURL: "https://picsum.photos/1200/600",
    },
  ];

  // function createCard(i: number) {
  //   const card = document.createElement("div");
  //   card.className = "card";
  //   card.innerHTML = `<div class="card-header">Card ${i}</div>`;
  //   cardContainer.appendChild(card);
  // }

  // const addCards = (pageIndex: number) => {
  //   currentPage = pageIndex;
  //   const startRange = (pageIndex - 1) * cardIncrease;
  //   const endRange =
  //     currentPage == pageCount ? cardLimit : pageIndex * cardIncrease;

  //   cardCountElem.innerHTML = endRange;
  //   for (let i = startRange + 1; i <= endRange; i++) {
  //     createAlbum(i);
  //   }
  // };
  // window.onload = function () {
  //   addCards(currentPage);
  // };
  // window.addEventListener("scroll", handleInfiniteScroll);

  function feedAlbum(albums: Array<string>) {
    return albums.map((album) => {
      return <InstagramPost {...album} />;
    });
  }
  // postUserName="henry"
  //       postContent="hello world"
  //       noOfLike="4"
  //       postTime="1/3/2024"
  //       postComment=""
  //       imgURL="https://picsum.photos/800/600"
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">

        <Typography sx={fontStyle} level="h2" style={fontStyle}>
          Photo Album
        </Typography>
        <Button
          sx={{ location: "fixed" }}
          component={Link}
          to="/postAlbumPage"
          style={fontStyle}
        >
          Post
        </Button>
      </Box>
      {feedAlbum(albums)}
      {/* <div ref={cardContainer}></div>
      <div id="loader">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
      <div class="card-actions">
        <span>
          Showing
          <span id="card-count"></span> of
          <span id="card-total"></span> cards
        </span>
      </div> */}
      {/* <InstagramPost {...firstUser} /> */}
      <InstagramPost
        postUserName="Alex"
        postContent="testing multiline content testing multiline content testing multiline content testing multiline content testing multiline content testing multiline content testing multiline content testing multiline content testing multiline content testing multiline content testing multiline content testing multiline content testing multiline content testing multiline content testing multiline content testing multiline content"
        postTime="28/2/2024"
        postComment=""
        imgURL="https://picsum.photos/1024/768"
      />
      <InstagramPost
        postUserName="Tesla"
        postContent="hello world"
        postTime="22/2/2024"
        postComment=""
        imgURL="https://picsum.photos/802/600"
      />
      <InstagramPost
        postUserName="Oscar"
        postContent="It is my first post!"
        postTime="18/2/2024"
        postComment=""
        imgURL="https://picsum.photos/799/600"
      />
      <InstagramPost
        postUserName="Larry"
        postContent="Testing2"
        postTime="16/2/2024"
        postComment=""
        imgURL="https://picsum.photos/798/600"
      />
      <InstagramPost
        postUserName="henry"
        postContent="Testing"
        postTime="15/2/2024"
        postComment=""
        imgURL="https://picsum.photos/800/601"
      />
      {/* <Container sx={{ py: 2 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr", md: "1fr 1fr" },
            gap: 2,
          }}
        >
          <Card sx={{ gridArea: "1 / 1 / 2 / -1" }}>
            <CardContent sx={{ minHeight: 300 }}>
              <Typography level="h3">Card title</Typography>
              <Typography>Card content</Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent sx={{ minHeight: 150 }}>
              <Typography level="h3">Card title</Typography>
              <Typography>Card content</Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent sx={{ minHeight: 150 }}>
              <Typography level="h3">Card title</Typography>
              <Typography>Card content</Typography>
            </CardContent>
          </Card>
        </Box>
      </Container> */}
    </>
  );
};
