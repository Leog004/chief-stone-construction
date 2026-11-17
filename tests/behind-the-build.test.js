const assert = require('assert');
const fs = require('fs');
const { getBehindTheBuildData, localAssetExists } = require('../src/lib/behind-the-build');
const config = require('../src/data/behind-the-build.json');
const data = getBehindTheBuildData();
assert(data.posts.length > 0, 'Existing project photos should populate the gallery');
assert.strictEqual(new Set(data.posts.map(post => post.id)).size, data.posts.length, 'Post ids must be unique');
for (const series of data.series) {
  const posts = data.posts.filter(post => post.seriesId === series.id);
  assert.strictEqual(posts.length, series.count, 'Series count must match visible media');
  assert.strictEqual(new Set(posts.map(post => post.src)).size, posts.length, 'Cover and slider duplicates must be removed');
  assert(posts.every(post => localAssetExists(post.src)), 'No broken media links');
}
assert(!localAssetExists('/../package.json'), 'Public path traversal must be excluded');
assert(!localAssetExists('//example.com/photo.jpg'), 'Protocol-relative URLs are not local assets');
assert(!localAssetExists('/videos/missing-video.mp4'), 'Missing video files must be excluded');
const before = data.posts.length;
config.videos.push({ id: 'missing-test', seriesId: data.series[0].id, src: '/videos/missing-video.mp4', poster: data.posts[0].src });
assert.strictEqual(getBehindTheBuildData().posts.length, before, 'Unuploaded videos must not produce broken cards');
config.videos.pop();
const menu = JSON.parse(fs.readFileSync('src/data/app.json', 'utf8')).header.menu;
assert(menu.some(item => item.label === 'Behind the Build' && item.link === '/behind-the-build'));
assert(!menu.find(item => item.label === 'Projects').children.some(item => item.link === '/behind-the-build'));
console.log(`Passed gallery checks: ${data.posts.length} media items, ${data.series.length} series, ${data.boards.length} curated boards.`);
