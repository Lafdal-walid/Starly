import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import BoltIcon from "@mui/icons-material/Bolt";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import SecurityIcon from "@mui/icons-material/Security";

export const menuItemsTop = [
  { label: "Home", icon: <HomeIcon />, value: "home", path: "/home" },
  { label: "Teams", icon: <GroupsIcon />, value: "teams", path: "/teams" },
  { label: "Events", icon: <EventIcon />, value: "events", path: "/events" },
  {
    label: "Profile",
    icon: <PersonIcon />,
    value: "profile",
    path: "/profile",
  },
  { label: "Quests", icon: <BoltIcon />, value: "quests", path: "/quests" },
];

export const menuItemsBottom = [
  { label: "Q&A", icon: <QuestionAnswerIcon />, value: "qa", path: "/qa" },
  {
    label: "Help Center",
    icon: <HelpCenterIcon />,
    value: "help",
    path: "/help",
  },
  {
    label: "Policies",
    icon: <SecurityIcon />,
    value: "policies",
    path: "/policies",
  },
];
