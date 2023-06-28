import { LOGO_IMAGE } from '../../../../constants/path';
import './ScreenLoading.scss';

export const ScreenLoading = () => {
  return (
    <div className="screen-loading">
      <picture>
        <img src={LOGO_IMAGE} />
      </picture>
      <div className="relative pt-1">
        <div className="overflow-hidden h-4 mt-4 text-xs flex rounded-lg bg-primary-light w-[300px]">
          <div className="screen-loading__bar"></div>
        </div>
      </div>
    </div>
  );
}; 