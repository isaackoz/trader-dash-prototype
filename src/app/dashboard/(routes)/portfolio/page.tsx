import {
  TitleHeaderContent,
  TitleHeaderName,
  TitleHeaderWrapper,
  Wrapper,
} from "@/components/custom/wrapper";

export default function Page() {
  return (
    <>
      <TitleHeaderWrapper>
        <TitleHeaderContent>
          <TitleHeaderName>Portfolio</TitleHeaderName>
        </TitleHeaderContent>
      </TitleHeaderWrapper>
      <Wrapper>hello</Wrapper>
    </>
  );
}
