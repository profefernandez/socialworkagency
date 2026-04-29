import type { Metadata } from "next";
import { DataNode } from "@/shared-components/DataNode";
import { SpineSection } from "@/shared-components/MainLayout";
import { workshops } from "@/services/site-data";

export const metadata: Metadata = {
  title: "Workshops",
  description:
    "Browse all AI ethics workshops and training sessions from 60 Watts of Clarity.",
};

export default function WorkshopsPage() {
  return (
    <SpineSection
      id="workshop-catalog"
      index="03"
      title="Workshop Catalog"
      summary="Every session is live, facilitated, and sized to preserve discussion quality while keeping the learning materials accessible."
    >
      <div>
        {workshops.map((workshop) => (
          <DataNode key={workshop.id} item={workshop} kind="workshop" />
        ))}
      </div>
    </SpineSection>
  );
}
