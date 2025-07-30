declare module 'simplebar-react' {
    import type { ForwardRefExoticComponent, RefAttributes } from 'react';
    import type { SimpleBarReactProps } from 'simplebar-react/dist/simplebar-react';
  
    const SimpleBarReact: ForwardRefExoticComponent<SimpleBarReactProps & RefAttributes<HTMLElement>>;
    export default SimpleBarReact;
  }
  