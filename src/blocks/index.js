import './logo';
import './nav';
import './task';
import './btn';
import './section';
import './filter';
import './video';
import './project';
import './user';
import './dropdown';
import './star';
import initTask from './task/index'
import initFilter from './filter/index'

export default () => {
  console.log('init blocks');
  initTask();
  initFilter();

};
