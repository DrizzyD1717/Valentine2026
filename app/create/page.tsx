// "use client";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Trash2,
//   Heart,
//   Send,
//   Image as ImageIcon,
//   Type,
//   Quote,
//   X,
//   Copy,
//   Check,
//   Share2,
// } from "lucide-react";

// export default function CreatePage() {
//   const [moments, setMoments] = useState([
//     { id: Date.now(), type: "text", content: "", subtext: "" },
//   ]);

//   // Modal & Link States
//   const [showModal, setShowModal] = useState(false);
//   const [generatedUrl, setGeneratedUrl] = useState("");
//   const [copied, setCopied] = useState(false);

//   const addMoment = (type: "text" | "image" | "quote") => {
//     const newMoment = {
//       id: Date.now(),
//       type,
//       content: "",
//       subtext: "",
//       url: "",
//       caption: "",
//     };
//     setMoments([...moments, newMoment]);
//   };

//   const removeMoment = (id: number) => {
//     setMoments(moments.filter((m) => m.id !== id));
//   };

//   const updateMoment = (id: number, fields: any) => {
//     setMoments(moments.map((m) => (m.id === id ? { ...m, ...fields } : m)));
//   };

//   const generateLink = () => {
//     const dataString = btoa(encodeURIComponent(JSON.stringify(moments)));
//     const baseUrl = window.location.origin;
//     const finalUrl = `${baseUrl}/experience?data=${dataString}`;

//     setGeneratedUrl(finalUrl);
//     setShowModal(true);
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(generatedUrl);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="min-h-screen bg-valentine-50 py-12 px-4 relative">
//       <div className="max-w-3xl mx-auto">
//         <header className="text-center mb-12">
//           <Heart className="mx-auto text-valentine-500 mb-4" size={48} />
//           <h1 className="text-4xl font-bold text-valentine-900">
//             Create Your Story
//           </h1>
//           <p className="text-valentine-600 mt-2">
//             Add your favorite memories and share them with your person.
//           </p>
//         </header>

//         <div className="space-y-6">
//           <AnimatePresence>
//             {moments.map((moment, index) => (
//               <motion.div
//                 key={moment.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 className="bg-white p-6 rounded-2xl shadow-sm border border-valentine-100 relative group"
//               >
//                 <button
//                   onClick={() => removeMoment(moment.id)}
//                   className="absolute top-4 right-4 text-valentine-300 hover:text-red-500 transition-colors"
//                 >
//                   <Trash2 size={18} />
//                 </button>

//                 <div className="flex items-center gap-2 mb-4 text-valentine-400">
//                   <span className="text-xs font-bold uppercase tracking-widest">
//                     Moment {index + 1}
//                   </span>
//                   <div className="h-[1px] flex-1 bg-valentine-100" />
//                 </div>

//                 {moment.type === "text" && (
//                   <div className="space-y-4">
//                     <input
//                       placeholder="Main Heading (e.g., 'How we met...')"
//                       className="w-full text-xl font-serif outline-none border-b border-transparent focus:border-valentine-200 py-2"
//                       onChange={(e) =>
//                         updateMoment(moment.id, { content: e.target.value })
//                       }
//                     />
//                     <input
//                       placeholder="Subtext (e.g., 'A rainy Tuesday in Lagos')"
//                       className="w-full text-sm outline-none text-valentine-500"
//                       onChange={(e) =>
//                         updateMoment(moment.id, { subtext: e.target.value })
//                       }
//                     />
//                   </div>
//                 )}

//                 {moment.type === "image" && (
//                   <div className="space-y-4">
//                     <input
//                       placeholder="Unsplash Image URL"
//                       className="w-full text-sm outline-none border-b border-valentine-100 py-2"
//                       onChange={(e) =>
//                         updateMoment(moment.id, { url: e.target.value })
//                       }
//                     />
//                     <input
//                       placeholder="Caption"
//                       className="w-full text-sm outline-none text-valentine-500"
//                       onChange={(e) =>
//                         updateMoment(moment.id, { caption: e.target.value })
//                       }
//                     />
//                   </div>
//                 )}

//                 {moment.type === "quote" && (
//                   <textarea
//                     placeholder="Your special quote..."
//                     className="w-full text-lg italic outline-none border-b border-valentine-100 py-2 bg-transparent"
//                     onChange={(e) =>
//                       updateMoment(moment.id, { content: e.target.value })
//                     }
//                   />
//                 )}
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         <div className="flex justify-center gap-4 mt-8">
//           <button
//             onClick={() => addMoment("text")}
//             className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-valentine-600 shadow-sm hover:shadow-md transition-all"
//           >
//             <Type size={16} /> Add Text
//           </button>
//           <button
//             onClick={() => addMoment("image")}
//             className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-valentine-600 shadow-sm hover:shadow-md transition-all"
//           >
//             <ImageIcon size={16} /> Add Image
//           </button>
//           <button
//             onClick={() => addMoment("quote")}
//             className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-valentine-600 shadow-sm hover:shadow-md transition-all"
//           >
//             <Quote size={16} /> Add Quote
//           </button>
//         </div>

