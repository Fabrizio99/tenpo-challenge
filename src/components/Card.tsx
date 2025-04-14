import { FC } from "react";

interface Props {
  title: string;
  description: string;
  badges?: string[];
}
export const Card: FC<Props> = ({ title, description, badges }) => {
  return (
    <div className="card h-full">
      <figure>
        <img src="https://placehold.co/600x400" alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title mb-2.5">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="flex gap-2.5 mb-4">
          {badges?.map((badge) => (
            <span key={badge} className="badge badge-soft badge-neutral">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
