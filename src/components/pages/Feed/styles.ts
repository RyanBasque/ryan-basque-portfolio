import styled from "styled-components";

import { spacing } from "@/assets/styles/theme";

export const Container = styled.main`
  min-height: calc(100vh - 140px);
  background-color: ${({ theme }) => theme.colors.background.primary};
  padding: ${spacing.xxxl} 0;
`;
