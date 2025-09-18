type CardProps = {
  title: string;
  children: React.ReactNode;
};

function Card({ title, children }: CardProps) {
  return (
    <div
      style={{ border: "1px solid gray", padding: "1rem", borderRadius: "8px" }}
    >
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
}

export default Card;
