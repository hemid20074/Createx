import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import Icon from '../../components/ui/Icon';
import Decor from '../../components/ui/Decor';
import Pagination from '../../components/ui/Pagination';
import { SearchInput, Select } from '../../components/ui/Form';
import EventCard from '../../components/cards/EventCard';
import Subscribe from '../../components/sections/Subscribe';
import { EVENT_TYPES, events } from '../../data/events';
import grid from '../../components/sections/Grid.module.css';
import styles from './Events.module.css';

const SORTS = [
  { value: 'newest', label: 'newest' },
  { value: 'oldest', label: 'oldest' },
];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const sortKey = (e) => MONTHS.indexOf(e.month) * 100 + Number(e.day);

export default function Events() {
  const [params, setParams] = useSearchParams();
  const view = params.get('view') === 'grid' ? 'grid' : 'list';

  const [type, setType] = useState(EVENT_TYPES[0]);
  const [sort, setSort] = useState('newest');
  const [perPage, setPerPage] = useState('9');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const list = events.filter(
      (e) =>
        (type === EVENT_TYPES[0] || e.type === type) &&
        e.title.toLowerCase().includes(query.trim().toLowerCase()),
    );
    list.sort((a, b) => (sort === 'newest' ? sortKey(b) - sortKey(a) : sortKey(a) - sortKey(b)));
    return list;
  }, [type, sort, query]);

  const size = Number(perPage);
  const pages = Math.max(1, Math.ceil(filtered.length / size));
  const current = Math.min(page, pages);
  const shown = filtered.slice((current - 1) * size, current * size);

  const setView = (v) => setParams(v === 'grid' ? { view: 'grid' } : {}, { replace: true });
  const reset = (fn) => (v) => {
    fn(v);
    setPage(1);
  };

  return (
    <>
      <PageHeader eyebrow="Our events" title="Lectures, workshops & master-classes" />

      <section className={styles.section}>
        <div className={styles.bg} aria-hidden="true">
          <Decor src="shapes/dots.svg" style={{ left: -58, top: 98, width: 170 }} rotate={45} opacity={0.6} />
          <Decor src="shapes/circles.svg" style={{ right: -120, bottom: 120, width: 230 }} opacity={0.15} />
        </div>

        <div className="container">
          <div className={styles.toolbar}>
            <Select
              inline
              label="Event category"
              options={EVENT_TYPES}
              value={type}
              onChange={reset(setType)}
              className={styles.category}
            />
            <Select inline label="Sort by" options={SORTS} value={sort} onChange={setSort} className={styles.sort} />
            <div className={styles.pager}>
              <Select
                inline
                label="Show"
                options={['3', '6', '9']}
                value={perPage}
                onChange={reset(setPerPage)}
                className={styles.perPage}
              />
              <span className={styles.pagerText}>events per page</span>
            </div>
            <SearchInput placeholder="Search event..." value={query} onChange={reset(setQuery)} className={styles.search} />
            <div className={styles.view} role="group" aria-label="View">
              <button
                type="button"
                aria-pressed={view === 'list'}
                aria-label="List view"
                className={view === 'list' ? styles.viewActive : ''}
                onClick={() => setView('list')}
              >
                <Icon name="list" size={20} />
              </button>
              <button
                type="button"
                aria-pressed={view === 'grid'}
                aria-label="Grid view"
                className={view === 'grid' ? styles.viewActive : ''}
                onClick={() => setView('grid')}
              >
                <Icon name="grid" size={20} />
              </button>
            </div>
          </div>

          {shown.length === 0 ? (
            <p className={styles.empty}>No events match your filters.</p>
          ) : view === 'grid' ? (
            <div className={`${grid.grid3} ${styles.results}`}>
              {shown.map((e) => (
                <EventCard key={e.slug} event={e} layout="grid" />
              ))}
            </div>
          ) : (
            <div className={`${styles.list} ${styles.results}`}>
              {shown.map((e) => (
                <EventCard key={e.slug} event={e} />
              ))}
            </div>
          )}

          <Pagination page={current} pages={pages} onChange={setPage} className={styles.pagination} />
        </div>
      </section>

      <Subscribe />
    </>
  );
}
