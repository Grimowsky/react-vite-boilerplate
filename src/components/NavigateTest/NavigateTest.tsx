import { useNavigate } from 'react-router-dom';
import React from 'react';

export const NavigateTest = () => {
  const navigate = useNavigate();

  return (
    <button name="navigateBtn" onClick={() => navigate('/elsewhere')}>
      navigate me back
    </button>
  );
};
