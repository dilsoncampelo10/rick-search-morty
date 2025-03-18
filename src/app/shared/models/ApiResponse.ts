import { Character } from "./Character";

export interface ApiResponse {
    info: { count: number; pages: number; next: string; prev: string };
    results: Character[];
  }