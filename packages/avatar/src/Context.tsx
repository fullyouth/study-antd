import * as React from 'react';

export type AvatarSize = 'large' | 'small' | 'default' | number;
export type AvatarShape = 'circle' | 'square'

export const sizeContext = React.createContext<AvatarSize>('default');

const getPrefixCls = (suffixCls?: string, customerPrefixCls?: string) => {
  if (customerPrefixCls) return customerPrefixCls
  return suffixCls ? `antd-${suffixCls}`: 'antd'
}

export const configContext = React.createContext({
  getPrefixCls
})

