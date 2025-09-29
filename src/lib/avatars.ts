import pacman from "../assets/avatars/pacman.svg";
import joystick from "../assets/avatars/joystick.svg";
import mouse from "../assets/avatars/mouse.svg";
import modern_controller from "../assets/avatars/modern-controller.svg";
import classic_controller from "../assets/avatars/classic-controller.svg";
import dpad from "../assets/avatars/dpad.svg";
import spaceship_green from "../assets/avatars/spaceship-green.svg";
import spaceship_red from "../assets/avatars/spaceship-red.svg";
import spaceship_blue from "../assets/avatars/spaceship-blue.svg";
import spaceship_purple from "../assets/avatars/spaceship-purple.svg";
import spaceship_orange from "../assets/avatars/spaceship-orange.svg";

const avatars = [
    { id: "1", title: "Pacman", alt: "pacman", src: pacman },
    { id: "2", title: "Joystick", alt: "joystick", src: joystick },
    { id: "3", title: "Mouse", alt: "mouse", src: mouse },
    {
        id: "4",
        title: "Modern Controller",
        alt: "modern-controller",
        src: modern_controller,
    },
    {
        id: "5",
        title: "Classic Controller",
        alt: "classic-controller",
        src: classic_controller,
    },
    { id: "6", title: "Dpad", alt: "dpad", src: dpad },
    {
        id: "7",
        title: "Green Spaceship",
        alt: "spaceship-green",
        src: spaceship_green,
    },
    {
        id: "8",
        title: "Red Spaceship",
        alt: "spaceship-red",
        src: spaceship_red,
    },
    {
        id: "9",
        title: "Blue Spaceship",
        alt: "spaceship-blue",
        src: spaceship_blue,
    },
    {
        id: "10",
        title: "Purple Spaceship",
        alt: "spaceship-purple",
        src: spaceship_purple,
    },
    {
        id: "11",
        title: "Orange Spaceship",
        alt: "spaceship-orange",
        src: spaceship_orange,
    },
] as const;

export default avatars;
