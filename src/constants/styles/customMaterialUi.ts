import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";
import { materialColors } from "./colors";

export const PrettoSlider = withStyles({
  root: {
    color: materialColors.gray[300],
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);
