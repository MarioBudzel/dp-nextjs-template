import PropHandler, { PropHandlerType } from "./PropHandler";

const PropsWrapper: React.FC<{ props: PropHandlerType[] }> = ({ props }) => {
  return (
    <div>
      <p className="text-xl text-primary font-bold">Props</p>
      {props.map((prop, index) => (
        <PropHandler key={index} {...prop} />
      ))}
    </div>
  );
};

export default PropsWrapper;
