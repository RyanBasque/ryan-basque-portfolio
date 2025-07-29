import React, { useState } from 'react';
import { TooltipProps } from './types';
import * as S from './styles';

const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content, 
  position = 'top',
  delay = 300 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  return (
    <S.TooltipContainer
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      <S.TooltipContent 
        isVisible={isVisible} 
        position={position}
      >
        {content}
        <S.TooltipArrow position={position} />
      </S.TooltipContent>
    </S.TooltipContainer>
  );
};

export default Tooltip;
