import "./../sass/Cell.scss";

type Props = {
  letter: string;
};
const Cell: React.FC<Props> = ({ letter }) => {
  return <div className="cell">{letter === "-" ? "" : letter}</div>;
};

export { Cell };
