import { ContentBlock } from "@ophelia/types"
import { HTMLAttributes } from "react"
import styles from "./content-editable.module.css"
import clsx from "clsx"

interface ContentEditableProps extends HTMLAttributes<HTMLDivElement> {
  block: ContentBlock
  idx: number
  ref: React.RefObject<HTMLDivElement | null>
}

export const ContentEditable = (props: ContentEditableProps) => {
  const { block, idx, ...rest } = props

  const rootClass = clsx(
    styles[block.type],
    styles.root
  )

  return (
    <div
      contentEditable
      suppressContentEditableWarning
      className={rootClass}
      id={`content-editable-${idx}`}
      {...rest}
    />
  )
}
