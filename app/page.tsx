import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-[500px]">
      <Button className="h-auto" asChild>
        <Link href="/news-and-events" className="text-[10rem] leading-none">{`Let's Start`}</Link>
      </Button>
    </div>
  );
}
