import { redirect } from "next/navigation";

export const runtime = "edge";

export default async function Home() {
  // Redirect to the cleaning services page as the main entrance
  redirect("/cleaning");
}
