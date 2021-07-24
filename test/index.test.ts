import tryRequire from '../index';

describe('tryRequire', () => {
  it('should require an existing module', () => {
    expect(tryRequire('./test/fixtures/testModule')).toBe('Hello, world!');
  });

  it('should throw an error when loading a non-existent module', () => {
    expect(
      () => tryRequire('./missingModule')
    ).toThrowError(
      /Unable to require ".\/missingModule"/
    );
  });

  it('should throw a custom callback defined error when loading a non-existent module', () => {
    expect(
      () => tryRequire('./missingModule', {
        errorMessage: path => `Test message with ${path}!`,
      })
    ).toThrowError('Test message with ./missingModule!');
  });

  it('should throw a custom constant string error when loading a non-existent module', () => {
    expect(
      () => tryRequire('./missingModule', {
        errorMessage: 'Test message!',
      })
    ).toThrowError('Test message!');
  });

  it('should log an error when configured', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    tryRequire('./missingModule', {
      throwError: false,
      logError: true,
      errorMessage: 'Test message!',
    });
    expect(consoleSpy).toHaveBeenCalledWith('Test message!');
  });

  it('should return undefined when configured', () => {
    expect(tryRequire('./missingModule', {
      throwError: false,
    })).toBeUndefined();
  });
});
