import { css } from "styled-components";

export const layout = {
  flex_center: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flex_vertical_center: css`
    display: flex;
    align-items: center;
  `,
  flex_horizontal_center: css`
    display: flex;
    justify-content: center;
  `,
  flex_direction_column: css`
    display: flex;
    flex-direction: column;
  `,
  absolute_center: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  absolute_vertical_center: css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  `,
  absolute_horizontal_center: css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `,
};
