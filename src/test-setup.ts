import 'jest-preset-angular/setup-jest';
import 'jest-preset-angular';
import './globalMocks';

const spy = jest.spyOn(console, 'warn').mockImplementation(() => {
  // Remove Ionic 5 warnings in tests
});

afterAll(() => {
  spy.mockRestore();
});

