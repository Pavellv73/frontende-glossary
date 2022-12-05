import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

import { MainTitle } from "../MainTitle";
import "./Header.scss";

export const Header = () => {
  const arrSearch = ["1", "2"];

  return (
    <header className="header">
      <MainTitle text="frontend glossary" />

      <Autocomplete
        sx={{ width: 500 }}
        id="free-solo-demo"
        className="header__search"
        freeSolo
        options={arrSearch.map((option) => option)}
        renderInput={(params) => <TextField {...params} label="Чего ищем?" />}
      />
    </header>
  );
};
