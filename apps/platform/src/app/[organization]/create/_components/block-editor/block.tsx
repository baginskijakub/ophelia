import { ContentBlock } from "@ophelia/types";

interface BlockProps {
  block: ContentBlock;
  onChange: (block: ContentBlock) => void;
}

export const Block = (props: BlockProps) => {
  const { block, onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange({ ...block, content: event.target.value });
  };

  return (
    <div>
      <textarea
        value={block.content}
        onChange={handleChange}
        placeholder="Enter block content"
        className="w-full p-2 border rounded"
      />
    </div>
  );
};
