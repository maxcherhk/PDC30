import BookmarkIcon from "@mui/icons-material/Bookmark"; //add this
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined"; //add this
import { Box, Button, Container, Divider, IconButton } from "@mui/joy"; // add this
import { useRef } from "react"; //add this
import { Link } from "react-router-dom";
import WebFont from "webfontloader";
import { usePageEffect } from "../core/page";
const imgWidth = {
  width: "40%",
  "@media(max-width: 780px)": {
    width: "100%",
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

export const Component = function Module2(): JSX.Element {
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
      <Box sx={mainText}>
        <Box sx={moduleTitle}>
          <p>
            <strong>Module 1.2 &nbsp;Behaviors That May Trouble You</strong>
          </p>
        </Box>
        <Box sx={quoteText}>
          <p>
            <em>
              You have to struggle to try to remember the person before the
              diagnosis happened, because they really do change.&nbsp;
            </em>
            —&nbsp;Mindy Kaling, actress and producer
          </p>
        </Box>
        <Divider />
        <Box sx={mainPoints}>
          <p>
            <strong>Main Points:</strong>
          </p>
          <ul
            style={{
              listStyleType: "square",
              marginLeft: "-20px",
            }}
          >
            <li>
              Patients may react to their compromised abilities with anxiety and
              depression, and become withdrawn or uninterested in activities.
            </li>
            <li>
              Memory loss can lead to annoying behaviors such as repeated
              questioning. Other cognitive deficits include difficulties with
              communication and recognizing familiar people, which can become
              issues for the caregiver.
            </li>
            <li>
              Certain delusions can lead to care-receivers accusing caregivers
              of wrongdoings that did not occur. By comparison, hallucinations
              are less threatening overall.
            </li>
            <li>
              Aggressive behaviors and verbal abuse often occur when the person
              refuses help from the caregiver. Other behaviors that may be
              difficult to manage include aimless wandering and repetitive
              behaviors.
            </li>
            <li>
              Not eating and drinking, whether due to appetite change or
              swallowing difficulties, need to be dealt with carefully to avoid
              severe malnourishment and dehydration.
            </li>
            <li>
              Eventually the person will become totally dependent and approach
              the end of life. When this will happen cannot be predicted with
              certainty. Treasure the moments when your loved one can still
              interact with you in any form.
            </li>
          </ul>
        </Box>
        <Divider />
        <Box sx={mainText}>
          <Box>
            <p>
              Most dementias, including Alzheimer’s disease, get worse gradually
              over time. Vascular dementia, in which symptoms depend on the
              brain areas damaged by stroke and change with each incident of
              stroke, is a notable exception. Hence, it is not possible to say
              with any certainty what the clinical picture will look like for
              each patient, not to mention that each person is unique. The
              symptoms discussed below are the more common ones, but are by no
              means exhaustive. Bear also in mind that the patient’s condition
              may fluctuate from time to time; for instance, a woman who has not
              been able to recognize her children may, all of a sudden, call
              them by their names. Enjoy such moments while they last, yet bear
              in mind that (for non-reversible dementias) the overall picture
              remains a downhill course.
            </p>
          </Box>

          <p>
            Those with dementia cannot help but notice the fading away of their
            abilities. They are confused and, at the same time, ashamed when
            they cannot cope with a seemingly simple task. There is no point in
            embarrassing your loved ones more by reminding them of the mistakes
            they have made. Even if they have created a mess, such as soiling
            the floor due to incontinence, your expression of shock would only
            make them feel a lot worse. Instead, they need your support and
            understanding that <em>they cannot help what they do</em>.
          </p>
          <p>
            Losing abilities one has taken for granted for the entire life can
            be quite distressing. Notwithstanding brain changes with effects on
            mood, people may react to such ability decline, however subtle, with{" "}
            <strong>depression</strong> and <strong>apathy</strong>, and may
            become withdrawn, uninterested in activities, and unwilling to talk.
            They may be sitting the whole day, seemingly immobilized. Such
            behaviors can be quite distressing to family members, especially
            when the person had been quite cheerful and active before. Worse,
            apathy tends to persist over time. As will be seen, it is important
            to plan daily activities for your loved one as inactivity can lead
            to a more rapid decline. When patients struggle to make sense of
            their changes and the future that awaits them, they can become quite{" "}
            <strong>anxious</strong>. Anxiety can also result from mental
            confusions (e.g., where am I? where is my money? why is my daughter
            [already a grown-up] not yet back from school?).
          </p>
          <p>
            <strong>Memory loss</strong>
            <em>&nbsp;</em>is a symptom that surfaces most readily in common
            conception of dementia, but it is not necessarily an early symptom.
            Alzheimer’s disease, however, is characterized by a pattern of
            forgetting recent events initially, progressing to forgetting both
            recent and distant events later on (which may occur a few years
            after symptom onset). Thus, patients may forget that they had eaten
            dinner or that the grandchildren had visited earlier that day and
            left, and keep asking why dinner was not served or why the
            grandchildren did not come to see them. Asking the same questions
            over and over again can be very annoying. When distant events are
            forgotten, an old man, for example, will travel (mentally) back to
            an early period of time and may think his daughter is just a little
            girl or his long-deceased wife is still alive. He may want to
            revisit some old places or go somewhere else to finish an unfinished
            task in his memory. Favorite places and objects (e.g., toys,
            neighborhood) in childhood, can offer a sense of security and
            reassurance, when so many things have become unfamiliar to the
            person now. However, the childhood home and places may no longer
            exist (or the person may have been relocated), while the person
            keeps going and looking for it. This is a frequent cause of{" "}
            <strong>wandering</strong> and getting lost. When spatial memory or
            spatial awareness is affected, the person may get lost even in
            familiar environments.
          </p>
          <p>
            Wandering may be due to time and place disorientation as well.
            People who are <strong>disoriented to time and place</strong> are
            those who cannot keep track of time and where they are. They may
            mistakenly think, on a Wednesday evening, that it is Sunday morning
            and they need to go to church. In this case, what appears to be
            aimless wandering may not be so aimless after all.
          </p>
          <p>
            Individuals might also wander because of boredom, physical
            discomfort, psychological distress, or simply getting away from what
            they think is a strange environment to which they do not belong. At
            other times, they may just be pacing back and forth endlessly. This
            could be due to restlessness, self-stimulation, compulsive
            repetition, or all of them.
          </p>
          <p>
            Other than repetitive questioning and pacing, three types of
            repetitive behavior are particularly bothersome to family members,
            namely (i) extended periods of{" "}
            <strong>repeated vocalizations</strong> (including meaningless
            noises), even in a loud or screaming manner, (ii) going through the
            same items, like stuff in a drawer or closet, over and over again
            (i.e., <strong>rummaging</strong>), and (iii) collecting seemingly
            useless items, or <strong>hoarding</strong>. Other than brain
            changes that prevent them from inhibiting and switching activities,
            and not remembering things that had already been done, possible
            reasons are plenty. For instance, hunger or physical discomfort can
            give rise to repeated grunting. People’s cognition may be so
            compromised that they are not able to tell whether an item is useful
            or not, and so keep collecting things “in case they might be
            useful.” Feelings of insecurity are often the underlying cause of
            rummaging. Individuals may keep checking to ensure that certain
            items are there because they fear the items may be stolen. This fear
            may arise when they can no longer recognize certain family members
            (thus thinking they are strangers) or because of delusions. One
            issue aggravated by hoarding needs to be mentioned. In the homes of
            people with dementia, clutter (piles and piles of seemingly useless
            items) is commonplace; it poses the danger of falling as the person
            may trip over the items.
          </p>
          <p>
            <strong>Delusion</strong> is a type of psychotic symptom.{" "}
            <strong>Hallucination</strong> is another. They refer to beliefs
            (delusions) or perceptions of sensory information (hallucinations)
            that are obviously untrue. With hallucinations, the person may see,
            hear, smell, feel or taste things that do not exist, and some
            hallucinations (e.g., seeing or feeling insects crawling on one’s
            body) may be frightening. Visual hallucinations tend to occur in
            late Alzheimer’s disease (by which time hallucinations may not be
            the major concern of family members), while being common in the
            early stage of another form of dementia — Lewy body dementia.
            Compared with hallucinations, delusions are a lot more common and
            are often disturbing to family members. With delusions, patients may
            think others are trying to harm them, like taking their money
            (paranoia), the spouse being unfaithful, or themselves being the
            subject of two strangers’ conversation on the street. Some think
            that familiar people have been disguised by imposters (but not
            because they have forgotten their faces), that the house is occupied
            by unwelcome guests, or that images and stories on television are
            real and happening up close. Worse, they may think individuals can
            transform themselves into different persons, or can switch their
            bodies and personalities with each other.
          </p>
          <p>
            Sometimes a delusion may just be the result of forgetting, either
            all or some of the facts. For instance, a person may remember having
            loaned money to someone but forget that the money had been returned.
            Others may hide things for fear of being stolen but forget where the
            items have been hidden, and consequently accuse family members of
            stealing. But because of impaired judgment, the patient may hide
            things in all the odd places, like placing a necklace in the
            refrigerator, underwear in the microwave, or the notebook computer
            behind the couch. Delusions can easily lead to arguments and can be
            very hard on caregivers when they are accused and yet need to
            provide personal care on a day-to-day basis. Delusions can also lead
            to non-compliance with medications if they are believed to be
            poisonous, while uncomfortable side effects of the medications may
            be used to justify that they are indeed harmful. We will learn that
            trying to persuade those with dementia to change their views will be
            pointless as they live in different realities but that other
            techniques may be helpful.
          </p>
          <p>
            It should be evident by now that{" "}
            <strong>personality changes</strong> are common in dementia.
            Patients can become <strong>agitated and irritable</strong> at
            certain times, while being depressed, anxious, and apathetic at
            others. When the person becomes{" "}
            <strong>verbally or physically aggressive</strong>, it can test the
            caregiver’s patience to the extreme. At times, the patient may hit
            the caregiver or yell at him/her. However, it is important to
            remember that all these may be mere responses to a reality that
            exists within their own world, such as a defense against threats in
            their imagination rather than an aggression done intentionally to
            harm the caregiver. Sometimes, patients may become aggressive simply
            because they feel being forced to do something, such as getting
            changed or washed, against their will, although caregivers may think
            that they are just trying to help their loved ones.
          </p>
          <p>
            Another possible aspect of personality change is{" "}
            <strong>disinhibition</strong> or loss of restraint, leading the
            person to do or say things that cross the limits or violate social
            mores. The person may display a range of behaviors that can be very
            annoying to others and embarrassing to family members, such as
            revealing private information to strangers, or the habitual use of
            foul language and offensive jokes in persons who used to be
            courteous and gentle. “He is not my mom” is, for example, a commonly
            heard expression of the heart-breaking feeling of family members.
          </p>
          <Box sx={speechText}>
            <p>
              My mom kept saying that the lady sitting next to her on the bus
              was obese and tried to persuade her to lose weight. She did it
              throughout the entire journey and there was nothing I could do to
              stop her. It was so embarrassing.
            </p>
          </Box>

          <p>
            A form of disinhibition that occurs more commonly in men is sexual
            disinhibition, such as making sexual remarks and advances toward
            members of the opposite sex. Those who become sexually disinhibited
            may even expose their genitals in the wrong place and at the wrong
            time. Yet, they cannot control themselves despite explicit
            disapproval from the other parties. Sometimes, sexual disinhibition
            is related to{" "}
            <strong>problems with person/facial recognition</strong>, as in the
            case when a father mistakes his daughter to be his wife (in the
            younger days).
          </p>
          <p>
            The faces/names of famous people and acquaintances are usually the
            first to go. Recognizing familiar people becomes a notable issue as
            the disease progresses to later stages. Nevertheless, not all
            abilities are gone at once. While patients may struggle recognizing
            people, they may still remember familiar voices. Sometimes, it may
            be easier to get a proper response when speaking behind the person,
            rather than in front, because the visual image of a stranger
            speaking in a familiar voice would confuse him/her. Caution needs to
            be taken when speaking from behind; it is advisable to avoid
            touching or hugging the person at the same time, although it is
            tempting to do so, as an unexpected body contact may startle him/her
            if the person no longer recognizes you.
          </p>
          <p>
            Not only would patients have difficulty recognizing family members
            and long-time friends, but they would have problem recognizing
            themselves in the mirror as well. The patient may be alarmed by the
            “stranger” when looking at himself/herself in the mirror, or accuse
            the spouse of having an affair with some other man/woman in the
            house.
          </p>
          <p>
            It should be noted that personality changes are not always for the
            worse. Alternatively, in many people, the bad memories are forgotten
            and the person becomes more cheerful, indulging in pleasant moments
            from the past. Or a person who was abusive in the past may now
            become more placid. As the disease brings so many changes to the
            brain, it is not possible to predict what behavior problems your
            loved one will have.
          </p>
          <p>
            Another notable issue concerns{" "}
            <strong>loss of language ability</strong>. Difficulty in word
            finding is followed by speaking in simple sentences, then incomplete
            and incoherent sentences as the meaning of words and concepts are
            lost. (With impaired control and coordination of muscles involved in
            speech production down the road, slurred speech will result.)
            Substitute words/phrases (e.g., “the thing that beeps in the
            morning” or simply “that thing” for the alarm clock) may be used to
            cope with word-finding problems initially. People who are
            multilingual may mix different languages together when they speak.
            Needless to say, difficulty with comprehension will also happen,
            including understanding simple instructions. As the disease
            progresses further into the severe stage, language will eventually
            be lost completely. Ironically, when the ability to speak is
            gradually lost, so is verbal abuse. In a form of dementia called
            frontotemporal dementia, these language deficits are more severe and
            occur early in the disease process, as are the personality changes
            noted above.
          </p>
          <p>
            The brief overview above suggests that behavioral problems (often
            called behavioral and psychological symptoms of dementia or BPSD)
            are as common as cognitive symptoms, and caregivers can find some of
            the BPSD quite troublesome. A point to note is that behavioral
            problems can represent psychological reactions to cognitive decline
            and to external stimuli (e.g., a situation that bears resemblance to
            an earlier accident), as well as direct outcomes of brain damage.
            Thus, it is possible to reduce certain behavioral problems by
            avoiding known environmental triggers, a point we will visit in
            subsequent modules.
          </p>
          <p>
            Both cognitive and behavioral problems get worse when the person is
            tired and hence, more confused. One reason for this is that the
            levels of some brain chemicals responsible for communication between
            nerve cells (i.e., neurotransmitters) plummet when a person is
            fatigued. A related phenomenon is <strong>sundowning</strong>, which
            refers to the tendency to get worse in late afternoon and evening.
            Apart from weariness, sundowning is related to insufficient light in
            the environment as well as disrupted biological clocks (i.e.,
            circadian rhythm). Patients may become wakeful and active at night
            but sleepy during daytime. This can be very disturbing to caregivers
            who would suffer from chronic sleep deprivation as a result.
            Nighttime is when the patient is most likely to wander off and get
            lost, if precautions are not taken.
          </p>
          <p>
            <strong>Appetite change</strong> is another potential problem.
            Patients may want to eat all the time because they forget they had
            eaten, or because the brain center that regulates hunger and thirst
            is damaged. Together with an <strong>altered sense of&nbsp;</strong>
            <strong>smell and taste</strong>, this can lead to notable changes
            in eating habits that are difficult to manage. Sensational changes,
            alongside loss of judgment, can lead to people putting inedible
            objects or unpalatable food items (e.g., dog food) into the mouth.
            In addition, for those whose memory has regressed to an earlier
            period, their food preference may change accordingly as well.
          </p>
          <p>
            Eventually, patients will experience significant functional decline
            and gradually need help with basic tasks such as{" "}
            <strong>dressing, toileting, bathing and feeding</strong>. They may
            feel embarrassed and refuse help, or attempt to hide their deficits
            by avoiding tasks they cannot do properly. They may also attempt to
            resist what they believe to be the invasion of privacy if being
            dressed or washed by someone else. An impaired sense of smell may
            contribute further to poor personal hygiene as individuals cannot
            identify their own body odor. In other words, the person may lack
            insight as to why a bath is needed and feel uncomfortable being
            naked before someone and being touched all over, especially when the
            person cannot recognize who the caretaker is. Again, knowing that it
            is the disease doing these “tricks” will allay some frustrations.{" "}
            <strong>Don’t take things personal!</strong>
          </p>
          <p>
            It should be noted that functional decline is the result of{" "}
            <em>many factors acting on top of one another</em>. For example,
            impaired attention, changes in gait, loss of visual field (i.e.,
            restricted peripheral vision) and acuity, muscle loss, nerve
            insensitivity in feet (not feeling the unevenness of the surface),
            memory loss leading to the belief that one can walk or jump like a
            young person, and impaired depth perception (as in walking
            downstairs), as well as the side effects of certain medications, all
            contribute to <strong>falls</strong>, especially in a hazardous
            environment. In addition, what appear to be difficulties with daily
            activities may be in part a manifestation of apathy. In other words,
            the patient is unmotivated to perform the tasks, rather than not
            being able to. It is therefore not surprising that persistent apathy
            is a risk factor for accelerated functional decline.
          </p>
          <p>
            When the disease reaches the severe stage, functional decline
            becomes the center stage while BPSD gradually diminishes or fades
            into the background. Organ functions and reflexes will break down
            one by one, leading to, among other things,{" "}
            <strong>incontinence</strong> and the{" "}
            <strong>inability to swallow</strong> properly. Some people are used
            to certain kinds of underpants that make it easy to soil all over
            the place. How to deal with incontinence is a personal matter;
            caregivers may feel reluctant dressing their loved ones in diapers,
            thinking that it is insulting to do so. Diapers may be rejected by
            the care-receiver too. For some people, smaller absorbent pads are
            more acceptable. You are encouraged to seek assistance from a
            nursing professional about alternative products and methods for
            handling incontinence. (Do note that constipation is a common cause
            of fecal incontinence and can be treated.)
          </p>
          <p>
            When the swallowing reflex is impaired, it can be a dangerous
            condition. It is a common cause of dehydration and malnourishment in
            advanced dementia, and may result in potentially serious medical
            conditions when food blocks the airway, or when fluid gets into the
            lung, leading to aspiration pneumonia. Doctors may recommend
            consumption of thickened fluids that are safer to swallow. The use
            of feeding tubes has not been demonstrated to improve nutrition or
            survival status in the long term. On the contrary, feeding tubes,
            whether inserted through the nasal canal or the abdomen, can be very
            uncomfortable and affect quality of life to a great extent. Those
            who still have some strength may attempt to pull out the tubes,
            leading to constant confrontations with the caregiver. (Thus,
            feeding tubes should be avoided unless absolutely necessary.)
            Usually, along with swallowing difficulties, a variety of other
            bodily functions are disappearing at the same time. Gradually, the
            person becomes too weak to leave the bed and, as a result, suffers
            from pressure sores. Eventually, the person will deteriorate into a
            more or less vegetative state and become totally dependent on
            external support. This will be the last phase of the person’s life
            and the family may consider hospice care with an emphasis on comfort
            and quality of life rather than treatment. Often, family members
            have started to say goodbye long before this phase — it is actually
            adaptive to allow oneself a longer process of emotional
            disengagement from the care-receiver. For many caregivers, it is a
            relief to see that their loved one’s suffering finally comes to an
            end.
          </p>
          <p>&nbsp;</p>
          <Box sx={{ position: "relative" }}>
            <Button
              sx={{ position: "absolute", left: "10px", top: "0px" }}
              component={Link}
              to="/module1"
            >
              Previous Module
            </Button>
            <Button
              sx={{ position: "absolute", right: "10px", top: "0px" }}
              component={Link}
              to="/module3"
            >
              Next Module
            </Button>
            <p>&nbsp;</p>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
