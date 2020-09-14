const description = {
  variants: {
    initial: { opacity: 0, x: -30 },
    animate: {
      opacity: 0.75,
      x: 0,
      transition: { duration: 0.75, delay: 0.25 },
    },
  },
  initial: 'initial',
  animate: 'animate',
};

const scrollWrapper = {
  variants: {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.75, delay: 0.25 } },
  },
  initial: 'initial',
  animate: 'animate',
};

export default { description, scrollWrapper };
