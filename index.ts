type RequireOptions = {
  throwError: boolean;
  logError: boolean;
  errorMessage: string | ((path: string, error?: Error) => string);
}

const defaultOptions: RequireOptions = {
  throwError: true,
  logError: false,
  errorMessage: (path: string, error?: Error): string =>
    `Unable to require "${path}": ${error?.message}`,
};

/**
 * Try to require a module or file and optionally throw an error if it fails
 */
export default function tryRequire(
  path: string,
  options: Partial<RequireOptions> = {}
): any {
  const actualOptions = Object.assign({}, defaultOptions, options);
  try {
    return require(path);
  } catch (error) {
    const message = actualOptions.errorMessage instanceof Function
      ? actualOptions.errorMessage(path, error)
      : actualOptions.errorMessage;
    if (actualOptions.logError) {
      console.error(message);
    }
    if (actualOptions.throwError) {
      throw new Error(message);
    }
    return undefined;
  }
};
