import BookmarkIcon from "@mui/icons-material/Bookmark"; //add this
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined"; //add this
import { Box, Button, Container, Divider, Grid, IconButton } from "@mui/joy"; // add this
import { useRef } from "react"; //add this
import { Link } from "react-router-dom";
import WebFont from "webfontloader";
import { usePageEffect } from "../core/page";

const imgWidth = {
  width: "40%",
  marginLeft: "auto",
  marginRight: "auto",
  justifySelf: "center",
  alignSelf: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media(max-width: 780px)": {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    justifySelf: "center",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const speechText = {
  level: "body-lg",
  fontFamily: "Ysabeau",
  fontStyle: "italic",
  fontWeight: "500",
  lineHeight: "1.4",
  margin: "1vh 6vw 1vh 6vw",
  fontSize: "1.29rem",
};

const quoteText = {
  level: "body-lg",
  fontFamily: "Urbanist",
  fontWeight: "500",
  lineHeight: "1.4",
  margin: "1vh 1vw 1vh 1vw",
  fontSize: "1.1rem",
};

const title = {
  level: "h3",
  fontFamily: "Nunito Sans",
  fontWeight: "900",
  textAlign: "center",
  fontSize: "2rem",
};

const moduleTitle = {
  level: "h3",
  fontFamily: "Lexend Deca",
  fontWeight: "600",
  textAlign: "left",
  fontSize: "1.2rem",
};

const comicText = {
  level: "body-md",
  fontFamily: "Didact Gothic",
  fontWeight: "400",
  fontSize: "1.15rem",
  lineHeight: "1.2",
};

const mainPoints = {
  level: "body-lg",
  fontFamily: "Quicksand",
  fontWeight: "bold",
  lineHeight: "1.55",
  textAlign: "left",
  fontSize: "1.01rem",
};

const textContainer = {
  padding: "10vh 5vw 10vh 5vw",
  py: 2,
};

const mainText = {
  level: "body-lg",
  fontFamily: "Poppins",
  lineHeight: "1.7",
  textAlign: "left",
  fontSize: "1.06rem",
};

const secondTitle = {
  fontFamily: "Lexend Deca",
  fontWeight: "500",
  textAlign: "left",
  fontSize: "1.15rem",
};

