
import {Image} from '@imagekit/react';

const Image = ({ src,className,w,h,alt}) => {
    <Image
        urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
             path={src}
             className={className} 
             loading="lazy"
             lqip={{active:true, quality:20}}
            alt={alt}
            width={w}
            height={h}
            transformation={[
                {
                    width: w,
                    height: h
                }
            ]}
        />
    
}

export default Image;