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

export const Component = function Module8(): JSX.Element {
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
          <strong>Module 2.3 &nbsp;Avoid Over- or Under-Stimulation</strong>
        </p>
      </Box>
      <Box sx={quoteText}>
        <p>
          <em>I’m not hungry but I’m bored. Therefore, I shall eat.</em> —
          Anonymous
        </p>
      </Box>
      <Divider />
      <Box sx={mainPoints}>
        <p>
          <strong>Main Points:</strong>
        </p>
        <ul style={{ listStyleType: "square", marginLeft: "-20px" }}>
          <li>
            Sensory overstimulation can be overwhelming, while understimulation
            gives rise to boredom. Both of these situations are stressful for
            persons with dementia.
          </li>
          <li>
            Avoid overstimulating environments such as those with a lot of
            noise, or minimize the time spent in such environments;
          </li>

          <li>
            To reduce the likelihood of understimulation, help your loved one
            settle into a comfortable daily routine which would also make your
            job easier:
          </li>
          <ul style={{ listStyleType: "none", marginLeft: "-30px" }}>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Activities should be reasonably engaging and appropriate to the
                care-receiver’s ability level and attention span;
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Activities that involve the relative in a helping role
                (disregarding how trivial it is) would help to boost his/her
                self-esteem;
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Do grocery shopping together and let the relative contribute to
                food choice;
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Do include joint physical activity in the daily schedule
                whenever possible, for the benefit of both of you;
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Activities in familiar surroundings near home are often
                preferred because they offer security to the relative and it’s
                easier to return home if necessary;
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Be flexible — do not adhere to the routine rigidly and adjust it
                whenever necessary.
              </li>
            </div>
          </ul>

          <li>
            Enjoy the process of doing things together rather than focusing on
            performance.
          </li>
        </ul>
      </Box>
      <Divider />
      <Box sx={mainText}>
        <p>
          People with dementia can become agitated when the environment makes
          them uncomfortable. A person with cognitive impairment has a more
          difficult time processing new stimuli and so an unfamiliar
          environment, especially one that is noisy and full of strangers (i.e.,
          sensory overstimulation), can be disturbing. Compared with
          overstimulation, understimulation is more typical in the lives of
          those with dementia and is particularly a problem in the
          early/moderate phase when the person is still alert and mobile but
          activities are limited. Boredom is a potential trigger for a number of
          behavior problems, including pacing, wandering, repeated
          vocalizations, and so on. Both under- and over-stimulation can be
          stressful for those with dementia, with the optimal level of
          stimulation lowering further as mental capacity deteriorates.
          Activities that are pleasurable and appropriate to the person’s level
          of cognitive and physical functioning are hallmarks of a good daily
          routine.
        </p>
        <p>
          Caregivers differ in their comfort zones in allowing care-receivers to
          do certain things independently. The workload may prevent caregivers
          from constantly keeping an eye on their impaired relatives. Caregivers
          with small comfort zones might deprive their relatives of meaningful
          activities in order to reduce the likelihood of incidents occurring.
          Unfortunately, boredom can lead to behavior problems that are quite
          troublesome and disruptive. In many places in the world, nursing homes
          tend to be custodial and do not provide residents with much to do,
          which is partly why repetitive behaviors are frequently observed in
          these settings.
        </p>
        <p>
          Here are a few things you may do to reduce the likelihood and extent
          of understimulation or overstimulation.
        </p>
        <br></br>
        <ol style={{ listStyleType: "none", marginLeft: "-40px" }}>
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>
                  &nbsp;Activities should be appropriately scheduled throughout
                  the day.
                </strong>{" "}
                As already said, a schedule provides a structure to everyday
                life; it saves the caregiver from having to negotiate things to
                do all the time and provides a sense of security to the
                care-receiver. Ensure that there are breaks between activities
                to give both your loved one and yourself a rest and to allow
                time to tackle unexpected incidents or delays. When possible,
                activities should be conducted in small blocks of time, with
                breaks in between, due to a restricted attention span in persons
                with dementia.
                <p>
                  In general, more complex and demanding activities should be
                  done in the morning when persons with dementia are usually
                  most alert. After lunch, things should slow down a bit and
                  more laid-back activities are preferred to avoid over-exertion
                  and fatigue, thereby reducing susceptibility to sundowning.
                  Hence, it is usually advisable for outdoor activities and more
                  demanding chores such as shopping to be scheduled for the
                  morning, while things like reading, calligraphy, painting,
                  knitting, listening to music, and meal preparation become
                  pastimes in the afternoon. Even preparation for dinner should
                  be done a little earlier to avoid involving care-receivers
                  when they would be too tired. Likewise, they should stay away
                  from exciting and vigorous activities at night to avoid
                  disrupting their sleep patterns. Things should be winding down
                  after dinner; listening to soft music, a good bath or a
                  massage before bedtime may not be a bad idea.
                </p>
                <p>
                  Experts disagree whether naps should be allowed in the
                  afternoon. Those with dementia have disturbances in the
                  sleep-wake cycle, so they may spend a lot of time sleeping
                  during the day while being awake and possibly disruptive at
                  night. This can be very distressing to caregivers who would
                  not be able to get rest themselves. The conventional thinking
                  is that persons with dementia should be engaged in activity as
                  much as possible during daytime so that they would be worn out
                  ahead of bed time. However, whether naps should be allowed
                  depends on the time of the day and how long it usually lasts.
                  A short nap after lunch should not be a problem. It gives
                  caregivers a break and a chance to take a much needed rest
                  themselves, and will likely reduce any sundowning symptoms
                  that may appear later. Thus, when taken at the right time, a
                  short nap may improve quality of life. As always, no
                  recommendation should be applied in a rigid manner as every
                  individual is different. Caregivers should assess their
                  situations sensitively, make appropriate judgments, and test
                  things out to see if the strategy works.
                </p>
                <p>
                  As said earlier, apathy is a common and persistent symptom.
                  Hence, it is all too easy for family members or service
                  providers to assume non-participation and withdraw activities
                  from individuals with dementia. Coupling with other reasons
                  such as staff shortage and lack of expertise, residents in
                  some nursing homes are made to sit through the day, when
                  efforts can be made to encourage them to join activities step
                  by step. It should be noted that apathy is one of the factors
                  leading to a more rapid decline in dementia. Though it may not
                  be preventable, apathy can be minimized. As discussed earlier,
                  activities can be adapted to the needs of the person so that
                  their anxiety or sense of incompetence would not aggravate
                  apathy.
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
                <strong>
                  &nbsp;Find activities that can be conducted at home, or near
                  home.
                </strong>{" "}
                Traveling far from home with someone having dementia is always a
                challenge. The preparation can be quite tedious, such as
                bringing medications, an extra piece of clothing (in case of
                incontinence), and items to distract the relative in case he/she
                starts to feel anxious. If traveling by driving without another
                helper, things can get tricky when the relative gets agitated —
                in this case, one should pull over as soon as possible and calm
                the relative before driving again. If one is on a highway, get
                off at the next exit. As always, allow yourself more time when
                doing things with a person with dementia.
                <p>
                  For these reasons, having a range of activities that can be
                  performed at home is necessary for the effective management of
                  people with dementia. Activities can come in many different
                  forms (see below). However, avoid letting individuals with
                  dementia watch TV for too long; there is a risk that they
                  would remain sitting on the couch for hours, unwilling to
                  switch activity. Moreover, one cannot stay home or indoors all
                  the time. There are many benefits to having outdoor activities
                  such as getting some fresh air, enjoying the colors of
                  flowers, and walking around. Although there are simple
                  exercises one can do at home, there is nothing like taking a
                  leisurely walk outside, which is often a good time for
                  conversation. It would be preferable if these activities are
                  close to home; in case your relative needs to go home all of a
                  sudden, it would be more manageable.
                </p>
                <p>
                  But more importantly, people with dementia tend to find an
                  unfamiliar environment discomforting primarily because they
                  would be overloaded with new stimuli and may have difficulty
                  navigating without help. An environment full of activities,
                  people, and noise is even worse. Individuals with more
                  advanced dementia will have more difficulty tolerating new
                  environments and will be increasingly confined to the nearby
                  neighborhood and a few favorite places only. However,
                  caregivers also need a breather themselves. Thus, they have to
                  weigh the benefits of going to an interesting but unfamiliar
                  place against the likely reactions of the care-receiver.
                  Family members should be prepared to abort an activity if the
                  relative feels uneasy about it.
                </p>
                <p>
                  As a rule of thumb, when being away from home, an
                  identification tag, a letter explaining the relative’s
                  condition and emergency contact numbers, a phone with speed
                  dials programmed to reach a few key contacts, and a GPS
                  tracking device worn or carried by the relative will come in
                  handy in case he/she gets lost.
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
                <strong>
                  &nbsp;Activities should be interesting and appropriate to the
                  care-receiver.
                </strong>{" "}
                Persons with dementia should be encouraged to carry on what they
                have been doing as it gives them a sense of continuity and
                avoids the feeling that all is changed with the onset of
                dementia. Activities built around the person’s hobbies and
                interests are meaningful and fun, and those conducted with
                others promote a sense of social and emotional connection.
                Certain activities such as reminiscence are especially good in
                fostering expression of feelings, while others (e.g., helping
                with household chores) make the person feel useful and valued.
                Even if people are well into the moderate stage of the disease,
                they can still perform some simple tasks such as picking
                vegetables and washing them, although they may not be able to do
                it very well. Setting the table before meals is a good chore for
                those with dementia, which may help them remember how to use
                utensils. It is important that the relative feels needed in
                these activities and not a burden to the caregiver. At times,
                family members may, with or without conscious awareness, demand
                care-receivers to adhere to certain standards or procedures,
                without showing appreciation for their effort, achievement, and
                good intention. This is a trap to avoid. Let go of unrealistic
                expectations! Learn to enjoy the <em>process</em> of doing
                things together, even though the product does not meet with your
                satisfaction.
                <p>
                  Activities need to be changed or adapted regularly to the
                  changing abilities of the person and the uncertain
                  manifestation of the disease. This is why flexibility is
                  important; perhaps the worst schedule is a rigid one. A more
                  laid-back schedule may be needed when your loved one seems
                  listless, while more engaging activities would be advisable
                  when he/she is momentarily “back.” Thus, caregivers have to be
                  sensitive and accommodating. They should also note that some
                  people, after getting dementia, may want to avoid the things
                  they were good at doing before as they could not afford to see
                  how much ability they have lost. These are usually people who
                  used to set high standards for themselves and have not fully
                  accepted their illness. They, too, need to let go of their
                  self-expectations and support from family members may be
                  necessary. A non-judgmental attitude is the way to go.
                </p>
                <p>
                  Talking about just having fun, playing with pets is a great
                  option. Pets can be good partners for persons with dementia
                  (and caregivers). They are cute and fun to be with, provide
                  company, and offer affection no matter what. Special bonds are
                  often developed between the pet and the owner. A person who is
                  apathetic and unmotivated to do things may gladly walk a dog.
                  Some studies on animal-assisted therapy have shown that those
                  with dementia are more interactive and display fewer behavior
                  problems when they are with pets. Those who have mentally
                  regressed to childhood as a result of memory loss will
                  particularly benefit from a pet that looks like the one they
                  had as children. Pets can therefore be good assistants and
                  friends to the caregiver. Nevertheless, not everyone likes
                  pets and pets may add to the burden of the caregiver too. At
                  the same time, the relative may find the pet enjoyable one
                  day, but annoying another day. A pet that runs around and
                  makes noises all the time may be a source of overstimulation,
                  especially when the relative is having a bad day, giving the
                  caregiver more problems to solve. In general, if there is not
                  already a pet in the household, it is a good idea to have pets
                  from friends and family to pay some visits and see how the
                  care-receiver reacts to them before making more definite
                  plans, as taking care of a pet is a long-term commitment.
                </p>
                <p>
                  In recent years, computer games or mobile apps have become
                  more popular because of ease of access; these and other
                  traditional pastimes such as crossword puzzles and board games
                  are believed to keep the mind active as well. One advantage of
                  these games is that there are usually difficulty levels built
                  into them to suit the needs of different individuals. Another
                  advantage is that solitary games can keep the care-receiver
                  occupied while the caregiver is busy with other things. The
                  downside to solitary games is that, if overdone, the relative
                  may lose social skills more quickly. There should be a balance
                  between solitary activities and activities that involve
                  others.
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
                <strong>&nbsp;Do things together.</strong> If the caregiver and
                the care-receiver have strong affection for each other, they
                would naturally enjoy mutual activities, especially when the
                disease is in the early stages. Doing things together is
                important for both parties as it strengthens their bond and
                reduces the feeling of dependency on the part of the
                care-receiver. When doing things together, you and your loved
                one are gravitated toward your mutual relationship, not the
                illness. As said, the care-receiver is also an important source
                of support for the caregiver, and in that sense, the caregiver
                needs the care-receiver as much as the other way round. The
                caregiver, after all, does not travel the journey alone, but
                does it together with the care-receiver (and hopefully other
                family members and friends as well).
                <p>
                  One type of mutual activity good to have is physical exercise.
                  Exercise improves mood, relieves stress, and keeps the body in
                  good shape. Some may prefer more vigorous exercise like
                  jogging but the risk of falls is something to look out for.
                  Some studies suggest that people with Alzheimer’s disease have
                  a higher risk of falling in the mild stage than when in the
                  moderate stage, presumably because those in the mild stage
                  tend to underestimate their balance issues and do not exercise
                  sufficient precautions. Nevertheless, it does not mean that
                  one should simply give up enjoyable physical activities for
                  the sake of safety. Indeed, as time passes, people with
                  dementia will start to show awkward movements, and may be
                  limited to simple movements with further decline. Yet, it does
                  not mean the type of activity has to be changed completely. As
                  said, focus on the process and forget the performance. Many
                  exercises can be adapted to the relative’s ability level. For
                  instance, although Tai Chi requires quite delicate balance and
                  complex movements of the entire body, there are also simpler
                  forms of the exercise that are practiced in a sitting position
                  for those with risk of falling. In this sitting form of Tai
                  Chi, the person exercises not only the hands, but the legs and
                  the torso also. Be creative with the physical activity you do
                  with your loved one and consult professionals when necessary.
                </p>
                <p>
                  Another good mutual activity is grocery shopping. Though it
                  sounds mundane, grocery shopping is actually a time when both
                  of you can chat about a lot of things, and when the relative
                  can shop for his/her favorite food. Without a doubt, the
                  eventual meal will be more enticing, and the preparation
                  process more fun, if one has chosen the food ingredients
                  oneself. This is a good way to arouse your loved one’s
                  appetite.
                </p>
                <p>
                  Board games, puzzles, and other mentally stimulating games can
                  be played together. One pitfall of many of these games is that
                  a certain degree of competition is involved. A competitive
                  situation may be unduly stressful for persons with dementia.
                  Those at the early stage may still enjoy competing in their
                  favorite games. As their conditions deteriorate, this may
                  change. Additionally, one can never be sure to what extent one
                  should help the person win by intentionally losing, and how
                  the person would react if that is done excessively. Take away
                  the competitive element and simply enjoy the process of
                  playing. Although it is often said that such activities have
                  cognitive benefits, they are only as good as they are fun to
                  do.
                </p>
                <p>
                  Reading together can be fun and also personally meaningful. At
                  the initial stage of the disease, caregivers and
                  care-receivers will likely be reading materials about dementia
                  (such as this one) together for information and advice, and
                  further, to discuss their thoughts over what they read. Thus,
                  reading may become a platform for them to talk about what they
                  think is going on with the changes in cognition and behavior,
                  share their worries, and reflect on the times ahead. However,
                  people with semantic dementia (a form of frontotemporal
                  dementia with dramatic loss of common knowledge including the
                  meaning of words) may find keeping up with reading difficult,
                  even at the initial stage. In any case, as dementia gets
                  worse, the ability to read will be significantly compromised.
                  Yet, some care-receivers insist on reading as a habit. At some
                  point, caregivers may have to read to their loved ones as the
                  degree of cognitive and visual impairment makes reading nearly
                  impossible.
                </p>
                <p>
                  Also good to do together are various household chores. Given
                  the traditional division of labor within the household, wives
                  usually hold the primary responsibility for housework. When a
                  wife suffers from dementia, the husband will likely assume
                  more household responsibilities gradually but the wife will
                  still be involved, or even in charge, as much as she can. For
                  many traditional women, housework is part of their identity
                  and self-esteem, and it is important that they continue to be
                  involved. But if it is the husband (who had not been active in
                  housework) having dementia, the wife may continue to do
                  everything herself. Some men are simply not interested in
                  housework while women may feel that the men “mess things up.”
                  As long as the husband can be motivated to share the duties,
                  the couple should try to enjoy doing certain chores together.
                  Doing chores together, while the caregiver keeps an eye on the
                  relative, is a great way to spend the day. There are things
                  the care-receiver can truly contribute, albeit how simple they
                  are. For example, wouldn’t it be nice to have someone carry
                  some of the bags after grocery shopping? And, as with other
                  mutual activities, household chores provide an opportunity for
                  conversations. For instance, couples can talk about all sorts
                  of things while preparing food in the kitchen, or reminisce
                  together when cleaning photo frames.
                </p>
                <p>
                  Some leisure activities have an important component in common
                  — reminiscence. Reminiscence has a range of benefits, some of
                  which are specific to the context of dementia and caregiving.
                  For your loved one, recalling past achievements and
                  contributions engenders a sense of pride and a life
                  well-lived, thus combating the gloominess brought about by the
                  dementing illness. Research has shown that reminiscence,
                  especially the recollection of positive memories, helps people
                  of all ages to have better insights into themselves, repair
                  past wounds, and even feel better about their current
                  situation. Reminiscence also helps care-receivers retain a
                  sense of who they are, when their identities are threatened by
                  dementia. For the caregiver and other family members,
                  reminiscence reminds them of the care-receiver’s lifetime
                  contribution to the family and strengthens their affection for
                  him/her, an important source of care motivation for the
                  family.
                </p>
                <p>
                  We have developed a new game for mutual reminiscence, called
                  “Crying Together, Laughing Together,” which can be found on
                  the Apps menu above. To be played between two persons (i.e.,
                  your loved one and you), the game asks one party to tell a
                  story about the other on a randomly chosen theme. Those who
                  have tried it said it helped them talk about things they have
                  never spoken to each other before, and brought them closer
                  together. Do note, however, that the version of the game
                  available on this website requires input using the keyboard.
                </p>
                <p>
                  In addition, family members can revisit old places with the
                  care-receiver and relive fond memories. They can go over past
                  photos and construct a lifetime album together, while they
                  talk about all the shared moments; it will be nice to retell
                  stories in a humorous manner and laugh together. Putting
                  pictures in chronological order may help care-receivers
                  identify family members as they age, even though their
                  memories of specific individuals have faded. They can watch
                  old-time movies together and listen to their favorite songs.
                  Musical memory is remarkably preserved in most forms of
                  dementia. Even persons in advanced stages of dementia can hum
                  a tune they have known for a lifetime. When language is gone,
                  music can be an important connection between your loved one
                  and yourself.
                </p>
                <p>
                  These days, because we each listen to our own smartphones most
                  of the time, even spouses may not know what songs the other
                  party has been listening to, not to mention children. In this
                  digital world, sharing music is made much more
                  straightforward. It may be a good idea to start collecting
                  your relative’s favorite songs, including those from
                  childhood, when cognitive impairment appears to be on the
                  radar. The songs may just come in handy one day.
                </p>
                <p>
                  One more thing needs to be mentioned. Whenever appropriate,
                  touch your loved one and have your loved one touch you back,
                  like holding hands when taking a stroll or hugging while
                  watching family photos. Touching is another powerful
                  connection between individuals with dementia and their family
                  members, especially when language expression becomes
                  noticeably limited. Of course, the person has to find the
                  touch comfortable. Touching from behind is generally
                  ill-advised as it may startle someone with dementia who is
                  already insecure. Do it when the person can see you and touch
                  gently and slowly at first to ensure that he/she responds
                  favorably before you hold tight, even though it is a gesture
                  you have done millions of times. Touching is a more delicate
                  matter when your loved one does not recognize you. But it does
                  not mean that such behaviors are to be avoided when that
                  happens. Your loved one may not know who you are but may still
                  want to hug this “friend” whom he/she sees every day (actually
                  consider introducing yourself to the care-receiver as a
                  friend, if necessary). The most important thing to bear in
                  mind is that body touch, when done appropriately, is soothing
                  and comforting. For the caregiver, being able to touch and hug
                  the relative means a lot, even though the relative thinks the
                  caregiver is someone else.
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
                <strong>
                  &nbsp;Build activities around problematic behaviors.
                </strong>{" "}
                Behavior problems are annoying but if they can be turned into
                daily, structured activities, they become more manageable. This
                idea may seem counter-intuitive at first but it is not entirely
                unreasonable. For instance, if your loved one is restless and
                wants to “go home” [a previous home that felt safe], walk with
                him/her and consider it your own exercise. Often, after a walk
                around the neighborhood, making turns and twists and returning
                to the residence, those with dementia may not recognize they
                have just turned around and think they are “home” (or have
                calmed down by now). The same routine can be repeated over and
                over again if care-receivers do not remember they had done it
                the day before. Because restlessness is usually worse in the
                evening when patients are more confused, a routine walk at dusk
                may not be a bad idea as they would not be able to see things
                clearly when it is dark (a condition made worse by diseases of
                dementia), and is therefore more easily misled to believe that
                they have traveled far to find home. This way, you have a
                structured time for physical exercise while the relative may
                just wind down ahead of bed time. Although we pointed out
                earlier the need to avoid stimulating activity in the evening,
                an evening walk for such individuals might just have a calming
                effect instead. Each individual case is different, and no
                general recommendation should be applied indiscriminately
                without due consideration of the particular person and the
                situation.
                <p>
                  Similar tactics may be used to deal with other behavior
                  problems. For instance, if care-receivers like to hide things,
                  they may get one or more drawers with a lock where they can
                  hide things, while caregivers keep (secretly) extra copies of
                  the keys. The drawers may be emptied every night so that
                  care-receivers get to do the hiding rituals again the next day
                  (which they won’t mind due to forgetfulness). It was said that
                  Ronald Reagan (who had Alzheimer’s) had a compulsion of raking
                  leaves from his family pool for hours every day, and his
                  bodyguards would put the leaves back onto the pool every night
                  so that he could collect them again the following day for his
                  gratification. Though the annoying behavior is repeated, it
                  is, in a sense, controlled and becomes a managed daily
                  routine. In a way, the task becomes a game or an amusing
                  activity between the caregiver and the care-receiver (see more
                  below).
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
                <strong>&nbsp;Cut down on noise.</strong> Noise stimulates the
                sense of hearing but those with dementia would have difficulty
                processing multiple sensory stimuli simultaneously. For them,
                noise can be agitating if not distracting. A common oversight in
                these people’s homes is leaving the TV on while doing other
                tasks, which actually interferes with task performance. This is
                an issue even at the mild stage of dementia. Similarly, playing
                music in the background while working on other things is
                something that most of us do without conscious awareness, but it
                may be a bad idea for someone whose cognitive ability is
                significantly compromised. For instance, leaving music or TV on
                while having a meal, like what is done in a restaurant, may
                significantly lengthen eating time. The person may be carried
                away by the music or TV program and forgets to eat. Small things
                in the environment can have profound effects on the daily lives
                of people with dementia and their family members.
              </Grid>
            </Grid>
          </li>
        </ol>
        <p>&nbsp;</p>
        <Box sx={{ position: "relative" }}>
          <Button
            sx={{ position: "absolute", left: "10px", top: "0px" }}
            component={Link}
            to="/module7"
          >
            Previous Module
          </Button>
          <Button
            sx={{ position: "absolute", right: "10px", top: "0px" }}
            component={Link}
            to="/module9"
          >
            Next Module
          </Button>
          <p>&nbsp;</p>
        </Box>
      </Box>
    </Container>
  );
};
