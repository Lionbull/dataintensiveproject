import fiFlag from "../assets/fi.svg";
import dkFlag from "../assets/dk.svg";
import eeFlag from "../assets/ee.svg";
import noSvg from "../assets/no.svg";
import seSvg from "../assets/se.svg";

export default function getFlagSvg(country) {
    switch (country) {
        case 'finland':
            return fiFlag;
        case "denmark":
            return dkFlag;
        case "estonia":
            return eeFlag;
        case "norway":
            return noSvg;
        case "sweden":
            return seSvg;
    }
};