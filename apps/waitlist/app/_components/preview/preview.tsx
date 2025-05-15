import clsx from 'clsx'
import styles from './preview.module.css'
import { Select } from './selector'

export const Preview = () => {
    return (
        <div className={styles.root}>
            <h2 className={clsx(styles.heading, 'text-heading')}>
            Attract <span className={styles.highlight}>top talent</span><br/> with state-of-the-art<br/> employer branding
            </h2>
            <p className={clsx(styles.heading, 'text-body')}>See the job postings Ophelia can generate for your business</p>

            <Select />
        </div>
    )
}