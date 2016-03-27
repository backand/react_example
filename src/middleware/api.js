export function APIMiddleware() {
  return next => action => {
    
    return next(action);
  };
}
