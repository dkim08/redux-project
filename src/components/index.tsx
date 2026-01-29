import React from "react";
import "./style.css";

export interface IFireCardProps {
  title?: string;
  contentType: 'text' | 'listNumbered' | 'listBulleted';
  text?: string;
  items?: string[];

  sx?: {
    backgroundColor?: string;
    textColor?: string;
    borderRadius?: string;
    padding?: string;
    maxWidth?: string;
  };

  className?: string;
}

const FireCard: React.FC<IFireCardProps> = ({
  title,
  contentType,
  text,
  items = [],
  sx = {
    backgroundColor: '#7A3A2E',
    textColor: '#FFFFFF',
    borderRadius: '24px',
    padding: '24px',
    maxWidth: '100%',
  },
  className,
}) => {

  const Text = () => (<p className="fire-card-text">{text}</p>);

  const ListNumbered = () => (
    <ol className="list-card-home-safety">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );

  const ListBulleted = () => (
    <ul className="list-card-fire-safety">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );

  const contentStructure = {
    text: <Text />,
    listNumbered: <ListNumbered />,
    listBulleted: <ListBulleted />,
  }

  return (
    <div
      className={`fire-cards ${className || ''}`}
      style={{
        backgroundColor: sx.backgroundColor,
        color: sx.textColor,
        borderRadius: sx.borderRadius,
        padding: sx.padding,
        maxWidth: sx.maxWidth,
      }}
    >
      <div className="simple-card-content">
        <h2 className="fire-card-title">{title}</h2>
        {contentStructure[contentType]}
      </div>

    </div>
  );
};

export default FireCard;
