type TCell = {
  index: number;
  key: string;
  status: "ok" | "exist" | "not exist" | "not set";
  row: number;
};
export type { TCell };
