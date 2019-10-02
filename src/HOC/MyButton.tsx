import React from 'react';

// props for our HOC
export interface WithThemeProps {
  primaryColor: string;
}

// the HOC itself
export function withTheme<T extends WithThemeProps = WithThemeProps>(
  WrappedComponent: React.ComponentType<T>
) {
  // render wrapped component
  return class ComponentWithTheme extends React.Component<T, WithThemeProps> {
    // a method to get the theme
    getThemeProps = () => {};
    render() {
      // Fetch props to inject
      const themeProps = this.getThemeProps();
      // apply the necessary props
      return <WrappedComponent {...themeProps} {...(this.props as T)} />;
    }
  };
}

// Props for our actual component
interface Props extends WithThemeProps {
  children: React.ReactNode;
}
// The component we are rendering
class MyButton extends React.Component<Props> {
  // The theme values are also available as props here.
  internalMethod = () => {
    const color = this.props.primaryColor;
  };

  render() {
    return <button>submit</button>;
  }
}

export default withTheme(MyButton);
