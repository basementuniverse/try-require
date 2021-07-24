"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultOptions = {
    throwError: true,
    logError: false,
    errorMessage: (path, error) => `Unable to require "${path}": ${error === null || error === void 0 ? void 0 : error.message}`,
};
/**
 * Try to require a module or file and optionally throw an error if it fails
 */
function tryRequire(path, options = {}) {
    const actualOptions = Object.assign({}, defaultOptions, options);
    try {
        return require(path);
    }
    catch (error) {
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
}
exports.default = tryRequire;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU1BLE1BQU0sY0FBYyxHQUFtQjtJQUNyQyxVQUFVLEVBQUUsSUFBSTtJQUNoQixRQUFRLEVBQUUsS0FBSztJQUNmLFlBQVksRUFBRSxDQUFDLElBQVksRUFBRSxLQUFhLEVBQVUsRUFBRSxDQUNwRCxzQkFBc0IsSUFBSSxNQUFNLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxPQUFPLEVBQUU7Q0FDbkQsQ0FBQztBQUVGOztHQUVHO0FBQ0gsU0FBd0IsVUFBVSxDQUNoQyxJQUFZLEVBQ1osVUFBbUMsRUFBRTtJQUVyQyxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDakUsSUFBSTtRQUNGLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsWUFBWSxZQUFZLFFBQVE7WUFDNUQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztZQUN6QyxDQUFDLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQztRQUMvQixJQUFJLGFBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDMUIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QjtRQUNELElBQUksYUFBYSxDQUFDLFVBQVUsRUFBRTtZQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsT0FBTyxTQUFTLENBQUM7S0FDbEI7QUFDSCxDQUFDO0FBbkJELDZCQW1CQztBQUFBLENBQUMifQ==