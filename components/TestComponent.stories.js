import TestComponent from './TestComponent'

export default {
  component: TestComponent,
  title: 'Components/TestComponent',
}

export const testProps = () => <TestComponent testProps="test-props" />
