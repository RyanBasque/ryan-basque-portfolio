import styled from "styled-components";
import Image from "next/image";

import { colors, spacing } from "@/assets/styles/theme";

export const Container = styled.main`
  min-height: calc(100vh - 140px);
  background-color: ${colors.background.primary};
  padding: ${spacing.xxxl} 0;
`;
