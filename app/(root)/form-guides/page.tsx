"use client";
import { MobileOnly } from "@/components/MobileOnly";
import { FormListingMobile } from "./FormListingMobile";
import { HideOnMobile } from "@/components/ui/HideOnMobile";
import FormGuideDesktop from "./FormListingDesktop";
import { Wrapper } from "@/components/Wrapper";

const FormGuide = () => {
  return (
    <>
      <MobileOnly>
        <FormListingMobile />
      </MobileOnly>

      <HideOnMobile>
        <Wrapper>
          <FormGuideDesktop />
        </Wrapper>
      </HideOnMobile>
    </>
  );
};

export default FormGuide;
