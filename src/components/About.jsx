import React, { useEffect, useState } from "react";
import "../styles/about.css";

const About = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const fullText = `Бизнинг Game Club — бу замонавий, хавфсиз ва қулай муҳитда ўйин ўйнашни хуш кўрадиганлар учун яратилган маскан. Биз фойдаланувчиларга юқори сифатли компютерлар, қулай тариф режалари ва доимий техник қўллаб-қувватлашни тақдим этамиз. 
Ҳар бир фойдаланувчига индивидуал ёндашув, тезкор хизмат ва шинам муҳитни кафолатлаймиз. Шунингдек, бизда янги ўйинлар мунтазам янгиланиб борилади ва мусобақалар ташкил этилади.
Ўйин — бу нафақат ҳордиқ, балки дўстлар билан вақт ўтказиш, янги танишувлар ва жамоада ишлаш тажрибасидир.`;

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 20);

      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <div className="about-container">
      <h3 className="about-title">Биз ҳақимизда</h3>
      <p className="about-text">{text}</p>
    </div>
  );
};

export default About;
