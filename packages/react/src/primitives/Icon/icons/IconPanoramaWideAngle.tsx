import classNames from 'classnames';

import { ComponentClassNames } from '../../shared';
import { View } from '../../View';
import { useDeprecationWarning } from '../../../hooks/useDeprecationWarning';

/**
 * @deprecated These icons are being removed in the next major release. You can use the [react-icons](https://react-icons.github.io/react-icons) package or other React icon libraries in its place. `import { IconPanoramaWideAngle } from '@aws-amplify/ui-react';` → `import { MdPanoramaWideAngle } from 'react-icons/md';`
 */
export const IconPanoramaWideAngle = (props) => {
  const { className, ...rest } = props;
  useDeprecationWarning({
    shouldWarn: true,
    message: `Built-in icons are being deprecated in the next major release. You can use the react-icons (https://react-icons.github.io/react-icons) package with the Material Icon set in place of these icons or any other React Icon library.
import { IconPanoramaWideAngle } from '@aws-amplify/ui-react'; → import { MdPanoramaWideAngle } from 'react-icons/md';`,
  });
  return (
    <View
      as="span"
      width="1em"
      height="1em"
      className={classNames(ComponentClassNames.Icon, className)}
      {...rest}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6C14.45 6 16.71 6.2 19.29 6.64C19.76 8.42 20 10.22 20 12C20 13.78 19.76 15.58 19.29 17.36C16.71 17.8 14.45 18 12 18C9.55 18 7.29 17.8 4.71 17.36C4.24 15.58 4 13.78 4 12C4 10.22 4.24 8.42 4.71 6.64C7.29 6.2 9.55 6 12 6ZM12 4C9.27 4 6.78 4.24 4.05 4.72L3.12 4.88L2.87 5.78C2.29 7.85 2 9.93 2 12C2 14.07 2.29 16.15 2.87 18.22L3.12 19.11L4.05 19.27C6.78 19.76 9.27 20 12 20C14.73 20 17.22 19.76 19.95 19.28L20.88 19.12L21.13 18.23C21.71 16.15 22 14.07 22 12C22 9.93 21.71 7.85 21.13 5.78L20.88 4.89L19.95 4.73C17.22 4.24 14.73 4 12 4Z"
          fill="currentColor"
        />
      </svg>
    </View>
  );
};
