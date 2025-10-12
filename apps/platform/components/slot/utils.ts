type AnyProps = Record<string, any>;

export const mergeProps = (parentProps: AnyProps, childProps: AnyProps) => {
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const parentPropValue = parentProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = /^on[A-Z]/.test(propName);

    if (isHandler) {
      if (parentPropValue && childPropValue) {
        overrideProps[propName] = (...args: unknown[]) => {
          childPropValue(...args);
          parentPropValue(...args);
        };
      } else if (parentPropValue) {
        overrideProps[propName] = parentPropValue;
      }

      continue;
    }

    if (propName === "style") {
      overrideProps[propName] = { ...parentPropValue, ...childPropValue };

      continue;
    }

    if (propName === "className") {
      overrideProps[propName] = [parentPropValue, childPropValue]
        .filter(Boolean)
        .join(" ");
    }
  }

  return { ...parentProps, ...overrideProps };
};
