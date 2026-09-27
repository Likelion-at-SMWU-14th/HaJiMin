import type { Dispatch, SetStateAction } from "react";

export type Part = "프론트엔드" | "백엔드" | "기획/디자인";

export type Role = "아기사자" | "운영진";

export interface Member {
  readonly id: number;
  name: string;
  part: Part;
  role: Role;
}

export interface PartContextValue {
  part: Part | "";
  setPart: Dispatch<SetStateAction<Part | "">>;
}
