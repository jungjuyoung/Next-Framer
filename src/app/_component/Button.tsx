"use client";

import styled from "styled-components";

type Props = {
  name: string;
  icon?: React.ReactNode;
  color?: string;
  background?: string;
  border?: string;
};

const ButtonStyled = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 30px;
  border: 2px solid var(--color-border);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  gap: 1rem;
  &:hover {
    background-color: var(--color-border);
    color: white;
  }
`;

const Button = ({
  name,
  icon,
  background = "var(--color-bg)",
  color,
  border,
}: Props) => {
  return (
    <ButtonStyled style={{ background, color, border }}>
      {icon && icon}
      {name}
    </ButtonStyled>
  );
};

export default Button;
