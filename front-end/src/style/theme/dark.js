import COLORS from '../../constants/colors';
import pizzaImage from '../../assets/images/pizza-image.png';
import pizzaBg from '../../assets/images/pizza-bg.jpg';

const dark = {
  label: {
    color: {
      inverted: COLORS.darkDesaturatedOrange,
      default: COLORS.verySoftYellow,
    },
  },

  card: {
    background: {
      inverted: COLORS.mostlyWhiteYellow,
      default: COLORS.softYellow,
    },
    color: {
      inverted: COLORS.darkDesaturatedOrange,
      default: COLORS.softYellow,
    },
    shadow: {
      default: COLORS.softYellow,
    },
    hoverShadow: {
      default: COLORS.verySoftYellow,
    },
  },

  navbar: {
    background: {
      inverted: COLORS.mostlyWhiteYellow,
      default: COLORS.softYellow,
    },
    color: {
      inverted: COLORS.darkDesaturatedOrange,
      default: COLORS.softYellow,
    },
    hoverBackground: {
      default: COLORS.softYellow,
    },
  },

  link: {
    color: {
      inverted: COLORS.darkDesaturatedOrange,
      default: COLORS.softYellow,
    },
    hover: {
      inverted: COLORS.brownTone,
      default: COLORS.softYellow,
    },
    focus: {
      inverted: COLORS.brownTone,
      default: COLORS.softYellow,
    },
  },

  button: {
    background: {
      inverted: COLORS.darkGrayishOrange,
      disabled: COLORS.pinkishGrey,
      info: COLORS.darkishPurple,
      default: COLORS.softYellow,
      warning: COLORS.squash,
    },
    color: {
      inverted: COLORS.verySoftYellow,
      disabled: COLORS.pinkishGrey,
      info: COLORS.darkishPurple,
      default: COLORS.softYellow,
      warning: COLORS.squash,
    },
    border: {
      inverted: COLORS.darkDesaturatedOrange,
      disabled: COLORS.pinkishGrey,
      info: COLORS.darkishPurple,
      default: COLORS.softYellow,
      warning: COLORS.squash,
    },
  },

  background: {
    color: {
      inverted: COLORS.darkDesaturatedOrange,
      default: COLORS.softYellow,
    },
    imageItem: {
      default: pizzaImage,
    },
    imageBackground: {
      default: pizzaBg,
    },
  },
};

export default dark;
