import { TeamResponse } from "./Team";

// Cuando creemos user los user mandamos las propiedades relacionadas como id y cuando los recibamos se´rn objetos completos

export enum ROL {
  PLAYER = "PLAYER",
  MANAGER = "MANAGER",
  ADMIN = "ADMIN",
}

export interface UserCreate {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rol: ROL;
  team?: string;
  image?: string;
}

export interface UserResponse {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  rol: ROL;
  team?: TeamResponse;
  image?: string;
}
