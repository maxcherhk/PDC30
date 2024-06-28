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
  //fontStyle: "italic",
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

export const Component = function Module2(): JSX.Element {
  usePageEffect({ title: "Tasks" });
  const searchInput = useRef(null); //added this line
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
            Module 1.4 &nbsp;<em>How</em> You See It, Not What You See
          </strong>
        </p>
      </Box>
      <Divider />
      <Box sx={mainPoints}>
        <p>
          <strong>Main Points:</strong>
        </p>
        <ul style={{ listStyleType: "square", marginLeft: "-20px" }}>
          <li>
            Our emotions are influenced by our thinking styles. A negative
            thinking style engenders negative emotions, and vice versa.
          </li>
          <li>
            Whether feeling good or bad, you are going to do this job anyway. So
            why not think more positively so that it becomes a more enjoyable
            job?
          </li>
          <li>
            Indeed, most caregivers find providing care to their loved ones a
            rewarding experience from time to time.
          </li>
          <li>
            Like a silver lining, positive rewards will light up your day, and
            may help to sustain your motivation as a caregiver.
          </li>
          <li>
            It is possible to train yourself to see more silver linings. Keep
            using the Thought Modification Record to practice how to turn gloom
            into bloom.
          </li>
        </ul>
      </Box>
      <Divider />
      <Box sx={mainText}>
        <p>
          It was a cold winter in early 1994. A young woman recently separated
          from her Portuguese husband had to borrow money from a good friend to
          move into a rental flat in Edinburgh with her infant daughter. A few
          years ago, her mother, to whom she was close, had died after years of
          struggling with multiple sclerosis, and her father had subsequently
          remarried. A failed marriage after only two years, unemployment,
          single parenthood, and poverty had made her feel that her life “had{" "}
          <em>failed</em> on an <em>epic</em> scale [italics added hereafter for
          emphasis],” plunging her into severe depression. She became “terrified
          something was going to happen to her [daughter]. Because I think I got
          into that very depressive mindset ... where <em>everything’s</em> gone
          wrong ... so this one good thing in my life will now go wrong as well.
          It was almost a surprise to me every morning that she was still alive.
          I kept expecting her to die or — it was a bad bad time.”
        </p>
        <p>
          With just three chapters of her first major novel completed, yet
          without any money, J. K. Rowling decided to devote full time in
          Edinburgh to continue doing what she was best at — writing — while
          struggling with depression and child care as a single mother. She
          described her depression as “characterized … by a numbness, a coldness
          ... and an inability to believe that you will feel happy again ... or
          that you could feel lighthearted again. It was just all the color
          drained out of life, really.” These feelings were then personified as{" "}
          <em>Dementors</em> in her best-selling <em>Harry Potter</em> novels,
          which are “ among the foulest creatures that walk this earth. They
          infest the darkest, filthiest places. They glory in decay and despair.
          They drain peace, hope, and happiness out of the air around them … Get
          too near a Dementor and every good feeling, every happy memory will be
          sucked out of you. If it can, the Dementor will feed on you long
          enough to reduce you to something like itself … soulless and evil. You
          will be left with nothing but the worst experiences of your life.”
        </p>
        <p>
          To fight the Dementor, J. K. Rowling created the Patronus Charm, “a
          guardian which acts as a shield between you and the Dementor ... The
          Patronus is a kind of positive force, a projection of the very things
          that the Dementor feeds upon — hope, happiness, and the desire to
          survive … Many qualified wizards have difficulty with it … Each
          [Patronus] is <em>unique</em> to the wizard who <em>conjures</em> it …
          with an incantation, which will work only if you are concentrating,
          with all your might, on a single, very happy memory.” (Materials above
          were taken from <em>J. K. Rowling&nbsp;</em>
          <em>—</em>
          <em>&nbsp;A Year in the Life</em>, ITV documentary, 2007 and Rowling’s
          speech at Harvard University’s Commencement in 2008.)
        </p>
        <p>
          Not everyone with a short-lived marriage like J. K. Rowling would
          believe that it represents a total personal failure. Thus, what an
          event means to the person is a matter of interpretation that is
          influenced by the person’s attitudes and beliefs. A sense of failure
          implied that she saw certain things as a must in her life, and she was
          not able to secure them. Because of various stressors including a
          failed marriage, she plunged into such deep depression that apparently
          only “magic” could rescue her from it. If we may call Rowling “master”
          of the wizards (since she created them), she clearly knew the way to
          get rid of the Dementor, yet was fully aware of how difficult it would
          be to focus on that single, very happy memory or thought, so that
          “many qualified wizards have difficulty with it.” In reality,
          Dementors are not creatures that exist in a different dimension. We
          all have Dementors, as well as Patroni, resident in our minds. They
          are our tendency to dwell on negative and positive thoughts,
          respectively.
        </p>
        <Box sx={quoteText}>
          <p style={{ margin: "0 5vw 0 5vw" }}>
            <em>
              Life is like a prism, what you see depends on how you turn the
              glass.
            </em>
            — Jonathan Kellerman, psychologist and novelist
          </p>
        </Box>

        <p>
          What a coincidence that the last element of the PRISM model is the
          “prism” itself. Different light spectrum is revealed by turning the
          prism. Likewise, different revelations emerge when we change the angle
          at which we look at events. What a deep-rooted belief does is to{" "}
          <em>automatically</em> set up your viewpoint and the way you behave
          when a particular situation arises. For example, for a perfectionistic
          caregiver, a small problem would seem like a catastrophe, giving rise
          to harmful emotions. But beliefs also serve to justify such emotions,
          as it only makes sense to feel horrible after a catastrophe. Thus,
          unless the thinking patterns are changed, the negative emotions stay.
          Consider the two caregivers below:
        </p>
        <Box sx={speechText}>
          {/* <div className="flex flex-row flex-nowrap"> */}
          <p>
            <Box sx={mainText}>Caregiver A :</Box>
            <em>
              If I cannot keep an eye on my mom and she gets lost, I am useless.
            </em>{" "}
          </p>
          {/* </div> */}
          <p>
            <Box sx={mainText}>Caregiver B :</Box>
            <em>
              I worry about my mom getting lost. I don’t know when she will
              start to forget the way home. If it happens, I just hope the GPS
              location device will come to the rescue. I can only do my best,
              but it seems that with dementia, incidents will happen regardless
              of what you do.
            </em>{" "}
          </p>
        </Box>

        <p>
          Which of these caregivers will probably go a further distance in the
          caregiving journey? If you want, you can use the Thought Modification
          Record (available on the Apps menu) to record how you react to
          different incidents in daily life to help you understand the thought
          processes that drive your emotions. If you find that you have been
          preoccupied with negative thoughts, you may want to know that many
          caregivers have developed helpful cognitions instead, a phenomenon
          referred to as <em>positive aspects of caregiving</em>.
        </p>
        <Box sx={secondTitle}>
          <p>
            <strong>Every Cloud Has a Silver Lining</strong>
          </p>
        </Box>

        <Box sx={quoteText}>
          <p style={{ margin: "0 5vw 0 5vw" }}>
            <em>
              Your joy is your sorrow unmasked ... The deeper that sorrow carves
              into your being, the more joy you can contain.
            </em>{" "}
            — Kahlil Gibran, poet
          </p>
        </Box>

        <p>
          Caring for a relative with dementia is not always a dire scenario.
          There are enjoyments and satisfactions from time to time. Sometimes
          there is laughter. Most of the time there are tears. But when laughter
          and tears are mixed together on a regular basis, neither of them feels
          the same. It is a special chemistry humankind has known since the
          beginning of days. Silver linings are beautiful because they are rays
          of light with a dark cloud as the backdrop. Even the brain is innately
          wired to see beauty in the contrast between gloom and bloom.
        </p>
        <p>
          Photographers have known about this for a long time. They would
          sometimes produce pictures of portraits or landscapes showing high
          contrasts between bright and dark colors (or between shades in black
          and white pictures). As the name implies, this practice is called
          high-contrast photography.
        </p>
        <p>
          When sadness is interrupted by joy, despite how brief such moments
          are, there is hope and something to look forward to. More importantly,
          the bitter tears change one’s psychological makeup in the long term,
          so that one becomes more sensitive to positive events and finds
          blessings more readily in daily experiences. Things that would not be
          noticed or have much effect ordinarily, would now arouse a deep and
          lingering sense of satisfaction. It is this sense of satisfaction, as
          well as other rewarding experiences, that keep caregivers going
          despite all the hardships. Incidentally, many philosophers and
          thinkers, Aristotle and Buddha included, have suggested that happiness
          that emerges from hard labor and suffering is more robust and durable
          than simple or sensual pleasure.
        </p>
        <p>
          Surveys show that more than two-thirds of caregivers experience one or
          more rewards from providing care to a relative with dementia. These
          rewards are personal and subjective; they are meaningful to the
          individual only. In fact, caregivers often disagree about the nature
          of events that occur to them, so that the same event could be
          interpreted as negative to some but positive to others. This
          underscores not only the uniqueness of each caregiving journey, but
          also the importance of interpretation in defining the experience. The
          rewards can be intrinsic (e.g., a sense of satisfaction) or extrinsic
          (e.g., appreciation from the care-receiver), and, as we will see,
          include emotional, cognitive, behavioral, and interpersonal aspects.
          They are testimonies that caregivers do gain something important from
          the relationship and interactions with their loved ones. Thus, the
          caregiver does not just give, but{" "}
          <em>takes something back in return</em>, and it is an important
          awareness that continues to fuel the motivation to provide care
          (remember the ‘I’ in PRISM).
        </p>
        <Box sx={secondTitle}>
          <p>
            <strong>Themes of Positive Rewards</strong>
          </p>
        </Box>

        <p>
          In the scientific literature, the terms <em>reward</em>,{" "}
          <em>benefit</em>, and <em>gain</em> are used to denote similar
          concepts. They will be used interchangeably here. The themes below
          were derived from nearly 700 diaries by family caregivers. While these
          diaries were written by Hong Kong Chinese caregivers, similar themes
          were reported by caregivers around the world. These rewards are
          important because they represent personal growth beyond the realm of
          caregiving — caregivers remark that the way they think of life at
          large and deal with other challenging situations have changed as well:
        </p>
        <p>1 ) Acceptance of dementia through gaining knowledge;</p>
        <p>
          2 ) Finding purpose in caring for a close relative and committing to
          the role;
        </p>
        <p>
          3 ) Feelings of satisfaction and gratitude, especially when the
          care-receiver is doing well;
        </p>
        <p>
          4 ) A sense of mastery from finding ways to handle the relative’s
          problems;
        </p>
        <p>5 ) Increased patience and tolerance;</p>
        <p>6 ) Being able to let go of things that have become unrealistic;</p>
        <p>7 ) Closer bonding with the care-receiver;</p>
        <p>8 ) Finding support and appreciating those who care;</p>
        <p>9 ) Being able to help others in a similar situation; and</p>
        <p>
          10) &nbsp;Staying positive and humorous in difficult circumstances.
        </p>
        <p>
          Importantly, one positive reward may provide the breeding ground for
          another. It certainly does not mean all caregivers would experience
          the full range of rewards or the same reward to the same extent. In
          fact, just as some caregivers experience minimal burden, others do not
          find caregiving to be rewarding at all. But caregivers who experience
          rewards tend to enjoy not one, but multiple rewards. And according to
          caregivers, everything appears to start with acceptance. Without
          acknowledging the effects of dementia on the relative, the caregiver
          would be prone to blaming the relative for causing problems or being
          uncooperative, causing strain on the relationship. This being the
          case, the caregiver would not be able to find the responsibility
          agreeable, see any meaningful purpose in it, and so on.
        </p>
        <p>
          Unless caregivers identify with the role and commit to it, they will
          unlikely be motivated to learn and master the skills necessary for
          taking care of the relative. This is of course not easy and the skills
          do not always work. Thus, one can imagine how gratified caregivers
          would be if their loved ones appear to be responsive, giving them more
          confidence in the role. A caregiver who is satisfied will find the job
          more enjoyable. Satisfaction is also derived from helping other
          caregivers using one’s experiences.
        </p>
        <p>
          Nevertheless, however knowledgeable, skilled, and tactful one is,
          taking care of someone with dementia is still immensely stressful.
          Although strategies to manage behavioral and cognitive symptoms are
          available, they do not make the symptoms go away and new issues come
          up here and there across many years. The circumstances often challenge
          caregivers to their limit, so that any help received becomes more
          valuable than ever. Thus, relationships with others would strengthen.
        </p>
        <p>
          Besides obtaining social support, caregivers need to find ways to stay
          calm and keep up the spirits despite what they have to go through day
          in and day out. How can they better manage their emotions? Most
          caregivers learn to become more patient when dealing with their
          relatives with compromised abilities. Additionally, they make use of
          humor and meaning construction to turn challenging events into amusing
          and positive encounters. This requires caregivers to be{" "}
          <em>flexible</em> in the way they look at things and avoid taking
          issues too seriously, not a small feat to accomplish indeed. Also
          important for caregivers is being able to let bygones be bygones.
          Acknowledging that a part of your relative is gone, yet being able to
          find something positive and enjoyable in daily interactions with
          him/her, is a key aspect of a rewarding journey shared by the two of
          you.
        </p>
        <p>
          Here in Hong Kong, we pioneered a benefit-finding intervention in
          which caregivers attended in-person workshops to learn about care
          skills and practice construction of positive rewards. After 8 weeks of
          intervention in a randomized clinical trial, the caregivers reported a
          lot more positive rewards and their depression and sense of burden
          decreased, lasting up to 10 months after the end of the intervention.
          It was possible to attribute the effects to the benefit-finding
          component because the intervention was compared with a control that
          had everything identical except the benefit-finding component. This
          new intervention program you are going through is an online adaptation
          of that program with added features to strengthen specific aspects of
          the program.
        </p>
        <p>
          These themes of positive reward will be reviewed in great depth in the
          next module. But before doing that, it is important to point out that
          nurturing a positive mindset does not mean suppressing all the
          negative thoughts. Thought suppression is usually counter-productive
          and is very tiring. By embracing more and more blessings, the negative
          thoughts will bother you less. It is often said that caregiving is a
          bittersweet journey, as pain and pleasure exist side by side.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              Often, the source of happiness was my mom. The source of
              unhappiness was also my mom. But in fact, she did not give me too
              much hard time. There were many things that made me happy at the
              same time.
            </em>
          </p>
          <p>
            <em>
              The most unforgettable experience is over meals — every day, my
              husband keeps asking for food in a way that really annoys me. But
              he would say he’s worried you don’t have enough to eat! You feel
              the warmth. You want to cry and laugh at the same time.
            </em>
          </p>
          <p>
            <em>
              I went to a nearby neighborhood to buy food and went back home
              after about an hour. As soon as I entered the door, my husband
              said to me angrily, “Where have you been? You’ve been gone for
              half a day. I’ve been watching TV for several hours. I tried to
              look for you from over the balcony. I didn’t know where you were….
              I was so worried about you! … I was worried something happened to
              you…. [Sigh] I told him already before I went out.… I don’t know
              whether I should feel angry or funny…. But I discovered that my
              husband was thinking about me all the time. I’m so happy.
            </em>
          </p>
        </Box>
        <br />
        <Box sx={{ position: "relative" }}>
          <Button
            sx={{ position: "absolute", left: "10px", top: "0px" }}
            component={Link}
            to="/module3"
          >
            Previous Module
          </Button>
          <Button
            sx={{ position: "absolute", right: "10px", top: "0px" }}
            component={Link}
            to="/module5"
          >
            Next Module
          </Button>
          <p>&nbsp;</p>
        </Box>
      </Box>
    </Container>
  );
};
