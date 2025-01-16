interface LabelProps {
  label: string;
}

export const Label: React.FC<LabelProps> = ({ label }) => {
  return <p className="text-muted-foreground mb-1 text-xs">{label}</p>;
};
