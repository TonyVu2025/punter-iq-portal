import { MobileOnly } from "@/components/MobileOnly";
import { ResultsDesktop } from "./ResultsDesktop";
import { HideOnMobile } from "@/components/ui/HideOnMobile";
import { ResultsMobile } from "./ResultsMobile";

const ResultsPage = () => {
  return (
    <>
      <MobileOnly>
        <ResultsMobile />
      </MobileOnly>

      <HideOnMobile>
        <ResultsDesktop />
      </HideOnMobile>
    </>
  );
};

export default ResultsPage;
