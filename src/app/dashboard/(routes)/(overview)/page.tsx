import {
  TitleHeaderContent,
  TitleHeaderName,
  TitleHeaderWrapper,
  Wrapper,
} from "@/components/custom/wrapper";
import { OverViewPage } from "./_components/overview-page";

export default function Page() {
  return (
    <>
      <TitleHeaderWrapper>
        <TitleHeaderContent>
          <TitleHeaderName>Overview</TitleHeaderName>
        </TitleHeaderContent>
      </TitleHeaderWrapper>
      <Wrapper>
        <OverViewPage />
      </Wrapper>
    </>
  );
}
