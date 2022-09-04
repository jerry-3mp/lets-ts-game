/* eslint-disable max-len */
import {useEffect} from 'react';
import {PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls';
import {useThree, extend, Node} from '@react-three/fiber';
import {useRef} from 'react';

extend({PointerLockControls});

declare module '@react-three/fiber' {
  // eslint-disable-next-line no-unused-vars
  interface ThreeElements {
    pointerLockControls: Node<PointerLockControls, typeof PointerLockControls>
  }
}

export const FPVControls = (props: JSX.IntrinsicElements['pointerLockControls']) => {
  const {camera, gl} = useThree();
  const controls = useRef<PointerLockControls>(null);

  useEffect(() => {
    document.addEventListener('click', () => {
      controls.current?.lock();
    });
  }, []);

  return (
    <pointerLockControls
      ref={controls}
      args={[camera, gl.domElement]}
      {...props}
    />
  );
};
