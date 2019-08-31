import React, { useState } from 'react';
import TitleComponent from './titleComponent';

const TitleContainer = () => {
  const [title, setTitle] = useState("App Started!!");
  
  return (
    <TitleComponent title={title} />
  );
}

export default TitleContainer;
