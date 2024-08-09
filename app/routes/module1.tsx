import BookmarkIcon from "@mui/icons-material/Bookmark"; //add this
import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined"; //add this
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/joy"; // add this
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

const imgProp = {
  justifySelf: "center",
  alignSelf: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "auto",
  marginRight: "auto",
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

const mainText = {
  level: "body-lg",
  fontFamily: "Poppins",
  lineHeight: "1.7",
  textAlign: "left",
  fontSize: "1.06rem",
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
  marginLeft: "auto",
  marginRight: "auto",
  justifySelf: "center",
  alignSelf: "center",
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

const smallMainText = {
  level: "body-lg",
  fontFamily: "Poppins",
  lineHeight: "1.5",
  fontSize: "1.01rem",
  margin: "0 8vw 0 8vw",
};

const secondTitle = {
  fontFamily: "lexend Deca",
  fontWeight: "500",
  textAlign: "left",
  fontSize: "1.15rem",
};

export const Component = function Module1(): JSX.Element {
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
  // if (atMiddlePage == false) {
  //   window.onscroll = function () {
  //     if (
  //       window.innerHeight + window.scrollY >=
  //       document.body.scrollHeight / 2
  //     ) {
  //       // you're at the bottom of the page
  //       if (atMiddlePage == false) {
  //         alert("middle of page");
  //       }

  //       atMiddlePage = true;
  //     }
  //     if (
  //       window.innerHeight + window.scrollY >=
  //       document.body.scrollHeight - 2
  //     ) {
  //       // you're at the bottom of the page
  //       if (atPageEnd == false) {
  //         alert("You're at the bottom of the page");
  //         atPageEnd = true;
  //       }
  //     }
  //   };
  // }
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
      {/* <Typography sx={title} gutterBottom>
        Part 1:The Positive and Negative Sides of Caregiving
      </Typography>
      <br /> */}
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
          <strong>Module 1.1 &nbsp; You Are Not Alone</strong>
        </p>
      </Box>
      <Divider sx={{ marginTop: "10px" }} />
      <Box sx={mainPoints}>
        <p>Main Points:</p>
        <ul style={{ listStyleType: "square", marginLeft: "-20px" }}>
          <li>
            Dementia impairs people’s memory, sustained attention to complex
            tasks, ability to express themselves and to understand messages,
            recognition of faces and objects, ability to perform well-learned
            actions, awareness of how others feel about their behaviors, and
            ability to organize and make decisions, ability to restrain
            inappropriate behaviors.
          </li>
          <li>
            Dementia is a general term referring to a collection of diseases
            that damage brain cells, leading to the above impairments.
          </li>
          <li>
            Obtain an early diagnosis because each disease is different and
            because it gives you time to make preparations, including discussing
            with your loved ones what to do when they can no longer make
            decisions for themselves.
          </li>
          <li>
            Although it can feel dreadful having to take on the caregiving role,
            many caregivers say they are glad to have done it. Taking care of a
            close relative can be a rather rewarding experience, a theme that
            will be explored in depth in Modules 1.4 and 1.5.
          </li>
          <li>
            It would be helpful to consider how you yourself would want to be
            treated if you were the patient who has been wounded severely by the
            dementing disease. Avoid blaming the victim.
          </li>
        </ul>
      </Box>

      <Divider sx={{ marginBottom: "10px" }} />
      <Typography sx={mainText}>
        Dementia is a general term encompassing a variety of medical conditions
        that usually start in old age. A very small proportion (some say less
        than 1%) of dementia cases, typically caused by hormonal imbalance,
        vitamin deficiency, drug intoxication and infection, are reversible and
        treatable. But the great majority, including the most common type called
        Alzheimer’s disease, are not reversible. (You might have heard about
        some medications in the market but in the current state of affairs,
        their main effects concern alleviation of symptoms or possibly slowing
        down symptom progression, without putting a stop to or reversing the
        disease process.)
      </Typography>
      <br></br>
      <Typography sx={mainText}>
        The essential feature of dementia is the increasing loss of abilities to
        handle everyday tasks due to cognitive impairment. Broadly speaking,
        during the mild stage, help with complex tasks such as managing finances
        and meal preparation would be beneficial. Those in the moderate stage
        will start to require close supervision and assistance with some simple
        tasks such as choosing clothes, dressing and bathing. The severe stage
        marks the last phase of life and is characterized by practically total
        dependency across the board as the body’s functions shut down.
      </Typography>
      <br></br>
      <Typography sx={mainText}>
        The likelihood of dementia increases with age, doubling every 6 years
        from the age of 65. (A small number of patients start to experience
        symptoms before 65; these are called early-onset dementia). Technically,
        if you are 70 years old and cognitively healthy, your chance of
        developing dementia within the next year is roughly 1%. If you stay well
        to 85, the chance will increase to 5%. The duration of illness (from
        mild stage to end of life) varies greatly, from a few to over ten years.
        In general, the older one is when symptoms appear, the shorter the time
        spent living with the disease. Altogether, about 20% of people in their
        late 80s would be found to be living with different phases of dementia,
        and 40% of those in their 90s.
      </Typography>
      <br style={{ lineHeight: "300%" }}></br>
      <Typography sx={mainText}>
        Thus, the chance that we come “personally close” to it, either because
        we will get it ourselves, or have to cope with it as it develops in a
        close relative, is fairly high as we continue to live longer. If you are
        a patient or a caregiver, and wonder “why me,” you may find comfort in
        knowing you are not alone. Even children and young people cannot escape
        from this experience. A 17-year-old girl once said,
      </Typography>
      <Box sx={speechText}>
        <p>
          I was under a lot of stress because living with grandma wasn’t easy.
          She asked the same questions 10 times, like “What subjects you
          study?”, “What year are you in?” … I don’t bring friends home often
          now because I’m afraid they would find the situation awkward and not
          know how to deal with her. And I go out a lot less too because I have
          to stay home to help mom in case she needs it. But this experience
          helps me realize what I may have to face when my parents get old or
          when I myself get old. Seeing how mom goes through it each day without
          much complaining gives me more confidence to deal with it when the day
          comes. Mom said it isn’t too hard because grandma is willing to do the
          things she asks her to … well, not always ... and grandma still
          remembers us because she goes over photo albums often.
        </p>
      </Box>

      <br></br>
      <Box sx={secondTitle}>
        Changes That May Be Found in People With Dementia
      </Box>
      <br></br>
      <br></br>
      {/* <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={16}>
          <Box sx={imgWidth}>
            <img
              src="/comic/learn and memory/left-1183w.jpg"
              width="100%"
              maxWidth="400"
              height="auto"
              alt="learn and memory- example 1"
            />
          </Box>
        </Grid>
        <Grid xs={16}>
          <Box sx={imgWidth}>
            <img
              src="/comic/learn and memory/right-1186w.jpg"
              alt="learning and memory-example 2"
              width="100%"
            />
          </Box>
        </Grid>
      </Grid> */}
      <Grid container spacing={2} sx={imgWidth}>
        <Box>
          <img
            src="/comic/6DSM learn and memory/1 meds.jpg"
            width="100%"
            maxWidth="400"
            height="auto"
            alt="learn and memory deficits in dementia"
          />
        </Box>
        <br />
        <Box>
          <img
            src="/comic/6DSM learn and memory/2 meals.jpg"
            alt="learn and memory deficits in dementia"
            width="100%"
          />
        </Box>
        <Box>
          <figcaption style={comicText}>
            Declines in <i>learning and memory</i> impair one’s ability to learn
            new information and remember past/recent events, e.g., forgetting
            that one has just taken pills (upper panel) or had dinner (lower
            panel). [Note that words printed against a pink background refer to
            inner thoughts rather than speeches.]
          </figcaption>
        </Box>
      </Grid>
      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={2} sx={imgWidth}>
        <Box>
          <img
            src="/comic/6DSM language/1. comprehension/reading.png"
            width="100%"
            maxWidth="400"
            height="auto"
            alt="reading comprehension deficits in dementia"
          />
        </Box>
        <br />
        <Box>
          <img
            src="/comic/6DSM language/1. comprehension/conversation.png"
            alt="listening comprehension deficits in dementia"
            width="100%"
          />
        </Box>

        <figcaption style={comicText}>
          <i>Language comprehension</i> deficits include difficulties reading
          (upper panel), understanding a conversation (lower panel), and
          following a verbal command. Sometimes, even when words are recognized
          (as in reading out a passage), the concepts are lost.
        </figcaption>
        <br />
        <br />
        <br />
        <br />
      </Grid>
      <Grid container spacing={1} sx={imgWidth}>
        <img
          src="/comic/6DSM language/2. expression/bathroom.png"
          alt="language expression deficits in dementia"
          width="100%"
        />

        <figcaption style={comicText}>
          <i>Language expression</i> problems are shown when people have
          difficulty writing grammatically or finding the words they want to
          say. In multilingual people, different languages can be mixed up.
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
            src="/comic/6DSM perceptual motor/combing hair.png"
            width="100%"
            maxWidth="400"
            height="auto"
            alt="perceptual motor deficits in dementia"
          />
        </Box>
        <br />
        <Box>
          <img
            src="/comic/6DSM perceptual motor/pouring tea.png"
            alt="perceptual motor deficits in dementia"
            width="100%"
          />
        </Box>
        <br />
        <Box>
          <img
            src="/comic/6DSM perceptual motor/facial recognition.png"
            alt="perceptual motor deficits in dementia"
            width="100%"
          />
        </Box>
        <br />
        <Box>
          <img
            src="/comic/6DSM perceptual motor/shaving.png"
            alt="perceptual motor deficits in dementia"
            width="100%"
          />
        </Box>
        <figcaption style={comicText}>
          <i>Visuo-spatial-motor deficits</i> can result in a range of issues,
          including inability to operate common tools or appliances (e.g., using
          the wrong side of the comb; first, uppermost panel), difficulty with
          eye-hand coordination (second panel), inability to recognize
          places/objects/faces (third panel), problems with executing purposeful
          movements (e.g., putting the shoe on before wearing sock), or a
          combination of these issues as in grabbing a shaver to make a phone
          call (bottom panel). These problems occur in the absence of
          musculoskeletal conditions preventing movements. Even if patients
          appear to understand what they need to do, the actions, however
          well-learned, get mixed up when executed. Visuospatial deficits also
          contribute to spatial navigation errors, leading to getting lost in
          familiar environments.
        </figcaption>
      </Grid>

      <br />
      <br />
      <br />
      <br />
      <Grid container spacing={2} sx={imgWidth}>
        <Box>
          <img
            src="/comic/6DSM social cognition/fix phone.png"
            width="100%"
            maxWidth="400"
            height="auto"
            alt="problems with taking other's perspective"
          />
        </Box>

        <br />
        <Box>
          <img
            src="/comic/6DSM social cognition/farting.png"
            alt="problems with taking other's perspective"
            width="100%"
          />
        </Box>
        <figcaption style={comicText}>
          The inability to take others’ perspectives and to use this information
          to regulate one’s social behavior represents deficits in{" "}
          <i>social cognition</i>. This can result in embarrassing behaviors
          that are distressing to those around.
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
            src="/comic/6DSM complex attention/driving.png"
            width="100%"
            maxWidth="400"
            height="auto"
            alt="attention deficits in dementia"
          />
        </Box>
        <br />
        <Box>
          <img
            src="/comic/6DSM complex attention/cooking.png"
            alt="attention deficits in dementia"
            width="100%"
          />
        </Box>
        <figcaption style={comicText}>
          Situations requiring <i>complex attention</i>, including sustaining
          attention despite distractions, processing multiple stimuli
          simultaneously (upper panel) and multitasking (lower panel), can be
          excessively demanding even for those with mild dementia. It may not be
          apparent that operating the phone while walking involves
          complex/divided attention, which can precipitate falls in people with
          dementia.
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
            src="/comic/6DSM execution function/decision making/restaurant menu.png"
            width="100%"
            maxWidth="400"
            height="auto"
            alt="execution function deficits in dementia"
          />
        </Box>
        <br />

        <Box>
          <img
            src="/comic/6DSM execution function/inhibitory control/snacks.png"
            alt="execution function deficits in dementia"
            width="100%"
          />
        </Box>
        <figcaption style={comicText}>
          <i>Executive function</i> controls various cognitive abilities,
          including reasoning, planning, decision-making, organization, mental
          flexibility (adjusting thoughts according to changing circumstances),
          learning from feedback, and self-control. Impairments in these
          abilities would cause difficulties in many daily activities, such as
          balancing the checkbook, cooking, choosing food from a restaurant
          menu, holding a social conversation, playing sports and recreational
          games, driving, and restraining inappropriate behaviors. Note that
          functioning difficulties arise from deficits in multiple areas. For
          example, driving ability can be compromised because of slow and poor
          decision-making (executive function), distractibility, impaired
          simultaneous processing of different sources of information and
          multitasking (complex attention), and problems with spatial
          perception, navigation, movement execution and eye-hand coordination
          (visuo-spatial-motor); therefore, it can be hazardous to drive even
          with mild dementia.
          <br />
          <br />
        </figcaption>
      </Grid>

      <br />
      <Box sx={secondTitle}>
        <strong>Becoming a Caregiver</strong>
      </Box>
      <Box sx={mainText}>
        <p>
          Many people fear dementia for a reason. It can rob people of their
          memories, identities and self-care abilities, to name a few, over the
          course of many years. It turns people into different persons from what
          they were before. Many carers and family members grieve over the loss
          and feel depressed as they become overwhelmed by the situation. It
          feels as if their loved ones are dying a long death. (If you find
          yourself in great emotional pain, you should consider seeking help
          from a professional.)
        </p>
        <p>
          For adult children, the process is further complicated by role
          reversal, having to “parent” their own parent. As Lisa Goich-Andreadis
          (author and podcast host who cared for her mother with kidney failure)
          said so well in her memoir <i>14 Days</i>, “The day the roles reverse
          is foreign. It’s a clumsy dance of love and responsibility, not
          wanting to cross any lines of respect. It’s honoring this person who
          gave their life to you — not to mention literally gave you life — and
          taking their fragile body in your hands like a newborn, tending to
          their every need.” (You may be worried whether you will get dementia
          as well. The topic of genetic involvement in different dementing
          diseases is far too complex to be covered here. You are encouraged to
          seek help from a medical specialist if you have concerns about this
          issue.)
        </p>
        <p>
          Although it looks daunting, many caregivers have gone through the
          journey with their care-receivers all right, so you can do it too. One
          daughter-carer, whom I will call Clara, says:
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              I would be lying if I say I did not dread taking on these
              responsibilities in the first place. I did not know what dementia
              was. I have a small child to take care of. I struggled whether to
              give up my job. You know, everything in Hong Kong is so expensive
              … I worried so much … every day. But now, I would have regretted
              it if I had not done it. I found out so much about dad … and about
              myself. I did not know I was so dear to him before. He was a quiet
              man, didn’t talk much. He hid his feelings underneath … I
              sometimes wondered whether he loved me and my siblings. Now I know
              he did and it means so much to me!
            </em>
          </p>
        </Box>
        <p>
          The onset of dementia may be abrupt, as in post-stroke patients
          (called vascular dementia), or gradual (e.g., Alzheimer’s disease,
          Lewy body dementia, frontotemporal dementia). In the latter case, the
          symptoms may not be obvious until something drastic happens. At the
          same time, family members may think they are a part of normal aging
          and nothing serious — it’s natural to avoid thinking about the
          worst-case scenario. Yet, it is important to remember that dementia is
          not normal aging, and medicines and rehabilitative programs often work
          best when the illness is still at the early phase. Hence, when signs
          of deterioration cannot be explained, do bring your loved one to a
          relevant professional. (Note that throughout this program, the
          patient, i.e., the care-receiver, may be referred to as “your loved
          one” or simply “your relative”.) In fact, as said earlier, a very
          small number of dementia cases are reversible. Thus, it is important
          to get a proper assessment by a trained professional.
        </p>
        <p>
          For non-reversible dementia, an early diagnosis gives yourself more
          time to prepare for the upcoming caregiving responsibilities and
          avoids unrealistic expectations of (and blaming) the impaired
          relative. It also offers a window for your relative to make decisions
          about asset management (e.g., assigning someone to take care of
          finances when necessary) and end-of-life care decisions (i.e.,{" "}
          <em>advance directive</em>; such as whether to resuscitate in case the
          heartbeat or breathing stops). When specific future decisions are left
          to someone, it is called <em>enduring</em> or <em>lasting</em>{" "}
          <em>power of attorney</em> (the laws involved are different across
          countries, so check the laws in your country). All these important
          decisions have to be formulated and registered legally or formally
          when the person still possesses the mental capacity to do so, which
          has to be established through a complex assessment by qualified
          professionals.
        </p>
        <p>
          When discussions are held, avoid making big promises such as never
          sending your relative to an institution, as it will leave you feeling
          guilty if one day you cannot keep your loved one at home anymore. It
          is better to consider different possible scenarios and discuss the
          pros and cons together while the relative is capable of doing so. It
          is not possible to say for sure when the person will start to lose
          this capacity. Don’t wait till it’s too late.
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              She started to forget things three years ago. I didn’t think it
              was a big deal … She became less outgoing and wanted mostly to
              stay home. I thought it was normal for old people, or maybe she
              just wanted to spend more time alone with me. Later on, she would
              sometimes make a mess in the kitchen … food was too salty,
              overcooked, whatever … So I took part in the cooking too …
              gradually taking over it actually. But she wasn’t happy with me
              doing it, and we argued … Lately, she couldn’t even find the
              toilet in the apartment, and I started to freak out.
            </em>
          </p>
        </Box>

        <p>
          But being attentive does not mean you should go ahead and confront
          your relative when you notice something wrong. Rather, it is crucial
          to be sensitive to your loved one’s feelings. Misplacing items, being
          locked outside one’s car or house, missing appointments, and
          forgetting an acquaintance’s name or agenda for a meeting can be quite
          embarrassing. Likewise, being naked in front of another person and
          being helped to bathe can be quite embarrassing. These experiences
          hurt our self-esteem, especially when we start messing up on things
          that used to make us proud (which is why many patients try to hide
          their symptoms initially or make up excuses for them). And remember,
          you may one day show these symptoms yourself and{" "}
          <strong>
            it is useful to think how you want to be treated if the roles are
            reversed. It is also useful to remember that the behaviors, however
            annoying they seem, are not intentional but are the work of the
            disease eating the person’s brain away.
          </strong>
        </p>
        <p>&nbsp;</p>
        <Grid container spacing={2} sx={imgWidth}>
          <Box>
            <img
              src="/comic/Alz brain.png"
              width="100%"
              maxWidth="400"
              height="auto"
              alt="normal brain vs brain affected by dementia"
            />
          </Box>
          <figcaption style={comicText}>
            Normal brain (left) and a brain affected by dementia (right; the
            brain volume is noticeably smaller due to dead tissues).
          </figcaption>
        </Grid>
        <p>&nbsp;</p>
        <p>
          This intervention program is intended primarily for the{" "}
          <em>hidden</em> victims of dementia — those who take care of their
          loved ones with the illness. But to call them “victims” does not do
          service to the complexity of the experience — yes, you read it right,
          there are rewarding experiences along the way as well. Knowing there
          are plenty of uplifts may lessen your anxiety about taking up this
          role. In fact, some caregivers wished they could have done more,
          rather than less:
        </p>
        <Box sx={speechText}>
          <p>
            <em>
              I (a caregiver) was buying our weekly groceries from the wet
              market, telling the vegetable seller this stash was for my
              mother-in-law and the other pile was mine. A customer heard me and
              pined, “I wish I could buy for my mother-in-law too …”
            </em>
          </p>
        </Box>

        <p>
          As a caregiver, your job would no doubt be easier if you have a
          supportive family. Many caregivers feel isolated partly because close
          family members argue over many things, not the least of which is the
          care arrangement for the impaired relative. Indeed family members are
          often critical rather than supportive of the main caregiver. Not
          everyone is aware of the stress you are going through. Studies have
          shown that family counseling that helps other family members to
          understand the responsibilities of a caregiver and to improve
          communication within the family is helpful. Thus, you may want to
          invite your close family members to go through this intervention at
          the same time.
        </p>
        <p>
          Besides, the program is germane to anyone with an interest in the
          topic. Learning the subject matter will make it less stressful when
          you run into similar situations in the future because you know what is
          going to happen.
        </p>
        <Box sx={smallMainText}>
          <p>
            If you were a caregiver, I hope you would echo the content of this
            program and I hope it would help you organize and conceptualize your
            past experience;
          </p>
          <p>
            If you are currently a caregiver, I hope the program would give you
            insights about how to cope in the days ahead;
          </p>
          <p>
            If you expect to become a caregiver, I hope the program will get you
            prepared for it, and I certainly hope you will keep on reading;
          </p>
          <p>
            If you are a family member of the patient but not the caregiver, I
            hope the program will help you understand why your support to the
            caregiver is so important, and offer your help readily;
          </p>
          <p>
            If you are a general reader, I hope the program will help you
            understand why families with dementia really need support, and lend
            a helping hand when such a family is in your neighborhood.
          </p>
        </Box>

        <p>
          And if you are a patient yourself, I strongly encourage you to go
          through the intervention program together with your caregiver. It is
          as important for the caregiver to learn how to care for you, as for
          you to understand the stress your caregiver is going through and the
          sacrifices made. Your appreciation and support will mean a lot to
          him/her as the two of you walk down this journey together.
        </p>
        <p>&nbsp;</p>
        <Box sx={{ position: "relative" }}>
          <Button
            sx={{ position: "absolute", right: "10px", top: "0px" }}
            component={Link}
            to="/module2"
          >
            Next Module
          </Button>
        </Box>
        <p>&nbsp;</p>
      </Box>
    </Container>
  );
};
