import { useMemo, useState } from 'react';
import PageHeader from '../../components/ui/PageHeader';
import FilterTabs from '../../components/ui/FilterTabs';
import Pagination from '../../components/ui/Pagination';
import { SearchInput, Select } from '../../components/ui/Form';
import BlogCard from '../../components/cards/BlogCard';
import SubscribeSplit from '../../components/sections/SubscribeSplit';
import { BLOG_CATEGORIES, POST_TYPES, posts } from '../../data/posts';
import styles from './Blog.module.css';

const TYPE_TABS = [
  { value: 'all', label: 'All' },
  ...['article', 'video', 'podcast'].map((value) => ({
    value,
    label: POST_TYPES[value].plural,
    icon: POST_TYPES[value].icon,
  })),
];

const PAGE_SIZE = 8;

export default function Blog() {
  const [type, setType] = useState('all');
  const [category, setCategory] = useState(BLOG_CATEGORIES[0]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      posts.filter(
        (p) =>
          (type === 'all' || p.type === type) &&
          (category === BLOG_CATEGORIES[0] || p.category === category) &&
          p.title.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [type, category, query],
  );
  const isFiltered = filtered.length !== posts.length;

  // the design only has 8 posts; pages 2–4 repeat them so the pagination is usable
  const pages = isFiltered ? 1 : 4;
  const shown = filtered.slice(0, PAGE_SIZE);

  const change = (fn) => (v) => {
    fn(v);
    setPage(1);
  };

  return (
    <>
      <PageHeader eyebrow="Our blog" title="Createx School Journal" />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.toolbar}>
            <FilterTabs items={TYPE_TABS} value={type} onChange={change(setType)} label="Post type" />
            <div className={styles.filters}>
              <Select
                inline
                label="Blog category"
                options={BLOG_CATEGORIES}
                value={category}
                onChange={change(setCategory)}
                className={styles.category}
              />
              <SearchInput
                placeholder="Search blog..."
                value={query}
                onChange={change(setQuery)}
                className={styles.search}
              />
            </div>
          </div>

          {shown.length ? (
            <div className={`${styles.grid} ${isFiltered ? styles.plain : ''}`} key={page}>
              {shown.map((p) => (
                <div key={p.slug} className={p.wide && !isFiltered ? styles.wide : styles.cell}>
                  <BlogCard post={p} />
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.empty}>No posts found.</p>
          )}

          <Pagination
            page={page}
            pages={pages}
            onChange={(n) => {
              setPage(n);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={styles.pagination}
          />
        </div>
      </section>

      <SubscribeSplit />
    </>
  );
}
