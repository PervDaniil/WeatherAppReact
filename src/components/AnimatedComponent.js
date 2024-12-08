import { motion } from 'framer-motion';

export default function AnimatedComponent({ children, direction, key, durationTime = 1.5 }) {
    let animationDirection;

    switch (direction) {
        case 'left': {
            animationDirection = "translateX(-100px)"
            break;
        }
        case 'right': {
            animationDirection = "translateX(100px)"
            break;
        }
        case 'top': {
            animationDirection = "translateY(100px)"
            break;
        }
        case 'bottom': {
            animationDirection = "translateY(-100px)"
            break;
        }
        default: {
            animationDirection = "translateX(-100px)"
        }
    }

    return (
        <motion.div
            key={key}
            initial={{ transform: animationDirection }}
            animate={{ transform: "translateX(0px)" }}
            transition={{ type: "spring", duration: durationTime }}>
            { children }
        </motion.div>
    )
}
