import React from "react";
import FireCard from "../index";
import "./style.css";
import { useEffect, useState } from "react";


const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="app-container">
      <FireCard
        contentType="listNumbered"
        items={[
          "Первое и самое важное — немедленно вызвать пожарную службу по номеру 101.",
          "Назвать адрес и точное место возгорания.",
          "Кратко описать что горит (квартира, класс, кухня, склад и т. д.).",
          "Указать, есть ли люди внутри.",
          "Назвать своё имя и номер телефона для обратной связи.",
        ]}
        sx={{
          backgroundColor: 'rgba(122, 58, 46, 0.75)',
          textColor: '#FFFFFF',
          borderRadius: '25px',
          padding: '31px 10px',
          maxWidth: '564px',
        }}
      />

      <FireCard
        contentType="listBulleted"
        items={[
          "Первое и самое важное — немедленно вызвать пожарную службу по номеру 101.",
          "Назвать адрес и точное место возгорания.",
          "Кратко описать что горит (квартира, класс, кухня, склад и т. д.).",
          "Указать, есть ли люди внутри.",
          "Назвать своё имя и номер телефона для обратной связи.",
        ]}
        sx={{
          backgroundColor: 'rgba(122, 58, 46, 0.75)',
          textColor: '#FFFFFF',
          borderRadius: '25px',
          padding: '31px 10px 31px 31px',
          maxWidth: '564px',
        }}
      />

      <FireCard
        contentType="listBulleted"
        title="Домашние меры безопасности"
        items={[
          "Установить дома дымовые извещатели — они заранее предупредят о задымлении.",
          "Хранить спички и зажигалки в недоступных для детей местах.",
          "Проверять исправность электропроводки и газового оборудования.",
          "Не хранить легко воспламеняющиеся жидкости (бензин, растворители) рядом с источниками тепла."
        ]}
        sx={{
          backgroundColor: 'rgba(122, 58, 46, 0.75)',
          textColor: '#FFFFFF',
          borderRadius: '25px',
          padding: '41px 24px 53px 24px',
          maxWidth: '318px',
        }}
      />

      <FireCard
        contentType="listBulleted"
        title="Безопасное обращение с огнём"
        items={[
          "Никогда не играть со спичками, зажигалками, свечами и петардами.",
          "Не оставлять открытый огонь без присмотра.",
          "На природе разводить костёр только в разрешённых местах и всегда полностью тушить его перед уходом.",
          "Не использовать свечи рядом с тканями, бумагой или легко воспламеняющимися предметами."
        ]}
        sx={{
          backgroundColor: 'rgba(122, 58, 46, 0.75)',
          textColor: '#FFFFFF',
          borderRadius: '25px',
          padding: isMobile ? '31px 25px' : '31px 50px',
          maxWidth: '488px',
        }}
      />


    </div>
  );
}

export default App;