import { useEffect, useState } from "react";
import { MatchResponse } from "../../../../models/Match";
import DashboardCalendarRow from "../DashboardCalendarRow/DashboardCalendarRow";

const DashboardCalendarTable = ({ matchesOnMyTeam }: any): JSX.Element => {
  const [filteredMatchs, setFilteredMatchs] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getMatchs = () => {
    // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
    const matchs = matchesOnMyTeam.reduce((group: { [key: string]: MatchResponse[]; }, category: MatchResponse) => {
      if (!group[category.round]) {
        group[category.round] = [];
      }
      group[category.round].push(category);
      return group;
    }, {});
    setFilteredMatchs(matchs);
  };

  useEffect(() => {
    getMatchs();
  }, []);

  return (
    <>
      <div className="dashboard__matches">
        <table>
          <thead>
            <tr>
              <th>
                <div className="dashboard__matches-title">Liga</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredMatchs &&
              Object.keys(filteredMatchs).map((key) => {
                const matchs = filteredMatchs[key].map((match: MatchResponse) => {
                  return <DashboardCalendarRow key={match.localTeam._id} match={match}></DashboardCalendarRow>;
                });
                return (
                  <>
                    {matchs}
                    <tr className="dashboard__matches-spacer"></tr>
                  </>
                )
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashboardCalendarTable;
