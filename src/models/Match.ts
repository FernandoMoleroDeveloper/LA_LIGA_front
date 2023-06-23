import { TeamResponse } from "./Team";
import { UserResponse } from "./User";

export interface MatchCreate {
  date: Date;
  localTeam: string;
  visitorTeam: string;
  goalsLocal?: string[];
  goalsVisitor?: string[];
  played: boolean;
  round: number;
}

export interface MatchResponse {
  _id: string;
  date: Date;
  localTeam: TeamResponse;
  visitorTeam: TeamResponse;
  goalsLocal?: UserResponse[];
  goalsVisitor?: UserResponse[];
  played: boolean;
  round: number;
}

export interface MatchTableProps {
  matchs: MatchResponse[];
}

export interface CalendarRowProps {
  match: MatchResponse;
}
