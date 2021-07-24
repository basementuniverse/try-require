# Try Require

Try to require a module or file and optionally throw an error if it doesn't exist.

## Installation

```
npm install @basementuniverse/try-require
```

## Usage

```typescript
import tryRequire from '@basementuniverse/try-require';

tryRequire('./myFile'); // will require myFile and throw an error if myFile is not found

tryRequire('./myFile', {
  throwError: false,
  logError: true,
}); // will output an error using console.error if myFile is not found

tryRequire('./myFile', {
  errorMessage: 'Custom error message',
}); // will throw a custom error message if myFile is not found

tryRequire('./myFile', {
  errorMessage: (path: string, error?: Error): string => `Custom error with ${path} and ${error.message}`,
}); // errorMessage can be a function that returns a message
```

## Options

```typescript
type RequireOptions = {

  // Should we throw an error if the require fails? Default is true
  throwError: boolean;

  // Should we log an error using console.error if the require fails? Default is false
  logError: boolean;

  // The custom error message to use. Default is:
  // (path: string, error?: Error): string => `Unable to require "${path}": ${error?.message}`
  errorMessage: string | ((path: string, error?: Error) => string);
}
```
