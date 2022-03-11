import React, { ChangeEvent } from 'react';
import { useTheme } from '../../hooks/theme';

import { Container, ComponentButton } from './styles';

function Button() {
  const { toggleTheme, setPrimaryColor, theme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  }

  function handleSetPrimaryColor({ event }: { event: ChangeEvent<HTMLInputElement>; }){
    setPrimaryColor(event.target.value);
  }

  return (
    <Container>
      <ComponentButton onClick={handleToggleTheme}>
        Change Theme
      </ComponentButton>

      <input
        type="color"
        value={theme.colors.primary}
        onChange={event => handleSetPrimaryColor({ event })}
      />
    </Container>
  );
}

export default Button;
