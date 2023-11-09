// 图标Wrapper
export function IconWrapper(name, render) {
  return props => {
    // const config = getConfig();
    // const svgProps = IconConverter(guid(), props, config);
    return render(props)
  }
}
export function ISvgIconProps (){}