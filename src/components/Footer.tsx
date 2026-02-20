import { Handshake, HeartIcon } from "lucide-react";
import type { ReactElement } from "react";

export default function Footer(): ReactElement {
  return (
    <footer className="border-t border-slate-200 py-8">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-slate-500">
        Feito por mim para você <Handshake className="inline text-black"/>
      </div>
    </footer>
  );
}
