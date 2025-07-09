import { ContentBlock } from "@ophelia/types";
import { BlockEditor } from "./_components";

export default async function CreateJobPage() {
  const blocks: ContentBlock[] = [
   
  ]

  return (
    <div>
    {blocks.map((b) => (
      <BlockEditor key={b.id} block={b} onFocus={() => {}} onUpdate={() => {}} isFocused />
    ))}
        essa
    </div>
  );
}
