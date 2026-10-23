import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import FilterTabs from '../../components/ui/FilterTabs';
import Icon from '../../components/ui/Icon';
import Decor from '../../components/ui/Decor';
import { SearchInput } from '../../components/ui/Form';
import CourseCard from '../../components/cards/CourseCard';
import Testimonials from '../../components/sections/Testimonials';
import Certificate from '../../components/sections/Certificate';
import Subscribe from '../../components/sections/Subscribe';
import { COURSE_CATEGORIES, courses } from '../../data/courses';
import grid from '../../components/sections/Grid.module.css';
import styles from './Courses.module.css';

const PAGE_SIZE = 9;

export default function Courses() {
  const [params, setParams] = useSearchParams();
  const category = params.get('category') || 'All';
  const [query, setQuery] = useState('');
  const [visible, setVisible] = useState(PAGE_SIZE);

  const tabs = useMemo(
    () => [
      { value: 'All', label: 'All', count: courses.length },
      ...COURSE_CATEGORIES.map((c) => ({
        value: c,
        label: c,
        count: courses.filter((x) => x.category === c).length,
      })),
    ],
    [],
  );

  const filtered = courses.filter(
    (c) =>
      (category === 'All' || c.category === category) &&
      c.title.toLowerCase().includes(query.trim().toLowerCase()),
  );

  const setCategory = (c) => {
    setVisible(PAGE_SIZE);
    setParams(c === 'All' ? {} : { category: c }, { replace: true });
  };

  return (
    <>
      <PageHeader eyebrow="Enjoy your studying!" title="Our online courses" />

      <section className={styles.catalog}>
        <div className={styles.bg} aria-hidden="true">
          <Decor src="shapes/dots-yellow-2.svg" style={{ right: -90, top: 0, width: 143 }} rotate={60} opacity={0.8} />
          <Decor src="shapes/triangles-yellow.svg" style={{ left: 56, top: 504, width: 83 }} />
          <Decor src="shapes/arrows-yellow.svg" style={{ right: 72, top: 1006, width: 85 }} rotate={180} />
        </div>

        <div className="container">
          <div className={styles.toolbar}>
            <FilterTabs items={tabs} value={category} onChange={setCategory} label="Course categories" />
            <SearchInput
              placeholder="Search course..."
              value={query}
              onChange={setQuery}
              className={styles.search}
            />
          </div>

          {filtered.length ? (
            <div className={`${grid.grid3} ${styles.grid}`}>
              {filtered.slice(0, visible).map((c) => (
                <CourseCard key={c.slug} course={c} layout="vertical" />
              ))}
            </div>
          ) : (
            <p className={styles.empty}>Nothing found. Try another category or search term.</p>
          )}

          {visible < filtered.length && (
            <button type="button" className={styles.more} onClick={() => setVisible((v) => v + PAGE_SIZE)}>
              <Icon name="refresh" size={24} />
              Load more
            </button>
          )}
        </div>
      </section>

      <Testimonials />
      <Certificate />
      <Subscribe />
    </>
  );
}
