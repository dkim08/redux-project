import React from "react";
import "./style.css";

export interface IFireCardProps {
  title?: string;
  contentType: 'text' | 'listNumbered' | 'listBulleted';
  text?: string;
  items?: string[];
  listStyle?: 'none' | 'disc' | 'decimal';
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
  listStyle = 'none',
  sx = {
    backgroundColor: '#7A3A2E',
    textColor: '#FFFFFF',
    borderRadius: '24px',
    padding: '24px',
    maxWidth: '100%',
  },
  className,
}) => {

  const Text = () => (<p className="simple-card-text">{text}</p>);


  const ListNumbered = () => (
    <ol className="simple-card-numbered-safety">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );

  const ListBulleted = () => {
    const listNoStyle = listStyle === 'none' && 'list-no-style';

    return (
      <ul className={`simple-card-bulleted-safety ${listNoStyle}`}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };



  const contentStructure = {
    text: <Text />,
    listNumbered: <ListNumbered />,
    listBulleted: <ListBulleted />,
  }

  return (
    <div
      className={`simple-cards ${className || ''}`}
      style={{
        backgroundColor: sx.backgroundColor,
        color: sx.textColor,
        borderRadius: sx.borderRadius,
        padding: sx.padding,
        maxWidth: sx.maxWidth,
      }}
    >
      <div className="simple-card-content">
        <h2 className="simple-card-title">{title}</h2>
        {contentStructure[contentType]}
      </div>

    </div>
  );
};

export default FireCard;
