import { BlockEditor } from "../block-editor"
import { ContentEditorProvider } from "../block-editor/context"
import { useJobPostingForm } from "../job-posting-form"

export const JobDescription = () => {
  const { form, setDescription } = useJobPostingForm()

  return (
    <ContentEditorProvider blocks={form.description} setBlocks={setDescription} placeholder="Write the job description here...">
      <BlockEditor />
    </ContentEditorProvider>
  )
}
