import { useState } from "react";
import "./DashboardAdminButtons.scss";

interface DashboardAdminButtonsProps {
  setActiveTable: (table: "users" | "teams" | "calendar") => void;
}

const DashboardAdminButtons: React.FC<DashboardAdminButtonsProps> = ({ setActiveTable }): JSX.Element => {
  const [activeButton, setActiveButton] = useState<"users" | "teams" | "calendar">("users");
  return (
    <div className="admin-btn">
      <button
        className={`admin-btn__areas ${activeButton === "users" ? "active" : ""}`}
        onClick={() => {
          setActiveTable("users");
          setActiveButton("users")
        }}
      >
        USUARIOS
      </button>
      <button
        className={`admin-btn__areas ${activeButton === "teams" ? "active" : ""}`}
        onClick={() => {
          setActiveTable("teams");
          setActiveButton("teams")
        }}
      >
        EQUIPOS
      </button>
      <button
        className={`admin-btn__areas ${activeButton === "calendar" ? "active" : ""}`}
        onClick={() => {
          setActiveTable("calendar");
          setActiveButton("calendar")
        }}
      >
        LIGA
      </button>
    </div>
  );
};

export default DashboardAdminButtons;
