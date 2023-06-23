import { TeamResponse } from "./Team";

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
  goalsLocal?: string[];
  goalsVisitor?: string[];
  played: boolean;
  round: number;
}

export interface MatchTableProps {
  matchs: MatchResponse[];
}

export interface CalendarRowProps {
  match: MatchResponse;
}

export interface GoalsMatch {
  id: string;
  goalsLocal: string[];
  goalsVisitor: string[];
  played: boolean;
}
