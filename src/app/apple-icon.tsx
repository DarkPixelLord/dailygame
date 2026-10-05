import { renderAppIcon } from "@/lib/app-icon";

// iOS ignores manifest icons for "Add to Home Screen" and uses this
// apple-touch-icon instead.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return renderAppIcon(size.width);
}
