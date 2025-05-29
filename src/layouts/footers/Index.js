import DefaultFooter from "./DefaultFooter";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <DefaultFooter />;
    default:
      return <DefaultFooter />;
  }
};
export default Footer;
