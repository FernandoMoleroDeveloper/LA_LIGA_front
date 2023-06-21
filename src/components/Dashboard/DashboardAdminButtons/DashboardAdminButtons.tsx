import "./DashboardAdminButtons.scss";

interface DashboardAdminButtonsProps {
  setActiveTable: (table: "freeAgent" | "teams" | "calendar") => void;
}

const DashboardAdminButtons: React.FC<DashboardAdminButtonsProps> = ({ setActiveTable }): JSX.Element => {
  return (
    <div className="admin-btn">
      <button
        className="admin-btn__areas"
        onClick={() => {
          setActiveTable("freeAgent");
        }}
      >
        USUARIOS
      </button>
      <button
        className="admin-btn__areas"
        onClick={() => {
          setActiveTable("teams");
        }}
      >
        EQUIPOS
      </button>
      <button
        className="admin-btn__areas"
        onClick={() => {
          setActiveTable("calendar");
        }}
      >
        LIGA
      </button>
    </div>
  );
};

export default DashboardAdminButtons;
