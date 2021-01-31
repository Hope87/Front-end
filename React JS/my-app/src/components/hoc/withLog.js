import React from 'react';

const withLog = BaseComponent =>
  function WithLog(props) {
    console.log(
      `Calling ${BaseComponent.name} with props: ${JSON.stringify(props)}`,
    );
    return <BaseComponent {...props} />;
  };

export default withLog;