export const Component = function Module7(): JSX.Element {
  const searchInput = useRef(null); //added this line
  usePageEffect({ title: "Tasks" });
  let atMiddlePage = false;
  WebFont.load({
    google: {
      families: [
        "Nunito Sans",
        "Carrois Gothic",
        "Quicksand",
        "Droid Sans",
        "Droid Serif",
        "Roboto Condensed",
        "Montserrat",
        "Poppins",
        "Urbanist",
        "Ysabeau:i5",
        "Didact Gothic",
        "Lexend Deca",
      ],
    },
  });
  let atPageEnd = false;
  window.scrollTo(0, 0);
  if (atMiddlePage == false) {
    window.onscroll = function () {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight / 2
      ) {
        // you're at the bottom of the page
        if (atMiddlePage == false) {
          //alert("middle of page");
        }

        atMiddlePage = true;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        // you're at the bottom of the page
        if (atPageEnd == false) {
          //alert("You're at the bottom of the page");
          atPageEnd = true;
        }
      }
    };
  }
  const handleSearch = () => {
    const searchTerm = searchInput.current.value;
    window.find(searchTerm);
  };

  const handleBookmark = () => {
    const scrollPosition = window.scrollY;
    localStorage.setItem("bookmark1", String(scrollPosition));
  };

  const handleLoadBookmark = () => {
    const bookmark = localStorage.getItem("bookmark1");
    if (bookmark) {
      window.scrollTo(0, Number(bookmark));
    }
  };
  return (
    <Container sx={textContainer}>
      <div style={{ position: "fixed", right: "0", top: "50px" }}>
        <IconButton variant="soft" onClick={handleBookmark}>
          <BookmarkAddOutlinedIcon />
        </IconButton>
        <br />
        <IconButton variant="soft" onClick={handleLoadBookmark}>
          <BookmarkIcon />
        </IconButton>
      </div>

      <div style={{ position: "fixed", right: "100px", top: "50px" }}>
        <input
          height="30"
          placeholder="Search here..."
          ref={searchInput}
          type="text"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <Box sx={moduleTitle}>
        <p>
          <strong>
            Module 2.2 &nbsp;Simplify His Life, and Simplify Yours
          </strong>
        </p>
      </Box>
      <Box sx={quoteText}>
        <p>
          <em>
            Simple can be harder than complex; you have to work hard to get your
            thinking clean to make it simple. But it’s worth it in the end
            because once you get there, you can move mountains.
          </em>{" "}
          — Steve Jobs, Apple co-founder and former CEO
        </p>
      </Box>
      <Divider />
      <Box sx={mainPoints}>
        <p>
          <strong>Main Points:</strong>
        </p>
        <ul style={{ listStyleType: "square", marginLeft: "-20px" }}>
          <li>
            Without being overly protective or condescending, adjust your
            expectations and interactions with the care-receiver in tandem with
            his/her ability level. This may include:
          </li>
          <ul style={{ listStyleType: "none", marginLeft: "-30px" }}>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Communicate using simpler words/sentences with clear-cut
                messages;
              </li>
            </div>

            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                When the relative has difficulty finding words, supply the
                essential words in a tactful fashion to help the relative feel
                he/she is understood;
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Break a task into multiple steps, give instruction one step at a
                time, allow more time to complete the task, and use verbal and
                behavioral cues if necessary;
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Serve small meals multiple times rather than one regular meal;
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Use clothing items and utensils that are easier to handle;
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Minimize choices but leave as much room as possible for
                care-receivers to make the final decisions for themselves.
              </li>
            </div>
          </ul>

          <li>
            While trying to be helpful, avoid making the relative feel
            embarrassed because of his/her diminished ability.
          </li>
        </ul>
      </Box>
      <Divider />
      <Box sx={mainText}>
        <p>
          In this and the next few modules, we will go over some important
          guidelines or principles for dealing with behavioral and related
          problems. Unlike other sources that offer a “cookbook” of solutions,
          the guidelines presented here are intended to help caregivers{" "}
          <em>think</em> about the situations they face and formulate their own
          preferred methods. I find such an approach better and more helpful
          overall, because a tip that works for one may not work for another,
          and because the changing manifestation of dementia requires continuous
          adaptation on the part of the caregiver. Caregivers need to
          problem-solve and improvise all the time. By understanding a few
          parameters and using them to analyze the situation, caregivers may
          approach each situation with insight and ingenuity, thus creating more
          options for themselves.
        </p>
        <Box sx={secondTitle}>
          <p>
            <strong>Simplify Things and Slow Down</strong>
          </p>
        </Box>

        <p>
          Having dementia means that a person’s mental ability has been
          significantly compromised. What seemed ordinary before is now a
          difficult task. They may not be able to identify certain objects, may
          not comprehend what’s going on, may have forgotten how to do certain
          things or to do them in a proper sequence, or may have trouble
          navigating through a familiar environment. If caregivers are not
          considerate of their relatives’ limitations, not only will they set
          themselves up for frustration, but they will also embarrass their
          loved ones constantly. Sometimes, caregivers may be unwilling to
          acknowledge their relatives’ limitations because of denial. On the
          other hand, intervening too quickly or doing everything for the
          relative, especially when the disease is in the early stage, is to be
          avoided as your relative may find it condescending or may sense your
          underlying disgust for his/her condition. There is a delicate balance
          between doing what is needed to get things done on the one hand, and
          respecting your loved one’s dignity and autonomy on the other.
        </p>
        <p>
          As has been said repeatedly, accepting the new reality imposed by the
          dementing disease is the first step to effective caregiving. From
          acceptance comes compassion, enabling the caregiver to see the real
          needs of the relative. However, compassion should not be overdone. Not
          fighting the disease does not mean taking over everything from the
          relative all at once. People with dementia are nonetheless human
          individuals and, like everyone else, need to feel secure, respected,
          and good about themselves. Caregivers need to engage them positively
          in everyday activities, and let them do things and take care of
          themselves as much as possible in a safe and non-threatening
          environment. Thus, those with dementia need things simplified for them
          and to be given more time to do even simple things, while feeling
          supported lovingly but not pitied. If caregivers take over too much
          and too soon, their loved ones will feel annoyed and perhaps angry
          that their personal boundaries are disrespected, and may even hit back
          to defend their subjective boundaries. Hence, while family members may
          be tempted to do it all to make things easier for the care-receiver
          (and probably for themselves as well), their attempts may actually
          backfire. Family members need to be patient and gentle when
          interacting with their relative whose abilities are compromised.
        </p>
        <p>
          Here are a few things to consider to make everyday activities more
          comfortable for the care-receiver:
        </p>
        <br />
        <ol style={{ listStyleType: "none", marginLeft: "-40px" }}>
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>
                  &nbsp;Divide procedures into smaller steps and do things one
                  step at a time.
                </strong>{" "}
                People with dementia get confused about how things are done.
                They may not be able to plan the sequence of actions to get
                things done, or mix up the purposes of different objects. In any
                case, they will benefit from concrete instructions that guide
                them through things step by step. Even a seemingly simple task
                such as wearing shoes may need to be broken down into a series
                of elemental actions, like “Put the sock on the left foot, put
                the sock on the right foot, now put on the left shoe ….” and so
                on. Don’t rush, as your loved one may need more time to process
                the instruction. Oral instructions should also be given in
                simple sentences while encouragement and compliments along the
                way are helpful.
                <p>
                  The steps have to be appropriate to the person’s ability
                  level; for those who are more capable, the instructions can be
                  less simplified, like “Put on your socks, great, now your
                  shoes …, you look great, let’s go.” If care-receivers find the
                  instructions too trivial, they may get irritated and feel
                  stigmatized by their own family. On the other hand, if the
                  instructions are too complicated, the care-receiver will be
                  frustrated and confused. The right amount of elaboration is
                  usually obtained by trial and error.
                </p>
                <p>
                  In a similar vein, when talking with your impaired relatives,
                  try to make it easier for them to participate in the
                  conversation. Do not make them talk about complicated matters.
                  Even if you have to, break a complex question into several
                  simple ones. When the relative cannot find a word, try to
                  supply it and finish the sentence for him/her in a subtle
                  manner (do not embarrass the relative by making it obvious).
                  Make it a pleasant conversation for both of you and make your
                  loved one feel respected. Avoid baby talk, for instance — your
                  loved one may have lost some abilities but he/she is not a
                  baby!
                </p>
              </Grid>
            </Grid>
          </li>
        </ol>
        <p>&nbsp;</p>

        <Grid container spacing={2} sx={imgWidth}>
          <Box>
            <img
              src="/comic/small steps_wear shoes/steps (shoes).png"
              width="100%"
              maxWidth="400"
              height="auto"
              alt="step by step wearing shoes"
            />
          </Box>
          <figcaption style={comicText}>
            Steps that may be taken to guide the relative to wear shoes.
          </figcaption>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={2} sx={imgWidth}>
          <Box>
            <img
              src="/comic/small steps_brew tea/steps (tea).png"
              width="100%"
              maxWidth="400"
              height="auto"
              alt="step by step brewing tea"
            />
          </Box>
          <figcaption style={comicText}>
            Steps that may be taken to guide the relative in making tea. Note
            that the number of steps and instructions have to be appropriate to
            the relative’s ability level, not too difficult, but not too easy as
            well.
          </figcaption>
        </Grid>
        <br />
        <br />

        <ol style={{ listStyleType: "none", marginLeft: "-40px" }}>
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>&nbsp;Items that are easier to handle.</strong> You may
                have seen big and color-buttoned phones, shoes with magic
                straps, utensils with bigger or special handles, anti-slid cups,
                and so on. Cutting food into manageable or edible portions,
                which could be served as finger food, will also help when your
                loved one displays difficulties with using certain utensils. For
                those with drinking difficulties due to a weak sucking action,
                there are straws with a one-way valve to trap liquid inside the
                tube (after straw is separated from lips) for easier sucking.
              </Grid>
            </Grid>
          </li>
          <br />
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>&nbsp;More about one “step” at a time.</strong> Perhaps
                not so apparent is how routine meal serving can benefit from
                this consideration. As said before, many factors can start to
                make feeding difficult. A plate with less food on it is easier
                to handle for persons with dementia. As a result, they may end
                up eating more when given small but more frequent meals per day.
                For those with a poor appetite, such a schedule may also work
                better because they may well be persuaded to eat again (however
                small a portion) after forgetting they had eaten not too long
                ago.
              </Grid>
            </Grid>
          </li>
          <br />
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>&nbsp;Prompt the care-receiver with cues.</strong> For
                obvious reasons, hints, suggestions, or signals of various sorts
                would help those with dementia to compensate for declines in
                ability. There are verbal and nonverbal cues. Oral instructions
                discussed above are verbal cues. At the initial stages, verbal
                prompts are usually sufficient. As patients’ situations
                deteriorate, more help is needed for even simple procedures.
                People with dementia have trouble getting things done because
                they have lost the conceptual meaning of objects and tools and
                have trouble planning, coordinating, and executing
                purpose-driven action sequences. To assist them, oral
                instructions may be supplemented by gesture cues, like
                pretending to unbutton yourself while asking the relative to
                undress, or using body language to direct the relative’s gaze to
                specific objects when they are referred to in a conversation. In
                addition, those with apathy have difficulty initiating
                behaviors, and so it will help sometimes if caregivers take the
                relative’s hand(s) and start the initial action — this, along
                with a few encouraging words, will usually be enough to activate
                the behavior, provided that the person is willing to perform the
                task. In a similar vein, gently touch the relative’s lip with
                the straw or spoon (containing food) may help initiate the
                drinking/eating action.
                <p>
                  As a rule of thumb, use cues only when it is necessary. Just
                  as a task needs to be broken up into steps, help should also
                  be delivered bit by bit to avoid inadvertently giving an
                  impression of being patronizing.
                </p>
              </Grid>
            </Grid>
          </li>
        </ol>
        <ol
          style={{
            listStyleType: "none",
            marginLeft: "-40px",
            marginTop: "-25px",
          }}
        >
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>
                  &nbsp;Try to be straightforward and minimize choices.
                </strong>{" "}
                Too many choices would present difficulty for those with
                dementia because of their impaired ability to process
                information and make decisions. They may feel confused and
                pressured, and, as a result, become irritable or withdraw from
                participation. Suppose it is a festive occasion and there is a
                big family dinner at a restaurant. You ask your mom what to wear
                and give her four different outfits to choose from. The outfits
                are all gorgeous and her favorites. You thought mom would be
                delighted to see them, but instead she looks perplexed and is
                unsure what to do. Instead of feeling excited about dressing up
                and meeting other family members, she may end up refusing to go.
                This time, it’s the caregiver who feels perplexed, not knowing
                why the relative would behave this way.
                <p>
                  It seems natural to allow our loved ones to choose whatever
                  outfits they like most. And isn’t providing choices a gesture
                  of respect? True, but it is respect from the point of view of
                  the relative, not yours. In the above example, the caregiver
                  may pick one outfit and say, “Hey, this looks nice. You look
                  great in it. Will you wear this at the dinner tonight?” By
                  doing something like this, the caregiver is not forcing mom to
                  put on anything against her wish, and there is still an
                  element of choice in the sense that mom can choose to wear
                  this particular outfit or not. This question is much easier to
                  handle. Alternatively, the caregiver may start by offering two
                  choices to mom. If that seems to present a challenge to her,
                  the caregiver may pick one and say, “This one seems to look
                  better …” Caregivers may consider this as a general strategy
                  but not necessarily a mechanical approach. Your loved one may
                  not do well with decision-making generally but may perform
                  better in certain domains. For instance, if mom was a tailor
                  before, she may take interest in selecting what to wear,
                  although she is considerably poorer in making other decisions.
                  Most importantly, whatever care-receivers are given to do, it
                  is something that is appropriate to their level of functioning
                  — not too challenging, but not too simple either.
                </p>
                <p>
                  The aforesaid takes me to a more general point about being
                  tactfully straightforward with someone with dementia. Whether
                  it is a choice to be made or a piece of instruction, make it
                  simple and straightforward. For instance, say “It’s time to
                  bath,” but not “Do you want to take a bath now, or wait till
                  after dinner?” Yes, you give the relative two choices but they
                  are bad choices; even if the relative agrees to bathe after
                  dinner, he/she may well forget what was said by the time
                  dinner is over. Avoid also questions that do not have a
                  clear-cut answer, such as “Do you think it is a good day to go
                  to the countryside?” Ambiguities will likely confuse those
                  with dementia. However, it is important to note that being
                  straightforward does not mean being blunt and coercive, or
                  else your relative will be upset. Be tactful and sensitive to
                  your loved one’s feelings. There are no one-size-fits-all
                  rules when dealing with individuals with dementia and often
                  caregivers learn through trial and error.
                </p>
                <p>
                  It is important to be <em>respectfully</em> direct when
                  dealing with someone with dementia. At the same time, being
                  direct does not mean merely passing out commands. In fact, it
                  is better that the commands, if they are meant to be, do not
                  sound like commands so that the relative does not feel like a
                  lesser person. Direct commands may be appropriate when more
                  abilities are lost in the advanced stages, but even so, it is
                  important to convey to care-receivers that their preferences
                  have been duly taken into account.
                </p>
              </Grid>
            </Grid>
          </li>
        </ol>
        <p>&nbsp;</p>
        <Grid container spacing={2} sx={imgWidth}>
          <img
            src="/comic/simple sentence/1 simple sentence (dont).png"
            width="100%"
            height="auto"
            alt="sentences too complex"
          />
        </Grid>
        <br />
        <br />

        <Grid container spacing={2} sx={imgWidth}>
          <img
            src="/comic/simple sentence/2 simple sentence (do).png"
            width="100%"
            maxWidth="400"
            height="auto"
            alt="use simple sentences to communicate"
          />
          <figcaption
            style={{
              level: "body-md",
              fontFamily: "Didact Gothic",
              fontWeight: "400",
              fontSize: "1.15rem",
              lineHeight: "1.2",
            }}
          >
            Use simple sentences with straightforward messages.
          </figcaption>
        </Grid>
        <br />
        <br />
        <br />
        <Grid container spacing={2} sx={imgWidth}>
          <img
            src="/comic/limit choice/1 limit choice (dont).png"
            width="100%"
            height="auto"
            alt="too many choices confuse care-receiver"
          />
        </Grid>
        <br />
        <br />
        <Grid container spacing={2} sx={imgWidth}>
          <img
            src="/comic/limit choice/2 limit choice (do).png"
            width="100%"
            maxWidth="400"
            height="auto"
            alt="people with dementia cope better with limited choices"
          />

          <figcaption
            style={{
              level: "body-md",
              fontFamily: "Didact Gothic",
              fontWeight: "400",
              fontSize: "1.15rem",
              lineHeight: "1.2",
            }}
          >
            Limit number of choices. Avoid embarrassing the care-receiver with
            messages or questions that he/she cannot handle.
          </figcaption>
        </Grid>

        <p>&nbsp;</p>
        <ol style={{ listStyleType: "none", marginLeft: "-40px" }}>
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>&nbsp;More on straightforwardness</strong>
                <strong>.</strong> It should be clear by now that the language
                used should be tailored to the relative’s cognitive level. With
                time, simpler and simpler expressions are needed. What is not
                immediately apparent is that the meaning of some common words
                can become ambiguous to the person with dementia. For example,
                your relative may look perplexed when you say “Come on, sit over
                here,” not knowing what you mean by “here.” It may make your
                life easier by being more specific, like “Come on, sit on the
                blue couch” while using your hand to gesture the spot.
              </Grid>
            </Grid>
          </li>
          <br />
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>
                  &nbsp;Start early if things need to be done by a certain time.
                </strong>{" "}
                It follows from the above that, for people with dementia, more
                time is needed to get things done, which will get lengthier and
                lengthier with more functional decline. Tasks are now broken
                down into multiple sub-tasks, each requiring guidance and
                assistance. But there is one more consideration about how much
                spare time one needs — those with dementia may change their
                minds for no apparent reason. For instance, even if caregivers
                have reminded their relatives of a doctor’s appointment numerous
                times and heard no objection to it, their relatives may suddenly
                change their minds the moment before they need to leave home.
                There is not one particular reason why those with dementia may
                change their minds all of a sudden — something about the
                doctor’s visit that they do not like (such as having body parts
                touched by the doctor/nurse), wanting to be escorted by their
                own spouse instead (who may be just standing right in front of
                them), or simply feeling hungry. Under such circumstances,
                caregivers need to go back to square one and because things like
                doctor’s visits are time-sensitive, feelings of frustration and
                annoyance are understandable. How to resolve the situation
                depends. One caregiver I knew told his wife that they were going
                to audition for a TV show and somehow got the doctor and the
                nurses to agree to pretend that the clinic was a studio. He
                thought this might work because his wife had always enjoyed talk
                shows, and it did. By the time his wife arrived at the doctor’s
                office, she had forgotten why she was there. Whatever the
                solution may be, one thing is clear: allow yourself more time to
                deal with any situation that involves a person with dementia.
              </Grid>
            </Grid>
          </li>
        </ol>
        <Box sx={secondTitle}>
          <p>
            <strong>Make Things Predictable</strong>
          </p>
        </Box>

        <p>
          Predictability adds to simplicity and also gives the relative a better
          sense of security. Some behavior problems, such as irritability,
          rummaging, and even delusions, can be triggered by a sense of
          insecurity. Problems with initiation are less likely and
          care-receivers are more ready to engage when there are regular daily
          schedules. Moreover, people with dementia are generally calmer and
          will get into arguments less often when they are accustomed to
          predictable routines from one day to another.
        </p>
        <p>
          A regular schedule is not a panacea but a good schedule will save you
          plenty of trouble from having to persuade the relative to do things
          each time. People with dementia are impaired in many ways including
          the ability to start and to switch activities. Thus, they can be
          helped by getting into a routine, such as bathing, eating, taking a
          walk, playing word games, drawing, taking naps, and so on at about the
          same times every day. Do remember to include joint activities that you
          yourself would find enjoyable.
        </p>
        <p>
          Having said the above, it does not mean you should run these daily
          schedules in a rigid way and adhere to them regardless of, say,
          special occasions and the chance to try out new activities. Moreover,
          if the usual time for a certain activity (e.g., bathing) is passed
          because of a special event, it may be better to skip the activity for
          the day unless it is a crucial one, than to disrupt the remaining
          schedule by insisting that it should be done. Again, do not sacrifice
          peacefulness for some preconceived notion of cleanliness or tidiness.
          Be flexible and be ready to adapt to changing circumstances, including
          deterioration of the relative.
        </p>

        <p>&nbsp;</p>
        <Box sx={{ position: "relative" }}>
          <Button
            sx={{ position: "absolute", left: "10px", top: "0px" }}
            component={Link}
            to="/module6"
          >
            Previous Module
          </Button>
          <Button
            sx={{ position: "absolute", right: "10px", top: "0px" }}
            component={Link}
            to="/module8"
          >
            Next Module
          </Button>
          <p>&nbsp;</p>
        </Box>
      </Box>
    </Container>
  );
};
