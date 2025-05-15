import clsx from 'clsx'
import styles from './usp-section.module.css'
import { UspItem } from './usp-item'

export const UspSection = () => {
    return <div className={styles.root}>
        <h1 className={clsx('text-display', styles.heading)}>You <span className={styles.highlight}>don&#39;t need a bloated hiring platform</span> that requires ages to set up.</h1>
        <UspItem 
            className={styles.item1}
            title={`You’re live in minutes, not weeks`} 
            caption={`No complicated setup. Just drop in your company URL and Ophelia will generate job posts branded with your company’s identity.`} 
        />
        <UspItem 
            className={styles.item2}
            title={`Get help writing job posts`} 
            caption={`AI creates branded, editable job descriptions so you can launch faster with less effort.`} 
        />
        <UspItem 
            className={styles.item3}
            title={`Everything you need, nothing you don’t`} 
            caption={`Track applicants, collaborate with your team, and manage your pipeline, without the clutter.`} 
        />
    </div>
}