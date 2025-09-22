type AnyProps = Record<string, any>;

export const mergeProps = (parentProps: AnyProps, childProps: AnyProps) => {
  const overrideProps = { ...childProps };

  for (const propName in childProps) {
    const parentPropValue = parentProps[propName];
    const childPropValue = childProps[propName];

    const isHandler = isHandlerFunction(propName);

    if (isHandler) {
      const hasTwoHandlers = parentPropValue && childPropValue;
      const onlyHasParentHandler = parentPropValue && !childPropValue;

      if (hasTwoHandlers) {
        overrideProps[propName] = (...args: unknown[]) => {
          const result = childPropValue(...args);
          parentPropValue(...args);
          return result;
        };
      }

      if (onlyHasParentHandler) {
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

      continue;
    }
  }

  return { ...parentProps, ...overrideProps };
};

const isHandlerFunction = (key: string) => /^on[A-Z]/.test(key);
