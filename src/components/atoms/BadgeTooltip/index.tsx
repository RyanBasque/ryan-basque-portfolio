import { useState } from "react";

import { getBadgeData } from "@/utils/badgeConfig";

import { BadgeTooltipProps } from "./types";
import * as S from "./styles";

const BadgeWithTooltip = ({ badge }: BadgeTooltipProps): React.JSX.Element => {
  const [showTooltip, setShowTooltip] = useState(false);
  const badgeData = getBadgeData(badge);

  return (
    <S.Badge
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <S.BadgeImage 
        src={badgeData.image} 
        alt={badgeData.name}
      />
      {showTooltip && (
        <S.TooltipContent>
          {badgeData.name}
        </S.TooltipContent>
      )}
    </S.Badge>
  );
};

export default BadgeWithTooltip;