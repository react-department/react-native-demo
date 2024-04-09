import type React from 'react';

export default interface IIconItem {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string,
}
