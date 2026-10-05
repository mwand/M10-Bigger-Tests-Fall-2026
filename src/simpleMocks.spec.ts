import { test, expect, vi } from 'vitest';

test('simplest mock behavior', () => {
  const mockFunction1 = vi.fn();
  const result1 = mockFunction1('17');
  const result2 = mockFunction1('42');

  expect(result1).toBeUndefined();
  expect(result2).toBeUndefined();

  expect(mockFunction1).toHaveBeenCalled();
  expect(mockFunction1).toHaveBeenCalledTimes(2);

  expect(mockFunction1).toHaveBeenCalledWith('17');
  expect(mockFunction1).toHaveBeenCalledWith('42');
});

test('customizing mock functions', () => {
  // you can specify the the return value
  const mockFunction3 = vi.fn();
  mockFunction3.mockReturnValue('baz');
  expect(mockFunction3(17)).toBe('baz');
  expect(mockFunction3).toHaveBeenCalledWith(17);
  // or give the mock an implementation
  const mockFunction2 = vi.fn();
  mockFunction2.mockImplementation((n: number) => n + n);
  expect(mockFunction2(3)).toBe(6);
  expect(mockFunction2(14)).toBe(28);
  expect(mockFunction2).toHaveBeenCalledWith(3);
  expect(mockFunction2).toHaveBeenCalledWith(14);
  // you can also reset the mock's history and implementation
  mockFunction2.mockReset();
  expect(mockFunction2).not.toHaveBeenCalledWith(14);
});
