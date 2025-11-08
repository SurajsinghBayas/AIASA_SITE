import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scissors, Sparkles as SparklesIcon } from "lucide-react";

const RibbonCutting = () => {
  const [showRibbon, setShowRibbon] = useState(true);
  const [isCutting, setIsCutting] = useState(false);
  const [showScissors, setShowScissors] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/phone
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Hide on screens smaller than 768px (tablets and phones)
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Don't show ribbon on mobile devices
    if (window.innerWidth < 768) {
      setShowRibbon(false);
      return;
    }

    // Show scissors hint after 1.5 seconds
    const timer = setTimeout(() => {
      setShowScissors(true);
    }, 1500);

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === "Space" && showRibbon && !isCutting) {
        e.preventDefault();
        setIsCutting(true);
        setShowScissors(false);

        // Cut the ribbon and hide after animation
        setTimeout(() => {
          setShowRibbon(false);
        }, 2000);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, [showRibbon, isCutting]);

  // Don't render anything on mobile devices
  if (isMobile || !showRibbon) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-lg"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Background sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 text-center px-4">
          {/* Logo and Title */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/imgs.png"
                  alt="AIASA Logo"
                  className="w-full h-full rounded-xl shadow-2xl"
                />
              </motion.div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-2">
              Welcome to AIASA
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Artificial Intelligence Alliance Student Association
            </p>
          </motion.div>

          {/* Ribbon */}
          <div className="relative h-32 sm:h-40 flex items-center justify-center mb-8">
            {/* Left ribbon part */}
            <motion.div
              className="absolute h-24 sm:h-32 bg-gradient-to-r from-red-500 via-red-600 to-red-500 shadow-2xl"
              style={{
                width: "45%",
                left: "5%",
                clipPath: "polygon(0 20%, 100% 20%, 95% 50%, 100% 80%, 0 80%)",
              }}
              animate={
                isCutting
                  ? {
                      x: -window.innerWidth,
                      rotate: -45,
                      opacity: 0,
                    }
                  : {}
              }
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Right ribbon part */}
            <motion.div
              className="absolute h-24 sm:h-32 bg-gradient-to-r from-red-500 via-red-600 to-red-500 shadow-2xl"
              style={{
                width: "45%",
                right: "5%",
                clipPath: "polygon(0 20%, 100% 20%, 100% 80%, 0 80%, 5% 50%)",
              }}
              animate={
                isCutting
                  ? {
                      x: window.innerWidth,
                      rotate: 45,
                      opacity: 0,
                    }
                  : {}
              }
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Center scissors animation */}
            <AnimatePresence>
              {isCutting && (
                <motion.div
                  className="absolute z-20"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: [0, 2, 1.5], rotate: [0, 180, 360] }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <Scissors className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Confetti & Party Poppers explosion when cut */}
            {isCutting && (
              <div className="absolute inset-0 pointer-events-none">
                {/* Confetti pieces */}
                {[...Array(50)].map((_, i) => (
                  <motion.div
                    key={`confetti-${i}`}
                    className="absolute"
                    style={{
                      backgroundColor: [
                        "#ef4444",
                        "#f59e0b",
                        "#10b981",
                        "#3b82f6",
                        "#8b5cf6",
                        "#ec4899",
                        "#f97316",
                      ][i % 7],
                      left: "50%",
                      top: "50%",
                      width: Math.random() * 12 + 4 + "px",
                      height: Math.random() * 12 + 4 + "px",
                      borderRadius: Math.random() > 0.5 ? "50%" : "0%",
                    }}
                    animate={{
                      x: (Math.random() - 0.5) * 800,
                      y: (Math.random() - 0.5) * 800,
                      rotate: Math.random() * 720,
                      opacity: [1, 1, 0],
                      scale: [0, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Party Popper 1 - Left */}
                <motion.div
                  className="absolute left-1/4 top-1/2"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: [0, 1.5, 1], rotate: -45 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-6xl">🎉</div>
                </motion.div>

                {/* Party Popper 2 - Right */}
                <motion.div
                  className="absolute right-1/4 top-1/2"
                  initial={{ scale: 0, rotate: 45 }}
                  animate={{ scale: [0, 1.5, 1], rotate: 45 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-6xl">🎉</div>
                </motion.div>

                {/* Party Popper 3 - Top */}
                <motion.div
                  className="absolute left-1/2 top-1/4 transform -translate-x-1/2"
                  initial={{ scale: 0, y: 50 }}
                  animate={{ scale: [0, 1.5, 1], y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="text-6xl">🎊</div>
                </motion.div>

                {/* Streamers */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={`streamer-${i}`}
                    className="absolute left-1/2 top-1/2"
                    style={{
                      width: "4px",
                      height: "60px",
                      background: `linear-gradient(to bottom, ${
                        [
                          "#ef4444",
                          "#f59e0b",
                          "#10b981",
                          "#3b82f6",
                          "#8b5cf6",
                          "#ec4899",
                        ][i % 6]
                      }, transparent)`,
                      transformOrigin: "top center",
                    }}
                    animate={{
                      x: Math.cos((i * Math.PI) / 4) * 300,
                      y: Math.sin((i * Math.PI) / 4) * 300,
                      rotate: i * 45 + Math.random() * 360,
                      opacity: [1, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                    }}
                  />
                ))}

                {/* Sparkle bursts */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={`sparkle-${i}`}
                    className="absolute left-1/2 top-1/2"
                    animate={{
                      x: Math.cos((i * Math.PI) / 6) * 200,
                      y: Math.sin((i * Math.PI) / 6) * 200,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: i * 0.05,
                    }}
                  >
                    <SparklesIcon className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                ))}
              </div>
            )}

            {/* Gold ribbon edge decoration */}
            <div className="absolute w-2 h-24 sm:h-32 bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg left-1/2 transform -translate-x-1/2" />
          </div>

          {/* Instruction */}
          <AnimatePresence>
            {showScissors && !isCutting && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col items-center gap-4"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Scissors className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </motion.div>
                <motion.p
                  className="text-lg sm:text-xl font-semibold text-foreground"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  Press{" "}
                  <kbd className="px-3 py-1.5 bg-muted border border-border rounded-lg font-mono text-primary">
                    SPACE
                  </kbd>{" "}
                  to cut the ribbon!
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Launch message */}
          {isCutting && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                🎉 Launched! 🎉
              </h2>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RibbonCutting;
