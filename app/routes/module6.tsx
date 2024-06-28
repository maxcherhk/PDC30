import BookmarkIcon from "@mui/icons-material/Bookmark"; //add this
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined"; //add this
import { Box, Button, Container, Divider, IconButton } from "@mui/joy"; // add this
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

export const Component = function Module6(): JSX.Element {
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
          <strong>Module 2.1 &nbsp;Find Out What Triggers the Behavior</strong>
        </p>
      </Box>
      <Box sx={quoteText}>
        <p>
          <em>
            I’m curious about people. That’s the essence of my acting. I’m
            interested in what it would be like to be you.
          </em>{" "}
          — Meryl Streep, actress
        </p>
      </Box>
      <Divider />
      <Box sx={mainPoints}>
        <p>
          <strong>Main Points:</strong>
        </p>
        <ul style={{ listStyleType: "square", marginLeft: "-20px" }}>
          <li>
            Try to identify the reason(s) for the challenging behavior from the
            perspective of the care-receiver, which could lie in the environment
            (e.g., noise, lighting) or within the person (e.g., unmet needs,
            perceptions).
          </li>
          <li>
            Understanding the reason(s) behind a certain behavior will help you
            decide on the appropriate response.
          </li>
          <li>
            Behaviors are more easily managed if the care-receiver is
            comfortable.
          </li>
        </ul>
      </Box>
      <Divider />
      <Box sx={mainText}>
        <p>
          Problematic behaviors brought on by dementia are not easy to handle
          and would not go away easily (though symptomatic manifestation will
          change as the disease progresses). Some behaviors may repeat on a
          daily basis while others happen all of a sudden. With time, behavior
          problems tend to become less troublesome as caregivers settle into a
          daily routine.
        </p>
        <p>
          Managing behavior problems does not mean suppressing them or solving
          them once and for all; it means giving them a controlled expression
          and handling them in a way that makes them tolerable. This requires
          mastering certain tactics, creative improvisation, and also adopting a
          flexible perspective to see solutions in different ways. Also needed
          is a readiness to embrace setbacks from time to time.
        </p>
        <p>
          It should be noted that behavior problems are not solely a product of
          brain changes. The physical and the psychosocial environment also play
          a role. For instance, a busy marketplace with all the hustle and
          bustle can be quite overwhelming, while a place that is dimly lit can
          confuse the patient’s biological clock. In other words, a behavior
          problem can be triggered by factors internal to the person and those
          external to the person, or most likely, an interaction between the
          two. Making conscious attempts to understand what triggers a problem
          behavior is key to addressing it.
        </p>
        <p>
          One reason for problematic behaviors, an internal one, is that{" "}
          <em>the person feels&nbsp;</em>certain basic needs are not being met.
          Actions are then taken by the person to reduce the discomfort. From
          this point of view, the behavior, however strange it seems, is quite
          legitimate and logical. The phrase “the person feels” is italicized
          above to emphasize that what the person with dementia thinks and feels
          may not be objectively sound or justified. Yet, it is what the person
          thinks and feels inside that really matters.
        </p>
        <p>
          According to psychologist Abraham Maslow, physiological needs, safety
          needs, relationship needs, and esteem needs are some of the basic
          human needs. Physiological needs cover things like food, water, sleep,
          bowel movement, sex, and so on. Safety needs may include shelter,
          protection from harm, and financial security. For relationship needs,
          one seeks companionship, intimacy, love and belongingness. Esteem
          needs include respect and recognition for one’s conduct, achievements,
          and contributions. What is important to know is that these are basic
          human needs and that they are no different among persons with
          dementia. Those with dementia, too, need to feel respected. For
          instance, though they may be clumsy at the dining table, they would
          appreciate positive encouragement and rewards for handling the meal
          themselves while they can, rather than being fed in order to get over
          mealtime as quickly as possible.
        </p>
        <p>
          When they feel their needs are not met or being threatened, they will
          do what they think is necessary to satisfy their needs or defend their
          rights. If they find a situation humiliating, whether it is because of
          the caregiver’s body language or because of their own inability to do
          certain tasks, they may refuse the situation or even attack the
          caregiver in order to get away. Being helped to bathe, which can be
          quite embarrassing to begin with, is often such a situation.
          Similarly, hiding personal items all over the place because they are
          thought to be at risk of being stolen is a very logical behavior, only
          that the person may forget where he/she has hidden the items.
          Likewise, wandering could arise when the person feels insecure and
          wants to return to a familiar surroundings (such as a childhood
          setting with favorable memory) or is, simply, looking for the toilet
          but does not know how to express the need to the carer.
        </p>
        <p>
          On the other hand, if those with dementia do not feel that an unmet
          need exists, despite suggestions to the contrary, they may not comply
          with requests to perform certain tasks. For example, they may not want
          to sleep because of a disrupted biological clock. They may also refuse
          to bathe because they do not feel the need to; note that they may have
          gotten used to a less rigorous hygiene or simply cannot smell the
          odor.
        </p>
        <p>
          It is perhaps necessary to point out that the same behavior may have
          different underlying reasons. For instance, not eating may be due to a
          loss of appetite, changes in taste sensation, inability to express
          food preference, feeling tired, difficulty with using utensils, not
          being able to tell food items apart from the plate, having too much
          food on the table and not knowing what to choose, being rushed to eat
          (as when dining out), being distracted by environmental noise during
          mealtime, difficulty swallowing, or even delusion of poisoning. Thus,
          aside from bodily, psychological and cognitive issues, environmental
          factors do contribute to behavior problems, and more will be covered
          later. Under most circumstances, what the trigger is, is a hypothesis
          to be tested by examining whether the relative would respond by
          reducing or stopping the behavior when its (hypothesized) source is
          tackled.
        </p>
        <p>
          Obviously, as in the above example about not eating, different
          reasons, or their combinations, require different solutions or
          responses from the caregiver. Hence, identifying the underlying
          reason(s) is crucial to helping the relative effectively. However, due
          to a number of factors, such as lack of insight and language deficits,
          those with dementia may not be able to articulate what they think and
          feel inside and what causes them to behave in a certain way. This is
          especially true as the disease progresses. Even at the mild stage,
          people may feel vaguely that “something weird” is causing their
          functional and behavioral issues, but cannot pinpoint what, why and
          how. Often, the burden of identifying the reason(s) behind a problem
          behavior lies with those who care for the person.
        </p>
        <p>
          In general, one should take notice of what seems to be happening{" "}
          <em>prior to</em> the behavior. For example, is there a pattern (e.g.,
          happening around the same time every day) that can be observed? The
          triggering event, if it has to do with something external to the
          person, usually happens immediately before the behavior concerned. For
          internal reasons, the caregiver’s sensitivity and observation, as well
          as knowledge of the relative, will be crucial. Always try to see
          things from the care-receiver’s perspective — one that is molded by
          the dementing disease. To do so, family members need to be sensitive
          to the care-receiver’s needs, feelings, attitudes, and preferences,
          and how these are shaped by the progression of the disease. This is
          the basis for <em>compassionate understanding</em>. An anonymous poem
          posted in Lothian Royal Infirmary of Edinburgh (reproduced below
          partially) sums it up so well:
        </p>
        <Box sx={speechText}>
          <Box sx={{ textAlign: "center" }}>
            <p>
              <i>
                When I wander, don’t tell me to come and sit down. Wander with
                me. It may be because I’m hungry, thirsty, need the toilet. Or
                maybe I just need to stretch my legs.
              </i>
            </p>
            <p>
              <em>
                When I call for my mother (even though I’m ninety!) don’t tell
                me she has died. Reassure me, cuddle me, ask me about her. It
                may be that I am looking for the security that my mother once
                gave me.
              </em>
            </p>
            <p>
              <em>
                When I shout out please don’t ask me to be quiet … or walk by. I
                am trying to tell you something, but have difficulty in telling
                you what. Be patient. Try to find out. I may be in pain.
              </em>
            </p>
            <p>
              <em>
                When I become agitated or appear angry, please don’t reach for
                the drugs first. I am trying to tell you something. It may be
                too hot, too bright, too noisy. Or maybe it’s because I miss my
                loved ones. Try to find out first.
              </em>
            </p>
            <p>
              <em>
                When I don’t eat my dinner or drink my tea, it may be because
                I’ve forgotten how to. Show me what to do, remind me. It may be
                that I just need to hold my knife and fork I may know what to do
                then.
              </em>
            </p>
            <p>
              <em>………..</em>
            </p>
            <p>
              <em>
                Perhaps it will be you who reaches my thoughts, understands my
                fears, and will make me feel safe.
              </em>
            </p>
          </Box>
        </Box>

        <p>
          Meryl Streep, on a comment about acting quoted at the beginning of the
          chapter, gave a very good piece of advice that is relevant also for
          caregivers and other helpers. To have that <em>curiosity</em> about
          what the dementing disease does to the person and what it is like for
          your loved one to have this disease inside would make a big difference
          to the manner in which the caregiving journey is traveled. This
          compassionate understanding also informs the choice of strategies to
          manage the behaviors. As we will see, a fundamental principle in
          dealing with someone with dementia is:{" "}
          <strong>
            Do not confront the person’s altered reality despite how bizarre it
            seems.
          </strong>{" "}
          Rather, family members should attempt to enhance the quality of life
          of the impaired relative within his/her subjective reality as much as
          possible. The next few chapters are based on this basic premise.
        </p>

        <p>&nbsp;</p>
        <br />
        <Box sx={{ position: "relative" }}>
          <Button
            sx={{ position: "absolute", left: "10px", top: "0px" }}
            component={Link}
            to="/module5"
          >
            Previous Module
          </Button>
          <Button
            sx={{ position: "absolute", right: "10px", top: "0px" }}
            component={Link}
            to="/module7"
          >
            Next Module
          </Button>
          <p>&nbsp;</p>
        </Box>
      </Box>
    </Container>
  );
};
