import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Layouts from '@layouts/Layouts';
import ConsultationModalProvider, { ConsultationLink } from '@components/ConsultationModal';
import { getBehindTheBuildData } from '@library/behind-the-build';

const STORAGE_KEY = 'chief-stone-idea-boards-v1';
const STARTER_BOARD = { id: 'my-ideas', title: 'My project ideas', postIds: [] };

export default function BehindTheBuild({ posts, series, boards }) {
  const router = useRouter();
  const [view, setView] = useState('feed');
  const [seriesId, setSeriesId] = useState('all');
  const [boardId, setBoardId] = useState('all');
  const [mediaType, setMediaType] = useState('all');
  const [limit, setLimit] = useState(24);
  const [personalBoards, setPersonalBoards] = useState([STARTER_BOARD]);
  const [saveBoardId, setSaveBoardId] = useState('my-ideas');
  const [boardName, setBoardName] = useState('');
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState('');
  const [storageNotice, setStorageNotice] = useState('');
  const [activeId, setActiveId] = useState(null);
  const dialog = useRef(null);
  const opener = useRef(null);

  const linkedSeries = typeof router.query.series === 'string' ? router.query.series : '';
  const linkedView = typeof router.query.view === 'string' ? router.query.view : '';
  useEffect(() => {
    if (!router.isReady) return;
    setSeriesId(series.some(item => item.id === linkedSeries) ? linkedSeries : 'all');
    setView(linkedView === 'boards' ? 'boards' : 'feed');
    setBoardId('all');
    setMediaType('all');
  }, [router.isReady, linkedSeries, linkedView, series]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (Array.isArray(saved) && saved.length) {
        const valid = saved.filter(board => typeof board.id === 'string' && typeof board.title === 'string' && Array.isArray(board.postIds))
          .map(board => ({ id: board.id, title: board.title.slice(0, 50), postIds: board.postIds.filter(id => typeof id === 'string') }));
        if (valid.length) { setPersonalBoards(valid); setSaveBoardId(valid[0].id); }
      }
    } catch { setStorageNotice('Your browser could not load saved boards. You can still collect ideas for this visit.'); }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(personalBoards)); }
    catch { setStorageNotice('Your browser cannot store these boards. Your ideas will last for this visit only.'); }
  }, [personalBoards, ready]);
  useEffect(() => { setLimit(24); }, [view, seriesId, boardId, mediaType]);
  useEffect(() => {
    if (!activeId || !dialog.current) return;
    const previousOverflow = document.body.style.overflow;
    dialog.current.showModal();
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [!!activeId]);

  const active = posts.find(post => post.id === activeId);
  const episodePosts = active ? posts.filter(post => post.seriesId === active.seriesId).sort((a, b) => a.position - b.position) : [];
  const activeIndex = episodePosts.findIndex(post => post.id === activeId);
  const destination = personalBoards.find(board => board.id === saveBoardId) || personalBoards[0];
  const selectedBoard = boards.find(board => board.id === boardId) || personalBoards.find(board => board.id === boardId);
  const filtered = posts.filter(post =>
    (seriesId === 'all' || post.seriesId === seriesId) &&
    (mediaType === 'all' || post.type === mediaType) &&
    (boardId === 'all' || (selectedBoard?.categories ? selectedBoard.categories.includes(post.category) : selectedBoard?.postIds.includes(post.id)))
  );
  const visible = filtered.slice(0, limit);

  function save(post) {
    const exists = destination.postIds.includes(post.id);
    setPersonalBoards(current => current.map(board => board.id === destination.id ? {
      ...board, postIds: exists ? board.postIds.filter(id => id !== post.id) : [...board.postIds, post.id],
    } : board));
    setNotice(exists ? `Removed from ${destination.title}.` : `Saved to ${destination.title}.`);
  }
  function createBoard(event) {
    event.preventDefault();
    const title = boardName.trim();
    if (!title) return;
    const duplicate = personalBoards.find(board => board.title.toLowerCase() === title.toLowerCase());
    if (duplicate) { setSaveBoardId(duplicate.id); setNotice('That board already exists. It is now selected for saving.'); return; }
    const id = 'board-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    setPersonalBoards(current => [...current, { id, title, postIds: [] }]);
    setSaveBoardId(id); setBoardName(''); setNotice(`Created ${title}. Choose Save on any photo or video to add it.`);
  }
  function openPost(post, event) { opener.current = event.currentTarget; setActiveId(post.id); }
  function closeViewer() { dialog.current?.close(); setActiveId(null); opener.current?.focus(); }
  function browseBoard(id) { setBoardId(id); setSeriesId('all'); setMediaType('all'); setView('feed'); }

  return (
    <ConsultationModalProvider>
      <Layouts homeHeader>
        <Head><title>Behind the Build | Chief Stone Construction</title><meta name="description" content="Explore Chief Stone Construction project photos, follow each build, and collect inspiration on your own idea boards." /></Head>
        <main className="build-journal">
          <section className="build-journal-intro">
            <div className="container">
              <span className="build-eyebrow">Chief Stone / The project journal</span>
              <h1>Behind the Build<span>.</span></h1>
              <p>Every space has a story. Explore the details, follow a project, and collect ideas for what comes next.</p>
              <a href="#build-gallery" className="build-explore">Find your inspiration <span aria-hidden="true">↓</span></a>
            </div>
          </section>
          <section className="build-journal-body" id="build-gallery" aria-label="Project inspiration">
            <div className="container">
              <div className="build-view-switch" aria-label="Gallery views">
                <button type="button" aria-pressed={view === 'feed'} onClick={() => setView('feed')}>Explore the builds</button>
                <button type="button" aria-pressed={view === 'boards'} onClick={() => setView('boards')}>Idea boards</button>
              </div>
              <div className="build-save-tools">
                <label>Save ideas to<select value={saveBoardId} onChange={event => setSaveBoardId(event.target.value)} disabled={!ready}>
                  {personalBoards.map(board => <option key={board.id} value={board.id}>{board.title}</option>)}
                </select></label>
                <form onSubmit={createBoard}>
                  <label htmlFor="new-idea-board">Create a board</label>
                  <div><input id="new-idea-board" value={boardName} onChange={event => setBoardName(event.target.value)} maxLength={50} placeholder="Kitchen wish list" required /><button disabled={!ready} type="submit">Create</button></div>
                </form>
                <p>Your boards stay in this browser. No account needed.</p>
              </div>
              <p className="build-notice" role="status">{notice}</p>
              {storageNotice && <p role="status">{storageNotice}</p>}
              {view === 'boards' ? (
                <div className="build-board-grid">
                  {[...boards, ...personalBoards].map(board => {
                    const items = posts.filter(post => board.categories ? board.categories.includes(post.category) : board.postIds.includes(post.id));
                    return <button type="button" className="build-board" key={board.id} onClick={() => browseBoard(board.id)}>
                      <span className="build-board-cover">{items.length ? items.slice(0, 3).map(post => <img key={post.id} src={post.poster || post.src} alt="" loading="lazy" />) : <span>Room for your next idea <b aria-hidden="true">+</b></span>}</span>
                      <strong>{board.title}</strong><span>{board.description || 'Your personal collection'} · {items.length} ideas</span>
                    </button>;
                  })}
                </div>
              ) : (
                <>
                  <div className="build-filters">
                    <label>Follow a series<select value={seriesId} onChange={event => setSeriesId(event.target.value)}><option value="all">All project series</option>{series.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}</select></label>
                    <label>Idea board<select value={boardId} onChange={event => setBoardId(event.target.value)}><option value="all">All inspiration</option>{[...boards, ...personalBoards].map(board => <option key={board.id} value={board.id}>{board.title}</option>)}</select></label>
                    <label>Show<select value={mediaType} onChange={event => setMediaType(event.target.value)}><option value="all">Photos & videos</option><option value="image">Photos</option><option value="video">Videos</option></select></label>
                  </div>
                  <p className="build-results" role="status">{filtered.length} {filtered.length === 1 ? 'moment' : 'moments'}{selectedBoard ? ` in ${selectedBoard.title}` : ' from the build'}</p>
                  {visible.length ? <div className="build-masonry">
                    {visible.map((post, index) => <article key={post.id} className="build-card">
                      <button type="button" className={`build-card-media build-card-ratio-${index % 3}`} onClick={event => openPost(post, event)} aria-label={`Open ${post.title}, ${post.type === 'video' ? 'video' : 'photo'} ${post.position}`}>
                        <img src={post.poster || post.src} alt={post.alt || post.title} loading="lazy" decoding="async" />
                        <span className="build-media-badge">{post.type === 'video' ? '▶ Video' : 'Project photo'}</span>
                      </button>
                      <div className="build-card-info"><span className="build-eyebrow">{post.type === 'video' ? 'Watch the build' : 'From the project'}</span><h2><button type="button" onClick={event => openPost(post, event)}>{post.title}</button></h2>
                        <button type="button" className="build-save" disabled={!ready} aria-pressed={destination.postIds.includes(post.id)} onClick={() => save(post)}>{destination.postIds.includes(post.id) ? 'Saved ✓' : '+ Save idea'}</button>
                      </div>
                    </article>)}
                  </div> : <div className="build-empty"><h2>{mediaType === 'video' ? 'The next chapter is coming.' : 'Make room for inspiration.'}</h2><p>{mediaType === 'video' ? 'Project videos will appear here as they are added. Explore the photo stories in the meantime.' : 'No ideas match these filters yet. Browse the builds and save the details you love.'}</p><button type="button" onClick={() => { setMediaType('all'); setSeriesId('all'); setBoardId('all'); }}>Explore all photos</button></div>}
                  {visible.length < filtered.length && <div className="build-load-more"><button type="button" onClick={() => setLimit(current => current + 24)}>More from the build</button></div>}
                </>
              )}
              <aside className="build-journal-cta"><div><span className="build-eyebrow">From inspiration to your space</span><h2>What would you love to build?</h2></div><ConsultationLink className="consultation-primary">Let’s build together</ConsultationLink></aside>
            </div>
          </section>
        </main>
        <dialog ref={dialog} className="build-viewer" onCancel={event => { event.preventDefault(); closeViewer(); }} onClose={() => { setActiveId(null); opener.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) closeViewer(); }} aria-labelledby="build-viewer-title">
          {active && <div className="build-viewer-inner">
            <button type="button" className="build-viewer-close" onClick={closeViewer} autoFocus aria-label="Close project viewer">×</button>
            <div className="build-viewer-media">{active.type === 'video' ? <video key={active.id} src={active.src} poster={active.poster} controls playsInline preload="metadata">Your browser does not support this video.</video> : <img src={active.src} alt={active.alt} />}</div>
            <div className="build-viewer-copy"><span className="build-eyebrow">The project series · {activeIndex + 1} of {episodePosts.length}</span><h2 id="build-viewer-title">{active.title}</h2><p>{active.description}</p>
              <div className="build-viewer-actions"><button type="button" className="build-save" aria-pressed={destination.postIds.includes(active.id)} onClick={() => save(active)}>{destination.postIds.includes(active.id) ? 'Saved ✓' : `Save to ${destination.title}`}</button><Link href={`/projects/${active.seriesId}`}>View project →</Link></div>
              <div className="build-series-nav"><button type="button" disabled={activeIndex <= 0} onClick={() => setActiveId(episodePosts[activeIndex - 1].id)}>← Previous</button><button type="button" disabled={activeIndex >= episodePosts.length - 1} onClick={() => setActiveId(episodePosts[activeIndex + 1].id)}>Next in series →</button></div>
            </div>
          </div>}
        </dialog>
      </Layouts>
    </ConsultationModalProvider>
  );
}

export function getStaticProps() { return { props: getBehindTheBuildData() }; }
