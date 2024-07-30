/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */
import { Button, Container, Textarea, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import "../components/css/card.css";
import { usePageEffect } from "../core/page";

const fontStyle = { fontFamily: "Didact Gothic" };

const positiveEmotions = [
  "admiration",
  "appreciation",
  "happy",
  "grateful",
  "overjoyed",
  "accepted",
  "proud",
  "gratified",
  "inspired",
  "excited",
  "loved",
  "valued",
  "calm",
  "thrilled",
  "amazing",
  "relaxed",
  "respected",
  "esteemed",
  "unconditionally loved",
  "comfortable",
  "comforted",
  "energized",
  "confident",
  "encouraged",
  "determined",
  "complete",
  "motivated",
  "understood",
  "special",
  "fortunate",
  "courageous",
  "tranquil",
  "blessed",
  "reassured",
  "fascinated",
  "intrigued",
  "secure",
  "touched",
  "hopeful",
  "needed",
];

const negativeEmotions = [
  "disgusted",
  "terrified",
  "anxious",
  "embarrassed",
  "bewildered",
  "ashamed",
  "angry",
  "scared",
  "helpless",
  "sad",
  "shocked",
  "hopeless",
  "inadequate",
  "lonely",
  "miserable",
  "regretful",
  "unappreciated",
  "unwanted",
  "upset",
  "worthless",
  "frustrated",
  "dejected",
  "disappointed",
  "discouraged",
  "abandoned",
  "betrayed",
  "hostile",
  "displeased",
  "intimidated",
  "ambivalent",
  "jealous",
  "guilty",
  "misunderstood",
  "humiliated",
  "bored",
  "ridiculous",
  "ignored",
  "manipulated",
  "alienated",
  "resentful",
];

export const Component = function Card(): JSX.Element {
  usePageEffect({ title: "Dashboard" });
  WebFont.load({
    google: {
      families: ["Didact Gothic"],
    },
  });

  const [initialChoice, setInitialChoice] = useState<string | null>(null);
  const [period, setPeriod] = useState<string>("");
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [cardDrawn, setCardDrawn] = useState<boolean>(false);
  const [animationClass, setAnimationClass] = useState<string>("");

  const handleInitialChoice = () => {
    const choices = ["Something you did", "Something we did together"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setInitialChoice(randomChoice);
  };

  const handleDrawCard = () => {
    setAnimationClass("animate");
    const allEmotions = [...positiveEmotions, ...negativeEmotions];
    const randomEmotion =
      allEmotions[Math.floor(Math.random() * allEmotions.length)];
    setSelectedEmotion(randomEmotion);
    setCardDrawn(true);
  };

  useEffect(() => {
    if (animationClass) {
      const timer = setTimeout(() => setAnimationClass(""), 500); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [animationClass]);

  return (
    <>
      <Container sx={{ py: 2 }}>
        <Typography
          sx={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center" }}
          level="h2"
          gutterBottom
          style={{ fontFamily: "Didact Gothic" }}
        >
          Crying Together, Laughing Together
        </Typography>
        <div className="card-container">
          {!initialChoice && (
            <div className="introduction">
              <p>
                Welcome to the game! First, you will get a random pick for one
                of the following:
              </p>
              <ul>
                <li>Something you did</li>
                <li>Something we did together</li>
              </ul>
              <p>Next, you can choose a period for storytelling, such as:</p>
              <ul>
                <li>Daughter’s early/kindergarten years</li>
                <li>Primary school years</li>
                <li>Junior high years</li>
                <li>Senior high years</li>
                <li>College years</li>
                <li>Others...</li>
              </ul>
              <p>Click the button below to start the game!</p>
              <Button onClick={handleInitialChoice}>Start</Button>
            </div>
          )}
          {initialChoice && (
            <p className="initial-choice-text">{initialChoice}</p>
          )}

          {initialChoice && (
            <>
              <label>
                Enter the period<br></br>
                <Textarea
                  type="text"
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                />
              </label>
              <br />
              <Button onClick={handleDrawCard}>
                {cardDrawn ? "Redraw" : "Draw a Card"}
              </Button>
            </>
          )}

          {selectedEmotion && (
            <div className={`card ${animationClass}`}>
              {period && <p className="periodText">{period}</p>}
              {selectedEmotion && <p className="cardText">{selectedEmotion}</p>}
            </div>
          )}
        </div>
      </Container>
    </>
  );
};
