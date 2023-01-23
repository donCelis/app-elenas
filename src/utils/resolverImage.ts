import {Image} from 'react-native';

export const resolverImage = (img: any) => Image.resolveAssetSource(img).uri;
