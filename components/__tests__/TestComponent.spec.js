import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TestComponents from '../TestComponent'

test('test props', function () {
  const testProps = 'testProps'
  render(<TestComponents testProps={testProps} />)
  expect(screen.getByText(testProps)).toBeInTheDocument()
})
