import { HeroSection } from "@/components/about/HeroSection";
import { CompanyFacts } from "@/components/about/CompanyFacts";
import { ValuesPhilosophy } from "@/components/about/ValuesPhilosophy";
import { TeamSection } from "@/components/about/TeamSection";
import { JoinUsCTA } from "@/components/about/JoinUsCTA";


export const runtime = "edge";

export default async function AboutPage() {
  
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyFacts />
      <ValuesPhilosophy />
      <TeamSection />
      <JoinUsCTA />
    </div>
  );
}
