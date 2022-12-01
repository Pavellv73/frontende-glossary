import { MainTitleType } from './types/MainTitleType';
import './MainTitle.scss';

export const MainTitle = ({ text }: MainTitleType) => {
  return (
    <h1 className="mainTitle">
      {text}
    </h1>
  );
}