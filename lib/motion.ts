export function slideInFromLeft(delay: number): any {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };
}

export function slideInFromRight(delay: number): any {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };
}

export const slideInFromTop: any = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export const slideInFromBottom: any = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};
