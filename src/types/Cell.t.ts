type Cell = {
  key: string;
  status: "ok" | "exist" | "not exist" | "not set";
  row: number;
};
export type { Cell };
