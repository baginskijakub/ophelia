import { HTMLAttributes } from "react"
import styles from './usp-item.module.css'
import clsx from "clsx"

interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string
    caption: string
}

export const UspItem = (props: Props) => {
    const {title, caption, className, ...rest } = props

    return (
        <div className={clsx(className, styles.root)}  {...rest}>
            <h6 className={clsx('text-headline', styles.headline)}>{title}</h6>
            <p className={clsx('text-body', styles.caption)}>{caption}</p>
        </div>
    )
}