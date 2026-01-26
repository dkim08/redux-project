import React from "react";
import "./style.css";

export interface IFireCardProps {
  title?: string;
  contentType?: 'text' | 'list-numbered' | 'list-bulleted';
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
  
  const renderContent = () => {
    switch (contentType) {
      case "text":
        return text ? (
          <p className="fire-card-text">{text}</p>
        ) : null;

      case "list-numbered":
        return (
          <ol className="fire-card-list">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        );

      case "list-bulleted":
        return (
          <ul className="fire-card-list">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`fire-card ${className || ''}`}
      style={{
        backgroundColor: sx.backgroundColor,
        color: sx.textColor,
        borderRadius: sx.borderRadius,
        padding: sx.padding,
        maxWidth: sx.maxWidth,
      }}
    >
      <h2 className="fire-card-title">{title}</h2>
      {renderContent()}   
    </div>
  );
};

export default FireCard;
