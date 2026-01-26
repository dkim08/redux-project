import React from "react";
import ReactDOM from "react-dom/client";
import FireCard from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      < FireCard
        title="Card Title"
        contentType="list-bulleted"
        items={["First item", "Second item", "Third item"]}
        sx={{
          backgroundColor: '#7A3A2E',
          textColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '20px',
          maxWidth: '400px',
        }}
      />
  </React.StrictMode>
);
