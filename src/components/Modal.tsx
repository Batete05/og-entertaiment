import React from "react";
import {
  motion,
  AnimatePresence as FramerAnimatePresence,
} from "framer-motion";
import { SectionData, MediaItem, MediaType } from "../types";
import { XIcon } from "./Icons";

interface ModalProps {
  section: SectionData | null;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 25, stiffness: 200 },
  },
  exit: { y: "100%", opacity: 0, transition: { duration: 0.3 } },
};

const MediaCard: React.FC<{ item: MediaItem }> = ({ item }) => {
  const isVideo = item.type === MediaType.Video;

  return (
    <motion.div
      className={`relative 
         overflow-hidden ${item.span || "md:col-span-1"} ${
        isVideo ? "aspect-video" : "aspect-[3/4]"
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      {isVideo ? (
        <video
          src={item.src}
          className="w-full h-full object-cover"
          controls
          preload="metadata"
        />
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover"
        />
      )}
    </motion.div>
  );
};

const AnimatePresence = FramerAnimatePresence as unknown as React.FC<{
  children: React.ReactNode;
}>;

export const Modal: React.FC<ModalProps> = ({ section, onClose }) => {
  return (
    <AnimatePresence>
      {section ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end bg-black/70 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="bg-white shadow-2xl w-full h-[95vh] max-h-screen overflow-y-auto rounded-t-3xl p-6 md:p-8 relative scrollbar-outside"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" bg-white z-20 pb-4 flex justify-end border-b border-gray-200 mb-6">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-900 transition-colors"
                aria-label="Close modal"
              >
                <XIcon className="w-8 h-8" />
              </button>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                {section.title}
              </h2>

              {section.id === "team-building" ? (
                (() => {
                  // Special layout for team-building with interleaved words and photos
                  const imageItems = section.media.filter(
                    (item) => item.type === MediaType.Image
                  );
                  const videoItems = section.media.filter(
                    (item) => item.type === MediaType.Video
                  );
                  const words = section.words || [];

                  // Start with first 3 photos, then building image, then interleave
                  let photoIndex = 3;

                  return (
                    <>
                      {/* Description */}
                      <p className="text-gray-600 max-w-4xl">
                        {section.description}
                      </p>

                      {/* First row of photos (3 photos) */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {imageItems.slice(0, 3).map((item) => (
                          <MediaCard key={item.id} item={item} />
                        ))}
                      </div>

                      {/* Building image (smaller size) */}
                      {section.chart && (
                        <div className="w-full max-w-2xl mx-auto">
                          <img
                            src={section.chart}
                            alt="Team Building Chart"
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      )}

                      {/* Interleave: row of photos → word → row of photos → word, etc. */}
                      {words.map((word, idx) => {
                        const photosForThisRow = imageItems.slice(
                          photoIndex,
                          photoIndex + 3
                        );
                        photoIndex += 3;

                        return (
                          <React.Fragment key={idx}>
                            {/* Row of photos */}
                            {photosForThisRow.length > 0 && (
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {photosForThisRow.map((item) => (
                                  <MediaCard key={item.id} item={item} />
                                ))}
                              </div>
                            )}

                            {/* Word section */}
                            <div className="max-w-4xl">
                              <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-black">
                                  {word.title}
                                </h3>
                                <p className="text-gray-700">{word.content}</p>
                              </div>
                            </div>
                          </React.Fragment>
                        );
                      })}

                      {/* Remaining photos if any */}
                      {photoIndex < imageItems.length && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {imageItems.slice(photoIndex).map((item) => (
                            <MediaCard key={item.id} item={item} />
                          ))}
                        </div>
                      )}

                      {/* Videos at the end */}
                      {videoItems.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {videoItems.map((item) => (
                            <MediaCard key={item.id} item={item} />
                          ))}
                        </div>
                      )}
                    </>
                  );
                })()
              ) : (
                // Standard layout for other sections
                <>
                  <p className="text-gray-600 max-w-4xl">
                    {section.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {section.media.map((item) => (
                      <MediaCard key={item.id} item={item} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
