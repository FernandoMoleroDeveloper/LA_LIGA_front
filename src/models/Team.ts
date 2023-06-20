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
