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
            <strong>Module 1.3 &nbsp;Taking Care of Yourself</strong>
          </p>
        </Box>
        <Box sx={quoteText}>
          <p>
            <em>
              After I tugged the covers over my wife [at night], I went back to
              the living room alone, lying down on the couch … My whole body
              hurt … could not move … I could not remember when I last took a
              breath! “When is it going to end?” — the thought crossed my mind
              many times, but I dared not think about it.
            </em>
          </p>
        </Box>
        <Divider />
        <Box sx={mainPoints}>
          <p>
            <strong>Main Points:</strong>
          </p>
          <ul style={{ listStyleType: "square", marginLeft: "-20px" }}>
            <li>
              Take care of yourself so that you are fit to take care of your
              loved one.
            </li>
            <li>Take guidance from the PRISM model:</li>
            <ul style={{ listStyleType: "none", marginLeft: "-30px" }}>
              <li>
                &#10003;&nbsp;Pleasant event scheduling — plan to do something
                enjoyable at least once a day;
              </li>
              <li>
                &#10003;&nbsp;Relaxation — practice relaxation techniques such
                as slow breathing on a regular basis;
              </li>
              <li>
                &#10003;&nbsp;Intention and motives — reconnect with your
                reasons for doing this job;
              </li>
              <li>
                &#10003;&nbsp;Support seeking — get help; do not do it alone;
              </li>
              <li>
                &#10003;&nbsp;Mindset adjustment — modify maladaptive
                assumptions, beliefs and attitudes, including unrealistic
                expectations of the care-receiver.
              </li>
            </ul>

            <li>
              Keeping your loved one calm will bring peace to you as well. Avoid
              provoking your relative even though he/she does something
              seemingly unreasonable.
            </li>
            <li>
              If indeed you find yourself really annoyed by the relative’s
              behaviors, take a break or switch your attention to something
              else. This will help to calm yourself down before things escalate.
            </li>
          </ul>
        </Box>
        <Divider />
        <Box sx={mainText}>
          <p>
            Caring for someone with dementia is a year-round job. Initially, the
            caregiver serves more or less as a “care partner” rather than as a
            care provider, but the job will get more and more demanding as the
            relative’s condition deteriorates. It can compete with other
            responsibilities (such as parenting and work), with some giving up
            employment to do it. Needless to say, this job can be very busy,
            physically exhausting, and emotionally draining. Furthermore, the
            feeling that a close family member’s welfare depends so much on
            oneself can make caregivers forget their own personal needs. For
            example, in the case of caregivers who are adult children of the
            patient (hereafter called ‘adult child caregivers’), other than
            being overwhelmed by their responsibility toward the impaired
            parent, they may simultaneously feel guilty of neglecting spouse
            and/or children of their own. Under the circumstances, allocating
            personal time to oneself may seem a lower priority indeed. Yet, if
            caregivers do not take care of themselves properly, they will suffer
            from health and emotional problems down the road, and that will have
            further consequences for those who depend on them.
          </p>
          <Box sx={secondTitle}>
            <p>
              <strong>Avoid the Vicious Cycle</strong>
            </p>
          </Box>

          <p>
            Caregivers frequently complain that their loved ones become
            irritable for no apparent reason. They are upset by their relatives’
            emotional outbursts. At other times, the relative may feel anxious
            and sad, and is similarly uncooperative, again for no apparent
            reason. When individuals with dementia are in a bad mood and flare
            up, other behavior problems are provoked or aggravated, which are
            more difficult to handle.
          </p>
          <p>
            When an unfavorable event occurs, we feel upset. This initial
            distress actually prompts us to gather our resources to cope with
            the event and recover emotionally from the distress. We may take a
            break, talk to friends, find information that aids problem-solving,
            exercise more, and so on. However, in persons with dementia, such
            resources and capacities are compromised. As a result, negative
            emotions tend to endure. Apart from diminished coping ability, there
            is an important reason why this should be the case.
          </p>
          <p>
            Dementia is a condition that affects the mental capacities, most
            notably memory, attention, navigation, reasoning, judgment,
            perceptual organization, motor planning, and the ability to
            recognize thoughts and emotions in others. In addition, as a result
            of the diminished mental capacity, people’s ability to regulate
            their emotions in the face of stress and negative events is also
            compromised. While the disease is so debilitating, it does not
            deprive patients of the ability to react emotionally to external
            events — within their (altered) internal worlds — unless the
            dementia has reached a very late stage. Thus, if individuals with
            dementia feel threatened, they will be frightened and defensive. If
            they feel criticized, dejection or anger would be the likely
            response. For instance, one’s remark about the danger of continuous
            driving may be taken by the care-receiver as ridicule, who may then
            hit the caregiver for attempting to take the car keys away, feeling
            that it would threaten his/her autonomy. (You may not have said or
            done anything intentionally threatening or critical, but it is the
            perception of the patient under the control of dementia that
            matters.) If patients feel pain, they will be in distress. If they
            feel being forced to do something against their will, or their
            personal space is being invaded, such as being undressed and bathed,
            they will feel angry or embarrassed, and will resist. If, however,
            they feel being treated with consideration, warmth and respect, they
            will be delightful and calm.
          </p>
          <p>
            What is important about human emotion is that it outlasts the event
            that causes it. Emotions can linger on for days and weeks. A hot
            argument with your spouse the week before may continue to leave you
            somewhat grumpy, even though both of you have reconciled. An
            interesting 2010 study by psychologist Justin Feinstein (reported in
            Proceedings of National Academy of Sciences) had amnestic patients
            view video clips intended to induce pleasant or unpleasant mood.
            Although the patients quickly forgot details of the video clips
            (consistent with the nature of their brain damage), their moods
            continued to be affected in the expected way 30 minutes after
            watching the clips (a phenomenon called emotion outlast). Thus,
            memory of the event was not necessary for the feelings to be
            endured. Furthermore, Feinstein and his colleagues found that the
            magnitude of negative mood did not decrease as quickly as that of
            positive mood, in proportion to the time elapsed. In fact, at the
            end of the experiment, the patients reported stronger negative mood
            than healthy individuals. Additionally, research by psychologist
            Virginia Sturm showed that people with mild Alzheimer’s disease tend
            to react more strongly to emotionally tense situations than those
            without the disease, presumably due to damage to the brain regions
            responsible for emotion inhibition. In other words, negative mood
            lingers on more robustly and intensely than positive mood,
            especially in those with memory impairment.
          </p>
          <p>
            When care-receivers are in a bad mood and uncooperative, caregivers
            suffer and may respond with anger displays in return — a vicious
            cycle ensues. Knowing that it is the <em>disease</em> that is
            talking and behaving, not the relative’s true self, will help
            caregivers calm down. But if that is not enough, they can try
            practicing <em>self-distraction</em> to break the cycle.
            Self-distraction is related to a psychological concept called
            cognitive switching. In cognitive switching, a person attempts to
            shift from a fixated focus that bothers him/her, to something
            neutral or positive. Fixation on a negative event and ruminating
            about it increases depressive mood. Imagine yourself watching a TV
            show that reminds you of something terrible that happened to you in
            the past. You start to feel uneasy and notice that your heart is
            beating a little faster. Wouldn’t it be nice to switch to another
            channel to watch something amusing, or at least something neutral,
            instead? The difference now is that you are pressing a mental
            switch, not a physical button on the remote control. By{" "}
            <em>switching attention</em> wisely, you will get less upset and,
            more importantly, less likely to engage in confrontation that
            escalates conflicts.
          </p>
          <p>
            Not only would patients with memory deficits forget what made them
            upset in the first place, but they also forget what made{" "}
            <em>you</em> upset. Thus, whether your complaint or anger is
            justified or not, it will likely be interpreted as hostility if you
            allow your frustrations to linger on. In other words, if you keep on
            nagging, you may inadvertently provoke your relative who is already
            in a bad mood (i.e., emotion outlast), thinking that you are being
            hostile and critical, and the whole thing escalates. Your loved one
            then backs away from you, refusing to comply with your requests.
            You, on the other hand, cannot seem to comprehend what goes on and
            why your loved one behaves the way he/she does. As a result, you
            feel increasingly frustrated and helpless. That may well ruin the
            rest of the day.
          </p>
          <p>
            To <strong>self-distract</strong> means diverting one’s attention
            away from the scene and refocusing on something more agreeable. You
            can switch to another chore, practice relaxation (see below), find a
            hobby to do, walk away momentarily, or look out the window. One may
            also borrow from a technique called grounding — to make things
            short, one may try to name a few things in the surroundings that you
            can see, touch, hear or smell, and focus on these objects rather
            than the problematic situation. Remember this:{" "}
            <strong>
              You are hurt <u>not</u> by your relative’s behavior per se, but by
              the fact that you allocate attention to it, and you have a{" "}
              <u>choice</u> in what you attend to.
            </strong>{" "}
            Being consumed by the immediate difficulty also prevents one from
            seeing <em>alternative solutions</em> to the problem. Solutions do
            not automatically come to light, but improved mood after attention
            switch helps one see things from a broader perspective, including
            the benefits of self-care.
          </p>
          <Box sx={secondTitle}>
            <p>
              <strong>The PRISM Model for Self-Care</strong>
            </p>
          </Box>

          <p>
            Self-care is <em>intentional and disciplined</em> action to maintain
            and promote health and well-being in oneself. Beyond common
            knowledge including the importance of a good diet and regular
            exercise, a few simple psychological and behavioral techniques can
            be useful for caregivers. Here, I introduce five such strategies and
            call them by the acronym PRISM (
            <u>
              <strong>P</strong>
            </u>
            leasant event scheduling,{" "}
            <u>
              <strong>R</strong>
            </u>
            elaxation,{" "}
            <u>
              <strong>I</strong>
            </u>
            ntention and motives,{" "}
            <u>
              <strong>S</strong>
            </u>
            upport seeking, and{" "}
            <u>
              <strong>M</strong>
            </u>
            indset adjustment).
          </p>
          <Box sx={secondTitle}>
            <p>
              <strong>
                <em>Pleasant event scheduling</em>
              </strong>
            </p>
          </Box>

          <p>
            As the name implies, it involves <em>regularly</em> scheduling
            enjoyable activities during the day and carrying them out as
            planned. I call these “happy hours.” The activity of choice depends
            on the person. It may be listening to music, meeting with friends,
            going to a concert, doing yoga, getting a massage, or smelling the
            fragrance of flowers in the park and listening to birds singing.
            Whatever it is, the pleasure derived is bolstered by a chance to{" "}
            <em>take a break</em> from the burden of care, and the beneficial
            impact on emotional well-being is usually powerful and immediate.
          </p>
          <p>
            The effectiveness of pleasant event scheduling depends on whether
            the activities are carried through. There are plenty of reasons why
            they may not be implemented as planned. Thus, it is helpful to
            consider in advance what may stand in the way and brainstorm
            measures to tackle the obstacles one by one. For example, if doing
            your usual 30-minute run is not possible, consider breaking it into
            two slots, and if you now have a tendency to skip it altogether due
            to weariness, consider asking a friend or neighbor to run together
            to give yourself a push to do it. Note that your relative’s nap time
            is an opportune moment to undertake some of the activities, so
            schedule nap time(s) for your loved one as well.
          </p>
          <p>
            Another common barrier to activity participation is the worry about
            whether your loved one will be alright when you are gone. There is
            no point asking caregivers to do something on their own if they
            cannot have peace of mind while being away. One solution is to plan
            activities that involve the relative together but this is not always
            possible. There may be days when your loved one is too apathetic to
            be engaged. And when the person has developed significant physical
            problems or advanced dementia, taking him/her with you may not
            always be feasible. As a matter of fact,{" "}
            <em>
              all caregivers need someone to take care of their loved ones for
              short periods from time to time.
            </em>
          </p>
          <p>
            An app has been created to facilitate your scheduling of pleasant
            events. You can find it by clicking the Apps button at the top menu
            bar. Enjoy!
          </p>
          <Box sx={secondTitle}>
            <p>
              <strong>
                <em>Relaxation</em>
              </strong>
            </p>
          </Box>

          <p>
            It goes without saying that practicing relaxation on a regular basis
            is really important for anyone undergoing chronic stress. Most
            pleasant activities are relaxing, but caregivers could benefit from
            additional relaxation techniques that can be conveniently practiced
            at home (or anywhere). No method works for everyone. Here, I
            introduce a simple technique simply because it is easy to practice
            and has been proven to work.
          </p>
          <p>
            <em>Slow breathing</em>. When feeling anxious, we experience a
            number of physiological changes including increases in heart rate
            and breathing rate. Slow breathing is simply a technique to “hijack”
            this process. While the normal breathing rate is 12-20 breaths per
            minute, which goes up significantly during anxiety, a slow breathing
            exercise aims to bring it down to just several breaths per minute
            momentarily so as to reset the physiological reaction. While there
            are variations in this technique, I suggest a 4-4-6 combination,
            i.e., inhale through your nose for a count of 4 (4 seconds), hold
            the breath for a count of 4, and exhale slowly through the mouth for
            a count of 6. Repeat this process for a few minutes until you feel
            calm. This would bring the number of breaths to four per minute. My
            colleague and I have developed an app (also available on the Apps
            menu) to help you perform this exercise through visual imagery. In
            this imagery, a balloon is inflated and deflated according to the
            timing specified above.
          </p>
          <p>
            If initially you find the 4-4-6 sequence too difficult, you may try
            the 3-3-4 sequence first (i.e., inhale for 3 seconds, hold the
            breath for 3 seconds, and exhale for 4 seconds), giving you 5-6
            breaths per minutes—still far fewer than usual. On the contrary,
            those who can handle 4-4-6 easily may want to try the more
            challenging 4-7-8 sequence, thereby bringing the number of breaths
            down to three per minute.
          </p>
          <p>
            A caveat has to be mentioned: The purpose of the exercise is to help
            you relax. It’s not a competition. There is no point in competing
            with someone you know to see who can do slower breathing, or keep
            pushing your own limit — don’t stress yourself out which is
            counter-productive. Each time you finish, you will have a chance to
            rate how relaxed you are using emojis.
          </p>
          <Box sx={secondTitle}>
            <p>
              <strong>
                <em>Intention and motives</em>
              </strong>
            </p>
          </Box>

          <p>
            Everyone becomes a caregiver, and keeps on doing it, for some reason
            and purpose. Perhaps you feel you owe your parent a “debt” and want
            to repay it, or you wish to honor a lifelong commitment “whether in
            sickness or in health,” or simply want to do whatever you can to
            protect this person whom you love dearly. You may want to keep your
            loved one next to you for as long as possible, or to set an example
            for your own children, or both. Having a positive motivation will
            make the job feel easier but being swamped with work, we end up
            rushing through the day without being mindful of our intention and
            motive in the first place.
          </p>
          <p>
            It is important to remind yourself why you had wanted to do it in
            the first place and what you wanted to achieve, and rekindle that
            motivation from time to time. A good way to start doing it is to go
            through past (special) moments with your loved one and ponder how
            the two of you have come to this point in your “linked lives.” I
            like to suggest caregivers to put together a photo album, wherein
            they would insert past photos and write down what each photo reminds
            them of their feelings for the care-receiver through all these
            years. Reviewing a lifetime relationship would usually give the
            caregiver solid reasons to keep going. It will be very touching to
            share the album with your relative too.
          </p>
          <p>
            My colleague and I have developed an app (click the Apps button) to
            help you assemble an electronic album. Below is an image from a
            carer expressing her thoughts on her mother who was fond of
            knitting:
          </p>
          <Box sx={imgWidth}>
            <img
              src="../public/comic/sweater/sweater.jpg"
              alt="hand knitted sweater"
              width="100%"
            />
          </Box>
          <Box sx={imgWidth}>
            <figcaption
              style={{
                level: "body-lg",
                fontFamily: "Ysabeau",
                fontWeight: "500",
                lineHeight: "1.4",
                fontSize: "1.23rem",
              }}
            >
              <i>
                My mother was a wonderful homemaker who excelled in knitting and
                cooking among her many talents. I am so proud of having a gifted
                and generous mother like you! This sweater which you created for
                my birthday is my all-time favorite. I will never forget how
                lovely you were as a person, no matter how much you have changed
                since becoming ill.
              </i>
            </figcaption>
          </Box>

          <br />
          <p>
            Nevertheless, some caregivers may think they have little to write.
            In fact, some simply feel they got involved because they had no
            choice (say, your father was living alone and you happened to live
            closest to him). Unfortunately, these caregivers would likely feel
            more burdened by the duties and are generally less happy about their
            lives. Yet, there are plenty of caregivers who could not find a good
            reason to begin with, only for the reasons to emerge after spending
            more time with the care-receiver.
          </p>
          <Box sx={secondTitle}>
            <p>
              <strong>
                <em>Support seeking</em>
              </strong>
            </p>
          </Box>

          <p>
            Caregiving can be a very lonely business; many caregivers feel no
            one really understands what they go through day in and day out. They
            need people to talk to but even the closest family members (spouse,
            young children) may not show interest in listening. Caregivers need
            to feel understood and that their hard work is validated and
            appreciated by others in the family — this is almost like a constant
            craving for them. Perhaps you will be able to appreciate it more
            when you serve as a “substitute caregiver” for a day.
          </p>
          <p>
            In terms of hands-on assistance, most of us can appreciate help with
            chores from time to time, more so for caregivers. But what
            caregivers need, more often than not, is respite or “time off” to
            run errands, attend medical appointments themselves, get a haircut,
            or simply take a break to recuperate. Many pleasant events such as
            meeting friends, seeing a movie and getting a massage would not be
            possible without someone to watch over your loved one for a while.
            Adult day care centers provide respite by looking after the
            care-receiver during daytime and offer some rehabilitation programs
            (contact your local providers). But adult day care is not available
            to everyone on a daily basis. It would be best if you ask family,
            friends and neighbors to help too.
          </p>
          <p>
            Nevertheless, due to various reasons, including the stigma of
            dementia or just worry that something might happen when they are
            away, many caregivers feel shy to ask for help. Some caregivers just
            do everything themselves and literally build a trap for themselves.
            Go ask for help from neighbors, friends and family; some may turn
            you down but at the end of the day, you may be surprised how many
            people are willing to help. Family members who have not thought
            about helping should consider this: If you fill in for a day, you go
            back to your life as usual the next day. That’s all that is asked of
            you, while someone else is covering year-round for{" "}
            <em>your family</em>. In fact, what would you have expected from
            other family members if you were the primary caregiver yourself?
          </p>
          <Box sx={secondTitle}>
            <p>
              <strong>
                <em>Mindset adjustment</em>
              </strong>
            </p>
          </Box>

          <p>
            Philosophers and psychologists have known for centuries that our
            thoughts play a key role in how we feel and behave, which comes back
            to influence our thoughts in return. Thus, a negative thinking
            pattern generates a downward spiral, and vice versa for a positive
            thinking pattern. If we focus on positive thoughts, we will find our
            lives more enjoyable and will invest more in reaching our goals
            despite setbacks. But if we think negatively, we tend to feel
            grumpy, tense or bitter, and avoid opportunities that may improve
            our situation because we do not believe that improvement is
            possible. We may even behave in self-defeating ways.
          </p>
          <p>
            For the sake of convenience, I introduce below two general
            categories of negative or dysfunctional thoughts that are found
            among caregivers. The first category refers to thoughts related to
            the myriad of events in this long caregiving journey. The second
            category consists of thoughts related to the caregiving role itself.
            We will see that what a particular affair means to a person is a
            matter of interpretation that is influenced by the person’s
            attitudes and beliefs. If you are having tremendous difficulty with
            the caregiving job, it may be as much a result of the problems
            presented by the care-receiver as it is your own doing because of
            the way you approach the task.
          </p>
          <p>
            Consider the following example. Sarah’s husband got up before dawn
            and believed he needed to go to work, something he had done all his
            life. Sarah told him he had retired a long time ago but he continued
            to insist and make noises, so Sarah could not sleep. Sarah thought
            he did not listen to her or care about her well-being. Thinking
            about this, she could not control her anger. Sarah got upset because
            she believed she could convince her husband by reasoning with him,
            when in fact her husband might not be capable of such reasoning and
            had traveled mentally to a different period of time. She also
            assumed her husband could snap himself out of this madness if he
            still loved her. Sarah could not understand why this man with whom
            she had spent a lifetime did not seem to care about her anymore by
            doing these silly things. She could not get over the incident and
            remained upset for most of the day.
          </p>
          <p>
            Sounds familiar? In this example, Sarah committed a few common
            thinking errors made by caregivers. First, she assumed her husband
            was capable of controlling his behavior but in fact, he was simply
            “taken over” by the dementing disease and was living in a different
            reality in which his behavior would make perfect sense. Second, she
            believed that such behaviors could only come from an unloving
            husband, when in fact the behaviors were generated by the disease.{" "}
            <em>
              Sarah’s upset and anger could have been avoided for the most part
              if she had recognized what the disease was doing to her husband.
            </em>{" "}
            Like Sarah, many caregivers blame the victim for the problems they
            face — in fact, both caregivers and care-receivers are victims of
            the dementing disease.
          </p>
          <p>&nbsp;</p>
          <p>
            <br />
          </p>
          <Grid container spacing={2} sx={imgWidth}>
            <Box>
              <img
                src="../public/comic/thinking style/negative thought.png"
                width="100%"
                maxWidth="400"
                height="auto"
                alt="negative thoughts when awakened"
              />
            </Box>
            <figcaption style={comicText}>
              The caregiver believes the relative was doing it intentionally and
              becomes upset for quite a while.
            </figcaption>
          </Grid>

          <br />
          <br />
          <br />
          <Grid container spacing={2} sx={imgWidth}>
            <Box>
              <img
                src="../public/comic/thinking style/positive thought.png"
                width="100%"
                maxWidth="400"
                height="auto"
                alt="positive thoughts when awakened"
              />
            </Box>
            <figcaption style={comicText}>
              The caregiver realizes that the relative cannot control his/her
              behavior and finds a way to “get around” the relative, with
              favorable result nonetheless.
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
                src="../public/comic/wandering/1 wandering (dont).png"
                width="100%"
                maxWidth="400"
                height="auto"
                alt="negative thoughts about wandering"
              />
            </Box>
            <figcaption style={comicText}>
              The caregiver is angry because she thought her husband did not
              listen to her. Because wandering can happen on a daily basis, the
              caregiver is bound to feel upset a lot.
            </figcaption>
          </Grid>
          <br />
          <br />
          <br />

          <Grid container spacing={2} sx={imgWidth}>
            <Box>
              <img
                src="../public/comic/wandering/2 wandering (do).png"
                width="100%"
                maxWidth="400"
                height="auto"
                alt="positive thoughts about wandering"
              />
            </Box>
            <figcaption style={comicText}>
              By altering her thought, the caregiver can deal with a challenging
              behavior in a different mood. Her improved mood is also beneficial
              for the care-receiver.
            </figcaption>
          </Grid>

          <br />
          <br />

          <p>
            Caregivers also have dysfunctional beliefs about their role. Two
            related lines of beliefs appear to exacerbate the burden in
            caregivers. Some caregivers believe they should devote totally to
            their relatives who cannot take care of themselves, to the point of
            setting aside their own needs. Some also believe that they should
            not reach out for help, or express frustrations and discontent, as
            it would mean they do not love their care-receivers enough. This
            type of belief is often related to a desire to be perfect and in
            complete control, with the caregiver driving himself/herself crazy
            eventually. Sometimes one dysfunctional belief feeds another. For
            example, you may believe that you should please everyone (a widely
            held belief that is not specific to caregivers), while other family
            members may remark from time to time about the way you handle the
            care-receiver. Because of these remarks, you feel inadequate. To
            compensate for the sense of inadequacy, you strive to be as flawless
            as possible. The only way, you think, to ensure that your loved one
            does not run into any problems is to stay with him/her all the time
            …
          </p>
          <p>
            These beliefs are counter-productive as they will soon lead to
            burnout and undermine one’s strength and ability to perform
            caregiving duties. Feeling that one has failed, the caregiver will
            likely engage in self-blame, making recovery even more difficult — a
            negative feedback loop or downward spiral unfolds. In the long run,
            such beliefs will damage your physical and emotional health.
          </p>
          <p>
            Beliefs that are rigid and unrealistic are dysfunctional and
            harmful. If you tend to behave in a rigid manner despite repeated
            setbacks, and your self-expectations are crushing you, you might
            want to take a deep look at your underlying beliefs. You may share
            the above beliefs or have other beliefs that need to be changed.
            Changing the way you think will go a long way in alleviating the
            stress you feel down the road. This topic is so important, yet
            elusive, that two separate modules are devoted to it.
          </p>
          <br />
          <br />
          <Grid container spacing={2} sx={imgWidth}>
            <Box>
              <img
                src="../public/comic/false accusation/false accusation.png"
                width="100%"
                maxWidth="400"
                height="auto"
                alt="false accusation by care-receiver"
              />
            </Box>
            <figcaption style={comicText}>
              Caregivers may get accused for no reason. It can be very
              discouraging unless they have the right mindset. In this case, the
              care-receiver is stubborn and confused, and lacks the ability to
              express it clearly — all because of dementia. It is pointless to
              blame the care-receiver for something over which he/she has no
              control. Other family members should also try to understand how
              dementia can confuse the care-receiver and refrain from jumping to
              conclusions without solid evidence.
            </figcaption>
          </Grid>
          <br />
          <Box sx={{ position: "relative" }}>
            <Button
              sx={{ position: "absolute", left: "10px", top: "0px" }}
              component={Link}
              to="/module2"
            >
              Previous Module
            </Button>
            <Button
              sx={{ position: "absolute", right: "10px", top: "0px" }}
              component={Link}
              to="/module4"
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
