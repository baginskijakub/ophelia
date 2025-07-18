import { BlockEditor } from "../block-editor"
import { ContentEditorProvider } from "../block-editor/context"
import { useListingForm } from "../listing-form"

export const JobDescription = () => {
  const { form, setDescription } = useListingForm()

  return (
    <ContentEditorProvider blocks={form.description} setBlocks={setDescription} placeholder="Write the job description here...">
      <BlockEditor />
    </ContentEditorProvider>
  )
}
