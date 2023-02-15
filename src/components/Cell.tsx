import "./../sass/Cell.scss";

type Props = {
  letter: string;
  status: string;
};
const Cell: React.FC<Props> = ({ letter, status }) => {
  return (
    <div className={`cell ${status.replace(" ", "-")}`}>
      {letter === "-" ? "" : letter}
    </div>
  );
};

export { Cell };
