import React, { Component } from 'react';
import NameBox from './components/NameBox';
import FancyUserBox from './components/FancyUserBox';
import UserBox from './components/UserBox';
import FansyNameBox from './containers/FancyNameBox';
import UserList from './containers/UserList';
import GenericUserList from './containers/GenericUserList';
import UsualUserList, { FancyUserList } from './components/UserList';

const user = { firstName: 'Sebastian', lastName: 'Markbåge' };

const users = [
  { id: 1, firstName: 'Sebastian', lastName: 'Markbåge' },
  { id: 2, firstName: 'Iurii', lastName: 'Kyrylenko' }
];

class App extends Component {
  render() {
    return (
      <div>
        <NameBox name="Sebastian Markbåge" />
        <br />
        <br />
        <FancyUserBox user={user} />
        <br />
        <UserBox user={user} />
        <br />
        <FansyNameBox user={user} />
        <br />
        <UserList users={users} />
        <br />
        <GenericUserList users={users}>
          {UsualUserList}
        </GenericUserList>
        <br />
        <GenericUserList users={users}>
          {FancyUserList}
        </GenericUserList>
      </div>
    );
  }
}

export default App;
