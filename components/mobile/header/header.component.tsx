import { HeaderContainer, LogoContainer, MenuContainer } from "./header.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img className="logo-img" src="/logo-small.svg" alt="Logo" />
        <span className="logo-separator"></span>
        <h1 className="logo-text">value reader.</h1>
      </LogoContainer>
      <MenuContainer>
        <button className="menu-btn">
          <img
            src="/hamburger.svg"
            alt="Hamburger menu"
            className="hamburger-icon"
          />
        </button>
      </MenuContainer>
    </HeaderContainer>
  );
};
