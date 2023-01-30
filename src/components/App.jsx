import Profile from './Profile';
import Statistic from './Statistic';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import users from '../user.json';
import statistic from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={users.avatar}
        location={users.location}
        name={users.name}
        stats={users.stats}
        tag={users.tag}
      />
      <Statistic stats={statistic} title='Upload stats' />
      <FriendList friends={friends} />;
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
