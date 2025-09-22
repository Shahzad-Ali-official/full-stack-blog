import { ImageKitProvider } from "@imagekit/react";
const ImageKit = ({ children }) => {
  return (
    <ImageKitProvider

      publicKey={import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY}
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      authenticationEndpoint={import.meta.env.VITE_IMAGEKIT_AUTHENTICATION_ENDPOINT}
    >
      {children}
    </ImageKitProvider>
  );
};
export default ImageKit;