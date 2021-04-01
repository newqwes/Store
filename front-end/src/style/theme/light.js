import COLORS from '../../constants/colors';
import pizzaImage from '../../assets/images/pizza-image.png';
import pizzaBg from '../../assets/images/pizza-bg.jpg';

const light = {
  label: {
    color: {
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.verySoftYellow,
      warning: COLORS.darkPink,
    },
  },

  login: {
    background: {
      default: COLORS.mostlyWhiteYellow,
      inverted: COLORS.softYellow,
    },
    label: {
      color: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
      },
    },
    link: {
      color: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
      },
    },
    input: {
      border: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
        warning: COLORS.darkPink,
      },
    },
    button: {
      color: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
      },
      border: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
      },
      background: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
      },
      shadow: {
        default: COLORS.veryDarkGray,
        inverted: COLORS.veryDarkGray,
      },
    },
    shadow: {
      main: {
        default: COLORS.softGray,
        inverted: COLORS.veryDarkGray,
      },
      error: {
        default: COLORS.softRedShadow,
        inverted: COLORS.softRedShadow,
      },
      success: {
        default: COLORS.softLimeGreenShadow,
        inverted: COLORS.softLimeGreenShadow,
      },
    },
  },

  card: {
    button: {
      background: {
        default: COLORS.softYellow,
        inverted: COLORS.softYellow,
      },
      hover: {
        default: COLORS.weakYellow,
        inverted: COLORS.softYellow,
      },
      color: {
        default: COLORS.brownToneLight,
        inverted: COLORS.softYellow,
      },
    },
    background: {
      default: COLORS.mostlyWhiteYellow,
      inverted: COLORS.softYellow,
    },
    color: {
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.softYellow,
    },
    shadow: {
      default: COLORS.softGray,
    },
    hoverShadow: {
      default: COLORS.gray,
    },
  },

  cart: {
    background: {
      default: COLORS.mostlyWhiteYellow,
      inverted: COLORS.softYellow,
    },
    shadow: {
      default: COLORS.softGray,
      inverted: COLORS.softYellow,
    },
  },

  order: {
    background: {
      default: COLORS.mostlyWhiteYellow,
      inverted: COLORS.softYellow,
    },
    shadow: {
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.softYellow,
    },
    hoverShadow: {
      default: COLORS.darkDesaturatedOrange,
    },
    label: {
      default: COLORS.verySoftYellow,
      inverted: COLORS.softYellow,
    },
    input: {
      color: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.softYellow,
      },
      border: {
        default: COLORS.darkDesaturatedOrange,
        inverted: COLORS.verySoftYellow,
        warning: COLORS.darkPink,
      },
    },
    button: {
      background: {
        default: COLORS.darkPink,
        inverted: COLORS.softYellow,
      },
      color: {
        default: COLORS.mostlyWhiteYellow,
        inverted: COLORS.softYellow,
      },
    },
  },

  navbar: {
    background: {
      default: COLORS.mostlyWhiteYellow,
      inverted: COLORS.softYellow,
    },
    color: {
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.softYellow,
    },
    hoverBackground: {
      default: COLORS.softYellow,
    },
    boxShadow: {
      default: COLORS.softGray,
      inverted: COLORS.softYellow,
    },
  },

  link: {
    color: {
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.softYellow,
    },
    hover: {
      default: COLORS.brownTone,
      inverted: COLORS.softYellow,
    },
    focus: {
      default: COLORS.brownTone,
      inverted: COLORS.softYellow,
    },
    line: {
      default: COLORS.brownTone,
      inverted: COLORS.softYellow,
    },
  },

  button: {
    background: {
      default: COLORS.darkGrayishOrange,
      disabled: COLORS.pinkishGrey,
      info: COLORS.darkishPurple,
      inverted: COLORS.softYellow,
      warning: COLORS.squash,
    },
    color: {
      default: COLORS.softYellow,
      disabled: COLORS.pinkishGrey,
      info: COLORS.darkishPurple,
      inverted: COLORS.softYellow,
      warning: COLORS.squash,
    },
    border: {
      default: COLORS.darkGrayishOrange,
      disabled: COLORS.pinkishGrey,
      info: COLORS.darkishPurple,
      inverted: COLORS.softYellow,
      warning: COLORS.squash,
    },
    borderActive: {
      default: COLORS.mostlyWhiteYellow,
      disabled: COLORS.pinkishGrey,
      info: COLORS.darkishPurple,
      inverted: COLORS.softYellow,
      warning: COLORS.squash,
    },
  },

  background: {
    color: {
      default: COLORS.darkDesaturatedOrange,
      inverted: COLORS.softYellow,
    },
    imageItem: {
      default: pizzaImage,
    },
    imageBackground: {
      default: pizzaBg,
    },
  },

  icon: {
    cart: {
      color: {
        default: COLORS.darkPink,
        inverted: COLORS.softYellow,
      },
    },
  },

  profile: {
    background: {
      color: {
        default: COLORS.white,
        inverted: COLORS.softYellow,
      },
    },

    delete: {
      color: {
        default: COLORS.brownToneLight,
        inverted: COLORS.softYellow,
      },
    },

    password: {
      color: {
        default: COLORS.brownToneLight,
        inverted: COLORS.softYellow,
      },
    },

    aside: {
      border: {
        default: COLORS.lightGrayishBlue,
        inverted: COLORS.softYellow,
      },
      shadow: {
        default: COLORS.lightGrayishBlue,
        inverted: COLORS.softYellow,
      },
      background: {
        default: COLORS.lightGrayishCyan,
        inverted: COLORS.softYellow,
      },
      hamburger: {
        active: {
          default: COLORS.darkDesaturatedOrange,
          inverted: COLORS.softYellow,
        },
        hover: {
          default: COLORS.brownTone,
          inverted: COLORS.softYellow,
        },
      },
      color: {
        active: {
          default: COLORS.brownToneLight,
          inverted: COLORS.softYellow,
        },
        hover: {
          default: COLORS.brownTone,
          inverted: COLORS.softYellow,
        },
      },
    },

    input: {
      disabled: {
        background: {
          default: COLORS.lightGrayishCyan,
          inverted: COLORS.softYellow,
        },
      },

      active: {
        background: {
          default: COLORS.white,
          inverted: COLORS.softYellow,
        },
      },

      border: {
        default: {
          default: COLORS.lightGrayishBlue,
          inverted: COLORS.softYellow,
        },
        error: {
          default: COLORS.darkPink,
          inverted: COLORS.softYellow,
        },
      },
    },
  },

  control: {
    saveButton: {
      active: {
        default: COLORS.brownToneLight,
        inverted: COLORS.softYellow,
      },
      disabled: {
        default: COLORS.gray,
        inverted: COLORS.softYellow,
      },
      hover: {
        default: COLORS.brownTone,
        inverted: COLORS.softYellow,
      },
    },
    editButton: {
      active: {
        default: COLORS.brownToneLight,
        inverted: COLORS.softYellow,
      },
      hover: {
        default: COLORS.brownTone,
        inverted: COLORS.softYellow,
      },
    },
  },

  footer: {
    color: {
      default: COLORS.lightGrayishBlue,
      disabled: COLORS.pinkishGrey,
      info: COLORS.darkishPurple,
      inverted: COLORS.softYellow,
      warning: COLORS.squash,
    },
  },
};

export default light;
