import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { Hello, IHelloProps } from '../../../src/client/components/Hello';

describe('Hello', () => {
  const props: IHelloProps = {
    compiler: 'Typescript',
    framework: 'React'
  };

  it('should render correctly', () => {
    const component = renderer.create(<Hello {...props} />);
    expect(component).toMatchSnapshot();
  });
});
