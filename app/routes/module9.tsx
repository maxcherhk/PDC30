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

export const Component = function Module9(): JSX.Element {
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
            Module 2.4 &nbsp;Avoid Reasoning and Direct Confrontation
          </strong>
        </p>
      </Box>
      <Box sx={quoteText}>
        <p>
          <em>Why argue about things you can’t prove?</em> — William
          Ruckelshaus, former U.S. Deputy Attorney General
        </p>
      </Box>
      <Divider />
      <Box sx={mainPoints}>
        <p>
          <strong>Main Points:</strong>
        </p>
        <ul style={{ listStyleType: "square", marginLeft: "-20px" }}>
          <li>
            Respect the relative’s altered reality. Show your understanding by
            validating the relative’s feelings and subjective reality. Avoid
            argument and coercion which will almost certainly lead to escalation
            of conflict.
          </li>
          <li>
            Instead of confronting the relative’s subjective reality, try
            tactics such as distraction and therapeutic lying, or simply take a
            time out. Aim, first and foremost, to stabilize the relative’s
            emotion and reduce tension within his/her altered reality.
          </li>
          <li>
            You are the mirror of the care-receiver’s emotional display. If
            he/she feels good, you will be too. Therefore, delight yourself by
            delighting your loved one.
          </li>
        </ul>
      </Box>
      <Divider />
      <Box sx={mainText}>
        <p>
          You cannot win an argument with someone with dementia, despite how
          unreasonable he/she seems. Individuals with dementia live in their own
          realities. What is real to them is real, to them! If your mother can
          only remember things 50 years ago when you were a small child, it is
          something as true to her as it is false to you. Even though you are
          her real son or daughter, you are only a “stranger” to her now, who
          nonetheless is her caretaker. If you insist that you are her adult
          child, she will only think that you are a deceiver with malicious
          motives.
        </p>
        <p>
          Caregivers are tempted to argue, especially when they are the subject
          of accusations. They feel compelled to set the record straight,
          especially when the allegations lead to misunderstandings among other
          family members. It is not uncommon for those with dementia to accuse
          their caregivers as a result of their memory errors or delusional
          beliefs. Care-receivers may claim that the caregiver did not serve
          them a meal because they forget they had eaten not too long ago. Some
          may think their caregivers have stolen money from their accounts
          because the balances are decreasing, without realizing they have spent
          the money themselves. If the caregiver has been authorized by the
          relative to help manage his/her account, thus having account access
          rights, this is unfortunately just the right material to complete a
          perfect story.
        </p>
        <p>
          Even if care-receivers make complaints or accusations that are
          offensive, do not attempt to reason and certainly avoid arguing.
          Whatever you do, you will not be able to convince individuals with
          dementia, but will only make them angrier and more defensive, suspect
          your motive, and even fight back. Sometimes, a counter-argument may
          actually feed into their belief systems, leaving them more convinced
          of their allegations. For example, if you are accused of stealing
          money and you deny it, the care-receiver may just think it is a
          typical “thief’s denial.” Thus, although the intention is to clarify
          and to get your loved one to cooperate by winning the argument, you
          may actually make things worse. Moreover, people with dementia are
          impaired in their reasoning ability; thus, even if you can get them to
          agree to certain facts, reasoning with them is a frustrating
          experience anyway.
        </p>
        <p>&nbsp;</p>
        <Grid container spacing={2} sx={imgWidth}>
          <img
            src="../public/comic/never argue with patient/1 arguing goes nowhere combine.png"
            width="100%"
            maxWidth="400"
            height="auto"
            alt="arguing goes nowhere"
          />
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={2} sx={imgWidth}>
          <img
            src="../public/comic/never argue with patient/2/2. take a break/2 take a break combine.png"
            width="100%"
            maxWidth="400"
            height="auto"
            alt="take a break"
          />
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={2} sx={imgWidth}>
          <img
            src="../public/comic/never argue with patient/3 distraction combine.png"
            width="100%"
            height="auto"
            alt="distraction"
          />
        </Grid>
        <p>&nbsp;</p>
        <p>
          There is no doubt that many situations faced by caregivers are
          annoying, while others are utterly heart-breaking. Despite how
          difficult the situations are, the following are some suggestions that
          caregivers can do. Family members should also be supportive and avoid
          blaming the caregiver without carefully collecting the facts and
          understanding things from the caregiver’s perspective.
        </p>
        <br />
        <ol style={{ listStyleType: "none", marginLeft: "-40px" }}>
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>&nbsp;Ignore and take a time out.</strong> If what is
                bothering you is the relative’s repetitive questioning and
                requests, try to play deaf or walk away for a little while. If
                that is not possible, try to keep yourself busy with something
                else. Some caregivers find it a good way to relax by putting on
                earphones, thus blocking out noises from the care-receiver and
                the environment, and listening to music for 15 minutes. After a
                short while, your loved one might have forgotten what he/she
                wanted from you, and you had a break to yourself!
                <p>
                  The same applies to uncooperative behavior. Your relative may
                  refuse to take a bath, to dress, to eat, or to take
                  medication. Sometimes, simply “ignore, wait, do something
                  else, and try again later” is enough to turn things around.
                  This is not a special strategy; we do that all the time when
                  we want to get someone to agree to something. Those with
                  dementia are no different, but family members may take certain
                  things, such as personal hygiene, for granted and consequently
                  feel annoyed by the relative’s noncompliance. When dealing
                  with persons with dementia, many assumptions need to be
                  abandoned. As said before, there are many potential reasons to
                  refuse to do something. They may feel embarrassed about their
                  clumsiness, attempt to protect their personal space or
                  privacy, suddenly become nervous for one reason or another, or
                  simply do not see the need to do it. They may also be bothered
                  by the side effects of medications but cannot articulate their
                  concerns.{" "}
                  <strong>
                    Do remember they, too, are struggling with the disease.
                  </strong>
                </p>
                <p>
                  Walking away, rather than attempting to exert behavioral
                  control, is usually a good strategy if the relative happens to
                  be physically aggressive. This will avoid getting hurt and
                  give both the relative and yourself a chance to calm down. If
                  your relative is reacting to something he/she believes you are
                  doing (which may or may not be true), your temporary
                  disappearance may just do the trick to cool things down a bit.
                  Whatever the reasons for the aggressive behavior, it is
                  typically not wise to try to convince the person that the
                  behavior is unjustified, as it will likely provoke him/her
                  further. Take a time out and come back later to see what can
                  be done. When the situation is less tense and you are calmer
                  yourself, options will open up and it will be easier to
                  identify sensible strategies under the circumstances.
                </p>
                <p>
                  If caregivers can and have to “walk away,” try to provide a
                  plausible and legitimate reason without hurting your loved
                  one’s feeling or feeding into his/her false beliefs. If
                  care-receivers do not understand why the caregiver is going
                  away or for how long, they may interpret the behavior
                  negatively, feeling that the caregiver continues to ignore
                  their requests or is off for a malicious purpose. Examples of
                  convenient excuses are going to the bathroom and making a
                  phone call. If you are really calling someone, it may not be a
                  bad idea to call a friend, a family member, or even a social
                  worker to vent and to seek advice. Nevertheless, it is
                  important that the care-receiver does not overhear your
                  conversation if it is about him/her.
                </p>
              </Grid>
            </Grid>
          </li>
        </ol>
        <ol style={{ listStyleType: "none", marginLeft: "-40px" }}>
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>&nbsp;Distract the care-receiver.</strong> Not all
                behavior problems can be dealt with by ignoring. When ignoring
                does not work or is not applicable given the circumstances,
                consider diverting your relative’s attention to something else.
                For example, if you ignore daddy’s repeated requests to be taken
                to his wife (who had passed away some time ago), he may just
                wander off to find his wife. A useful strategy would be to
                acknowledge his feelings toward his loving wife, thus making him
                feel that you understand him, but then redirect him to something
                interesting that will occupy his attention for a while. Asking
                him to help you with a chore is usually a good tactic. Most
                people consider it impolite or improper to refuse to offer help
                to someone who needs it. Alternatively, engaging your loved one
                in a topic of interest, such as interesting things that happened
                in a previous family holiday, may also work. Your loved one may
                soon forget what he/she had wanted in the first place. By trial
                and error, it is not that difficult to find a few things that
                can divert the relative’s attention so that one has a few tools
                to use when needed.
              </Grid>
            </Grid>
          </li>
          <br />
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>&nbsp;Play “games.”</strong> Suppose dad who misses his
                deceased wife is too restless to be distracted, it may be
                necessary to create some white lies. Telling the truth may not
                be wise because in dad's altered reality, it would feel like the
                first time he learns about the death of his wife—how shocking!
                Instead, you may tell dad that mom is traveling, or that mom is
                busy elsewhere and has called to say she will be late coming
                back. Such a tactic has been called <em>therapeutic lying</em>.
                All caregivers need is a moment of calmness by directing the
                relative to something else. Therapeutic lying is part of a
                broader class of strategy I have come to call{" "}
                <em>gamesmanship</em> in dementia care. Some people may find
                lying unacceptable. But if caregivers are dealing with their
                loved ones’ inner worlds which do not exist in reality, a white
                lie is just a form of language used to communicate with them.
                <p>
                  If you feel uncomfortable with lying tactics, think about
                  this: Is telling children that they would get presents from
                  Santa Claus for Christmas if they behave well, a lie? OK, I
                  know some parents who tell their kids flat out that there is
                  no Santa Claus. But what about complimenting your colleague
                  like “Hey, what a lovely tie!” when in fact… Well, you know
                  what I mean. We are dealing with a different reality here, and
                  different rules must apply. Note that if a person with
                  dementia can be brought back to this world, there was probably
                  no dementia to begin with! Whether you like it or not, playing
                  games and lying is part of the mindset change that family
                  members need to develop for effective caregiving.
                </p>
              </Grid>
            </Grid>
          </li>
        </ol>
        <br />
        <Grid container spacing={2} sx={imgWidth}>
          <img
            src="../public/comic/never argue with patient/4. white lies/4 white lies combine.png"
            width="100%"
            height="auto"
            alt="white lies"
          />
        </Grid>
        <br />
        <br />
        <br />
        <Box sx={secondTitle}>
          <p>
            <strong>Additional Remarks: Create Enjoyable Moments</strong>
          </p>
        </Box>

        <p>
          It should be apparent by now that the care-receiver’s emotional
          reaction is a key consideration in the choice of management
          strategies. The foregoing discussion can be generalized to a rule of
          thumb: Caregivers’ jobs are easier if their care-receivers are in a
          good mood, and vice versa. If the care-receiver flares up, it can ruin
          your day. A jolly or calm care-receiver is going to be more
          cooperative. Though it might not be easy, the cost of cheering your
          relative up is going to be a lot less than the price paid to deal with
          an agitated person. For instance, if your relative looks edgy when
          bathing, play some soothing music from his/her favorite playlist
          before and during bath time. In a similar vein, to make mealtimes more
          pleasurable, try to serve food with a variety of colors, tastes and
          textures. Mealtimes are usually more pleasant when one is eating with
          someone close; it would be nice if you can adjust your pace of eating
          so that you two would be enjoying the meal together for old times’
          sake.
        </p>
        <p>&nbsp;</p>
        <Box sx={{ position: "relative" }}>
          <Button
            sx={{ position: "absolute", left: "10px", top: "0px" }}
            component={Link}
            to="/module8"
          >
            Previous Module
          </Button>
          <Button
            sx={{ position: "absolute", right: "10px", top: "0px" }}
            component={Link}
            to="/module10"
          >
            Next Module
          </Button>
          <p>&nbsp;</p>
        </Box>
      </Box>
    </Container>
  );
};
