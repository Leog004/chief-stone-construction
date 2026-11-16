// Content is maintained on the consolidated About page.
export default function LegacyAboutRedirect() { return null; }

export function getStaticProps() {
  return { redirect: { destination: '/about#history', permanent: true } };
}
