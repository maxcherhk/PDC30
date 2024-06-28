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
        "Ysabeau:i5",
        "Nunito Sans",
        "Carrois Gothic",
        "Quicksand",
        "Droid Sans",
        "Droid Serif",
        "Roboto Condensed",
        "Montserrat",
        "Poppins",
        "Urbanist",
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
      <Box sx={mainText}>
        <Box sx={moduleTitle}>
          <p>
            <strong>Module 1.5 &nbsp;</strong>
            <strong>Find a Reason to Feel Good Every Day</strong>
          </p>
        </Box>
        <Box sx={quoteText}>
          <p>
            <em>
              Everyday may not be good … but there is something good in
              everyday.
            </em>{" "}
            — Alice Morse Earl, historian
          </p>
        </Box>
        <Divider />
        <Box sx={mainPoints}>
          <p>
            <strong>Main Points:</strong>
          </p>
          <ul style={{ listStyleType: "square", marginLeft: "-20px" }}>
            <li>
              A flexible mindset can turn a frustrating situation into a
              rewarding experience. With this in mind, whether you look more on
              the bright side or zoom in on the gloomy aspects, is your personal
              choice.
            </li>
            <li>
              Don’t just focus on the troubles caused by the relative. Engage in
              alternative thinking: How can I see the situation differently? How
              might a different response work in this situation?
            </li>
            <li>
              Common themes of positive rewards include, but are not limited to,
              seeing purpose in the caregiving role, feeling one has done
              something good and special, becoming more patient and tolerant,
              enjoying more intimate time and connection with the care-receiver,
              and feeling empowered through helping others in a similar
              situation.
            </li>
            <li>
              It is possible to increase positive rewards by practicing
              alternative thinking. With sufficient practice, one can look at a
              situation from multiple angles and, consequently, formulate
              different response options.
            </li>
          </ul>
        </Box>
        <Divider />
        <p>
          Searching for positive meanings is a personal journey; the constructed
          meaning may carry significance for one person but not another. Bearing
          that in mind, let’s now look at each of the reward themes in depth,
          using examples from the caregivers’ diaries in my study (note that
          some quotes may contain ideas relevant to more than one theme). These
          narratives are valuable because they provide rich illustrations of
          positive rewards arising from or existing side by side with everyday
          hardship, as well as the thought processes and strategies used to
          achieve them. In other words, they provide a window into the
          caregivers’ mental and psychological journey in searching for positive
          rewards amidst adversity. You may agree with some of the quotes but if
          you do not, it’s fine, as it is your own construction that makes a
          reward personally meaningful anyway.
        </p>
        <Box sx={secondTitle}>
          <p>
            <strong>Acceptance of the Disease</strong>
          </p>
        </Box>

        <p>
          Searching for information and coming to terms with the reality of a
          dementing illness (such as what you are doing now) is a phase that the
          majority of caregivers go through. Denial is a common initial response
          among family members. Even after a diagnosis has been made, family
          members may refuse to accept that the problems exhibited by the
          relative are <em>due to</em> dementia. It is therefore quite
          understandable that many caregivers felt accepting the disease is a
          breakthrough and an enlightenment. This recognition enables them to
          see that the troubles made by their loved ones are not intentional,
          and that worse things will develop down the road (however the present
          looks like is a time to savor). Another way to characterize this gain
          is that the caregiver has developed a more empathic understanding,
          thus avoiding unrealistic expectations, of the care-receiver.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              Like not eating, if it was before, I would be very upset. I had
              done the cooking and mom refused to eat. But now I would think,
              perhaps she’s not hungry.… I can give the food to her later…. I
              feel a lot better this way.
            </em>
          </p>
          <p>
            <em>
              After learning about brain loss leading to difficulty initiating
              behaviors, I was enlightened…. It’s not because mom refused to do
              things. I have to help her ‘get started’….
            </em>
          </p>
        </Box>

        <p>
          Aside from reading or attending workshops, caregivers may obtain
          insights directly from witnessing how their loved ones have been
          struggling with the disease. This is a type of “intimate knowledge” to
          which only someone close to the patient can have access. In fact, not
          only do caregivers struggle, but patients also struggle to cope with
          the disease. In fact, most patients want to lessen the burden on
          family members and they, too, try very hard within their diminishing
          capacity. Child caregivers may further use this intimate knowledge to
          reflect on their own risk for dementia, and what they may do in case
          it happens.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              At first, I thought I was the one making the sacrifice, spending
              time to take care of my dad. But slowly, I realize how much I have
              learned from him in terms of what I might face when I get old. It
              helps me confront the issue early.
            </em>
          </p>
        </Box>

        <p>
          Stigma is another issue faced by family members. When caregivers feel
          stigmatized, they tend to hide their relative’s condition from others
          and isolate themselves. As a result, they cut down on activities
          outside the home and hesitate when trying to seek help. Like denial,
          stigma stems partly from ignorance and so gaining understanding of the
          disease lessens self-stigma.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              Before I learned about the disease, I suffered a lot and could not
              adjust to [the caregiving role]. Now I feel less embarrassed and
              much more comfortable doing it. Initially, I wasn’t used to the
              looks people gave me when I took mom out. Now, I feel more relaxed
              and less stressed.
            </em>
          </p>
        </Box>

        <Box sx={secondTitle}>
          <p>
            <strong>A Sense of Purpose and Role Commitment</strong>
          </p>
        </Box>

        <p>
          On November 7, 1991, the former Lakers basketball legend Magic Johnson
          gave a press conference after being tested HIV positive:
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              I will now become a spokesman for the HIV virus because I want
              people — young people to realize that they can practice safe sex.
              And you know sometimes you’re a little naive about it and you
              think it could never happen to you. You only thought it could
              happen to, you know, other people and so on and all. And it has
              happened, but I'm going to deal with it and my life will go on.
            </em>
          </p>
        </Box>

        <p>
          And his life did go on, not the least of which was helping the United
          States basketball team win the Olympics Gold Medal in 1992 in
          Barcelona. But more importantly, he saw advocacy for safe sex and
          HIV/AIDS prevention and dispelling the myth that HIV is a “gay
          disease” (he is not homosexual), rallied behind his fame and
          popularity among young people, as his calling for getting the virus.
          He established the Magic Johnson Foundation to fund such advocacy and
          public education activities.
        </p>
        <p>
          A purpose is the reason for which something exists or is pursued.
          Often we are motivated to find purpose when something bad happens
          precisely because we cannot understand why it happens to us: Why me?
          Why happens now but not later, when my kids have grown up? And so on …
          Finding a new, and sometimes larger, purpose can help us redeem
          adversity because it makes us feel that our suffering is worthwhile.
        </p>
        <p>
          Caregivers may not find a larger purpose like that of Magic Johnson,
          but they do find something to give them a reason to go on despite all
          the hardship. Indeed, for many people, a special reason is not needed
          to provide care to a close family member. The most common sentiment we
          have heard from caregivers is, “It’s my (mom, dad, wife, or husband).
          I have to take good care of him/her, no matter what. It’s the right
          thing to do.” Sometimes, it is a simple conviction, as in “if not me,
          who else?”
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              How pitiful it is for an older person to be without someone caring
              for her. Unfortunately, my brothers would not take care of my mom.
              She is so lucky to have me and her granddaughter…. [We made her]
              very happy. We are so pleased to see her well.
            </em>
          </p>
        </Box>

        <p>
          For spouses, it is often considered a natural extension of the marital
          relationship, whereas for children, taking care of parents is often
          seen as a reciprocation of parental love and care in the older days.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              Every morning, my husband gets up and goes to the toilet a few
              times. You need to wait till he finishes before you can go.… And
              asking the same questions every day … so annoying. But thinking
              he’s my dearest love, in sickness and in health, I would cheer up.
            </em>
          </p>
        </Box>

        <p>
          For dementia caregivers, one question they may ask is the aim of doing
          all this when the disease is not curable. This is not a question for
          which there is an easy answer. Witnessing the relative’s decline and
          all the behavior problems, one can become pessimistic and feel that
          nothing one does truly matters. Nevertheless, pessimism may stem from
          setting aims too high. Caregivers who abandon unrealistic expectations
          may be in a better position to identify a sensible aim and direction
          in the long run, such as improving their loved ones’ quality of life.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              People who get this disease cannot recover. We can only slow down
              the rate of deterioration. So, as children, we should treat mom
              well when she is alive.
            </em>
          </p>
          <p>
            <em>
              Before, I did not know why my mom acted this way. After I
              understood that her behaviors were due to the disease…. there were
              fewer misunderstandings and less miserable feelings. Instead, I
              would put more effort into finding ways to help her…. give her
              better quality of life. I won’t be ‘pig-headed.’
            </em>
          </p>
          <p>
            <em>
              Mom has a special green thumb. She’s really good with flowers and
              plants, but sadly this habit seemed to be gradually put aside
              after having dementia. But after getting some tips from
              (occupational therapist), I bought a few pots of her favorite
              plants and we started growing them together like in the older
              days. She’s somewhat clumsy now but hey, she’s absolutely
              delighted by the flowers. That’s what counts! Gosh, I wish I knew
              earlier.
            </em>
          </p>
        </Box>

        <p>
          Imagine what caregivers would feel if they cannot see the care
          responsibility as relevant to their personal goals and agenda, yet
          having to do it day after day. Thus, however ordinary these reasons
          may seem, sensing a purpose to fulfill and committing to doing the job
          well is an important gain for caregivers.
        </p>
        <Box sx={secondTitle}>
          <p>
            <strong>Feeling Satisfied and Grateful</strong>
          </p>
        </Box>

        <p>
          Suppose you plan to visit the peak of a mountain over the weekend. You
          have two options. One is taking the hard way — trekking up the hills
          for a tiring 5-6 hours. The other is what most everyone else does,
          taking the cable car, and you will be there in no time. Both routes
          will give you the same view, but they would not give you the same
          experience and your memories of it will also be different. Most of us
          have had the experience of climbing up a mountain and feeling
          absolutely thrilled when we eventually reach the peak and enjoy the
          panoramic view. And we know it won’t be the same had we taken the
          cable car up.
        </p>
        <p>
          When we perform vigorous physical activity, our brain secretes
          chemicals that subdue the perception of pain while enhancing
          happiness. But this is not the only reason why trekking up the hill is
          uplifting. As said earlier, our brain is wired to find something
          special in the contrast between gloom and bloom. So, a reward, whether
          a panorama or something else, is more special if it is obtained after
          hard work. This is especially true when the relative responds well to
          the caregiver’s work; it validates their hard work and sacrifice.
          Words of appreciation from the care-receiver would be extremely
          consoling and gratifying for the caregiver.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              We were having dinner. Mom refilled her bowl a bit after having a
              big bowl of rice. She seemed to have a better appetite [i.e.,
              liked the food I cooked]…. I was so, so happy.
            </em>
          </p>
          <p>
            <em>
              Seeing mom getting better and better [being more responsive and
              less demanding], all the work I do, no matter how hard it seems,
              is worth it.
            </em>
          </p>
        </Box>

        <p>
          Rewards often come as surprises. For instance, when the relative does
          something beyond what the caregiver can ever hope for, the feelings of
          joy, even gratitude, are beyond words.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              We were chatting after dinner. All of a sudden, mom called my
              name…. I was so happy, cause she hadn’t called my name for many
              years. She even couldn’t recognize me…. I was really happy. I
              hugged her so tightly.
            </em>
          </p>
        </Box>

        <p>
          Similarly, care-receivers may try hard to accomplish as much as they
          can, such as taking care of themselves and helping with household
          chores. Even though they may not do a very good job, such behaviors
          suggest attempts to lessen family members’ burden, and can touch the
          hearts of caregivers and offer them hope.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              Today, mom saw me occupied with other things when it’s almost time
              to cook. She took the initiative to ask whether I needed help to
              prepare the vegetables. I was so pleased she asked and found
              things to do herself. I had to separate the bad vegetables from
              the good ones after she washed them, but to her, it’s a
              contribution made.
            </em>
          </p>
          <p>
            <em>
              Mom did not receive any education and is illiterate. She only knew
              how to write the numerals 1-100…. She’s not interested in learning
              how to write words but is still willing to practice writing the
              numerals! It would be nice if she can keep doing it.
            </em>
          </p>
        </Box>

        <p>
          These narratives suggest that support is not a one-way traffic between
          the caregiver and the care-receiver. Although it is by no means a
          balanced exchange, the care-receiver is nonetheless a source of
          support and inspiration for the caregiver as well. What happens when
          care-receivers have deteriorated to a point that their capacity to
          reciprocate is heavily compromised? The following quote suggests how
          caregivers may warm their hearts under the most difficult
          circumstances.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              Although mom would not say “thank you” … I know she’s happy
              inside…. I can feel she knows how we treat her. I know how she
              thinks…. I can feel it.
            </em>
          </p>
        </Box>
        <Box sx={secondTitle}>
          <p>
            <strong>A Sense of Mastery</strong>
          </p>
        </Box>

        <p>
          Satisfaction also stems from acquiring the ability to master various
          everyday demands. Being able to fit so many responsibilities into one
          day, especially for adult children who have their own families and
          work, is a formidable task. Most caregivers who provided the diaries
          mentioned successes in managing their relatives’ behaviors and
          disabilities as rewards, perhaps because these experiences carry
          special significance for them. For instance, creating a daily activity
          schedule, learning to speak slowly and gently and in simple sentences,
          and repeating and rephrasing messages and instructions are gains
          commonly reported by caregivers.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              This afternoon, my husband went out … and got lost again. I was
              very angry … and scolded him a bit. He hung up on me…. What to do?
              … I called him again and talked to him gently, in a low voice, “…
              I don’t know where you are. I have been out looking for you for a
              long time. Why don’t you ask someone how to get back home? ...” He
              said, “OK.” Half an hour later, I called him again…. He found
              someone to take him home…. I realized I shouldn’t be mad at him.
              He listens only when I am gentle…. He got back home safely. I’m so
              happy.
            </em>
          </p>
        </Box>

        <p>
          Obviously, caregivers who are committed to the role want to do it
          well, and are thus motivated to learn and acquire the necessary skills
          to deal with various situations. This is no small effort on the part
          of the caregiver as it involves changing habitual responses and
          behaviors. When the techniques and adjustments appear to work, a sense
          of mastery ensues, and caregivers develop stronger self-belief in
          handling future issues.
        </p>
        <p>
          This self-belief is further strengthened when one can see multiple,{" "}
          <em>alternative</em> solutions to the same problem. Dementia presents
          many intractable problems, and what works one day may not work another
          day. Those who can approach problems from different vantage points are
          going to be more resilient in the long run. They are more likely to
          persist in finding solutions, further enhancing feelings of mastery
          and satisfaction, resulting in a positive feedback loop.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              I changed my way of thinking … There are always more solutions
              than problems. Although problems keep coming, I would not stop
              finding solutions … and support…. There is no point in worrying
              and being troubled by those problems.
            </em>{" "}
            <Box sx={mainText}>
              [I shall refer to this caregiver as Brook later.]
            </Box>
          </p>
        </Box>

        <p>
          However, underlying every learning is a shift in understanding and
          perspective. From not having a clue about the disease and being
          totally unprepared for the symptoms to successfully tackling the
          challenges, one needs a change in mindset as well. This mindset change
          is often based on recognizing the nature of the disease and how
          pointless it is to fight it. (Unfortunately, popular rhetoric like
          “fighting the battle against Alzheimer’s” may have inadvertently
          “inspired” caregivers to attempt to conquer the monster, which is
          counter-productive.) Thus, gradually, caregivers discover that often
          the best way to deal with repetitive questioning or unreasonable
          demands is to simply ignore the question or request, take a break,
          distract care-receivers, or divert them to something else so they do
          not persevere.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              My husband had tantrums.… I was annoyed. So, I ignored him and did
              not talk to him. After finishing his tantrums, he came to me and
              said, “Let’s go to have Chinese tea [dim sum lunch].” Then I
              smiled at him and pretended nothing happened.
            </em>
          </p>
          <p>
            <em>
              After the bath [and after dinner], my husband asked why there was
              no dinner…. I thought: Don’t argue with him…. I thought about how
              to talk to him…. “Cooking dinner now. If you are hungry, why not
              drink milk or eat a piece of cake?” After he ate, he went to bed
              himself…. I really have to learn how to divert his attention
              [instead of arguing]. I get to sleep tonight!
            </em>
          </p>
        </Box>

        <p>
          Obviously one method may suit an individual but not another, which is
          why caregivers need to develop <em>their own</em> creative solutions.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              The purpose of today’s gathering was to let my husband meet with
              friends that he hasn’t seen a lot, to see if he could remember
              more things in the past…. He did quite well, and remembered many
              things because of the gathering. It turned out my arrangement
              today was very successful. I am quite happy about it.
            </em>
          </p>
          <p>
            <em>
              I would try to prevent my husband from going out as much as
              possible…. I took out all the old movie discs…. Turned off the
              lights…. I sat on the couch and watched the movies with him…. We
              were both mentally absorbed … like in a movie theater. And I also
              learned how to coax him…. It kept him from demanding to go out. I
              had a peaceful night in the end.
            </em>
          </p>
        </Box>
        <Box sx={secondTitle}>
          <p>
            <strong>Increased Patience and Tolerance</strong>
          </p>
        </Box>

        <p>
          It goes without saying why patience and tolerance are so important for
          dementia caregivers. A small task is now broken down into multiple
          steps and requires supervision and assistance. Instructions need to be
          repeated slowly. The relative is uncooperative or even disruptive at
          times…. Indeed, the situations faced by caregivers test the limit of
          their tolerance all the time.
        </p>
        <p>
          Again, grasping the harsh reality about dementia is key to developing
          patience, but patience and tolerance are often learned the hard way,
          when confrontation and coercion fail to work time after time.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              Just now, I chatted with mom on the phone. Aside from asking me
              the same questions over and over again, the sequence of her
              expressions or the sequence of happenings were all mixed up. I
              needed to have a lot of patience to guide her to describe the
              whole thing.
            </em>
          </p>
          <p>
            <em>
              Mom has repetitive behaviors a lot. They have inadvertently made
              me a more patient person. I used to be short-tempered but now I
              learn to savor every moment.
            </em>
          </p>
        </Box>

        <p>
          One may feel that one has the right to feel annoyed, given the
          circumstances. But getting upset all the time would do you no good.
          Tolerance is one of caregivers’ best friends! The hallmark of
          caregiver resilience is emotional control <em>even when provoked</em>.
          Though by no means easy, it is crucial to remain as calm as possible.
          An angry display will harm your heart and hurt the one you love as
          well. Many caregivers are aware of the effect of their outbursts on
          their loved ones, and are mad at themselves for losing emotional
          control.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              My dad was not willing to bathe or wipe clean his body. I had
              tantrums…. After my tantrums were over, I listened to a song…. Sat
              down for a while. And then I went back to dad again and coaxed him
              to get cleaned. He complied! After the bath … I gave him jelly and
              other things as rewards for behaving well.
            </em>
          </p>
        </Box>

        <p>
          Ironically, feeling sorry for one’s outburst may just be the extra
          stimuli triggering the growth of tolerance. Stretching the limits of
          tolerance and patience validates their love for their relatives.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              Mom repeats the same words and the same annoying behaviors every
              day. Neither did I take her words to heart nor reprimand her for
              her behaviors. I would only tell myself: Mom can still talk and do
              things. And I still have the ability to take care of her!
            </em>
          </p>
        </Box>
        <Box sx={secondTitle}>
          <p>
            <strong>Closer Bonding With the Care-Receiver</strong>
          </p>
        </Box>

        <p>
          Many caregivers told us their care-receivers were so close that they
          could not imagine life without them. The lifetime bonds between
          caregivers and care-receivers can transcend the most difficult times.
          Research suggests that caregivers who feel close to their
          care-receivers are better off psychologically, presumably because they
          do the job willingly.
        </p>
        <p>
          Caregivers take up the role for various reasons, but one common
          reason, like it or not, is that they are afraid of losing a long-term
          relationship. As much as the sense of belonging is a basic human need,
          disruptions to close relationships are difficult to endure. The fear
          of loss is often the drive to protect the other party, even at the
          expense of one’s own welfare. Such is one aspect of the meaning of
          love.
        </p>
        <p>
          Spouses tend to see the caregiving role as a sustained commitment to a
          lifelong relationship — in sickness and in health. However, married
          couples are not necessarily emotionally close. Those who are close
          would usually treasure the opportunity to spend more time together,
          especially when the time remaining is counting down, and to get to
          know each other more or in a different way. In the initial phase,
          spouses would have a lot to talk about, like what they have gone
          through together in the past, whether good or bad, and what may lie
          ahead for them and the family. As one can imagine, some of these
          conversations would be quite emotional, bringing the couples closer to
          each other psychologically. Even for couples who were not very close
          before, the caregiving context may facilitate reconciliation of past
          conflicts and rekindle their affection for each other through
          forgiveness and recollection of fond memories.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              If not for my wife’s illness, I would not have spent so much time
              taking care of her personally. We have known each other a lot
              more.
            </em>
          </p>
          <p>
            <em>
              &nbsp;[Granddaughter visited.] My husband was very happy. He
              called her QQ (granddaughter’s nickname) and played with her….
              Seeing him so happy reminded me of the moments when we went to
              pick our granddaughter up from school. Sometimes we walked hand in
              hand, three of us together. Sometimes he carried our granddaughter
              on his back and smiled on the way. These have become my pleasant
              memories forever. I wish these images will stay in my mind
              forever, and also stay in his forever.
            </em>
          </p>
          <p>
            <em>
              We used to quarrel a lot. Now looking back, I regret being so
              stubborn and not trying to see things his way. I used to blame him
              for devoting too much to help his parents and siblings in
              financial trouble. Now I understand how much you want to give up
              if my husband can be good and well again.
            </em>
          </p>
        </Box>

        <p>
          Adult children’s situations are more complex. For those who have their
          own families and/or work, the competition for time may make enjoying
          the relationship with their impaired parents difficult initially, but
          this would change as they make adjustments and get used to the
          routine. Other than expressing affection for the parent, adult
          children often talk about taking care of mom or dad as a way to return
          the parent’s love and care, especially when they were young. Adult
          children will likely revisit the enjoyable moments that parents did
          with them when they were young, like playing hide and seek, sewing
          their party costumes, or gardening together. Not every adult child has
          had a good relationship with the parent, but many feel obligated to
          provide care to their ailing parents nonetheless.
        </p>
        <p>
          One should not underestimate the power of conversation alone. A good
          conversation engenders feelings of connectedness. There are always
          things two people have not talked about before. Over the course of
          many years, every relationship had some bad times as well as good
          times. When a relationship is about to end, one not only wants to
          savor the good moments, but to heal old wounds as well — this is
          something treasured by the care-receiver too. Newly discovered
          knowledge about the other party may erase misunderstandings and redeem
          bad experiences in the past, as we have seen in Clara in Module 1.1.
          The following is an excerpt from another daughter who took care of her
          mother.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              I asked my mom why she said I was ‘nuts’ [when I was young] but
              treated my son so much better…. She said, “I had four kids then;
              could not afford to spend much time with each of you. But I have
              only one grandson….” If I could have understood her situation
              then, I would have had a happier childhood.
            </em>
          </p>
        </Box>

        <p>
          A certain degree of reciprocity exists in all relationships. There is
          no reason to believe that a person with dementia is simply a receiver
          of support, but not a provider at the same time. There are many ways
          by which individuals with dementia provide support to their
          caregivers. For instance, the care-receiver is often a companion, a
          confidant, and a source of affection for the caregiver, and by
          expressing appreciation for what the caregiver does, the care-receiver
          makes the caregiver feel needed and validates the caregiver’s hard
          work. In fact, as we have seen earlier, many care-receivers would want
          to do whatever they can to lessen the burden of their caregivers
          (people with dementia also want to feel useful in some way). Thus, the
          reciprocity between caregivers and care-receivers is much greater than
          ordinarily assumed. Unfortunately, some caregivers may be reluctant to
          let the care-receiver do certain tasks for fear of messing things up
          and, as a result, fail to see the care-receiver’s good intentions and
          possibly overwork themselves.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              My husband doesn’t talk much. But today he suddenly told me he
              silently wept every night because he knew how hard it was to take
              care of him. He also said he regretted having said he didn’t want
              to go to a nursing home before. I told him it’s alright. (tears)
            </em>
          </p>
          <p>
            <em>
              My illness has gotten a little better. Mom helped me take the
              Chinese herbal medicine back and boiled it right away. She did not
              forget how to boil herbal medicine. But there was one thing that
              touched me so dearly: She was afraid she could not remember things
              well, so she sat in the kitchen until the decoction was over. And
              she was very careful with the medicine too. She hoped to do her
              best.… and to do more things for me while she could.
            </em>
          </p>
          <p>
            <em>
              This afternoon, my mom was nervous about not getting cooking done
              in time for dinner…. She took out all the different food
              ingredients. But she did not remember I had done the preparation
              already. It kind of bothered me. But when I thought about it from
              a different angle, I began to appreciate what she had done. She
              wanted to prepare food because she cared for us…. When I think
              about things in a positive way, my feelings are calmer.
            </em>
          </p>
        </Box>

        <p>
          Feeling appreciative helps to bring caregivers closer to their loved
          ones. Sometimes, such a feeling comes from the most unlikely
          experience, as in this case when the mother who had a bad bedsore
          appeared to have lost her pain sensation (from dementia), the daughter
          was relieved.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              Even the doctor was shocked. How come the wound was so deep? I was
              heartbroken to see it. But I really appreciate mom, for even
              though it looked painful … she did not whine.
            </em>
          </p>
        </Box>

        <p>
          Inevitably, those with dementia would gradually lose the ability to
          communicate and recognize family members and long-time acquaintances.
          These are testing times for caregivers and other family members. Yet,
          the person may still have traces of you left in his/her memory. For
          example, your husband may not recognize you in the picture but
          remember you at an emotional level, like pointing to you in the
          picture and saying “I love this woman.” He may still remember certain
          moments spent together with “this woman” though he doesn’t know the
          woman is you.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              &nbsp;[Wife caregiver and husband were looking at past photos
              together. The husband could not recognize the places and the
              faces.] But if those were my portraits, he could recognize almost
              every one of them, all the way from young to old ages. This was a
              special moment…. He still remembered me. I feel so happy and
              content.
            </em>
          </p>
        </Box>

        <p>
          As the condition deteriorates, caregivers can find solace in subtle
          gestures or the most rudimentary form of exchanges, such as touching
          and looking into the eyes. Sometimes, the mere physical presence of
          the relative is sufficient to remind the caregiver of that deep
          connection between them. This is the will to love.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              I would talk to my husband more. I don’t mind if he understands or
              not.
            </em>
          </p>
          <p>
            <em>
              Dad cannot swallow properly these days and doesn’t feel like
              eating. He’s lost quite a bit of weight. I gave him congee today.
              I placed another bowl (of congee) next to his for myself. I ate
              with him. I ate very slowly as well so that I was more or less at
              the same pace as his. I told him we were having dinner together
              like old times. He gave me two faint smiles while eating! I was so
              happy. I knew he was happy inside too.
            </em>
          </p>
        </Box>

        <p>
          While the feelings of closeness and intimacy are often what motivate
          the caregiver to go on, caregivers also need to learn to let go of
          bygones.
        </p>
        <Box sx={secondTitle}>
          <p>
            <strong>Letting Go</strong>
          </p>
        </Box>

        <p>
          Everyone has a tendency to cling to the past and has difficulty
          letting go. Although caregivers may have come to terms with the
          devastating impact of the disease, letting go of something that was so
          treasured is still not easy. Letting go means accepting a part of the
          relative is gone. It is a long and painful process because one’s limit
          in this regard is being constantly tested over time. At the same time,
          how does one feel close to the relative, yet accepting that he/she is
          partly lost? At first glance, staying close and letting go appear to
          be a tug of war, pulling the caregiver toward opposite directions. But
          striking a balance between the two is key to positive adjustment to
          the inevitable.
        </p>
        <p>
          Letting go does not mean withdrawing from the relationship. Rather, it
          means accepting irreversible changes in your relative while finding a
          new way to relate to him/her <em>in the here and now</em>. Let us
          consider a common scenario and for the sake of simplicity. Assume it
          is an old couple, with the wife being the one with dementia: The wife
          no longer recognizes the husband caregiver while the husband, in turn,
          grieves over the way she has changed. To both of them, the other party
          is a stranger! What the wife used to be like exists in the husband’s
          memory, and vice versa. The wife may ask the caregiver to take her to
          her husband because her (younger) husband exists in her memory.
          Similarly, the husband may keep searching for clues that the “old”
          wife is still there. In this sense, how is a caregiver who cannot let
          go different from the care-receiver who has become confused due to
          brain damage?
        </p>
        <p>
          We keep talking about letting go of the relative, but what needs to go
          is actually the caregiver’s fixation on the past. If you keep looking
          back to the good old days, your loved one will feel it and probably
          blame himself/herself for dragging you down too. In order to let go,
          caregivers have to free themselves from the past, from unrealistic
          expectations, from dysfunctional rules, and so on, and focus on what
          makes the most sense in the here and now. A wife caregiver said it so
          well.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              Before, I couldn’t control my emotions. But looking back, I
              started to realize ways to deal with this illness, helping me
              release my tension. Gradually I enhanced my husband’s life and
              recharged myself. Little by little, I let go of him and I let go
              of myself too. I comforted him as well as myself, and we walked
              hand in hand into the future.
            </em>
          </p>
        </Box>

        <p>
          Unlike the other rewards we have seen, letting go of a relative, which
          represents a dear loss to the individual, does not feel so much like a
          reward subjectively. Moreover, letting go is so hard that even
          experienced caregivers may not feel they have “mastered” it. A
          caregiver may do well for days but suddenly breaks down in tears to
          mourn the loss of the relative, and feels that he/she actually never
          “forgets” the relative’s old self. I want to assure you that this is
          normal. It’s alright if you go through cycles of calmness and grief,
          but you will find that the periods of calmness, before they are
          interrupted by moments of grief, get increasingly longer.
        </p>
        <Box sx={secondTitle}>
          <p>
            <strong>Finding and Appreciating People Who Care</strong>
          </p>
        </Box>

        <p>
          Caregivers can be quite isolated and agonized when support is not
          available. In reality, many caregivers, especially men, do not know
          how to ask for help as well (or think that seeking help means
          self-inadequacy, another dysfunctional belief). It is also true that
          some caregivers are difficult to help because they want to control how
          things are done (usually driven by some dysfunctional beliefs) and
          they often set requirements that others find hard to follow. But the
          demands of caregiving can be so overwhelming that one’s barriers
          eventually break down. Thus, some caregivers report learning to seek
          help as a gain.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              I started to realize that I should get someone to talk to when
              feeling helpless sometimes. I felt better after letting everything
              out from within.
            </em>
          </p>
        </Box>

        <p>
          It would be much better if family and friends volunteer to help rather
          than waiting to be asked. The point is not how much one’s offer will
          truly help, but the impression of a lack of interest and concern that
          may be created, though inadvertently, when help is not volunteered.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              My relationships with my siblings seem to have improved, because
              we now have common topics to talk about. They would all ask about
              how mom is doing lately…. Everyone seems to show more concern.
            </em>
          </p>
        </Box>

        <p>
          A chronic illness may pull family members closer together than before;
          if that is the case, they may gradually learn to share the caregiver’s
          burden. As said earlier, one of the most useful aids would be to take
          over the responsibility for a day or two, so that the primary
          caregiver, who is doing a great service for the entire family, can
          take a break or handle other matters. Besides, the open display of
          understanding and sympathy for the caregiver’s dilemma would go a long
          way in making life easier for the caregiver. Even a small child can do
          it.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              My kid phoned me and asked when I would go home for dinner. I
              explained that because daddy [grandpa] hadn’t finished … they
              should have dinner first as I would be home late…. I promised a
              family vacation during summer school holiday and my child said
              “OK” right away. I felt the understanding from my young child; it
              made me very pleased.
            </em>
          </p>
        </Box>

        <p>
          In fact, the situation caregivers are in turns any small favor into a
          gift. Many become more appreciative of the goodwill of others,
          especially when their kindness (e.g., assistance from neighbors or
          strangers) is unexpected.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              My husband went out … to buy bread…. Half an hour had gone by and
              he’s not yet back. So I phoned him. He said, “I got lost.”
              Luckily, a woman was nearby and grabbed the phone…. “Your husband
              just asked me how to get back…. I remember him. He’s your
              husband…. We are at [a place]. Come pick him up.” … So pleased to
              have such warm-hearted neighbors.
            </em>
          </p>
          <p>
            <em>
              Today, mom went to the clinic for a follow-up consultation…. then
              the center…. Everywhere she went, the staff were very nice to her.
              All the way, we met many people who loved my mom.
            </em>
          </p>
          <p>
            <em>
              One day, a friend visited. I went to the kitchen to prepare tea.
              When I returned to the living room, I saw my friend sitting with
              my mom by the window. My friend, who barely knew my mom, spread
              out her fingers so the winter sun could shine in between her
              fingers … Her thoughtful care was more attentive than I could ever
              do myself or ever ask for or imagine.
            </em>
          </p>
        </Box>

        <p>
          Finally, caregivers may find comfort in meeting other caregivers.
          Indeed, there are things that only those who have gone through would
          understand. Often, what caregivers miss most is a listening ear. For
          this reason, mutual aid groups are a valuable source of support for
          caregivers. In mutual aid groups, one not only gets a chance to talk
          about one’s own issues, but also hears stories about how other
          caregivers have struggled to manage their situations, which are often
          a source of inspiration. Contact your local NGOs to find out if there
          are groups that suit you.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              &nbsp;[From sharing by another caregiver] … I discovered that many
              people made a lot more sacrifice than I did…. It inspired me to
              continue.
            </em>
          </p>
        </Box>
        <Box sx={secondTitle}>
          <p>
            <strong>A Sense of Usefulness From Helping Other Caregivers</strong>
          </p>
        </Box>

        <p>
          Still remember the way Magic Johnson responded to his HIV-positive
          diagnosis? He was determined to help young people practice safe sex.
          He saw a larger purpose to his condition. Likewise, caregivers can
          find consolation and a larger purpose to their ordeal by knowing that
          they are not just needed by their care-receivers, but are also useful
          to others in the same boat. When they are able to comfort and help
          others with their own experiences, feelings of usefulness are
          engendered that overcome partially the sense of powerlessness in
          confronting dementia day in and day out. Thus, not only do they obtain
          support from going to caregiver groups, but they also develop a sense
          of empowerment by sharing experiences and comforting others. We call
          it the <em>helper-therapy principle</em>, meaning that the act of
          helping benefits helpers as well as helpees, such as becoming more
          upbeat and confident themselves.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              I had mastered these issues when the other caregivers had not. So
              I tried to comfort them. They were upset because their relatives
              accused them of stealing or kept saying the same things over and
              over again…. I told them people with this disease don’t remember
              what they said moments ago…. She said, “Yes!” I said, “That’s why
              you shouldn’t be bothered by these things; don’t feel bad.” They
              felt less stressed afterwards. I don’t know if I’m becoming a
              teacher myself but it feels good to be able to relieve them of
              their tension. At least, I helped someone!
            </em>
          </p>
        </Box>
        <Box sx={secondTitle}>
          <p>
            <strong>
              Staying Positive and Humorous in the Most Difficult Circumstances
            </strong>
          </p>
        </Box>
        <Box sx={quoteText}>
          <p style={{ margin: "0 5vw 0 5vw" }}>
            <em>
              Too many people miss the silver lining because they’re expecting
              gold.
            </em>{" "}
            — Maurice Setter, football player
          </p>
        </Box>

        <p>
          No matter how competent caregivers are, the problematic behaviors will
          never go away and there will still be plenty of occasions when the
          care-receiver (or better, the disease inside) resists attempts to
          manage the behaviors. Positive thinking and humor are ways to turn a
          disagreeable situation into a more pleasant and amusing one, something
          extra to cheer you up. By now, the role played by this thinking style
          should be quite obvious; quite a number of quotes above involve
          positive thinking, more or less. Psychologists call it{" "}
          <em>positive reappraisal</em>. You have been doing positive
          reappraisal if you have been filling out the Thought Modification
          Record.
        </p>
        <p>
          In the context of coping with stress, reappraisal means re-evaluating
          the nature of the event initially thought to pose a significant
          threat. If the re-evaluation suggests that the event is more benign
          than is initially thought, then a positive reappraisal is said to have
          occurred. It is a common coping strategy when dealing with problems
          for which there are no readily identifiable solutions, such as those
          presented by dementia. There are no good or bad reappraisals. A
          positive thought may appeal to one person but not another; it’s all
          subjective. In fact, it may even sound silly.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              The phone rang this afternoon. My husband went to pick it up. But
              he did not pick up the phone. Rather, he picked up a water bottle.
              I did not get upset; instead, I laughed and laughed.
            </em>
          </p>
        </Box>

        <p>
          The use of humor is the hallmark of positive thinking. Humor is a very
          powerful tool to relieve tension during hard times. Humor is a
          whimsical twist of idea that is amusing. It gives the person something
          to laugh at. It is sometimes said that laughter is the best medicine.
          Nelson Mandela said he had been on a long vacation when he was
          released after 27 years of incarceration. One thing about humor is
          that it does not follow a logical scheme and cannot be understood with
          reason. A certain degree of imagination is needed to construct humor,
          or to understand one when it is spoken.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              We (a couple) were walking here and there [husband wandering].… I
              told people we were having a romantic stroll.
            </em>
          </p>
          <p>
            <em>
              Mom wanted to have ‘tea’ (dim sum lunch)…. But in the car, perhaps
              because she was hungry, she was very agitated and scolded us
              fiercely. Usually, we would be very upset when scolded. But seeing
              that she could yell so loudly, her lungs had to be good and her
              mind had to be clear. So we ended up quite happy to see her
              scolding us like this.
            </em>
          </p>
        </Box>

        <p>
          Some caregivers are hesitant to laugh because they think it is
          disrespectful to their loved ones who are already suffering from
          dementia. They believe that it is wrong to laugh at a tragedy. If that
          is your concern, you do not have to laugh out loud! But note: Whether
          humor is inappropriate depends on how it is used, but not the content
          per se. In the last example above, humor was used to avert a possible
          direct confrontation with their mom. There was absolutely no sign of
          disrespect even though the subject of the humor was the relative’s
          problem behavior. Or perhaps you can laugh at yourself, like what
          Mandela did. No one can accuse you of poking fun at yourself.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              I see an advantage of being an old couple. I am hard of hearing.
              She can grunt and yell as much as she wants.
            </em>
          </p>
          <p>
            <em>
              This thing [caring for dad] is really hard. I messed up all the
              time. I did not know how to handle many things at first. I
              basically learned everything by trial and error. And I cannot
              remember how many mistakes I have made — too many! I felt I had
              gone through a course and so the other day, I printed myself a
              certificate. But I was probably the slowest learner out there, so
              the certificate prints, “Diploma in Alzheimer Caregiving,
              specially awarded to (name), who has successfully completed the
              course after having failed innumerable times but didn’t quit.”
              Hahaha …
            </em>
          </p>
        </Box>

        <p>
          But if making jokes is really difficult for you, just try to see
          things in a positive light, as the caregivers’ testimonies above show.
          But if you are still unsure about it, remember that positive rewards
          are often found in simple things that are abundant, and whether you
          find them depends on your conscious choice.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              In fact, I had always been an optimistic and cheerful person. But
              facing a mom with dementia, how could I be happy? Her illness
              would not get better; not a thing was inspirational. Since taking
              care of my mom, everything looked so dark ... But … since mom’s
              illness and my caregiving role are realities, nothing will change.
              Why not think about it more positively then? As long as I can give
              mom some instant happiness, like letting her eat what she likes
              and giving her compliments generously, we’ll find happiness again!
            </em>
          </p>
          <p>
            <em>
              After taking care of my husband, I understand that happiness is in
              your mind. Whether happy or not, it’s just a matter of choice. I
              choose to be happy.
            </em>{" "}
            <Box sx={mainText}>
              (I will come back to this caregiver later, whom I will call
              Joyce.)
            </Box>
          </p>
        </Box>
        <Box sx={secondTitle}>
          <p>
            <strong>Other Gains</strong>
          </p>
        </Box>

        <p>
          Beyond the ten most common themes, other gains were also described in
          the caregivers’ diaries, such as a different outlook on life, becoming
          less materialistic, being more prepared for their own aging, and so
          on. For instance, one daughter caregiver talked about how her
          communication with her own children improved after finding out that
          she did not like the same statements or questions being repeated over
          and over again by her mom:
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              I have to remind myself: Don’t repeat the same question, even not
              dare ask questions. Even more, I should not be talking endlessly.
              Usually, I read my sons’ Facebook and if there was nothing
              special, I treated it as good news. If there were unpleasant
              events, I would let them express their dissatisfaction freely. But
              I would avoid making comments. Usually they would tell me things
              only when I do not criticize! I learned such communication style
              from the [bad] experiences with my mom. I have to thank mom! It’s
              you who taught me how to get along with my sons.
            </em>
          </p>
        </Box>

        <p>
          Another son caregiver became a more flexible person from seeing how
          stubbornness affected his relationship with mom:
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              Mom is very stubborn and we argue a lot…. What I learn from seeing
              the way she behaves is that I should soften myself and not insist
              so much on this and that.
            </em>
          </p>
        </Box>

        <p>
          Adult child caregivers also appreciate positive effects on their own
          children, such as developing stronger filial attitudes and readiness
          to deal with older people. This mother talked about her son gaining
          interest in the subject of gerontology, which is the field of study
          related to the social, psychological, and biological aspects of aging:
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              My son took a subject in gerontology in college … because grandma
              got this disease and he wanted to know more about it…. He worked
              hard and got good grades….
            </em>
          </p>
        </Box>

        <p>
          For those with young and/or teenage children, I have created a science
          fiction graphic novel, entitled <em>An Angel with a Petite Brain</em>,
          to introduce features of Alzheimer’s disease and what children can do
          to help when a family member is suffering from dementia. You can find
          it on the menu bar above. It should be fun to read it with your
          children and use it as a medium to initiate some reflections on the
          family’s situation together.
        </p>
        <Box sx={secondTitle}>
          <p>
            <strong>Final Comments</strong>
          </p>
        </Box>

        <p>
          Reappraisal involves a shift in perspective. Some people are better at
          doing it than others. This raises the question of whether the ability
          to engage in reappraisal can be learned or trained. Yes, it can!
          Caregivers may ask themselves: Is there another way of viewing this
          event? And{" "}
          <em>
            <u>still</u>
          </em>{" "}
          another way? And <em>still</em> a third way? And <em>still</em> ….?
          Psychologists call it <em>alternative thinking</em>. For example, in
          the wandering example above, the caregiver may think of it as a
          romantic stroll, but may also treat it as a good way to exercise, to
          cherish memories (when walking by old places), to appreciate nature
          (when being near parks, e.g.), or an opportunity to spend some moments
          together. Caregivers who are adult children can also reflect on their
          parents’ hard work, taking them here and there when they were young.
          Practice alternative thinking improves mental flexibility and promotes
          problem-solving through open-mindedness. Possessing mental flexibility
          reassures caregivers that they are more ready to deal with the next
          challenge when it comes up. As Brook said, “There are always more
          solutions than problems.”
        </p>
        <p>
          By now, you may want to reflect upon your own positive rewards and jot
          them down. Try the Good Things Diary on the Apps menu.
        </p>
        <br />

        <Box sx={{ position: "relative" }}>
          <Button
            sx={{ position: "absolute", left: "10px", top: "0px" }}
            component={Link}
            to="/module4"
          >
            Previous Module
          </Button>
          <Button
            sx={{ position: "absolute", right: "10px", top: "0px" }}
            component={Link}
            to="/module6"
          >
            Next Module
          </Button>
          <p>&nbsp;</p>
        </Box>
      </Box>
    </Container>
  );
};
