import {
  TitleHeaderContent,
  TitleHeaderName,
  TitleHeaderWrapper,
  Wrapper,
} from "@/components/custom/wrapper";
import { ConnectionsPage } from "./_connections/connections-page";

export default function Page() {
  return (
    <>
      <TitleHeaderWrapper>
        <TitleHeaderContent>
          <TitleHeaderName>Connections</TitleHeaderName>
        </TitleHeaderContent>
      </TitleHeaderWrapper>
      <Wrapper>
        <ConnectionsPage />
      </Wrapper>
    </>
  );
}
