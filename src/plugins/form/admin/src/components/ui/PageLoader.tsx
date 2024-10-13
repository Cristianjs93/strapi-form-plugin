import { CSSProperties } from 'react';
import { Loader } from '@strapi/design-system';

export const PageLoader = () => {
  const styles: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return <Loader style={styles} />;
};
