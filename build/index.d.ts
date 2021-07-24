declare type RequireOptions = {
    throwError: boolean;
    logError: boolean;
    errorMessage: string | ((path: string, error?: Error) => string);
};
/**
 * Try to require a module or file and optionally throw an error if it fails
 */
export default function tryRequire(path: string, options?: Partial<RequireOptions>): any;
export {};
