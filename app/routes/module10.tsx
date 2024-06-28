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

const endingText = {
  level: "body-lg",
  fontFamily: "Quicksand",
  lineHeight: "1.2",
  textAlign: "center",
  fontSize: "1.15rem",
};

export const Component = function Module10(): JSX.Element {
  const searchInput = useRef(null); //added this line
  usePageEffect({ title: "Tasks" });
  let atMiddlePage = false;
  let Omega = "\u{03A9}";
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
            Module 2.5 &nbsp;Create a Safe and Comfortable Home Environment
          </strong>
        </p>
      </Box>
      <Box sx={quoteText}>
        <p>
          <em>
            It’s easier to get rid of things when you’re giving them to someone
            who can use them.
          </em>{" "}
          — Gretchen Rubin, writer
        </p>
      </Box>
      <Divider />
      <Box sx={mainPoints}>
        <p>
          <strong>Main Points:</strong>
        </p>
        <ul style={{ listStyleType: "square", marginLeft: "-20px" }}>
          <li>
            A good living environment is one that caters to the care-receiver’s
            needs:
          </li>
          <ul style={{ listStyleType: "none", marginLeft: "-30px" }}>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Use signs and labels around the house to help care-receivers
                find what they need;
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Put away dangerous items and install safety knob covers for
                certain alliances (e.g., stove);
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Provide a dedicated storage space with locks for the relative if
                necessary;
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                When clearing clutter, respect that the items have subjective
                value to your loved one — do not discard anything without
                his/her consent;
              </li>
            </div>
            <div style={{ flexDirection: "flex-row", display: "flex" }}>
              <li>&#10003;</li>
              <li style={{ paddingLeft: "10px" }}>
                Mirrors can become disturbing for persons with dementia who no
                longer recognize themselves or their family members — cover them
                up and resort to handheld mirrors when necessary;
              </li>
            </div>
          </ul>
          <li>
            A well-lit environment that is not too bright is most comfortable
            for persons with dementia, except when it is bedtime.
          </li>
        </ul>
      </Box>
      <Divider />
      <Box sx={mainText}>
        <p>
          The physical environment can create problems for people with dementia
          or it can facilitate their daily functioning. Homes may be set up in a
          way that provides the necessary aids for care-receivers to move around
          or to find the things they need easily. A well-organized environment
          that takes into account the specific needs of the care-receiver is an
          important aspect of dementia care. In fact, some of the design
          considerations apply to older people in general; after all, most
          individuals with dementia are older adults and have to deal with the
          same issues as aging adults without dementia. However, dementia
          complicates the situation and makes these individuals more vulnerable
          as they are less capable of adapting to the process of aging.
        </p>
        <p>
          When a part of the body is not functioning that well, we will use
          means to compensate, whether consciously or subconsciously, so that
          the functional loss would have minimal impact on daily lives. However,
          people with cognitive impairment are less capable of identifying or
          executing compensatory strategies, and consequently the effects of any
          functional problem they have, are amplified in everyday life. The
          purpose of this module is to discuss how the home environment can be
          modified to compensate for some of the deficits exhibited by persons
          with dementia. Below are a few general suggestions but they are by no
          means exhaustive.
        </p>
        <br />
        <ol style={{ listStyle: "none", marginLeft: "-40px" }}>
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <Box>
                  <strong>&nbsp;Make available favorable items.</strong> An
                  environment that makes your relative feel comfortable would
                  lead to fewer behavioral and psychological problems. Place the
                  relative’s favorite items in locations where they can be
                  easily noticed and accessed. If what the relative craves is
                  something from childhood, try to find the item or things that
                  resemble it. Sometimes, it is not a bad idea to test things
                  out. For example, for those living in distant memories now,
                  they may find the items (could be some toys) they had during
                  that period to be rather cozy, even intimate. One should not
                  underestimate the soothing effect such items may have on
                  individuals with dementia. They may feel less agitated and
                  sleep better at night, and may yearn for “home” less, as a
                  result.
                </Box>
              </Grid>
            </Grid>
          </li>
          <br />
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>&nbsp;Beware of and put away dangerous items.</strong>{" "}
                Some items, such as knives, a boiling water kettle, the electric
                iron, alcohol, and anything (e.g., detergent) that may be
                confused as edible, are potentially dangerous or harmful for
                someone whose judgment is impaired and who no longer have a good
                sense of the purpose of these items. Stove and hot items are
                potentially dangerous because of impaired heat sensation (the
                nerves are less sensitive with aging). Together with
                forgetfulness, someone with dementia may leave the stove burning
                for long periods and pose danger to the house. Family members
                may consider installing safety knob covers to reduce the
                likelihood of the care-receiver using the stove without
                supervision. They can also consider installing induction cooktop
                which heats food up without emitting heat or fire, for
                additional safety. When necessary, items of potential danger may
                need to be locked up or stored in a safe place. Alcohol may not
                seem at first to be an item of concern but a small amount of
                alcohol can make a person with dementia more confused and
                disoriented. If you decide to lock things up, make sure you can
                find the key when the item is needed, especially if it is an
                important item when the occasion calls for it.
                <p>
                  Clutter is likely dangerous for those with dementia and should
                  be avoided as much as possible. Clutter may be related to the
                  relative’s hoarding behavior or simply preexisting practices
                  in the family. However, clutter may pose danger to persons
                  with dementia who may trip on the items and fall. This is
                  related to the fact that as people age, their peripheral
                  vision becomes more restricted and so they may bump into
                  things as they walk without noticing. Moreover, walking on
                  uneven surfaces can be troublesome as nerve endings on their
                  feet become less sensitive to pressure, giving them inadequate
                  feedback to regulate balance. These issues, together with
                  impaired visuospatial perception, muscle loss and joint
                  stiffness, make an environment full of clutter a potential
                  hazard for those with dementia.
                </p>
                <p>
                  If clutter is a habit of family members other than the
                  care-receiver, they should consider cleaning it up. If the
                  items belong to the care-receiver, then the matter is more
                  complicated because he/she may become upset if the items are
                  removed. (They might even think the items are stolen.)
                  Caregivers should discuss with their loved ones the danger
                  involved and obtain their permission to clean things up, or
                  better, do it together with them. Make a record of the items
                  thrown away by taking notes or pictures of them. People with
                  memory impairments as in Alzheimer’s may not remember what
                  they have discarded and may search for or purchase those items
                  again later. Worse, they may think that the items have been
                  stolen (whether by thieves or by family members). If possible,
                  take pictures of the items in the garbage bin to remind them
                  what happened. But if throwing the items away is not
                  permissible, family members should consider tidying the place
                  up to avoid potential hazards. When doing so, they need to
                  take care to arrange the items in approximately the same way
                  as before, as care-receivers may not be able to find the items
                  they want if that is not the case.
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
                <strong>&nbsp;Make things easier for the eyes.</strong> When
                people get older, their senses do not work that well, and vision
                is one of them. Inside each eye is a lens that focuses light on
                the retina. With increasing age, the lens gets discolored and
                because of this, older people would find it difficult to
                distinguish between shades of color. Moreover, the lens becomes
                hazy so that older people would not see things well in poorly
                lit conditions. (Cataract is the diagnosable condition when
                these lens changes become serious.) While older people prefer
                well-lit environments, bright sunlight is uncomfortable to them
                as changes in how light is refracted within the lens may result
                in glare. These are all normal aging processes. However, as
                said, these issues pose more challenges for someone with
                dementia. The impacts may go beyond visual perception. For
                instance, insufficient illumination can lead to confusion,
                suspicion, or the sundowning syndrome.
                <p>
                  People with dementia would benefit from an environment with
                  sufficient color contrasts between objects. One of the reasons
                  patients find it hard to use the bathroom is that usually
                  everything (wall tiles, floor, toilet bowl, etc.) is white,
                  creating optical chaos and, consequently, confusion and
                  insecurity. Having toilet seat and tank covers, a colored
                  anti-slid mat on the bathtub, and so on can make using the
                  bathroom a more pleasant experience. Similar strategies should
                  be adopted for furniture around the house. Even the color of
                  eating utensils matters — your loved one may just see a hole
                  if smashed potato is placed in a white bowl, and is confused
                  as to what to eat.
                </p>
                <p>
                  Another related issue is lighting. It follows straightly from
                  the above that the surroundings should be well-lit but not too
                  bright. Consider adding a semi-transparent window shade to
                  block out extra sunlight in daytime, while turning on bright
                  indoor light in the evening. When eating out, choose a
                  well-lit restaurant as far as possible. (It may be worthwhile
                  to point out that, for those with depression, a well-lit
                  environment would also improve their mood.)
                </p>
              </Grid>
            </Grid>
          </li>
        </ol>
        <br />

        <Grid container spacing={2} sx={imgWidth}>
          <img
            src="../public/comic/setup for minimizing accident chance/1.1 furniture combine (dont).png"
            width="100%"
            height="auto"
            alt="setup for minimizing accident chance dont"
          />
        </Grid>
        <br />
        <br />
        <br />
        <Grid container spacing={2} sx={imgWidth}>
          <img
            src="../public/comic/setup for minimizing accident chance/1.2 furniture combine (do).png"
            alt="setup for minimizing accident chance do"
            width="100%"
          />

          <figcaption style={comicText}>
            Furniture tips: add labels with contrasting colors to make parts of
            furniture easier to notice, and add corner protectors to sharp
            edges.
          </figcaption>
        </Grid>
        <br />

        <ol style={{ listStyleType: "none", marginLeft: "-40px" }}>
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>&nbsp;Make important items easier to find.</strong>{" "}
                People with dementia may not be able to locate specific rooms or
                items in the house, owing not just to memory problems but also
                to visuospatial disorientation. Moreover, doors are usually
                painted the same color and it may be difficult for them to tell
                the toilet apart from the store room, and so on. Likewise,
                cabinets and drawers may all look the same. It may be a good
                idea to hang something outside each door to distinguish it from
                the others. Similarly, label the cabinets and drawers to
                identify what is inside, or better, put up pictures or artistic
                drawings showing the items inside.
                <p>
                  On top of having the doors labeled, persons with dementia may
                  need additional assistance to find the toilet at night. When
                  the urge comes, they may become more disorganized and
                  confused. Installing night lamps at the appropriate spots may
                  help them navigate at night. If circumstances allow, light
                  switches with built-in LED (light-emitting diode) indicators
                  can be installed in the corridor and outside the toilet to
                  help your relative identify the switches to press. If this is
                  not possible, a simple alternative would be fluorescent
                  stickers that can be affixed to the switches and glow at
                  night. Some male care-receivers, however, may urinate in a
                  waste basket in the bedroom because it looks like a toilet
                  bowl to them. If they insist on urinating in the bedroom, it
                  may be necessary to actually put a urine bucket next to the
                  bed for that purpose. Alternatively, a portable commode works
                  for both women and men.
                </p>
              </Grid>
            </Grid>
          </li>
        </ol>
        <br />
        <Grid container spacing={2} sx={imgWidth}>
          <img
            src="../public/comic/setup for minimizing accident chance/2.1 furniture combine (dont).png"
            width="100%"
            height="auto"
            alt="learn and memory- example 1"
          />
        </Grid>
        <br />
        <br />
        <br />
        <Grid container spacing={2} sx={imgWidth}>
          <img
            src="../public/comic/setup for minimizing accident chance/2.2 furniture combine (do).png"
            alt="learning and memory-example 2"
            width="100%"
          />
          <figcaption style={comicText}>
            Simple labels can help care-receivers find the location of different
            items/rooms within the household.
          </figcaption>
        </Grid>
        <br />

        <ol style={{ listStyleType: "none", marginLeft: "-40px" }}>
          <li>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
              <Grid xs={0.2}>&#10070;</Grid>
              <Grid xs={11}>
                <strong>&nbsp;Make wise use of substitutes.</strong> It is
                customary to have mirrors installed in bedrooms and bathrooms.
                Yet, when persons with dementia cannot recognize themselves,
                seeing this “stranger” everywhere in the house can be scary. For
                example, having a mirror installed in the bathroom would mean to
                the care-receiver that someone is watching him/her bath or use
                the toilet. Though it is not the only reason care-receivers
                refuse to bathe, it certainly is a contributing factor. Handheld
                mirrors that can be taken out when needed are more suitable in
                such circumstances. As for mirrors already fixed to the wall,
                one may cover those with some decorative paper (which can be
                removed when not needed), rather than dismantling them
                altogether. Choose the option that requires less work and less
                hassles on your part.
                <p>
                  Another example is the bathtub. For those with weak legs,
                  balance issues and difficulties with depth perception, getting
                  in and out of the bathtub is potentially dangerous. Remodeling
                  it into a shower with a non-slippery floor is one option.
                  Switching to sponge bath, which can be given with the person
                  lying on bed, is another.
                </p>
              </Grid>
            </Grid>
          </li>
        </ol>
        <Box sx={secondTitle}>
          <p>
            <strong>A Final Comment</strong>
          </p>
        </Box>

        <p>
          Compared with the other suggestions, environmental modifications are
          easier to implement. But as suggested in the quote at the beginning of
          the chapter — it’s easier to get rid of things when you’re giving them
          to someone who can use them — it is generally helpful to the relative
          when a reason is provided,{" "}
          <strong>even though it may not be the real reason</strong>. The reason
          should be one that works for the relative, whether you like it or not.
          Thus, if thinking that the items would be given to a needy person
          would make it easier for your relative to agree to clear the clutter,
          so be it. Ask a friend to pretend to be that person and come to your
          home to help remove the clutter. It is better to <em>play a game</em>{" "}
          and acquire a safer living space than to prolong the environmental
          hazards.
        </p>
        <p>&nbsp;</p>
        <Box sx={endingText}>
          <p>
            You have reached the end of this intervention program. Taking care
            of someone with dementia is a long and complex journey with too many
            challenges to be covered in any compact training program. Yet, I
            hope that after completing this training, you feel more self-assured
            to deal with whatever scenarios that come along, and to further
            self-equip when needed. A reminder to those who are still interested
            in the program – as a way to make this online intervention available
            to as many caregivers as possible, we reserve it for those who are
            still active users. As said on our initial invitation to participate
            in the program, this is indicated by your kind response to our
            questionnaire online. Do remember that we will contact you again for
            more assessments until 3 months from the time you joined the
            research program.
          </p>

          <p>
            Your data will be very important for the purpose of evaluating this
            program, which will be used to determine whether the program is
            helpful to caregivers, and if it is, the program will be made
            available to all caregivers around the world as well. So, your kind
            compliance with the data collection schedule will be most
            appreciated!
          </p>
        </Box>

        <p>&nbsp;</p>
        <Box sx={{ position: "relative" }}>
          <Button
            sx={{ position: "absolute", left: "10px", top: "0px" }}
            component={Link}
            to="/module9"
          >
            Previous Module
          </Button>
          <p>&nbsp;</p>
        </Box>
      </Box>
    </Container>
  );
};
