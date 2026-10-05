import { renderAppIcon } from "@/lib/app-icon";

// PNG icons referenced by manifest.ts, prerendered at build time.
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ size: "192" }, { size: "512" }];
}

export async function GET(_req: Request, { params }: RouteContext<"/app-icon/[size]">) {
  const { size } = await params;
  return renderAppIcon(Number(size));
}
