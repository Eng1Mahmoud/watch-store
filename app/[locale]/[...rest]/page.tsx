import { notFound } from "next/navigation";
// catch all page for not found routes we use this because nextjs not found page is not working with next-intl
export default function CatchAllPage() {
  notFound();
}
