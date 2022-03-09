import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import Wrapper from '../Wrapper';
import settings from '../../globals/js/settings';

const { prefix } = settings;

const BannerNavigationItem = ({ className, children }) => {
  const wrapperClasses = classNames(
    `${prefix}--banner-navigation__item`,
    className
  );
  return <li className={wrapperClasses}>{children}</li>;
};

BannerNavigationItem.propTypes = {
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

/**
 * A thin bar on top of the main navigation used to crosslink among apps or pages.
 */
const BannerNavigation = ({ children, className, pageWidth, ...props }) => {
  const wrapperClasses = classNames(`${prefix}--banner-navigation`, className);

  return (
    <div className={wrapperClasses}>
      <Wrapper {...props}>
        <ul className={`${prefix}--banner-navigation__list`}>{children}</ul>
      </Wrapper>
    </div>
  );
};

BannerNavigation.propTypes = {
  /**
   * The content usually consisting out of `BannerNavigationItem`
   */
  children: PropTypes.node.isRequired,
  /**
   * The CSS class name to be placed on the wrapping element.
   */
  className: PropTypes.string,
  /**
   * Specify the max-width on desktop devices (same as \`Wrapper\` component)
   */
  pageWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'full']),
};

BannerNavigation.defaultProps = {
  pageWidth: 'lg',
};

export { BannerNavigationItem, BannerNavigation };
