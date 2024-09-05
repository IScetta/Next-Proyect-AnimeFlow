// types.d.ts
declare module 'react-flickity-component' {
    import { ReactNode } from 'react';
  
    export interface FlickityProps {
      options?: FlickityOptions;
      className?: string;
      elementType?: string;
      disableImagesLoaded?: boolean;
      reloadOnUpdate?: boolean;
      static?: boolean;
      children?: ReactNode; // Añadir children aquí
    }
  
    interface FlickityOptions {
      cellAlign?: string;
      contain?: boolean;
      freeScroll?: boolean;
      groupCells?: boolean | number | string;
      initialIndex?: number;
      // Añadir más opciones según lo que necesites
    }
  
    export default class Flickity extends React.Component<FlickityProps> {}
  }
  