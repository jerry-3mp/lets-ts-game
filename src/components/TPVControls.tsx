/* eslint-disable max-len */
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {useThree, extend, Node} from '@react-three/fiber';
import {forwardRef, Ref} from 'react';

extend({OrbitControls});

declare module '@react-three/fiber' {
  // eslint-disable-next-line no-unused-vars
  interface ThreeElements {
    orbitControls: Node<OrbitControls, typeof OrbitControls>
  }
}

// eslint-disable-next-line react/display-name
export const TPVControls = forwardRef((props: JSX.IntrinsicElements['orbitControls'], ref: Ref<OrbitControls>) => {
  const {camera, gl} = useThree();

  return (
    <orbitControls
      ref={ref}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
});
