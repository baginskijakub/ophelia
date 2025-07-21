import { ContentBlock as TContentBlock } from "@ophelia/types"
import { HTMLAttributes } from "react"
import styles from "./content-block.module.css"
import clsx from "clsx"

interface ContentBlockProps extends HTMLAttributes<HTMLDivElement> {
  block: TContentBlock
  idx: number
  ref?: React.RefObject<HTMLDivElement | null>
}

export const ContentBlock = (props: ContentBlockProps) => {
  const { block, idx, className, ...rest } = props

  const rootClass = clsx(
    styles[block.type],
    styles.root,
    className,
  )

  return (
    <div
      className={rootClass}
      id={`content-block-${idx}`}
      {...rest}
    >
      {block.content}
    </div>
  )
}
