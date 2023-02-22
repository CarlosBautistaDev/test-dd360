import { GAME_TITLE } from "../../constants/strings";
import { SettingsToggle } from "../modals/SettingsToggle";
import {
  ChartSquareBarIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/outline";

type Props = {
  setIsInfoModalOpen: (value: boolean) => void;
  setIsStatsModalOpen: (value: boolean) => void;
  isDarkMode: boolean;
  handleDarkMode: Function;
};

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  isDarkMode,
  handleDarkMode,
}: Props) => {
  return (
    <nav className="navbar   bg-gray-50 dark:bg-gray-800 ">
      <div className="navbar-content  ">
        <div className="flex flex-row">
          <QuestionMarkCircleIcon
            className="h-6 w-6 cursor-pointer dark:stroke-white mr-14 "
            onClick={() => setIsInfoModalOpen(true)}
          />
         
        </div>
        <p className="text-xl text-center w-48  font-bold dark:text-white mr-14">{GAME_TITLE}</p>
        <div className="right-icons">
          <ChartSquareBarIcon
            className=" h-6 w-6 cursor-pointer dark:stroke-white mr-5"
            onClick={() => setIsStatsModalOpen(true)}
          />
        </div>
        <SettingsToggle
          settingName=""
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
      </div>
    </nav>
  );
};