//         <div className="mt-12 text-center">
//           <button
//             onClick={generateLink}
//             className="px-10 py-4 bg-valentine-500 text-white rounded-full font-bold text-lg shadow-xl hover:bg-valentine-600 transition-all flex items-center gap-3 mx-auto"
//           >
//             <Send size={20} /> Preview & Share
//           </button>
//         </div>
//       </div>

//       {/* SHARE MODAL */}
//       <AnimatePresence>
//         {showModal && (
//           <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setShowModal(false)}
//               className="absolute inset-0 bg-valentine-900/40 backdrop-blur-sm"
//             />

//             <motion.div
//               initial={{ scale: 0.9, opacity: 0, y: 20 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 20 }}
//               className="bg-white rounded-3xl p-8 shadow-2xl max-w-lg w-full relative z-[210] border border-valentine-100"
//             >
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-4 right-4 text-valentine-300 hover:text-valentine-500"
//               >
//                 <X size={24} />
//               </button>

//               <div className="text-center">
//                 <div className="w-16 h-16 bg-valentine-100 rounded-full flex items-center justify-center mx-auto mb-4 text-valentine-500">
//                   <Share2 size={32} />
//                 </div>
//                 <h2 className="text-2xl font-bold text-valentine-900 mb-2">
//                   Your Story is Ready!
//                 </h2>
//                 <p className="text-valentine-600 mb-6 text-sm">
//                   Copy the link below and send it to your partner.
//                 </p>

//                 <div className="flex items-center gap-2 bg-valentine-50 p-3 rounded-xl border border-valentine-100 mb-6">
//                   <input
//                     readOnly
//                     value={generatedUrl}
//                     className="bg-transparent text-[10px] text-valentine-800 flex-1 outline-none overflow-hidden text-ellipsis whitespace-nowrap px-1"
//                   />
//                   <button
//                     onClick={copyToClipboard}
//                     className="p-2 bg-white rounded-lg shadow-sm hover:text-valentine-500 transition-colors flex-shrink-0"
//                   >
//                     {copied ? (
//                       <Check size={18} className="text-green-500" />
//                     ) : (
//                       <Copy size={18} />
//                     )}
//                   </button>
//                 </div>

//                 <div className="flex flex-col gap-3">
//                   <button
//                     onClick={() => window.open(generatedUrl, "_blank")}
//                     className="w-full py-3 bg-valentine-500 text-white rounded-xl font-bold hover:bg-valentine-600 transition-all"
//                   >
//                     View Live Preview
//                   </button>
//                   <button
//                     onClick={() => setShowModal(false)}
//                     className="w-full py-3 text-valentine-400 font-medium hover:text-valentine-600 transition-all text-sm"
//                   >
//                     Continue Editing
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trash2,
  Heart,
  Send,
  Image as ImageIcon,
  Type,
  Quote,
  X,
  Copy,
  Check,
  Share2,
} from "lucide-react";
import { CldUploadWidget } from "next-cloudinary"; // Ensure this is installed

