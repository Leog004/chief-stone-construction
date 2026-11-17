const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const matter = require('gray-matter');
const config = require('../data/behind-the-build.json');

function localAssetExists(src) {
  if (typeof src !== 'string' || !src.startsWith('/') || src.startsWith('//')) return false;
  const publicRoot = path.join(process.cwd(), 'public');
  const target = path.resolve(publicRoot, '.' + src);
  return target.startsWith(publicRoot + path.sep) && fs.existsSync(target);
}

function getBehindTheBuildData() {
  const directory = path.join(process.cwd(), 'src/data/projects');
  const series = [];
  const posts = [];
  for (const file of fs.readdirSync(directory).filter(file => file.endsWith('.md')).sort()) {
    const projectId = file.replace(/\.md$/, '');
    const { data } = matter(fs.readFileSync(path.join(directory, file), 'utf8'));
    const images = [...new Set([data.image, ...(data.slider?.items || []).map(item => item.image)])].filter(localAssetExists);
    if (!images.length) continue;
    series.push({ id: projectId, title: data.title.trim(), cover: images[0], count: images.length });
    images.forEach((src, index) => posts.push({
      id: projectId + '-' + crypto.createHash('sha1').update(src).digest('hex').slice(0, 12),
      type: 'image', src, seriesId: projectId, title: data.title.trim(),
      description: String(data.short || '').trim(), category: data.category || '',
      position: index + 1, alt: `${data.title.trim()} — project photo ${index + 1}`,
    }));
  }
  for (const video of config.videos) {
    if (!localAssetExists(video.src) || !localAssetExists(video.poster)) continue;
    const project = series.find(item => item.id === video.seriesId);
    if (!project) continue;
    posts.push({ ...video, type: 'video', position: ++project.count });
  }
  // Mix project series in the feed, while keeping their original order in series views.
  posts.sort((a, b) => a.position - b.position || a.seriesId.localeCompare(b.seriesId));
  return { posts, series, boards: config.boards.filter(board => posts.some(post => board.categories.includes(post.category))) };
}
module.exports = { getBehindTheBuildData, localAssetExists };
