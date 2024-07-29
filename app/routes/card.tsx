/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */
import {
  Container,
  Typography
} from "@mui/joy";
import { useState } from 'react';
import WebFont from "webfontloader";
import '../components/css/card.css';
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
  const [period, setPeriod] = useState<string>('');
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);

  const handleInitialChoice = () => {
    const choices = ["Something you did", "Something we did together"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setInitialChoice(randomChoice);
  };

  const handleDrawCard = () => {
    const allEmotions = [...positiveEmotions, ...negativeEmotions];
    const randomEmotion = allEmotions[Math.floor(Math.random() * allEmotions.length)];
    setSelectedEmotion(randomEmotion);
  };

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
          {!initialChoice && (<button onClick={handleInitialChoice} className="start-button">Start</button>)}
          {initialChoice && <p className="initial-choice-text">{initialChoice}</p>}
          
          {initialChoice && (
            <div>
              <label>
                Enter the period<br></br>
                <input 
                  type="text" 
                  value={period} 
                  onChange={(e) => setPeriod(e.target.value)} 
                  className="period-input"
                />
              </label>
              <br />
              <button onClick={handleDrawCard} className="draw-button">Draw a Card</button>
            </div>
          )}
          
          {selectedEmotion && (
            <div className="card">
              <p className="cardText">{selectedEmotion}</p>
            </div>
          )}
        </div>
        </Container>
      </>
  );
};
