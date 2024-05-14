import {
  TitleHeaderContent,
  TitleHeaderName,
  TitleHeaderWrapper,
  Wrapper,
} from "@/components/custom/wrapper";
import { PortfolioPage } from "./_components/portfolio-page";

export default function Page() {
  return (
    <>
      <TitleHeaderWrapper>
        <TitleHeaderContent>
          <TitleHeaderName>Portfolio</TitleHeaderName>
        </TitleHeaderContent>
      </TitleHeaderWrapper>
      <Wrapper>
        <PortfolioPage />
      </Wrapper>
    </>
  );
}
