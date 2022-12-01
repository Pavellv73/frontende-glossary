import { MainTitle } from "../MainTitle";
import './Header.scss';

export const Header = () => { 
  return (
    <header className="header">
      <MainTitle text="frontend glossary" />
    </header>
  );
}