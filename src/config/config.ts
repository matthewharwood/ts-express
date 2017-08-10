import { sync } from 'glob';
import { union } from 'Ramda';

export default class Config {
  public static port = 3000;
  public static routes = './dist/routes/**/*.js';
  public static models = './dist/models/**/*.js';

  public static globFiles(location: string): string[] {
    return union([], sync(location));
  }
}