export default function CreatePage() {
  const [moments, setMoments] = useState([
    { id: Date.now(), type: "text", content: "", subtext: "" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const addMoment = (type: "text" | "image" | "quote") => {
    const newMoment = {
      id: Date.now(),
      type,
      content: "",
      subtext: "",
      url: "", // This is where Cloudinary will save the link
      caption: "",
    };
    setMoments([...moments, newMoment]);
  };

  const removeMoment = (id: number) => {
    setMoments(moments.filter((m) => m.id !== id));
  };

  const updateMoment = (id: number, fields: any) => {
    setMoments(moments.map((m) => (m.id === id ? { ...m, ...fields } : m)));
  };

  const generateLink = () => {
    const dataString = btoa(encodeURIComponent(JSON.stringify(moments)));
    const baseUrl = window.location.origin;
    const finalUrl = `${baseUrl}/experience?data=${dataString}`;
    setGeneratedUrl(finalUrl);
    setShowModal(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-valentine-50 py-12 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <Heart className="mx-auto text-valentine-500 mb-4" size={48} />
          <h1 className="text-4xl font-bold text-valentine-900">
            Create Your Story
          </h1>
          <p className="text-valentine-600 mt-2">
            Add your favorite memories and share them.
          </p>
        </header>

        <div className="space-y-6">
          <AnimatePresence>
            {moments.map((moment, index) => (
              <motion.div
                key={moment.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-valentine-100 relative group"
              >
                <button
                  onClick={() => removeMoment(moment.id)}
                  className="absolute top-4 right-4 text-valentine-300 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>

                <div className="flex items-center gap-2 mb-4 text-valentine-400">
                  <span className="text-xs font-bold uppercase tracking-widest">
                    Moment {index + 1}
                  </span>
                  <div className="h-[1px] flex-1 bg-valentine-100" />
                </div>

                {/* TEXT TYPE */}
                {moment.type === "text" && (
                  <div className="space-y-4">
                    <input
                      placeholder="Main Heading..."
                      className="w-full text-xl font-serif outline-none border-b border-transparent focus:border-valentine-200 py-2"
                      onChange={(e) =>
                        updateMoment(moment.id, { content: e.target.value })
                      }
                    />
                    <input
                      placeholder="Subtext..."
                      className="w-full text-sm outline-none text-valentine-500"
                      onChange={(e) =>
                        updateMoment(moment.id, { subtext: e.target.value })
                      }
                    />
                  </div>
                )}

                {/* IMAGE TYPE (CLOUDINARY INTEGRATION) */}
                {moment.type === "image" && (
                  <div className="space-y-4">
                    <CldUploadWidget
                      uploadPreset="loveisintheair" // <--- CHANGE THIS
                      onSuccess={(result: any) => {
                        updateMoment(moment.id, {
                          url: result.info.secure_url,
                        });
                      }}
                    >
                      {({ open }) => (
                        <button
                          type="button"
                          onClick={() => open()}
                          className={`w-full py-10 border-2 border-dashed rounded-xl transition-all flex flex-col items-center gap-2 ${
                            moment.url
                              ? "border-green-200 bg-green-50 text-green-600"
                              : "border-valentine-200 bg-valentine-50/50 text-valentine-400 hover:text-valentine-600"
                          }`}
                        >
                          {moment.url ? (
                            <>
                              <Check size={32} />
                              <p className="text-sm font-bold">
                                Image Uploaded!
                              </p>
                            </>
                          ) : (
                            <>
                              <ImageIcon size={32} />
                              <p className="text-sm font-medium">
                                Click to upload photo
                              </p>
                            </>
                          )}
                        </button>
                      )}
                    </CldUploadWidget>
                    <input
                      placeholder="Caption..."
                      className="w-full text-sm outline-none text-valentine-500"
                      onChange={(e) =>
                        updateMoment(moment.id, { caption: e.target.value })
                      }
                    />
                  </div>
                )}

                {/* QUOTE TYPE */}
                {moment.type === "quote" && (
                  <textarea
                    placeholder="Your special quote..."
                    className="w-full text-lg italic outline-none border-b border-valentine-100 py-2 bg-transparent"
                    onChange={(e) =>
                      updateMoment(moment.id, { content: e.target.value })
                    }
                  />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CONTROLS */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => addMoment("text")}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-valentine-600 shadow-sm transition-all"
          >
            <Type size={16} /> Add Text
          </button>
          <button
            onClick={() => addMoment("image")}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-valentine-600 shadow-sm transition-all"
          >
            <ImageIcon size={16} /> Add Image
          </button>
          <button
            onClick={() => addMoment("quote")}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-valentine-600 shadow-sm transition-all"
          >
            <Quote size={16} /> Add Quote
          </button>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={generateLink}
            className="px-10 py-4 bg-valentine-500 text-white rounded-full font-bold text-lg shadow-xl hover:bg-valentine-600 transition-all flex items-center gap-3 mx-auto"
          >
            <Send size={20} /> Preview & Share
          </button>
        </div>
      </div>

      {/* SHARE MODAL (Rest of your code remains the same) */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-valentine-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 shadow-2xl max-w-lg w-full relative z-[210] border border-valentine-100"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-valentine-300 hover:text-valentine-500"
              >
                <X size={24} />
              </button>
              <div className="text-center">
                <div className="w-16 h-16 bg-valentine-100 rounded-full flex items-center justify-center mx-auto mb-4 text-valentine-500">
                  <Share2 size={32} />
                </div>
                <h2 className="text-2xl font-bold text-valentine-900 mb-2">
                  Your Story is Ready!
                </h2>
                <div className="flex items-center gap-2 bg-valentine-50 p-3 rounded-xl border border-valentine-100 mb-6">
                  <input
                    readOnly
                    value={generatedUrl}
                    className="bg-transparent text-[10px] text-valentine-800 flex-1 outline-none overflow-hidden text-ellipsis whitespace-nowrap px-1"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="p-2 bg-white rounded-lg shadow-sm hover:text-valentine-500 transition-colors flex-shrink-0"
                  >
                    {copied ? (
                      <Check size={18} className="text-green-500" />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                </div>
                <button
                  onClick={() => window.open(generatedUrl, "_blank")}
                  className="w-full py-3 bg-valentine-500 text-white rounded-xl font-bold hover:bg-valentine-600 transition-all"
                >
                  View Live Preview
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
