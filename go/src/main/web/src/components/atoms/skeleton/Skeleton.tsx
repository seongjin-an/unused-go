import React, {useMemo} from "react";
import styled, {css, keyframes} from "styled-components";

interface IProps {
    width?: number;
    height?: number;
    circle?: boolean;
    rounded?: boolean;
    count?: number;
    unit?: string;
    animation?: boolean;
    color?: string;
    style?: React.CSSProperties;
}

export const Skeleton: React.FC<IProps> = ({
                                        width,
                                        height,
                                        circle,
                                        rounded,
                                        count,
                                        unit = 'px',
                                        animation = true,
                                        color = '#f4f4f4',
                                        style
                                    }) => {
    const content = useMemo(() => {
        return Array(count).fill(0).map(() => '-').join('')
    }, [count])
    return (
        <Base
            style={style}
            rounded={rounded}
            circle={circle}
            width={width}
            height={height}
            animation={animation}
            unit={unit}
            color={color}
        />
    )
}

const pulseKeyFrame = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`

const pulseAnimation = css`
  animation: ${pulseKeyFrame} 1.5s ease-in-out infinite;
`

const Base = styled.div<IProps>`
  ${({color}) => color && `background-color: ${color}`};
  ${({rounded}) => rounded && `border-radius: 8px`};
  ${({circle}) => circle && `border-radius: 50%`};
  ${({width, height}) => (width || height) && `display: block`};
  ${({animation}) => animation && pulseAnimation};
  width: ${({width, unit}) => width && unit && `${width}${unit}`};
  height: ${({height, unit}) => height && unit && `${height}${unit}`};
`

const Content = styled.span`
  opacity: 0;
`