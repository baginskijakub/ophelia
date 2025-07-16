'use client';

import { Button, Flex, Icon, Text } from '@ophelia/ui';
import styles from './badges.module.css';
import { useListingForm} from '../listing-form';
import { useRef, useEffect } from 'react';
import { Badge } from './badge';
import { AnimatePresence, motion } from 'framer-motion';

export const Badges = () => {
  const { form, setBadges } = useListingForm();
  const { badges } = form;
  const lastBadgeRef = useRef<HTMLSpanElement>(null);

  const onBadgeAdd = () => {
    const newBadge = '';
    setBadges([...badges, newBadge]);
  };

  const onRemoveBadge = (index: number) => {
    const updatedBadges = badges.filter((_, i) => i !== index);
    setBadges(updatedBadges);
  };

  const onUpdateBadgeContent = (index: number, content: string) => {
    const updatedBadges = [...badges];
    updatedBadges[index] = content;
    setBadges(updatedBadges);
  };

  const onKeyDown = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    index: number,
  ) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (index === badges.length - 1) {
        onBadgeAdd();
      }
    } else if (
      e.key === 'Backspace' &&
      badges[index] === '' &&
      index > 0 &&
      !lastBadgeRef.current?.textContent
    ) {
      e.preventDefault();
      const updatedBadges = badges.filter((_, i) => i !== index);
      setBadges(updatedBadges);
    }
  };

  useEffect(() => {
    if (lastBadgeRef.current) {
      lastBadgeRef.current.focus();
    }
  }, [badges.length]);

  return (
    <Flex direction='column' gap={2} className={styles.badgesContainer}>
      <Text role='label' size='md' color='text-70'>Badges</Text>

      <Flex gap={3} align='center'>
        <AnimatePresence initial={false} mode="popLayout" >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, x: -20, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.5 }}
              transition={{ duration: 0.2, }}
            >
              <Badge
                badge={badge}
                index={index}
                onRemoveBadge={onRemoveBadge}
                onUpdateBadgeContent={onUpdateBadgeContent}
                onKeyDown={onKeyDown}
                isLastBadge={index === badges.length - 1}
                lastBadgeRef={lastBadgeRef}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        <Button variant="text" size="sm" onClick={onBadgeAdd} className={styles.addButton}>
          {badges.length === 0 ? <>
            <Icon name="tag" color="icon-60" />
            Add badge
          </> : <Icon name="plus" color="icon-60" />}
        </Button>
      </Flex >
    </Flex>
  );
};
