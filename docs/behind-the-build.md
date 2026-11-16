# Behind the Build

Route: `/behind-the-build`. A top-level item immediately after Projects in the shared header navigation.

The gallery uses existing project cover photos and slider images from `src/data/projects/*.md`. Only files present in `public` are included. Photos retain their project order inside the viewer; the main feed mixes series. The gallery loads 24 items at a time. Titles and project descriptions come from the same project records; no dates or episode claims are invented.

Curated idea boards are configured in `src/data/behind-the-build.json` by project category. Visitors can create and save to their own boards. These are stored only in the current browser's localStorage, not an account or server. Clearing browser data removes them. Storage errors show a notice and leave the current session usable.

## Add a video

Put a web-compatible MP4 or WebM and its cover image in `public`, then add a record to `videos` in `src/data/behind-the-build.json`:

```json
{
  "id": "bathroom-waterproofing-video",
  "seriesId": "project-01",
  "title": "Waterproofing the shower",
  "description": "Add a factual description of this clip.",
  "category": "home-improvement",
  "src": "/videos/bathroom-waterproofing.mp4",
  "poster": "/img/bathroom-waterproofing.jpg",
  "alt": "Waterproofing work in the bathroom"
}
```

The project series must exist. Videos display a poster in the feed and play only when visitors use the native player in the viewer. They do not autoplay. Add caption tracks when uploading clips with speech; the current content contains no videos. Restart development or rebuild deployment after changing content files. No upload dashboard or social network connection is included.

## Homepage preview

The homepage preview replaces the About3 section below the consultation form. `src/components/sections/BehindTheBuildPreview.jsx` shows four project series selected in `src/pages/index.jsx`; counts come from the journal dataset. Preview links use `?series=project-01#build-gallery` and `?view=boards#build-gallery` to open the appropriate gallery view.

The photo slideshow rotates every 5.5 seconds while visible. It pauses for hover, keyboard focus, a hidden tab, or the Pause control. Manual selection stops automatic rotation. Reduced-motion visitors get manual navigation without automatic transitions. No video footage is implied by the photo-series labels.
