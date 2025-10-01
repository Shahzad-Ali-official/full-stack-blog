import { upload } from "@imagekit/react"; // Only need 'upload' utility
import { useRef, useCallback } from "react";
import { toast } from "react-toastify";

// The authenticator function remains the same
const authenticator = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/posts/upload-auth`
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ children, type, setProgress, setData }) => {
  const fileInputRef = useRef(null);

  // Still need to get these values, but they won't be passed to a context wrapper here.
  const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;
  const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;

  // Handler to manage file selection and initiate the upload
  const handleFileChange = useCallback(
    async (event) => {
      const file = event.target.files[0];
      if (!file) return;

      setProgress(0);

      try {
       // 1. Get authentication parameters
       const auth = await authenticator();

        // 2. Call the 'upload' utility function
        const response = await upload({
          file: file,
          fileName: file.name,
          
          // Pass the required parameters for the upload utility
          publicKey: publicKey,
          urlEndpoint: urlEndpoint,
          ...auth, // signature, expire, token
          folder: "/uploads",
          useUniqueFileName: true,

          // Progress callback
          onProgress: (progress) => {
            const percent = Math.round((progress.loaded / progress.total) * 100);
            console.log(progress);
            setProgress(percent);
          },
        });

        // 3. Success handling
        console.log(response);
        setData(response);
        setProgress(100);

      } catch (err) {
        // Error handling
        console.error(err);
        toast.error("Image upload failed!");
        setProgress(0);
      } finally {
        fileInputRef.current.value = null; 
      }
    },
    [publicKey, urlEndpoint, setProgress, setData]
  );
  
  return (
    <>
      {/* Hidden standard file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={`${type}/*`}
        className="hidden" 
      />

      {/* Custom button/trigger (children) that clicks the hidden input */}
      <div className="cursor-pointer" onClick={() => fileInputRef.current.click()}>
        {children}
      </div>
    </>
  );
};

export default Upload;