import { useState } from 'react';
import Hero from './Hero';
import Button from '../../components/ui/Button';
import BulletList from '../../components/ui/BulletList';
import Decor from '../../components/ui/Decor';
import Icon from '../../components/ui/Icon';
import Img from '../../components/ui/Img';
import SectionHeading from '../../components/ui/SectionHeading';
import CourseCard from '../../components/cards/CourseCard';
import EventCard from '../../components/cards/EventCard';
import Certificate from '../../components/sections/Certificate';
import TeamSlider from '../../components/sections/TeamSlider';
import Testimonials from '../../components/sections/Testimonials';
import LatestPosts from '../../components/sections/LatestPosts';
import Subscribe from '../../components/sections/Subscribe';
import { featuredCourses } from '../../data/courses';
import { events } from '../../data/events';
import grid from '../../components/sections/Grid.module.css';
import styles from './Home.module.css';

const WHY = [
  'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
  'Vulputate placerat amet pulvinar lorem nisl.',
  'Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.',
  'Etiam duis lobortis in fames ultrices commodo nibh.',
  'Tincidunt sagittis neque sem ac eget.',
  'Ultricies amet justo et eget quisque purus vulputate dapibus tortor.',
];

const BENEFITS = [
  {
    id: 'tutors',
    icon: 'star',
    tab: 'Experienced Tutors',
    title: 'Only practicing tutors',
    text: 'Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.',
  },
  {
    id: 'support',
    icon: 'like',
    tab: 'Feedback & Support',
    title: 'Feedback on every task',
    text: 'Aenean quam est lobortis mi non fames dictum suspendisse. Nunc, sodales tortor sit diam mi amet massa. Morbi mauris cras massa ut dolor quis sociis mollis augue. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet.',
  },
  {
    id: 'library',
    icon: 'layers',
    tab: '24/7 Online Library',
    title: 'Materials whenever you need them',
    text: 'Morbi mauris cras massa ut dolor quis sociis mollis augue. Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Fermentum diam diam sociis vestibulum. Amet enim, nisi tempus vehicula.',
  },
  {
    id: 'community',
    icon: 'chat',
    tab: 'Community',
    title: 'A community of learners',
    text: 'Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Nulla nisl accumsan, id dignissim massa ut amet.',
  },
];

function WhyCreatex() {
  return (
    <section className={`section ${styles.why}`}>
      <div className={styles.whyBg} aria-hidden="true">
        <Decor src="shapes/dots-yellow.svg" style={{ left: -90, top: 40, width: 181 }} rotate={-52} opacity={0.8} />
        <Decor src="shapes/circles-yellow.svg" style={{ right: -165, top: 197, width: 287 }} opacity={0.12} />
      </div>
      <div className={`container ${styles.whyInner}`}>
        <div className={styles.whyImage}>
          <Img src="images/why-createx.png" alt="Student studying online with headphones" />
        </div>
        <div className={styles.whyText}>
          <SectionHeading eyebrow="Who we are" title="Why Createx?" />
          <BulletList items={WHY} className={styles.whyList} />
          <Button to="/about" size="regular">
            More about us
          </Button>
        </div>
      </div>
    </section>
  );
}

function FeaturedCourses() {
  return (
    <section className="section">
      <div className="container">
        <div className={grid.head}>
          <SectionHeading eyebrow="Ready to learn?" title="Featured Courses" />
          <Button to="/courses" variant="outline" size="large">
            View all courses
          </Button>
        </div>
        <div className={`${grid.grid2} ${grid.mt60}`}>
          {featuredCourses.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const [active, setActive] = useState(BENEFITS[0].id);
  const current = BENEFITS.find((b) => b.id === active);

  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Our benefits" title="That’s how we do it" align="center" />

        <div className={styles.tabs} role="tablist" aria-label="Our benefits">
          {BENEFITS.map((b) => (
            <button
              key={b.id}
              type="button"
              role="tab"
              id={`tab-${b.id}`}
              aria-selected={b.id === active}
              aria-controls={`panel-${b.id}`}
              className={`${styles.tab} ${b.id === active ? styles.tabActive : ''}`}
              onClick={() => setActive(b.id)}
            >
              <Icon name={b.icon} size={16} />
              {b.tab}
            </button>
          ))}
        </div>

        <div
          className={styles.benefit}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          key={current.id}
        >
          <div className={styles.benefitText}>
            <h3 className="h2">{current.title}</h3>
            <p>{current.text}</p>
          </div>
          <div className={styles.benefitArt}>
            <Img src="illustrations/benefits.svg" alt="" width="600" height="440" />
          </div>
        </div>
      </div>
    </section>
  );
}

function UpcomingEvents() {
  return (
    <section className={styles.events}>
      <div className={styles.eventsBg} aria-hidden="true">
        <Decor src="shapes/dots-white.svg" style={{ left: 10, bottom: 7, width: 116 }} opacity={0.8} />
        <Decor src="shapes/circles-white.svg" style={{ right: -60, top: -133, width: 284 }} opacity={0.2} />
      </div>
      <div className="container">
        <SectionHeading eyebrow="Our Events" title="Lectures & workshops" align="center" />
        <div className={styles.eventList}>
          {events.slice(0, 3).map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
        <div className={styles.more}>
          <p className="h3">Do you want more?</p>
          <Button to="/events" size="large">
            Explore all events
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhyCreatex />
      <FeaturedCourses />
      <Benefits />
      <UpcomingEvents />
      <Certificate />
      <TeamSlider />
      <Testimonials />
      <LatestPosts />
      <Subscribe />
    </>
  );
}
