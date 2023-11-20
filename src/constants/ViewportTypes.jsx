import LaptopIcon from "../components/svg/LaptopIcon";
import MonitorIcon from "../components/svg/MonitorIcon";
import PhoneIcon from "../components/svg/PhoneIcon";
import TabletIcon from "../components/svg/TabletIcon";

const Viewports = [
  {
    name: "mobile",
    width: 414,
    active: false,
    icon: <PhoneIcon color="#fff" />,
  },
  {
    name: "tablet",
    width: 768,
    active: false,
    icon: <TabletIcon color="#fff" />,
  },
  {
    name: "laptop",
    width: 1280,
    active: false,
    icon: <LaptopIcon color="#fff" />,
  },
  {
    name: "desktop",
    width: 1440,
    active: true,
    icon: <MonitorIcon color="#fff" />,
  },
];

export default Viewports
