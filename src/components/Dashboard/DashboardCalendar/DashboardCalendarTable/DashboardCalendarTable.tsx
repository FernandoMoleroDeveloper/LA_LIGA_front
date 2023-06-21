import "./DashboardCalendarTable.scss";
import DashboardCalendarRow from "../DashboardCalendarRow/DashboardCalendarRow";

const DashboardCalendarTable = ({ matchesOnMyTeam }: any): JSX.Element => {
  return (
    <>
      <div className="dashboard__matches">
        <table>
          <thead>
            <tr>
              <th>
                <div className="dashboard__matches-title">PARTIDOS</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="dashboard__matches-spacer"></tr>
            {
              matchesOnMyTeam?.map((match: any) => {
                return (
                  <DashboardCalendarRow key={match?._id} match={match}></DashboardCalendarRow>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardCalendarTable;
