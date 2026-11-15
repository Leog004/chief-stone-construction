import DefaultHeader from "./DefaultHeader";

const Header = ({ header, contactButton, cartButton, homeHeader }) => {
  switch (header) {
    case 1:
      return (
        <DefaultHeader
          homeHeader={homeHeader}
          contactButton={contactButton}
          cartButton={cartButton}
        />
      );

    default:
      return (
        <DefaultHeader
          homeHeader={homeHeader}
          contactButton={contactButton}
          cartButton={cartButton}
        />
      );
  }
};
export default Header;
