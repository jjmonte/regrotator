const white = "#FFFFFF";
const black = "#161617";
const gray = "#F8F8F9";

const primaryBase = "#F2D0C4";      //tan red
const secondaryBase = "#A68780";    //light brown   
const primaryAccent = "#BF212E";    //bright red
const secondaryAccent = "#402320";  //dark brown
const special = "#F28D8D";          //desaturated red

const themeLight = {
  backgroundColor: primaryBase,
  color: primaryAccent,  
  highlightColor: special,
  bwPrimary: white,
  bwSecondary: black
};

const themeDark = {
  backgroundColor: secondaryBase,
  color: secondaryAccent,
  highlightColor: primaryAccent,
  bwPrimary: black,
  bwSecondary: white
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;