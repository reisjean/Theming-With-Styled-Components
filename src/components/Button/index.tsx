import React, { ChangeEvent } from 'react';
import { useTheme } from '../../hooks/theme';

import { Container, ComponentButton } from './styles';

function Button() {
  const { toggleTheme, setColor,  theme } = useTheme();

  const handleToggleTheme = () => {
    toggleTheme();
  }

  function handleSetColor({ event }: { event: ChangeEvent<HTMLInputElement>; }){
    setColor(event);
  }

  return (
    <Container>
      <ComponentButton onClick={handleToggleTheme}>
        Change Theme
      </ComponentButton>

      <input
        type="color"
        name="primary"
        value={theme.colors.primary}
        onChange={event => handleSetColor({ event })}
      />

      <input
        type="color"
        name="secondary"
        value={theme.colors.secondary}
        onChange={event => handleSetColor({ event })}
      />
    </Container>
  );
}

export default Button;
