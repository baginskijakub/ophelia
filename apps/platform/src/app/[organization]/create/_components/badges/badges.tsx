'use client';

import { Button, Flex, Icon } from "@ophelia/ui";
import styles from "./badges.module.css";
import { useJobPostingForm } from "../job-posting-form";

export const Badges = () => {
  const { form, setBadges } = useJobPostingForm();
  const { badges } = form;

  const onBadgeAdd = () => {
    const newBadge = "Badge";
    setBadges([...badges, newBadge]);
  };

  const onRemoveBadge = (index: number) => {
    const updatedBadges = badges.filter((_, i) => i !== index);
    setBadges(updatedBadges);
  }


  const onKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>, index: number) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (index === badges.length - 1) {
        onBadgeAdd();
      }
    } else if (e.key === "Backspace" && badges[index] === "" && index > 0) {
      e.preventDefault();
      const updatedBadges = badges.filter((_, i) => i !== index);
      setBadges(updatedBadges);
    }
  }

  return (
    <Flex gap={2} align="center">
      {badges.map((badge, index) => (
        <div key={index} className={styles.badge}>
          <span
            contentEditable
            suppressContentEditableWarning
            onKeyDown={(e) => onKeyDown(e, index)}
            aria-label={`Badge ${index + 1}`}
          >
            {badge}
          </span>

          <Icon
            name="x"
            size="sm"
            color="icon-30"
            as="button"
            onClick={() => onRemoveBadge(index)}
            />
        </div>
      ))}

      <Button
        variant="text"
        size="sm"
        onClick={onBadgeAdd}
        className={styles.addButton}
      >
        {badges.length === 0 && 'Add Badge'}
        <Icon name="plus" color="icon-30" />
      </Button>
    </Flex>
  );
};
