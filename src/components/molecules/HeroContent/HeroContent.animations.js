const headingVariants = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.75 } },
};

const paragraphVariants = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 0.5, x: 0, transition: { duration: 0.75 } },
};

const getButtonsVariants = size => ({
  initial: { opacity: 0, x: -80 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      delay: size.width > 1150 ? 1 : 2,
    },
  },
});

export default {
  headingVariants,
  paragraphVariants,
  getButtonsVariants,
};
