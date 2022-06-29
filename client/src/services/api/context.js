import React from 'react';

const APIContext = React.createContext(null);

const withAPI = Component => props =>
  (
    <APIContext.Consumer>
      {api => <Component {...props} api={api} />}
    </APIContext.Consumer>
  );

export { withAPI };
export default APIContext;
