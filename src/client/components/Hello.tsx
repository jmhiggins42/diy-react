import * as React from 'react';

export interface IHelloProps {
  compiler: string;
  framework: string;
}

// Class Component example
class Hello extends React.Component<IHelloProps, {}> {
  public render () {
    return (
      <h1>
        Hello from {this.props.compiler} and {this.props.framework}!
      </h1>
    );
  }
}

// Functional Component example
const HelloAsStatelessComponent = (props: IHelloProps, _: {}) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

export default Hello;
