import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Decor from '../../components/ui/Decor';
import Icon from '../../components/ui/Icon';
import Img from '../../components/ui/Img';
import PlayButton from '../../components/ui/PlayButton';
import SectionHeading from '../../components/ui/SectionHeading';
import Stats from '../../components/ui/Stats';
import { Badge } from '../../components/cards/CourseCard';
import TeamCard from '../../components/cards/TeamCard';
import Testimonials from '../../components/sections/Testimonials';
import LatestPosts from '../../components/sections/LatestPosts';
import Subscribe from '../../components/sections/Subscribe';
import { companies, fullTeam } from '../../data/people';
import grid from '../../components/sections/Grid.module.css';
import styles from './About.module.css';

const VALUES = [
  { icon: 'structure', title: 'Structured Approach', text: 'Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris.' },
  { icon: 'chats', title: 'Professional Feedbacks', text: 'Culpa nostrud commodo ea consequat reprehenderit aliquip.' },
  { icon: 'target', title: 'Efficiency', text: 'Viverra scelerisque consequat net. Adipisicing esse consequat.' },
  { icon: 'schedule', title: 'Flexible Shedule', text: 'Aute eiusmod dolore dolore deserunt veniam ad deserunt.' },
];

const DIRECTION_TEXT =
  'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.';
const DIRECTIONS = [
  ['Marketing', 'images/directions/marketing.png'],
  ['Management', 'images/directions/management.png'],
  ['HR & Recruting', 'images/directions/hr.png'],
  ['Design', 'images/directions/design.png'],
  ['Development', 'images/directions/development.png'],
];

const PROCESS = [
  ['Watching online video lectures', 'Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.'],
  ['Passing test', 'Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam.'],
  ['Curator’s feedback', 'Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis.'],
  ['Corrections if needed', 'Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor.'],
];

export default function About() {
  return (
    <>
      {/* Intro */}
      <section className={styles.intro}>
        <div className={`container ${styles.introGrid}`}>
          <div>
            <SectionHeading eyebrow="About us" title="Createx Online School" as="h1" />
            <p className={`lead ${styles.introLead}`}>
              Createx Online School is a leader in online studying. We have lots of courses and programs from
              the main market experts.
            </p>
            <p className={styles.introText}>
              We provide relevant approaches to online learning, internships and employment in the largest
              companies in the country. Our educational programs help you get a new specialty from scratch.
              During your studies, we will help you find a job. Check the courses and online events that we
              organise.
            </p>
            <div className={styles.introButtons}>
              <Button to="/events" variant="outline" size="large">
                Explore events
              </Button>
              <Button to="/courses" size="large">
                Browse courses
              </Button>
            </div>
          </div>
          <div className={styles.introArt}>
            <Img src="illustrations/about-intro.svg" alt="" />
          </div>
        </div>
      </section>

      {/* Video + statistics */}
      <section className="section">
        <div className={`container ${styles.video}`}>
          <div>
            <PlayButton label="Watch Video" />
            <div className={styles.videoImage}>
              <Img src="images/about-video.png" alt="Student working on a laptop" />
            </div>
          </div>
          <Stats layout="column" className={styles.videoStats} />
        </div>
      </section>

      <div className={styles.decoratedA}>
        <div className={styles.decor} aria-hidden="true">
          <Decor src="shapes/dots.svg" style={{ left: 255, top: 0, width: 136 }} opacity={0.6} />
          <Decor src="shapes/chevrons.svg" style={{ right: 140, top: 151, width: 100 }} rotate={-45} opacity={0.6} />
          <Decor src="shapes/circles.svg" style={{ right: -100, top: 1845, width: 242 }} opacity={0.15} />
        </div>

        {/* Values */}
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="We always stand for" title="Our core values" align="center" />
            <ul className={styles.values}>
              {VALUES.map((v) => (
                <li key={v.title} className={styles.value}>
                  <Icon name={v.icon} size={48} strokeWidth={1.2} className={styles.valueIcon} />
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueText}>{v.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Directions */}
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Our main directions" title="What do we teach" align="center" />
            <div className={`${grid.grid3} ${grid.mt60}`}>
              {DIRECTIONS.map(([category, image]) => (
                <Link
                  key={category}
                  to={`/courses?category=${encodeURIComponent(category)}`}
                  className={styles.direction}
                >
                  <div className={styles.directionImage}>
                    <Img src={image} alt="" />
                  </div>
                  <div className={styles.directionBody}>
                    <Badge category={category} />
                    <p>{DIRECTION_TEXT}</p>
                    <span className={styles.directionLink}>
                      Check courses <Icon name="arrowRight" size={24} />
                    </span>
                  </div>
                </Link>
              ))}
              <div className={styles.soon}>New studying program coming soon...</div>
            </div>
          </div>
        </section>

        {/* Studying process */}
        <section className="section">
          <div className={`container ${styles.process}`}>
            <div>
              <SectionHeading eyebrow="Studying process" title="That’s how we do it" />
              <ol className={styles.timeline}>
                {PROCESS.map(([title, text], i) => (
                  <li key={title}>
                    <p className={styles.stepNo}>Step {i + 1}</p>
                    <h3 className={styles.stepTitle}>{title}</h3>
                    <p className={styles.stepText}>{text}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className={styles.processArt}>
              <Img src="illustrations/studying-process.svg" alt="" />
            </div>
          </div>
        </section>
      </div>

      {/* Team */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Best tutors are all here" title="Meet our team" align="center" />
          <div className={`${grid.grid4} ${grid.mt60} ${styles.team}`}>
            {fullTeam.map((p) => (
              <TeamCard key={p.name} person={p} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Companies */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Best jobs for you" title="Our students work here" align="center" />
          <ul className={styles.companies}>
            {companies.map((c) => (
              <li key={c.name} className={styles.company} title={c.name}>
                <Img src={c.image} alt={c.name} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LatestPosts />
      <Subscribe />
    </>
  );
}
