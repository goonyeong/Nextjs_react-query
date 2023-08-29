import { css } from "styled-components";

export const effect = {
  /* box-shadow */
  shadow_sm: css`
    box-shadow: 0px 1px 2px #0000000d;
  `,
  shadow: css`
    box-shadow: 0px 1px 3px #0000001a, 0px 1px 2px -1px #0000001a;
  `,
  shadow_md: css`
    box-shadow: 0px 4px 6px -1px #0000001a, 0px 2px 4px -2px #0000001a;
  `,
  shadow_lg: css`
    box-shadow: 0px 10px 15px -3px #0000001a, 0px 4px 6px -4px #0000001a;
  `,
  shadow_xl: css`
    box-shadow: 0px 20px 25px -5px #0000001a, 0px 8px 10px -6px #0000001a;
  `,
  shadow_2xl: css`
    box-shadow: 0px 25px 50px -12px #00000040;
  `,
  shadow_inner: css`
    box-shadow: inset 0px 2px 4px #0000000d;
  `,

  /* backdrop blur */
  backdrop_blur_sm: css`
    backdrop-filter: blur(4px);
  `,
  backdrop_blur: css`
    backdrop-filter: blur(8px);
  `,
  backdrop_blur_md: css`
    backdrop-filter: blur(12px);
  `,
  backdrop_blur_lg: css`
    backdrop-filter: blur(16px);
  `,
  backdrop_blur_xl: css`
    backdrop-filter: blur(24px);
  `,
  backdrop_blur_2xl: css`
    backdrop-filter: blur(40px);
  `,
  backdrop_blur_3xl: css`
    backdrop-filter: blur(64px);
  `,
  backdrop_blur_none: css`
    backdrop-filter: blur(0px);
  `,

  /* blur */
  blur_sm: css`
    filter: blur(4px);
  `,
  blur: css`
    filter: blur(8px);
  `,
  blur_md: css`
    filter: blur(12px);
  `,
  blur_lg: css`
    filter: blur(16px);
  `,
  blur_xl: css`
    filter: blur(24px);
  `,
  blur_2xl: css`
    filter: blur(40px);
  `,
  blur_3xl: css`
    filter: blur(64px);
  `,
  blur_none: css`
    filter: blur(0px);
  `,

  hidden_scrollbar: css`
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  text_overflow_ellipsis: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};
