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
    widthAnimation?: boolean;
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
                                               widthAnimation = false,
                                               color = 'rgba(196,196,196,0.5)',
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
            widthAnimation={widthAnimation}
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

const widthKeyFrame = keyframes`
  0% {
    width: 15%;
  }
  50% {
    width: 85%;
  }
  100% {
    width: 15%;
  }
`

const pulseAnimation = css`
  animation: ${pulseKeyFrame} 1.5s ease-in-out infinite
`
//${widthKeyFrame} 2.5s ease-in-out infinite;

const _widthAnimation = css`
  animation: ${widthKeyFrame} 2.5s ease-in-out infinite;
`

const Base = styled.div<IProps>`
  ${({color}) => color && `background-color: ${color}`};
  ${({rounded}) => rounded && `border-radius: 25px`};
  ${({circle}) => circle && `border-radius: 50%`};
  ${({width, height}) => (width || height) && `display: block`};
  ${({animation}) => animation && pulseAnimation};
  width: ${({width, unit}) => width && unit && `${width}${unit}`};
  height: ${({height, unit}) => height && unit && `${height}${unit}`};
  ${({style}) => ({...style})}
`

const Content = styled.span`
  opacity: 0;
`