import "./../sass/Cell.scss";

type Props = {
  letter: string;
  status: string;
  column: number;
};
const Cell: React.FC<Props> = ({ letter, status, column }) => {
  return (
    <div className={`cell ${status.replace(" ", "-")} column-${column}`}>
      {letter === "-" ? "" : letter}
    </div>
  );
};

export { Cell };
