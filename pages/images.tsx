import styled from "styled-components";

const mp4_before =
  "https://d3g8yv9njst6cf.cloudfront.net/dtd/111/2d004969-7906-43ab-996d-dfe865593fc2";

const mp4_after =
  "https://d3g8yv9njst6cf.cloudfront.net/dtd/111/aaaf4fdc-c77b-4fda-be2d-0145f00e29a6";
// o
const gif_before =
  "https://d3g8yv9njst6cf.cloudfront.net/dtd/111/3a39ffc6-5098-48d7-b29e-4d65b6609d37";
// x
const gif_mp4 =
  "https://d3g8yv9njst6cf.cloudfront.net/dtd/111/47e1ab89-82c5-467d-a6ee-7d4c9dda6b73";
// o
const gif_webp =
  "https://d3g8yv9njst6cf.cloudfront.net/dtd/111/8dce207a-8a34-4422-a379-2f7fe6818755";

const Images = () => {
  return (
    <Wrapper>
      <Video autoPlay muted loop src={mp4_before} />
      <Video autoPlay muted loop src={mp4_after} />
      <div />
      <div />
      <Img src={gif_before} />
      <Video autoPlay muted loop src={gif_mp4} />
      <Video autoPlay muted loop src={gif_webp} />
      {/* <Img src={gif_webp} /> */}
    </Wrapper>
  );
};

export default Images;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(4, 300px);
  gap: 20px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  display: block;
  width: 100%;
  height: 100%;
`;
