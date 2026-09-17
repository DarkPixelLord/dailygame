import DevOrderClient from "./DevOrderClient";

// Dev-only sandbox to iterate on the final chronological-order round
// without replaying all 5 map rounds first.
export default function DevOrderPage() {
  return (
    <div className="flex h-dvh w-full flex-col items-center overflow-hidden px-4 py-4">
      <DevOrderClient />
    </div>
  );
}
