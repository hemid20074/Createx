import { useParams } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Button from '../../components/ui/Button';
import BulletList from '../../components/ui/BulletList';
import Accordion from '../../components/ui/Accordion';
import Img from '../../components/ui/Img';
import SectionHeading from '../../components/ui/SectionHeading';
import { Field } from '../../components/ui/Form';
import ProfileSection from '../../components/sections/ProfileSection';
import Countdown from '../../components/sections/Countdown';
import ForWhom from '../../components/sections/ForWhom';
import Testimonials from '../../components/sections/Testimonials';
import LeadForm from '../../components/sections/LeadForm';
import RelatedSlider from '../../components/sections/RelatedSlider';
import CourseCard from '../../components/cards/CourseCard';
import NotFound from '../NotFound/NotFound';
import { courseDetails as d, courses, getCourse } from '../../data/courses';
import styles from './Course.module.css';

export default function Course() {
  const { slug } = useParams();
  const course = getCourse(slug);
  if (!course) return <NotFound />;

  const related = courses.filter((c) => c.slug !== course.slug);

  return (
    <>
      <PageHeader variant="banner" eyebrow="Course" title={course.title} />

      {/* About + facts sidebar */}
      <section className={styles.about}>
        <div className={`container ${styles.aboutGrid}`}>
          <div>
            <h2 className="h1">About the course</h2>
            <p className={styles.aboutText}>{d.about}</p>
            <h3 className={`h3 ${styles.learnTitle}`}>You will learn:</h3>
            <BulletList items={d.learn} className={styles.learnList} />
          </div>

          <aside className={styles.sidebar}>
            {d.facts.map((f) => (
              <div key={f.label} className={styles.fact}>
                <p className={styles.factLabel}>{f.label}</p>
                <p className={styles.factValue}>{f.value}</p>
                <p className={styles.factText}>{f.text}</p>
              </div>
            ))}
            <Button href="#register" size="regular" block>
              Join the course
            </Button>
          </aside>
        </div>
      </section>

      <ProfileSection
        eyebrow="Course curator"
        person={d.curator}
        stats={[
          ['star', d.curator.rating],
          ['play', d.curator.courses],
          ['person', d.curator.students],
        ]}
        socials={['facebook', 'behance', 'twitter', 'linkedin']}
      />

      {/* Online learning process */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Main steps" title="Online learning process" align="center" />
          <ol className={styles.steps}>
            {d.steps.map((s, i) => (
              <li key={s.title} className={styles.step}>
                <span className={styles.stepNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Early birds CTA */}
      <section className="section">
        <div className="container">
          <form className={styles.cta} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.ctaHead}>
              <h2 className="h2">20% discount for early birds!</h2>
              <Countdown />
            </div>
            <div className={styles.ctaFields}>
              <Field label="Full name" placeholder="Your full name" required />
              <Field label="Email" type="email" placeholder="Your working email" required />
              <Field label="Phone" type="tel" placeholder="Your phone number" />
              <Button type="submit" size="regular" className={styles.ctaBtn}>
                Join the course
              </Button>
            </div>
          </form>
        </div>
      </section>

      <ForWhom title="Who will benefit from the course:" items={d.forWhom} />

      {/* Program */}
      <section className="section">
        <div className={`container ${styles.program}`}>
          <div>
            <SectionHeading eyebrow="Course program" title="What will you learn" />
            <Accordion
              className={styles.accordion}
              items={d.program.map(([title, text], i) => ({ label: `Lesson ${i + 1}.`, title, text }))}
            />
          </div>
          <div className={styles.programArt}>
            <Img src="illustrations/course-program.svg" alt="" />
          </div>
        </div>
      </section>

      <Testimonials />

      <div id="register">
        <LeadForm
          eyebrow="Leave a request now and get 20% off!"
          title="Register for the course"
          submit="Join the course"
          art="illustrations/course-register.svg"
        />
      </div>

      <RelatedSlider
        eyebrow="Check other courses"
        title="You may also like"
        perView={2}
        items={related}
        renderItem={(c) => <CourseCard course={c} />}
        more={{ text: 'Do you want more courses?', label: 'View all courses', to: '/courses' }}
        className={styles.related}
      />
    </>
  );
}
