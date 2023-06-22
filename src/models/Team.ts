export interface TeamCreate {
  name: string;
  initials: string;
  image?: string;
}

export interface TeamResponse {
  _id: string;
  name: string;
  initials: string;
  image?: string;
}

export interface ClasificationTeamTableProps {
  teams: TeamClasificationResponse[];
}

export interface ClasificationTeamRowProps {
  team: TeamClasificationResponse;
}

export interface TeamClasificationResponse {
  id: string;
  name: string;
  initials: string;
  image?: string;
  matchesPlayed: number;
  matchesWon: number;
  matchesLost: number;
  matchesDrawn: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  position: number;
}
