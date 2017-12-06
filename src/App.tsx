import * as React from 'react';

interface IAppState {
  name: string;
}
interface Props {}
class App extends React.Component<Props, IAppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: ''
    };
  }

  render() {
    return <div>Hello!</div>;
  }
}
export default App;
